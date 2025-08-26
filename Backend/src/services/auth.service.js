import { createUser, findUserByEmail } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";

export const resgisterUser = async (name, email, password) => {
  const user = await findUserByEmail(email);
  if (user) throw new ConflictError("User already exists");
  const newUser = await createUser({ name, email, password });
  const token = await signToken({ id: newUser._id });
  return { token, user: newUser };
};
