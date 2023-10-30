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
  .home {
    background-image: linear-gradient(
      to bottom,
      var(--color-grey-7),
      var(--color-grey-3),
      var(--color-grey-0)
    );
  }
  .vitrine {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
  }
  ul {
    width: 100%;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    list-style: none;
  }
`;
