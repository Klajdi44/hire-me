export type Image = {
  empty: boolean;
  small: string;
  large: string;
};

export type Name = {
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Child = {
  birthday: string | null;
  birthplace: string;
  checkedIn: boolean;
  checkinTime: string;
  checkins: any[];
  childId: string;
  createdTime: string;
  email: null | string;
  endDate: null | any;
  extraInfo: any;
  gender: number;
  groupId: string;
  hasVacation: boolean;
  homeAddress: null | any;
  image: Image;
  institutionId: string;
  isAbsent: boolean;
  isSick: boolean;
  isSleeping: boolean;
  language: string;
  leaves: [];
  leavingReason: null;
  loginId: string;
  name: Name;
  naps: [];
  nationality: string;
  onBus: boolean;
  onTrip: boolean;
  pickupName: string;
  pickupRelationId: string;
  pickupTime: null;
  relations: null;
  startDate: string;
  statusRegistrations: [];
  statuses: [];
};

export type Children = {
  children: Child[];
};

export type HandleCheckInStatus = (id: string) => void;
