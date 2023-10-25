import { useState } from "react";
import menu from "../../../assets/icon-menu.svg";
import NavebarRoutePrivate from "../Navbar/NavbarRoutePrivate";

const HeaderRoutePrivate = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <h1>Motors shop</h1>
      <div className="menu-mobile">
        <button
          onClick={OpenMenu}
          aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
        >
          {!open ? <img src={menu} /> : "x"}
        </button>
        {open ? <NavebarRoutePrivate /> : ""}
      </div>
      <div className="menu">
        <NavebarRoutePrivate />
      </div>
    </header>
  );
};

export default HeaderRoutePrivate;
