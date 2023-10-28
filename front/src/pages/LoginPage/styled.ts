import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  background: var(--color-grey-7);
  padding: 1rem;

  form {
    width: 100%;
    padding: 2rem;
    display: grid;
    background: var(--color-white-fixed);
  }

  .span-password {
    display: flex;
    justify-content: end;
    margin: 0.5rem 1rem;
    color: var(--color-grey-2);
    font-size: var(--body-2-500-font-size);
  }

  button {
    padding: 0.8rem 0;
    margin: 1rem 0;
    color: var(--color-white-fixed);
    background: var(--color-brand-2);
    border: 1px solid var(--color-brand-2);
    border-radius: 4px;
    cursor: pointer;
  }

  button: hover {
    color: var(--color-brand-2);
    background: var(--color-grey-5);
    border: 1px solid var(--color-brand-2);
  }

  .span-register {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    color: var(--color-grey-3);
    font-size: var(--body-2-500-font-size);
  }
  .for-register {
    padding: 0.8rem 0;
    margin: 1rem 0;
    text-align: center;
    text-decoration: none;
    font-weight: var(--button-medium-text-font-weigh);
    color: var(--color-grey-0);
    background: var(--color-white-fixed);
    border: 2px solid var(--color-grey-5);
    border-radius: 4px;
  }
  .for-register: houver {
    color: var(--color-white-fixed);
    background: var(--color-grey-0);
    border: 2px solid var(--color-grey-0);
  }
`;
