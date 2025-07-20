// Placeholder implementations for register, login, and logout
import { NextFunction, Request, Response } from "express";
import { UserDTO } from "../../dto/user.dto";
import { AuthRequest } from "../../middlewares/auth.middleware";
import * as userService from "../../services/user.service";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implement user registration logic
  res.status(201).json({ message: "User registered (placeholder)" });
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implement user login logic
  res.status(200).json({ message: "User logged in (placeholder)" });
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implement user logout logic
  res.status(200).json({ message: "User logged out (placeholder)" });
};

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
    if (err && err.name === 'ZodError' && Array.isArray(err.errors)) {
      const errors = err.errors.map((e: any) => ({
        field: Array.isArray(e.path) ? e.path.join('.') : String(e.path),
        message: e.message || 'Validation error'
      }));
      return res.status(400).json({ error: 'Validation failed', errors });
    }
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user: UserDTO | null = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, phone, address, dob } = req.body;
    const user: UserDTO = await userService.updateUser(req.params.id, name, phone, address, dob);
    res.json(user);
  } catch (err: any) {
    if (err && err.name === 'ZodError' && Array.isArray(err.errors)) {
      const errors = err.errors.map((e: any) => ({
        field: Array.isArray(e.path) ? e.path.join('.') : String(e.path),
        message: e.message || 'Validation error'
      }));
      return res.status(400).json({ error: 'Validation failed', errors });
    }
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err: any) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};
