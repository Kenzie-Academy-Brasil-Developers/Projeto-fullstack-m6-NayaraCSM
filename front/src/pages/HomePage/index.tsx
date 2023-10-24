import { useEffect, useState } from "react";
import { api } from "../../services/api";
import HeaderRoutePublic from "../../componets/Header/HeaderRoutePublic";
import car from "../../assets/Photo.svg";
import CardAnouncement from "../../componets/CardAnouncement";
import Footer from "../../componets/Footer";

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
  };
  image: IImage[];
}

export interface IImage {
  id: number;
  image: string | undefined;
}

const HomePage = () => {
  const [anouncements, setAnouncements] = useState<IAnouncement[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IAnouncement[]>("/anouncement");

      setAnouncements(data);
    })();
  }, []);

  return (
    <main>
      <HeaderRoutePublic />
      <div>
        <img src={car} />
        <h3>Motors Shop</h3>
        <p>A melhor plataforma de anúncios de carros do país</p>
      </div>
      <ul>
        {anouncements.map((anouncement) => {
          return (
            <CardAnouncement key={anouncement.id} anouncement={anouncement} />
          );
        })}
      </ul>
      <Footer />
    </main>
  );
};

export default HomePage;
