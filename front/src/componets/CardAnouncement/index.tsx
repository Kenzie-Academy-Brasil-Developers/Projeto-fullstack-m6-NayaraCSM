import { IAnouncement } from "../../pages/HomePage";
import { LiAnouncement } from "./styled";

export interface ICardAnoucement {
  anouncement: IAnouncement;
}

const CardAnouncement = ({ anouncement }: ICardAnoucement) => {
  const userId: number = anouncement.user.id;

  const getUserBackgroundColor = (userId: number) => {
    const colors = [
      "#E34D8C",
      "#C04277",
      "#7D2A4D",
      "#7000FF",
      "#5200E3",
      "#36007D",
      "#349974",
      "#2A7D5F",
      "#153D2E",
      "#6100FF",
      "#5700E3",
      "#30007D",
    ];

    const colorIndex = userId % colors.length;

    return colors[colorIndex];
  };

  const backgroundColor = getUserBackgroundColor(userId);

  return (
    <LiAnouncement>
      <img src={anouncement.image[0].image} alt="imagem de um carro" />
      <h3>
        {anouncement.brand} - {anouncement.model}
      </h3>
      <p className="description">{anouncement.description}</p>
      <div className="user-info">
        <span style={{ backgroundColor: backgroundColor }}>
          {anouncement.user.name.substring(0, 1)}
        </span>
        <h4>{anouncement.user.name}</h4>
      </div>
      <div className="anouncement-info">
        <div className="info-car">
          <p className="mileage">{anouncement.mileage} Km</p>
          <p className="year">{anouncement.year}</p>
        </div>
        <p className="price">R$ {anouncement.price}</p>
      </div>
    </LiAnouncement>
  );
};

export default CardAnouncement;
