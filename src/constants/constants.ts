export const ACCESS_TOKN = "9ee38c45-a7ce-4b61-94ad-188bcd66de8b";
export const INSTITUTION_ID = "dc4bd858-9e9c-4df7-9386-0d91e42280eb";
export const GROUP_ID = "86413ecf-01a1-44da-ba73-1aeda212a196";

export const GET_URL = `https://app.famly.co/api/daycare/tablet/group?accessToken=${ACCESS_TOKN}&groupId=${GROUP_ID}`;

export enum LOADING_STATUS {
  LOADING = "loading",
  LOADED = "loaded",
}
