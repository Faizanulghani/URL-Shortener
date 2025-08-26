import { resgisterUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const login = wrapAsync(async (req, res) => {});
export const register = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await resgisterUser(name, email, password);
  res.status(200).json(user);
});
