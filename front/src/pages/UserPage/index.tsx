import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IImage } from "../HomePage";
import HeaderRoutePublic from "../../componets/Header/HeaderPublic";
import CardAnouncementUser from "../../componets/CardAnouncement/CardAnouncementUser";
import Footer from "../../componets/Footer";
import HeaderRoutePrivate from "../../componets/Header/HeaderPrivate";
import FormAnouncementModal from "../../componets/Modal/AddModal/FormAnouncementModal";
import AnouncementSucessModal from "../../componets/Modal/SucessModal/AnouncementSucessModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenSucess, setIsModalOpenSucess] = useState(false);
  const token = localStorage.getItem("user:token");
  const decode = token ? jwt_decode<{ isAdvertiser: boolean }>(token) : null;
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IUserAdvertiser>(
        `/anouncement/user/${id}`
      );

      setUser(data);
    })();
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalSucessAnouncement = () => {
    setIsModalOpenSucess(false);
  };

  return (
    <main>
      {token ? <HeaderRoutePrivate /> : <HeaderRoutePublic />}
      <section>
        <i>{user?.name.substring(0, 1)}</i>
        <div>
          <h3>{user?.name}</h3>
          <span>{user?.isAdvertiser ? "Anunciante" : "Comprador"}</span>
        </div>
        <p>{user?.description}</p>
        {decode?.isAdvertiser ? (
          <button onClick={() => openModal()}>Criar anúncio</button>
        ) : (
          ""
        )}
      </section>
      <section>
        <h3>Anúncios</h3>
        <ul>
          {user?.anouncement.map((anouncement) => {
            return (
              <CardAnouncementUser
                key={anouncement.id}
                anouncement={anouncement}
                user={user}
              />
            );
          })}
        </ul>
      </section>
      <Footer />
      {isModalOpen && (
        <FormAnouncementModal
          closeModal={closeModal}
          setIsModalOpenSucess={setIsModalOpenSucess}
        />
      )}
      {isModalOpenSucess && (
        <AnouncementSucessModal
          closeModalSucessAnouncement={closeModalSucessAnouncement}
        />
      )}
    </main>
  );
};

export default UserPage;
