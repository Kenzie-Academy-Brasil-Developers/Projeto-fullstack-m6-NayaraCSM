import { Anouncement, User } from "../entities";
import { AppError } from "../errors";
import { TAnouncementCreate, TAnouncementUpdate } from "../interfaces";
import {
  imageRepository,
  anouncementRepository,
  userRepository,
} from "../repositories";
import { anouncementUpdateSchema } from "../schemas";

const create = async (payload: TAnouncementCreate, userId: number) => {
  const { images, ...rest } = payload;
  const user: User = (await userRepository.findOneBy({ id: userId }))!;
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const anouncement: Anouncement = anouncementRepository.create({
    ...rest,
    user,
  });

  await anouncementRepository.save(anouncement);

  for await (let imageData of images) {
    const createImage = imageRepository.create({
      image: imageData.image,
      anouncement: anouncement,
    });
    await imageRepository.save(createImage);
  }

  const returnedAnouncement = await anouncementRepository.findOne({
    where: { id: anouncement.id },
    relations: { image: true },
  });

  return returnedAnouncement;
};

const readAll = async (): Promise<object> => {
  const anouncements: Array<Anouncement> = await anouncementRepository.find({});
  return anouncements;
};

const readByUserId = async (userId: number) => {
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      anouncement: true,
    },
  });

  return user!.anouncement;
};

const readByAnouncementId = async (anouncementId: number) => {
  const anouncement = await anouncementRepository.findOne({
    where: {
      id: anouncementId,
    },
    relations: {
      user: true,
    },
  });

  if (!anouncement) {
    throw new AppError("Anouncement not found", 404);
  }

  return anouncement!;
};

const update = async (anouncementId: number, payload: TAnouncementUpdate) => {
  const images = payload.image;

  const anouncement = await anouncementRepository.findOne({
    where: {
      id: anouncementId,
    },
  });

  if (!anouncement) {
    throw new AppError("Anouncement not found", 404);
  }

  const anouncementUpdate: Anouncement = anouncementRepository.create({
    ...anouncement,
    ...payload,
  });

  await anouncementRepository.save(anouncementUpdate);

  if (images) {
    for await (const imageData of images) {
      const createImage = imageRepository.create({
        image: imageData.image!,
        anouncement: anouncement,
      });
      await imageRepository.save(createImage);
    }
  }

  return anouncementUpdateSchema.parse(anouncementUpdate);
};

const destroy = async (anouncementId: number): Promise<void> => {
  const anouncement = await anouncementRepository.findOneBy({
    id: anouncementId,
  });

  if (!anouncement) {
    throw new AppError("Anouncement not found", 404);
  }

  await anouncementRepository.remove(anouncement);
};

export default {
  create,
  readAll,
  readByUserId,
  readByAnouncementId,
  update,
  destroy,
};
