import { compare } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../errors";
import { TLoginCreate, TLoginReturn } from "../interfaces";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";

const create = async ({
  email,
  password,
}: TLoginCreate): Promise<TLoginReturn> => {
  const foundUser: User | null = await userRepository.findOneBy({ email });

  if (!foundUser) {
    throw new AppError("Invalid credentials", 401);
  }

  const samePwd: boolean = await compare(password, foundUser.password);

  if (!samePwd) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { isAdvertiser: foundUser.isAdvertiser },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export default { create };
