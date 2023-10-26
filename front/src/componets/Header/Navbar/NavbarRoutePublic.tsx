import { Link } from "react-router-dom";
import { Nav } from "../styled";

const NavebarRoutePublic = () => {
  return (
    <Nav>
      <Link to="/login" className="button-login">Fazer Login</Link>
      <Link to="/register" className="button-register">Cadastrar</Link>
    </Nav>
  );
};

export default NavebarRoutePublic;
