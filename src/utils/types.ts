export type Portfolio = {
  about: About;
  email: string;
};

export type About = {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  vision: string;
  subTitle: string;
  description: string;
  quote: string;
  exp_year: string;
  address: string;
  some_total: string;
  phoneNumber: string;
  avatar: Avatar;
  alternateAvatars: any[];
};

export type Avatar = {
  public_id: string;
  url: string;
};
