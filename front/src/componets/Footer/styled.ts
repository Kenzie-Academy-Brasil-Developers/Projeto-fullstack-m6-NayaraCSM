import styled from "styled-components";

export const FooterPage = styled.footer`
  background: var(--color-grey-0);
  color: var(--color-white-fixed);
  text-align: center;
  padding: 2rem 0;

  h1 {
    margin-bottom: 3rem;
  }
  .small-text {
    font-size: var(--heading-6-500-font-size);
  }
  p {
    font-size: var(--body-2-400-font-size);
    margin-bottom: 3rem;
  }

  button {
    color: var(--color-white-fixed);
    background: var(--color-grey-1);
    padding: 0.5rem 0.9rem;
    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
  }
`;
