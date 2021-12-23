import React, { FC } from "react";
import { ACCESS_TOKN } from "../../constants/constants";
import { Child as TChild, HandleCheckInStatus } from "../../types";
import Child from "../Child/Child";

const ChildrenList: FC<{
  Children: TChild[];
  handleCheckedInStatus: (id: string) => void;
}> = ({ Children, handleCheckedInStatus }) => {
  const handleCheckIn: HandleCheckInStatus = async id => {
    const url = ` https://app.famly.co/api/v2/children/${id}/checkins?accessToken=${ACCESS_TOKN}&pickupTime=''`;
    try {
      const req = await fetch(url, { method: "POST" });
      const res = await req.json();

      if (req.ok) {
        handleCheckedInStatus(id);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleCheckOut: HandleCheckInStatus = async id => {
    const url = `https://app.famly.co/api/v2/children/${id}/checkout?accessToken=${ACCESS_TOKN}`;
    try {
      const req = await fetch(url, { method: "POST" });
      const res = await req.json();

      if (req.ok) {
        handleCheckedInStatus(id);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {Children &&
        Children.map(child => {
          return (
            <Child
              key={child.childId}
              child={child}
              handleCheckin={handleCheckIn}
              handleCheckOut={handleCheckOut}
            />
          );
        })}
    </div>
  );
};

export default ChildrenList;
