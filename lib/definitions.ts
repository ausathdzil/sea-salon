export type Reviews = {
  id: string;
  name: string;
  rating: number;
  comment: string;
};

export type Reservations = {
  id: string;
  name: string;
  phone_number: string;
  service: string;
  date: string;
  time: string;
};

export type Users = {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  password: string;
  role: string;
};
