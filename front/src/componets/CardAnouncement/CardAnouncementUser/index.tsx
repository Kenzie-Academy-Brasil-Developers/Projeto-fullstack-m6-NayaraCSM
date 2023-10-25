import { IAnoucementUser, IUserAdvertiser } from "../../../pages/UserPage";

interface ICardAnouncementUser {
  anouncement: IAnoucementUser;
  user: IUserAdvertiser;
}

const CardAnouncementUser = ({ anouncement, user }: ICardAnouncementUser) => {
  return (
    <li>
      <img src={anouncement.image[0].image} alt="imagem de um carro" />
      <h3>
        {anouncement.brand} - {anouncement.model}
      </h3>
      <p>{anouncement.description}</p>
      <div>
        <i>{user.name.substring(0, 1)}</i>
        <h4>{user.name}</h4>
      </div>
      <div>
        <p>{anouncement.mileage} Km</p>
        <p>{anouncement.year}</p>
        <p>R$ {anouncement.price}</p>
      </div>
    </li>
  );
};

export default CardAnouncementUser;
