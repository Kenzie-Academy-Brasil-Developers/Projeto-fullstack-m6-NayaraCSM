import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "date";
  error?: FieldError;
}

const Input = forwardRef(
  (
    { id, label, type, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div>
      <div>
        <input type={type} id={id} placeholder=" " ref={ref} {...rest} />
        <label htmlFor={id}>{label}</label>
      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  )
);

export default Input;
