import { Link } from "react-router-dom"

const NavebarRoutePublic = () => {
    return (
        <nav>
        <Link to="/login">Fazer Login</Link>
        <Link to="/register">Cadastrar</Link>
      </nav>
    )
}

export default NavebarRoutePublic