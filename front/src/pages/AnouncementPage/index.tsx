import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { IAnouncement, IImage } from "../HomePage";
import HeaderRoutePublic from "../../componets/Header/HeaderPublic";
import CardComment from "../../componets/CardComment";
import Footer from "../../componets/Footer";
import HeaderRoutePrivate from "../../componets/Header/HeaderPrivate";
import { SectionAnouncement } from "./styled";

const AnouncementPage = () => {
  const [anouncement, setAnouncement] = useState<IAnouncement | null>(null);
  const token = localStorage.getItem("user:token");
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IAnouncement>(`/anouncement/${id}`);

      setAnouncement(data);
    })();
  }, [id]);

  return (
    <main>
      {token ? <HeaderRoutePrivate /> : <HeaderRoutePublic />}{" "}
      <SectionAnouncement>
        <div className="image-background">
          <img src={anouncement?.image[0].image} alt="imagem de um carro" />
        </div>
        <div>
          <h3>
            {anouncement?.brand} {anouncement?.model}
          </h3>
          <div className="anouncement-info">
            <div className="info-car">
              <p className="mileage">{anouncement?.mileage} Km</p>
              <p className="year">{anouncement?.year}</p>
            </div>
            <p className="price">R$ {anouncement?.price}</p>
          </div>
          <button>Comprar</button>
        </div>
        <div>
          <h3>Descrição</h3>
          <p>{anouncement?.description}</p>
        </div>
        <h3>Comentários</h3>
        <ul>
          <CardComment />
        </ul>
        <div>
          <div>
            <input type="text" id="comment" placeholder="Digitar comentário" />
            <button disabled>Comentar</button>
          </div>
          <div>
            <button>Gostei muito!</button>
            <button>Incrível</button>
            <button>Recomendarei para meus amigos!</button>
          </div>
        </div>
      </SectionAnouncement>
      <section>
        <div className="menu-images">
          <h3>Fotos</h3>
          <ul>
            {anouncement?.image.map((image: IImage) => {
              return (
                <li key={image.id}>
                  <img src={image.image} />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <i>{anouncement?.user.name.substring(0, 1)}</i>
          <h3>{anouncement?.user.name}</h3>
          <p>{anouncement?.user.description}</p>
          <Link to={`/anouncement/user/${anouncement?.user.id}`}>
            Ver todos anuncios
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AnouncementPage;
