import { AppDataSource } from "../data-source";
import { Image, Anouncement, User } from "../entities";
import { TAnouncementCreate, TAnouncementUpdate } from "../interfaces";
import {
  imageRepository,
  anouncementRepository,
  userRepository,
} from "../repositories";
import { anouncementUpdateSchema } from "../schemas";

const create = async (payload: TAnouncementCreate, userId: number) => {
  const { image } = payload;
  const user: User = (await userRepository.findOneBy({ id: userId }))!;
  const anouncement: Anouncement = anouncementRepository.create({
    ...payload,
    user,
  });

  await anouncementRepository.save(anouncement);

  const createimage = imageRepository.create({
    image: image.image,
    anouncement: anouncement,
  });

  await imageRepository.save(createimage);

  const returnedAnouncement = await anouncementRepository.findOne({
    where: { id: anouncement.id },
    relations: { image: true, user: true },
  });

  return returnedAnouncement;
};

const update = async (
  anouncement: Anouncement,
  payload: TAnouncementUpdate
) => {
  const image: Image = anouncement.image;
  const payloadimage = payload.image;

  if (image) {
    const imageUpdate = imageRepository.create({
      ...payloadimage,
    });
    await imageRepository.save(imageUpdate);
  }

  const updatedAnouncement: Anouncement = anouncementRepository.create({
    ...anouncement,
    ...payload,
  });
  await anouncementRepository.save(updatedAnouncement);

  return anouncementUpdateSchema.parse(updatedAnouncement);
};

const destroy = async (anouncement: Anouncement): Promise<void> => {
  await anouncementRepository.remove(anouncement);
};

export default { create, update, destroy };
