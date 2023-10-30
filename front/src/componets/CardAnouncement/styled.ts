import styled from "styled-components";

export const LiAnouncement = styled.li`
  width: 75vw;
  height: 85vh;
  margin: 3rem 1rem 2rem 2rem;
  img {
    width: 315px;
    height: 35vh;
  }
  h3 {
    margin: 1rem 0;
    max-height: 2.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: var(--heading-7-500-font-size);
  }
  .description {
    width: 100%;
    max-height: 2.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: var(--body-2-400-font-size);
    color: var(--color-grey-2);
  }
  .user-info {
    margin: 1rem 0;
    display: flex;
  }
  span {
    padding: 0.4rem 0.7rem;
    color: var(--color-white-fixed);
    border-radius: 100px;
  }
  h4 {
    margin-left: 0.5rem;
    padding-top: 0.5rem;
  }
  .anouncement-info {
    display: flex;
    justify-content: space-between;
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
`;
