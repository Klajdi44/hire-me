import { FC } from "react";
import { Child as Tchild, HandleCheckInStatus } from "../../types";

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
    <div className="child">
      <img
        className={checkedIn ? "child__image checked-in" : "child__image"}
        src={image.small ?? image?.large}
      />
      <h1 className="child__name">{name.fullName}</h1>
      <p className="child__is-checkedin">
        Checked in: {checkedIn ? "Yes" : "No"}
      </p>
      <button
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
