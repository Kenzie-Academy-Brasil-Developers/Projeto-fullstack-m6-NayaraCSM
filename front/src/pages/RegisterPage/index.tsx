import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { TRegisterData, registerSchema } from "./validator";
import { ContainerRegister } from "./styled";
import HeaderRoutePublic from "../../componets/Header/HeaderPublic";
import Input from "../../componets/Input";
import Footer from "../../componets/Footer";
import RegisterSucessModal from "../../componets/Modal/SucessModal/RegisterSucessModal";

export const RegisterPage = () => {
  const { newUser, isModalOpenSucessRegister, setIsModalOpenSucessRegister } =
    useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const closeModalSucessRegister = () => {
    setIsModalOpenSucessRegister(false);
  };

  return (
    <main>
      <HeaderRoutePublic />
      <ContainerRegister>
        <form onSubmit={handleSubmit(newUser)}>
          <h2>Cadastro</h2>
          <h3>Informações pessoais</h3>
          <Input
            id="name"
            label="Nome"
            placeholder="Digite seu nome"
            type="text"
            {...register("name")}
            error={errors.name}
          />
          <Input
            id="email"
            label="Email"
            placeholder="Digite seu email"
            type="email"
            {...register("email")}
            error={errors.email}
          />
          <Input
            id="cpf"
            label="CPF"
            placeholder="00000000000"
            type="text"
            {...register("cpf")}
            error={errors.cpf}
          />
          <Input
            id="phone"
            label="Celular"
            placeholder="Digite seu número"
            type="text"
            {...register("phone")}
            error={errors.phone}
          />
          <Input
            id="dateBirth"
            label="Data de Nascimento"
            type="date"
            {...register("dateBirth")}
            error={errors.dateBirth}
          />
          <Input
            id="description"
            label="Descrição"
            placeholder="Digite descrição"
            type="text"
            {...register("description")}
            error={errors.description}
          />
          <h3>Informações de endereço</h3>
          <Input
            id="cep"
            label="CEP"
            placeholder="0000000"
            type="text"
            {...register("cep")}
            error={errors.cep}
          />
          <div className="address-local">
            <Input
              id="state"
              label="Estado"
              placeholder="Digite seu estado"
              type="text"
              {...register("state")}
              error={errors.state}
            />
            <Input
              id="city"
              label="Cidade"
              placeholder="Digite sua cidade"
              type="text"
              {...register("city")}
              error={errors.city}
            />
          </div>
          <Input
            id="street"
            label="Rua"
            placeholder="Digite sua rua"
            type="text"
            {...register("street")}
            error={errors.street}
          />
          <div className="details-address">
            <Input
              id="number"
              label="Número"
              placeholder="Digite seu número"
              type="text"
              {...register("number")}
              error={errors.number}
            />
            <Input
              id="complement"
              label="Complemento"
              placeholder="Ex: apartamento 35"
              type="text"
              {...register("complement")}
              error={errors.complement}
            />
          </div>
          <h3>Tipo de conta</h3>
          <div className="type-account">
            <div className="input-radio">
              <input
                type="radio"
                id="buyer"
                value="false"
                {...register("isAdvertiser")}
              />
              <label htmlFor="buyer">Comprador</label>
            </div>
            <div className="input-radio">
              <input
                type="radio"
                id="advertiser"
                value="true"
                {...register("isAdvertiser")}
              />
              <label htmlFor="advertiser">Anunciante</label>
            </div>
          </div>
          <Input
            id="password"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            {...register("password")}
            error={errors.password}
          />
          <Input
            id="confirmPassword"
            label="Confirmar Senha"
            placeholder="Digite sua senha novamente"
            type="password"
            {...register("confirm")}
            error={errors.confirm}
          />
          <button type="submit">Finalizar cadastro</button>
        </form>
      </ContainerRegister>
      <Footer />
      {isModalOpenSucessRegister && (
        <RegisterSucessModal
          closeModalSucessRegister={closeModalSucessRegister}
        />
      )}
    </main>
  );
};

export default RegisterPage;
