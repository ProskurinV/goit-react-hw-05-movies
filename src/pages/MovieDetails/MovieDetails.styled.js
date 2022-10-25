import styled from 'styled-components';

export const FilmCard = styled.main`
  padding: 20px;
  display: flex;
  width: 100%;

  /* justify-content: flex-start; */
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const Img = styled.img`
  width: 200px;

  border-radius: 5px;
  margin-right: 20px;
`;

export const MovieTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.17;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 30px;
`;

export const OverTitle = styled.p`
  font-weight: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Overview = styled.p`
  font-weight: 20px;
  line-height: 1.17;
  /* text-transform: uppercase; */
  color: #000000;
  margin-bottom: 24px;
  font-weight: 500;
`;

export const VoteTitle = styled.p`
  font-weight: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Vote = styled.p`
  font-weight: 20px;
  line-height: 1.17;
  /* text-transform: uppercase; */
  color: #000000;
  margin-bottom: 24px;
  font-weight: 500;
`;
