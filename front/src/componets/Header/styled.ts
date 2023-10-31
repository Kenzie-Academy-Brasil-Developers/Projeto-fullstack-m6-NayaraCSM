import styled from "styled-components";

export const Header = styled.header`
  padding: 1rem 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  h1 {
    background-image: linear-gradient(to right, #080d0d, #4529e6, #5126ea);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: var(--heading-7-600-font-weight: 600);
  }
  .small-text {
    font-size: var(--heading-6-500-font-size);
  }
`;

export const MenuMobile = styled.div`
  button {
    border: 0;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const Menu = styled.div`
  display: none;
  button {
    width: 3rem;
    height: 3rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 2rem 1.5rem;
  gap: 20px;
  right: 0;
  left: 0;
  background-color: var(--color-white-fixed);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  .button-login {
    text-decoration: none;
    color: inherit;
    cursor: poiter;
  }
  .button-register {
    width: 100%;
    text-align: center;
    border: 1px solid var(--color-grey-3);
    border-radius: 4px;
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    color: inherit;
    cursor: poiter;
  }
`;

export const HeaderPrivate = styled.header`
  padding: 1rem 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  .menu-private {
    display: none;
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  h1 {
    background-image: linear-gradient(to right, #080d0d, #4529e6, #5126ea);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: var(--heading-7-600-font-weight: 600);
  }

  .small-text {
    font-size: var(--heading-6-500-font-size);
  }

  button {
    border: none;
    display: flex;
  }

  h3 {
    margin-left: 0.5rem;
    padding-top: 0.4rem;
  }

  .user-icon {
    padding: 0.4rem 0.7rem;
    color: var(--color-white-fixed);
    border-radius: 100px;
  }
`;

export const NavPrivate = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  margin-top: 1rem;
  padding: 2rem 1.5rem;
  gap: 20px;
  right: 0;
  left: 0;
  background-color: var(--color-white-fixed);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;
