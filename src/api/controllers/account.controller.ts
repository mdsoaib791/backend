import { Request, Response } from "express";
import { ZodError } from "zod";
import { AccountDTO } from "../../dto/account.dto";
import { AuthRequest } from "../../middlewares/auth.middleware";
import * as accountService from "../../services/account.service";

// Register a new account
export const registerAccount = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;

    const account: AccountDTO = await accountService.registerAccount(email, password, role);

    res.status(201).json({
      message: "Account created successfully",
      account,
    });
  } catch (err: any) {
    if (err instanceof ZodError) {
      const errors = err.issues.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));
      return res.status(400).json({ error: "Validation failed", errors });
    }
    res.status(400).json({ error: "Bad Request", message: err.message });
  }
};

// Login an account and set JWT cookies
export const loginAccount = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { accessToken, refreshToken } = await accountService.loginAccount(email, password);

    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000, // 15 minutes
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(200)
      .json({
        message: "Logged in successfully",
        accessToken,
        refreshToken,
      });
  } catch (err: any) {
    res.status(401).json({ error: "Unauthorized", message: err.message });
  }
};

// Logout account
export const logoutAccount = async (_req: Request, res: Response) => {
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  res.json({ message: "Logged out successfully" });
};

// Return current account info from auth middleware
export const getAccountProfile = async (req: AuthRequest, res: Response) => {
  res.json({
    message: "Authenticated account",
    account: req.user,
  });
};

// Admin: List all accounts
export const listAccounts = async (_req: Request, res: Response) => {
  try {
    const accounts: AccountDTO[] = await accountService.getAllAccounts();
    res.json(accounts);
  } catch (err: any) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};
