export interface IUserModel {
  name: string;
  email: string;
  password?: string;
}

export let users: IUserModel[] = [
  {
    name: "Sarath",
    email: "sarath@test.com",
    password: "1234",
  },
];

export function createUser(user: IUserModel) {
  if (findUser(user.email)) {
    throw new Error("User already exists");
  }
  users.push(user);
  return user;
}

export function findUser(email: string) {
  const match = users.find((u) => u.email === email);
  return match;
}
