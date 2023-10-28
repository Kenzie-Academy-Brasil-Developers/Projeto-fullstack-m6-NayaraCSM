import { api } from "../../../../services/api";
import close from "../../../../assets/icons-close-modal.svg";
import { TAnouncementData, anouncementSchema } from "./validator";
import Input from "../../../Input";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IFormAnouncementModalProps {
  closeModal: () => void;
  setIsModalOpenSucess: React.Dispatch<React.SetStateAction<boolean>>;
}
const FormAnouncementModal = ({
  closeModal,
  setIsModalOpenSucess,
}: IFormAnouncementModalProps) => {
  const token = localStorage.getItem("user:token");

  const createAnouncement = async (data: TAnouncementData) => {
    console.log(data);
    try {
      await api.post("/anouncement", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      closeModal();
      setIsModalOpenSucess(true);
    } catch (err) {
      console.log(err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TAnouncementData>({
    resolver: zodResolver(anouncementSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  return (
    <div>
      <div role="dialog">
        <div>
          <h3>Criar anúncio</h3>
          <button onClick={closeModal}>
            <img src={close} alt="Fechar" />
          </button>
        </div>
        <div>
          <form onSubmit={handleSubmit(createAnouncement)}>
            <h4>Informações do veículo</h4>
            <Input
              id="brand"
              label="Marca"
              placeholder="Chevrolet"
              type="text"
              {...register("brand")}
              error={errors.brand}
            />
            <Input
              id="model"
              label="Modelo"
              placeholder="Camaro ss 6.2 v8 16v"
              type="text"
              {...register("model")}
              error={errors.model}
            />
            <Input
              id="year"
              label="Ano"
              placeholder="2018"
              type="text"
              {...register("year")}
              error={errors.year}
            />
            <Input
              id="fuel"
              label="Combustível"
              placeholder="Gasolina / Etanol"
              type="text"
              {...register("fuel")}
              error={errors.fuel}
            />
            <Input
              id="mileage"
              label="Quilometragem"
              placeholder="30000"
              type="text"
              {...register("mileage")}
              error={errors.mileage}
            />
            <Input
              id="color"
              label="Cor"
              placeholder="Branco"
              type="text"
              {...register("color")}
              error={errors.color}
            />
            <Input
              id="fipePrice"
              label="Preço tabela Fipe"
              placeholder="48000"
              type="text"
              {...register("fipePrice")}
              error={errors.fipePrice}
            />
            <Input
              id="price"
              label="Preço"
              placeholder="50000"
              type="text"
              {...register("price")}
              error={errors.price}
            />
            <Input
              id="description"
              label="Descrição"
              placeholder="Digite a descrição"
              type="text"
              {...register("description")}
              error={errors.description}
            />
            {fields.map((field, index) => (
              <div key={field.id}>
                <Input
                  id={`image${index}`}
                  label={`Imagem ${index + 1}`}
                  placeholder="https://image.com"
                  type="text"
                  {...register(`images.${index}.image`)}
                  error={errors.images?.[index]?.image}
                />
                <button type="button" onClick={() => remove(index)}>
                  Remover
                </button>
              </div>
            ))}
            <button type="button" onClick={() => append({ image: "" })}>
              Adicionar Campo
            </button>
            <button type="submit">Criar Anúncio</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAnouncementModal;
