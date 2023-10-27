import { Link } from "react-router-dom";
import close from "../../../assets/icon-close-modal.svg";

const RegisterSucessModal = () => {
  return (
    <div>
      <div role="dialog">
        <div>
          <h3>Sucesso!</h3>
          <button>
            <img src={close} />
          </button>
        </div>
        <h3>Sua conta foi criada com sucesso!</h3>
        <p>
          Agora você poderá ver seus negócios crescendo em grande escala, ou
          fazer um bom negócio.
        </p>
        <Link to="/login"> Ir para o login</Link>
      </div>
    </div>
  );
};

export default RegisterSucessModal;
