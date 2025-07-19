import { Router } from "express";
import { authenticate, authorizeRoles, AuthRequest } from "../../middlewares/auth.middleware";
import { getUsers, login, refreshToken, register } from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
// ✅ Protected route: only logged-in users can access
router.get("/profile", authenticate, (req: AuthRequest, res) => {
  res.json({ message: "Logged in!", user: req.user });
});

// ✅ Admin-only route (requires login AND admin role)
router.get("/admin-data", authenticate, authorizeRoles("admin"), (_req, res) => {
  res.json({ message: "This is admin-only data" });
});

export default router;
