import HeaderRoutePublic from "../../componets/Header/HeaderRoutePublic";
import car from "../../assets/Photo.svg";
import CardAnouncement from "../../componets/CardAnouncement";
import Footer from "../../componets/Footer";



const HomePage = () => {
  return (
    <main>
      <HeaderRoutePublic />
      <div>
        <img src={car} />
        <h3>Motors Shop</h3>
        <p>A melhor plataforma de anúncios de carros do país</p>
      </div>
      <ul>
        <CardAnouncement />
      </ul>
      <Footer />
    </main>
  );
};

export default HomePage;
