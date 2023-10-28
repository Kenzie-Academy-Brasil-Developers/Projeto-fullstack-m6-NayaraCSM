import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { ContainerInput } from "./styled";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "date";
  error?: FieldError;
}

const Input = forwardRef(
  (
    { id, label, placeholder, type, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <ContainerInput>
      <div className="info-input">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </div>
      {error ? <p>{error.message}</p> : null}
    </ContainerInput>
  )
);

export default Input;
