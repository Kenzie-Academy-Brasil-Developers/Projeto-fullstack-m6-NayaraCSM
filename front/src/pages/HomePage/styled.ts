import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  overflow: hidden;

  .img-home {
    width: 100%;
    text-decoration: none;
    color: inherit;
    cursor: poiter;
  }
  h3 {
    margin-top: 2rem;
  }
  p {
    margin-top: 1rem;
  }
  .home {
    width: 100%;
    text-align: center;
    height: -webkit-fill-available;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
    );
    color: var(--color-white-fixed);
    position: absolute;
    z-index: 1;
  }
  .image-car {
    position: relative;
    z-index: 0;
    margin-botton: 5rem;
  }

  .vitrine {
    margin: 12rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  ul {
    width: 100%;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    list-style: none;
  }
`;
