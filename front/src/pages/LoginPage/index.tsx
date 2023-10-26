import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginData, loginSchema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import HeaderRoutePublic from "../../componets/Header/HeaderPublic";
import Input from "../../componets/Input";
import Footer from "../../componets/Footer";

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
      <form onSubmit={handleSubmit(signIn)}>
        <Input
          id="login"
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          id="senha"
          label="Senha"
          type="password"
          {...register("password")}
          error={errors.password}
        />
        <span>Esqueci minha senha</span>
        <button type="submit">Entrar</button>
        <span>Ainda não possue conta?</span>
        <button>Cadastrar</button>
      </form>
      <Footer />
    </main>
  );
};

export default LoginPage;
