import jwt_decode from "jwt-decode";
import { useState } from "react";
import NavebarRoutePrivate from "../Navbar/NavbarRoutePrivate";

const HeaderRoutePrivate = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("user:token");
  const decode = token ? jwt_decode<{ name: string }>(token) : null;

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
          <i>{decode?.name.substring(0, 1)}</i>
          <h3>{decode?.name}</h3>
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
