import close from "../../../assets/icons-close-modal.svg";

interface IAnouncementModalSucessProps {
  closeModalSucessAnouncement: () => void;
}

const AnouncementSucessModal = ({
  closeModalSucessAnouncement,
}: IAnouncementModalSucessProps) => {
  return (
    <div>
      <div role="dialog">
        <div>
          <h3>Sucesso!</h3>
          <button onClick={closeModalSucessAnouncement}>
            <img src={close} />
          </button>
        </div>
        <h3>Sua anúncio foi criado com sucesso!</h3>
        <p>Agora você poderá ver seus negócios crescendo em grande escala.</p>
      </div>
    </div>
  );
};

export default AnouncementSucessModal;
