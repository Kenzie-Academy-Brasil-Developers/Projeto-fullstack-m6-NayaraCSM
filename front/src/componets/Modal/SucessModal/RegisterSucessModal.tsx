import { Link } from "react-router-dom";
import close from "../../../assets/icons-close-modal.svg";

interface IRegisterModalSucessProps {
  closeModalSucessRegister: () => void;
}

const RegisterSucessModal = ({
  closeModalSucessRegister,
}: IRegisterModalSucessProps) => {
  return (
    <div>
      <div role="dialog">
        <div>
          <h3>Sucesso!</h3>
          <button onClick={closeModalSucessRegister}>
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
