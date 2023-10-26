import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IImage } from "../HomePage";
import HeaderRoutePublic from "../../componets/Header/HeaderPublic";
import CardAnouncementUser from "../../componets/CardAnouncement/CardAnouncementUser";
import Footer from "../../componets/Footer";

export interface IUserAdvertiser {
  id: number;
  name: string;
  isAdvertiser: boolean;
  description: string;
  anouncement: IAnoucementUser[];
}

export interface IAnoucementUser {
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
  image: IImage[];
}

const UserPage = () => {
  const [user, setUser] = useState<IUserAdvertiser | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IUserAdvertiser>(
        `/anouncement/user/${id}`
      );

      setUser(data);
    })();
  }, [id]);

  return (
    <main>
      <HeaderRoutePublic />
      <section>
        <i>{user?.name.substring(0, 1)}</i>
        <div>
          <h3>{user?.name}</h3>
          <span>{user?.isAdvertiser ? "Anunciante" : "Comprador"}</span>
          <p>{user?.description}</p>
        </div>
      </section>
      <section>
        <h3>Anúncios</h3>
        <ul>
          {user?.anouncement.map((anouncement) => {
            return (
              <Link to={`/anouncement/${anouncement.id}`} key={anouncement.id}>
                <CardAnouncementUser
                  key={anouncement.id}
                  anouncement={anouncement}
                  user={user}
                />
              </Link>
            );
          })}
        </ul>
      </section>
      <Footer />
    </main>
  );
};

export default UserPage;
