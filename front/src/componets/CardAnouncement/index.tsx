import { IAnouncement } from "../../pages/HomePage";

interface ICardAnouncement {
  anouncement: IAnouncement;
}

const CardAnouncement = ({ anouncement }: ICardAnouncement) => {
  return (
    <li>
      <img src={anouncement.image[0].image} alt="imagem de um carro" />
      <h3>
        {anouncement.brand} - {anouncement.model}
      </h3>
      <p>{anouncement.description}</p>
      <div>
        <i>IconeAdvertiser</i>
        <h4>{anouncement.user.name}</h4>
      </div>
      <div>
        <p>{anouncement.mileage}</p>
        <p>{anouncement.year}</p>
        <p>{anouncement.price}</p>
      </div>
    </li>
  );
};

export default CardAnouncement;
