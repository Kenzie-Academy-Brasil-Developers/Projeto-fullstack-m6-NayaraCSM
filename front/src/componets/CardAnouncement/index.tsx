import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export interface IAnouncement {
  id: number;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: number | string;
  color: string;
  fipePrice: number | string;
  price: number | string;
  description: string;
  user: {
    id: number;
    name: string;
    isAdvertiser: boolean;
    description: string;
  };
  image: IImage[];
}

export interface IImage {
  id: number;
  image: string | undefined;
}

const CardAnouncement = () => {
  const [anouncements, setAnouncements] = useState<IAnouncement[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IAnouncement[]>("/anouncement");

      setAnouncements(data);
    })();
  }, []);
  return (
    <>
      {anouncements.map((anouncement) => {
        return (
          <Link to={`/anouncement/${anouncement.id}`} key={anouncement.id}>
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
            </li>{" "}
          </Link>
        );
      })}
    </>
  );
};

export default CardAnouncement;
