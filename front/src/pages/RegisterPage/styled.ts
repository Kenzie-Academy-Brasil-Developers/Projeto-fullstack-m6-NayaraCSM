import styled from "styled-components";

export const ContainerRegister = styled.div`
  width: 100%;
  background: var(--color-grey-7);
  padding: 1rem;

  form {
    width: 100%;
    padding: 2rem;
    background: var(--color-white-fixed);
  }

  h2 {
    padding-bottom: 0.5rem;
    font-size: var(--heading-5-500-font-size);
  }

  h3 {
    font-size: var(--body-2-500-font-size);
    font-weight: var(--heading-3-600-font-weight);
    padding: 1.5rem 0;
  }

  .address-local,
  .details-address {
    width: 100%;
    gap: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .address-local Input,
  .details-address input {
    flex: 1;
    margin-right: 10px;
  }

  .type-account {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  input[type="radio"] + label {
    padding: 0.7rem 1.3rem;
    font-size: var(--button-medium-text-font-size: 14px);
    font-weight: var(--button-medium-text-font-weight);
    border-radius: 4px;
    border: 1px solid var(--color-grey-4);
  }

  input[type="radio"]: hover + label {
    background: var(--color-brand-1);
    color: var(--color-grey-10);
  }

  input[type="radio"]: checked + label {
    background: var(--color-brand-1);
    color: var(--color-grey-10);
  }

  input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color-white-fixed);
    margin: 0;
  }

  button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.7rem 0;
    font-size: var(--button-medium-text-font-size: 14px);
    border-radius: 3px;
    border: 1px solid var(--color-grey-4);
    background: var(--color-brand-1);
    color: var(--color-grey-10);
  }

  button:hover {
    border: 1px solid var(--color-brand-1);
    background: var(--color-grey-6);
    color: var(--color-brand-1);
  }
`;
