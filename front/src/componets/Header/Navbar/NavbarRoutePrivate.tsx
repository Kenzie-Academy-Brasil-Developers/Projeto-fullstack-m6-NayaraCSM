import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

const NavebarRoutePrivate = () => {
  const { logout } = useContext(UserContext);
  const token = localStorage.getItem("user:token");
  const decode = token ? jwt_decode<{ isAdvertiser: boolean }>(token) : null;

  return (
    <nav>
      <button>Editar Perfil</button>
      <button>Editar endereço</button>
      {decode?.isAdvertiser ? <button>Meus Anúncios</button> : ""}
      <button onClick={() => logout()}>Sair</button>
    </nav>
  );
};

export default NavebarRoutePrivate;
