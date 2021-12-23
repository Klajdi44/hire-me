import { FC } from "react";
import { Child as Tchild, HandleCheckInStatus } from "../../types";
import "./child.scss";

const Child: FC<{
  child: Tchild;
  handleCheckin: HandleCheckInStatus;
  handleCheckOut: HandleCheckInStatus;
}> = ({
  child: { image, name, checkedIn, childId },
  handleCheckin,
  handleCheckOut,
}) => {
  return (
    <div className={checkedIn ? "child child--checked-in" : "child"}>
      <img className="child__image" src={image.small ?? image?.large} />
      <h1 className="child__name">{name.fullName}</h1>
      <p className="child__is-checkedin">
        Checked in: {checkedIn ? "Yes" : "No"}
      </p>
      <button
        className={
          checkedIn
            ? "child__button child__button--checked-in"
            : "child__button"
        }
        onClick={() =>
          checkedIn ? handleCheckOut(childId) : handleCheckin(childId)
        }
      >
        {checkedIn ? "Check out" : "Check in"}
      </button>
    </div>
  );
};

export default Child;
