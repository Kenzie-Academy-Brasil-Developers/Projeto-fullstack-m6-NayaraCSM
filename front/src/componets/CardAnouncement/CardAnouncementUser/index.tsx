import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { IAnoucementUser, IUserAdvertiser } from "../../../pages/UserPage";

interface ICardAnouncementUser {
  anouncement: IAnoucementUser;
  user: IUserAdvertiser;
}

const CardAnouncementUser = ({ anouncement, user }: ICardAnouncementUser) => {
  const token = localStorage.getItem("user:token");
  const decode = token ? jwt_decode<{ sub: number }>(token) : null;

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
      <div>
        {decode?.sub == user.id ? <button>Editar</button> : ""}
        <Link to={`/anouncement/${anouncement.id}`} key={anouncement.id}>
          Ver detalhes
        </Link>
      </div>
    </li>
  );
};

export default CardAnouncementUser;
