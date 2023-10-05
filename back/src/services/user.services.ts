import { Address, User } from "../entities";
import { TUserCreate, TUserUpdate } from "../interfaces";
import { addressRepository, userRepository } from "../repositories";
import { userUpdateSchema } from "../schemas";

const create = async (payload: TUserCreate) => {
  const { address, ...rest } = payload;
  const user: User = userRepository.create({
    name: rest.name,
    email: rest.email,
    password: rest.password,
    cpf: rest.cpf,
    phone: rest.phone,
    dateBirth: rest.dateBirth,
    description: rest.description,
    isAdvertiser: rest.isAdvertiser,
  });

  await userRepository.save(user);

  const createAddress = addressRepository.create({
    cep: address.cep,
    state: address.state,
    city: address.city,
    street: address.street,
    number: address.number,
    complement: address.complement,
    user: user,
  });

  await addressRepository.save(createAddress);

  const returnedUser = await userRepository.findOne({
    where: { id: user.id },
    relations: { address: true },
  });

  return returnedUser;
};

const update = async (user: User, payload: TUserUpdate) => {
  const address: Address = user.address;
  const payloadAddress = payload.address;

  if (address) {
    const addressUpdate = addressRepository.create({
      ...payloadAddress,
    });
    await addressRepository.save(addressUpdate);
  }

  const updatedUser: User = userRepository.create({ ...user, ...payload });
  await userRepository.save(updatedUser);

  return userUpdateSchema.parse(updatedUser);
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.remove(user);
};

export default { create, update, destroy };
