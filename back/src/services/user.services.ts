import { Address, User } from "../entities";
import { TAddress, TUserCreate, TUserReturn, TUserUpdate } from "../interfaces";
import { addressRepository, userRepository } from "../repositories";
import { userReturnSchema } from "../schemas";

const create = async (payload: TUserCreate): Promise<User> => {
  const addressInfo: TAddress = payload.address;
  const address: Address = addressRepository.create(addressInfo);
  await addressRepository.save(address);

  const user: User = userRepository.create({
    address: address,
  });
  await userRepository.save(user);

  return user;
};

const update = async (
  user: User,
  payload: TUserUpdate
): Promise<TUserReturn> => {
  const addressInfo = payload.address;

  if (addressInfo) {
    const addressUpdate: Address = addressRepository.create(addressInfo);
    await addressRepository.save(addressUpdate);
    user.address = addressUpdate;
  }

  const updatedUser: User = userRepository.create({ ...user, ...payload });
  await userRepository.save(updatedUser);

  return userReturnSchema.parse(updatedUser);
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.remove(user);
};

export default { create, update, destroy };
