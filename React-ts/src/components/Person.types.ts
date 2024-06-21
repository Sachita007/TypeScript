export type Name = {
  first: string;
  last: string;
};

export type PersonList = {
  name: Name[];
};

// This is old code in new we split the type , that make it more easy to useable
// export type PersonList = {
//   name: {
//     first: string;
//     last: string;
//   }[];
// };
