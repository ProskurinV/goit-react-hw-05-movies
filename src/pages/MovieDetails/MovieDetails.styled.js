import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FilmCard = styled.main`
  padding-bottom: 20px;

  /* display: flex; */
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px #00000040;
  @media screen and (min-width: 450px) {
    display: flex;
  }
`;

export const Img = styled.img`
  width: 200px;
  padding-left: 20px;
  padding-top: 20px;

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
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const OverTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  font-size: 16px;
  line-height: 1.17;
  color: #000000;
  margin-bottom: 10px;
  width: 80%;
`;

export const VoteTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Vote = styled.p`
  font-size: 16px;
  line-height: 1.17;
  color: #000000;
  margin-bottom: 10px;
`;

export const GenresTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Genres = styled.p`
  font-size: 16px;
  line-height: 1.17;
  color: #000000;
  margin-bottom: 10px;
`;

export const AddTitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.17;
  text-transform: uppercase;
  color: #000000;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  padding-left: 20px;
  display: inline;
`;

export const AddWrapper = styled.div`
  margin-bottom: 60px;
`;
