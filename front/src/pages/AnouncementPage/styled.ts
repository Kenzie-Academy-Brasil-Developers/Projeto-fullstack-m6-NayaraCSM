import styled from "styled-components";

export const SectionAnouncement = styled.section`
  width: 100%;
  .image-background {
    width: 100%;
    background: var(--color-brand-1);
  }
  img {
    width: 92%;
    margin: 2rem 1rem;
    border-radius: 4px;
  }

  .info-car {
    display: flex;
    gap: 1rem;
    font-size: var(--body-2-400-font-size);
  }
  .mileage,
  .year {
    background: var(--color-grey-5);
    color: var(--color-brand-1);
    font-weight: var(--body-2-500-font-weight);
    padding: 0.5rem;
    border-radius: 4px;
  }
  .price {
    padding: 0.5rem 0;
    color: var(--color-grey-0);
  }

  .menu-images {
  }
`;
