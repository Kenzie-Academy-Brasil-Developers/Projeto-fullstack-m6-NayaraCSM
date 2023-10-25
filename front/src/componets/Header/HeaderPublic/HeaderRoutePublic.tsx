
import { useState } from "react";
import menu from "../../../assets/icon-menu.svg";
import NavebarRoutePublic from "../Navbar/NavbarRoutePublic";

const HeaderRoutePublic = (): JSX.Element => {
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
        {open ? <NavebarRoutePublic /> : ""}
      </div>
      <div className="menu">
        <NavebarRoutePublic />
      </div>
    </header>
  );
};

export default HeaderRoutePublic;
