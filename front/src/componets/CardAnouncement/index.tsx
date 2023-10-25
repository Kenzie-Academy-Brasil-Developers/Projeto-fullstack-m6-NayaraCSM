import { IAnouncement } from "../../pages/HomePage";

export interface ICardAnoucement {
  anouncement: IAnouncement;
}

const CardAnouncement = ({ anouncement }: ICardAnoucement) => {
  return (
    <li>
      <img src={anouncement.image[0].image} alt="imagem de um carro" />
      <h3>
        {anouncement.brand} - {anouncement.model}
      </h3>
      <p>{anouncement.description}</p>
      <div>
        <i>{anouncement.user.name.substring(0, 1)}</i>
        <h4>{anouncement.user.name}</h4>
      </div>
      <div>
        <p>{anouncement.mileage} Km</p>
        <p>{anouncement.year}</p>
        <p>R$ {anouncement.price}</p>
      </div>
    </li>
  );
};

export default CardAnouncement;
