import { useState } from "react";
import menu from "../../../assets/icon-menu.svg";
import close from "../../../assets/icon-close.svg";
import NavebarRoutePublic from "../Navbar/NavbarRoutePublic";
import { Header, Menu, MenuMobile } from "../styled";

const HeaderRoutePublic = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <Header>
      <h1>Motors shop</h1>
      <MenuMobile>
        <button
          onClick={OpenMenu}
          aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
        >
          {!open ? (
            <img src={menu} id="open" />
          ) : (
            <img src={close} id="close" />
          )}
        </button>
        {open ? <NavebarRoutePublic /> : ""}
      </MenuMobile>
      <Menu>
        <NavebarRoutePublic />
      </Menu>
    </Header>
  );
};

export default HeaderRoutePublic;
