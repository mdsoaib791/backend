import { Request, Response } from "express";
import { UserDTO } from "../../dto/user.dto";
import { AuthRequest } from "../../middlewares/auth.middleware";
import * as userService from "../../services/user.service";

export const getProfile = (req: AuthRequest, res: Response) => {
  res.json({ message: "You are logged in", user: req.user });
};

export const listUsers = async (_req: Request, res: Response) => {
  const users: UserDTO[] = await userService.getAllUsers();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { account_id, name, phone, address, dob } = req.body;
    const user: UserDTO = await userService.createUser(account_id, name, phone, address, dob);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user: UserDTO | null = await userService.getUserById(Number(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, phone, address, dob } = req.body;
    const user: UserDTO = await userService.updateUser(Number(req.params.id), name, phone, address, dob);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(Number(req.params.id));
    res.json({ message: "User deleted" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
