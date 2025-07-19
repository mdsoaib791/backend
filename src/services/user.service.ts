import { UserDTO } from "../dto/user.dto";
import * as userRepo from "../repositories/user.repository";

export const getAllUsers = async () => {
  return await userRepo.getAllUsers() as UserDTO[];
};

export const createUser = userRepo.createUser as (...args: any[]) => Promise<UserDTO>;
export const getUserById = userRepo.getUserById as (id: number) => Promise<UserDTO | null>;
export const updateUser = userRepo.updateUser as (...args: any[]) => Promise<UserDTO>;
export const deleteUser = userRepo.deleteUser;
