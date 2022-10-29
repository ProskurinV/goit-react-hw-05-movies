import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: calc(100vw - 48px);

  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const FilmCard = styled.div`
  width: 280px;
  // height: 438px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px #00000040;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px #00000040;
    transition: 0.5s ease all;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 395px;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const MovieTitle = styled.h2`
  font-weight: 20px;
  line-height: 1.17;
  text-transform: uppercase;
  color: #000000;

  @media screen and (min-width: 768px) {
    line-height: 1.3;
  }
  @media screen and (min-width: 1280px) {
    line-height: 1.2;
    font-size: 20px;
  }
`;
