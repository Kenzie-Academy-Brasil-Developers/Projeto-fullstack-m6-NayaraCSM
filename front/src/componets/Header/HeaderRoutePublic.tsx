import { Link } from "react-router-dom";

const HeaderRoutePublic = () => {
  return (
    <header>
      <h1>Motors shop</h1>
      <nav>
        <Link to="/login">Fazer Login</Link>
        <Link to="/register">Cadastrar</Link>
      </nav>
    </header>
  );
};

export default HeaderRoutePublic;
