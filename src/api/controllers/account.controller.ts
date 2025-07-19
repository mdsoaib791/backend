import { Request, Response } from "express";
import { AccountDTO } from "../../dto/account.dto";
import { AuthRequest } from "../../middlewares/auth.middleware";
import * as accountService from "../../services/account.service";

export const registerAccount = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const account: AccountDTO = await accountService.registerAccount(email, password, role);
    res.status(201).json(account);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const loginAccount = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { accessToken, refreshToken } = await accountService.loginAccount(email, password);
    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000,
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({ message: "Logged in successfully", accessToken, refreshToken });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};

export const logoutAccount = async (_req: Request, res: Response) => {
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  res.json({ message: "Logged out" });
};

export const getAccountProfile = async (req: AuthRequest, res: Response) => {
  res.json({ message: "You are logged in", account: req.user });
};

export const listAccounts = async (_req: Request, res: Response) => {
  try {
    const accounts: AccountDTO[] = await accountService.getAllAccounts();
    res.json(accounts);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const adminContact = async (_req: AuthRequest, res: Response) => {
  res.json({ contact: "admin contact info" });
};

export const studentContact = async (_req: AuthRequest, res: Response) => {
  res.json({ contact: "student contact info" });
};

export const superadminContact = async (_req: AuthRequest, res: Response) => {
  res.json({ contact: "superadmin contact info" });
};

export const parentsContact = async (_req: AuthRequest, res: Response) => {
  res.json({ contact: "parents contact info" });
};

