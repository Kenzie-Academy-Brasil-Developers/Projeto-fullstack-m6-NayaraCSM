import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginData, loginSchema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import HeaderRoutePublic from "../../componets/Header/HeaderPublic";
import Input from "../../componets/Input";
import Footer from "../../componets/Footer";
import { ContainerLogin } from "./styled";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <main>
      <HeaderRoutePublic />
      <ContainerLogin>
        <form onSubmit={handleSubmit(signIn)}>
          <Input
            id="login"
            label="Email"
            placeholder="Digite seu email"
            type="email"
            {...register("email")}
            error={errors.email}
          />
          <Input
            id="senha"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            {...register("password")}
            error={errors.password}
          />
          <span className="span-password">Esqueci minha senha</span>
          <button type="submit">Entrar</button>
          <span className="span-register">Ainda não possue conta?</span>
          <Link to="/register" className="for-register">
            Cadastrar
          </Link>
        </form>
      </ContainerLogin>
      <Footer />
    </main>
  );
};

export default LoginPage;
