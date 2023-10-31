import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import HeaderRoutePublic from "../../componets/Header/HeaderPublic";
import car from "../../assets/Photo.svg";
import CardAnouncement from "../../componets/CardAnouncement";
import Footer from "../../componets/Footer";
import HeaderRoutePrivate from "../../componets/Header/HeaderPrivate";
import { ContainerHome } from "./styled";

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

const HomePage = () => {
  const [anouncements, setAnouncements] = useState<IAnouncement[]>([]);
  const token = localStorage.getItem("user:token");

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IAnouncement[]>("/anouncement");

      setAnouncements(data);
    })();
  }, []);

  return (
    <main>
      {token ? <HeaderRoutePrivate /> : <HeaderRoutePublic />}
      <ContainerHome>
        <div className="home">
          <h3>Motors Shop</h3>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </div>
        <div className="image-car">
          <img src={car} className="img-home" />
        </div>
        <div className="vitrine">
          <ul>
            {anouncements.map((anouncement) => {
              return (
                <Link
                  to={`/anouncement/${anouncement.id}`}
                  key={anouncement.id}
                >
                  <CardAnouncement anouncement={anouncement} />
                </Link>
              );
            })}
          </ul>
        </div>
      </ContainerHome>
      <Footer />
    </main>
  );
};

export default HomePage;
