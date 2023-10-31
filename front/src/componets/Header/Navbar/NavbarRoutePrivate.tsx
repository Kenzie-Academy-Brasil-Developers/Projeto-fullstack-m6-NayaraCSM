import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { NavPrivate } from "../styled";

const NavebarRoutePrivate = () => {
  const { logout } = useContext(UserContext);
  const token = localStorage.getItem("user:token");
  const decode = token ? jwt_decode<{ isAdvertiser: boolean }>(token) : null;

  return (
    <NavPrivate>
      <button>Editar Perfil</button>
      <button>Editar endereço</button>
      {decode?.isAdvertiser ? <button>Meus Anúncios</button> : ""}
      <button onClick={() => logout()}>Sair</button>
    </NavPrivate>
  );
};

export default NavebarRoutePrivate;
