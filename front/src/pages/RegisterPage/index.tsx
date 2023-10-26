import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { TRegisterData, registerSchema } from "./validator";
import HeaderRoutePublic from "../../componets/Header/HeaderPublic";
import Input from "../../componets/Input";
import Footer from "../../componets/Footer";

export const RegisterPage = () => {
  const { newUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <main>
      <HeaderRoutePublic />
      <form onSubmit={handleSubmit(newUser)}>
        <h2>Cadastro</h2>
        <h3>Informações pessoais</h3>
        <Input
          id="name"
          label="Nome"
          type="text"
          {...register("name")}
          error={errors.name}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          id="cpf"
          label="CPF"
          type="text"
          {...register("cpf")}
          error={errors.cpf}
        />
        <Input
          id="phone"
          label="Número de Telefone"
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
          type="text"
          {...register("description")}
          error={errors.description}
        />
        <h3>Informações de endereço</h3>
        <Input
          id="cep"
          label="CEP"
          type="text"
          {...register("cep")}
          error={errors.cep}
        />
        <Input
          id="state"
          label="Estado"
          type="text"
          {...register("state")}
          error={errors.state}
        />
        <Input
          id="city"
          label="Cidade"
          type="text"
          {...register("city")}
          error={errors.city}
        />
        <Input
          id="street"
          label="Rua"
          type="text"
          {...register("street")}
          error={errors.street}
        />
        <Input
          id="number"
          label="Número"
          type="text"
          {...register("number")}
          error={errors.number}
        />
        <Input
          id="complement"
          label="Complemento"
          type="text"
          {...register("complement")}
          error={errors.complement}
        />
        <h3>Tipo de conta</h3>
        <div>
          <div>
            <input
              type="radio"
              id="buyer"
              value="false"
              {...register("isAdvertiser")}
            />
            <label htmlFor="buyer">Comprador</label>
          </div>
          <div>
            <input
              type="radio"
              id="advertiser"
              value="true"
              {...register("isAdvertiser")}
            />
            <label htmlFor="advertiser">Anunciante</label>
          </div>
          <Input
            id="password"
            label="Senha"
            type="password"
            {...register("password")}
            error={errors.password}
          />
          <Input
            id="confirmPassword"
            label="Confirmar Senha"
            type="password"
            {...register("confirm")}
            error={errors.confirm}
          />{" "}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <Footer />
    </main>
  );
};

export default RegisterPage;
