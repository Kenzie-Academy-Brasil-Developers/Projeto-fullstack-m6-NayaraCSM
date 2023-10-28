import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  display: grid;
  .info-input {
    width: 100%;
    display: grid;
  }
  label {
    margin-bottom: 0.5rem;
    color: var(--color-grey-1);
    font-family: "Inter", sans-serif;
    font-size: var(--input-label-font-size);
    font-weight: var(--input-label-font-weight);
  }
  input {
    width: 100%;
    padding: 0.5rem 0;
    border-radius: 4px;
    border: 1px solid var(--color-grey-5);
  }
  input::placeholder {
    padding: 0 0.5rem;
    color: var(--color-grey-4);
  }
  p {
    margin: 0.5rem 0;
    color: var(--color-alert-1);
    font-size: var(--zod-error-font-size);
  }
`;
