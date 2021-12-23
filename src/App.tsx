import { useEffect, useRef, useState } from "react";
import ChildrenList from "./components/ChildrenList/ChildrenList";
import "./App.scss";
import useFetch from "./hooks/UseFetch";
import { GET_URL, LOADING_STATUS } from "./constants/constants";
import { Child, HandleCheckInStatus } from "./types";

function App() {
  const [offset, setOffset] = useState(5);
  const { data, loadingState, error } = useFetch(GET_URL);
  const [children, setChildren] = useState<[] | Child[]>([]);

  const observedElement = useRef(null);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOffset(currentOffset => currentOffset + 5);
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    )
  );

  useEffect(() => {
    if (observedElement.current) {
      observer.current.observe(observedElement.current);
    }

    return () => {
      observer.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (
      observedElement.current &&
      data?.children &&
      offset > data?.children?.length
    ) {
      observer.current.unobserve(observedElement.current);
    }
  }, [offset]);

  useEffect(() => {
    if (data?.children) {
      setChildren(data.children.slice(0, offset));
    }
  }, [data, offset]);

  const handleCheckedInStatus: HandleCheckInStatus = id => {
    const newChildrenList = children.map((child: Child) => {
      if (child.childId === id) {
        child.checkedIn = !child.checkedIn;
      }
      return child;
    });
    setChildren(newChildrenList);
  };

  return (
    <main className="main__container">
      <h1 className="main__container__title">Children list</h1>
      {error && <div>{error}</div>}
      {loadingState === LOADING_STATUS.LOADING && <div>loading...</div>}
      {children && (
        <ChildrenList
          Children={children}
          handleCheckedInStatus={handleCheckedInStatus}
        />
      )}
      <div ref={observedElement} />
    </main>
  );
}

export default App;
