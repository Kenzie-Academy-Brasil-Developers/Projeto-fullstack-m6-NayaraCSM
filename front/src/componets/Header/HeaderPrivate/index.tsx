import jwt_decode from "jwt-decode";
import { useState } from "react";
import menu from "../../../assets/icon-menu.svg";
import close from "../../../assets/icon-close.svg";
import NavebarRoutePrivate from "../Navbar/NavbarRoutePrivate";
import { HeaderPrivate } from "../styled";

const HeaderRoutePrivate = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("user:token");
  const decode = token
    ? jwt_decode<{ name: string; sub: number }>(token)
    : null;

  const OpenMenu = () => {
    setOpen(!open);
  };
  const userId: number = decode?.sub || 0; // Defina um valor padrão ou lide com o caso de decode ser nulo

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

    const backgroundColor = colors[colorIndex];

    return backgroundColor;
  };

  const backgroundColor = getUserBackgroundColor(userId);

  const backgroundColorIcon = {
    backgroundColor: backgroundColor,
  };

  return (
    <HeaderPrivate>
      <h1>
        Motors <span className="small-text">shop</span>
      </h1>
      <div className="menu-mobile-private">
        <button
          className="button-menu-mobile"
          onClick={OpenMenu}
          aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
        >
          {!open ? (
            <img src={menu} id="open" />
          ) : (
            <img src={close} id="close" />
          )}
        </button>
        {open ? <NavebarRoutePrivate /> : ""}
      </div>
      <div className="menu-private">
        <button
          onClick={OpenMenu}
          aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
        >
          <span style={backgroundColorIcon} className="user-icon">
            {decode?.name.substring(0, 1)}
          </span>
          <h3>{decode?.name}</h3>
        </button>
        {open ? <NavebarRoutePrivate /> : ""}
      </div>
    </HeaderPrivate>
  );
};

export default HeaderRoutePrivate;
