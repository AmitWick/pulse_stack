import { UserModel } from "./user.model.js";

export const createUserDB = (name: string, email: string) => {
  return UserModel.create({
    name,
    email,
  });
};

export const getUsersDB = () => {
  return UserModel.find();
};

export const getUserByIdDB = (id: string) => {
  return UserModel.findOne({ _id: id });
};
