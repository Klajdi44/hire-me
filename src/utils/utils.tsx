import React from "react";

export const useDate = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};
