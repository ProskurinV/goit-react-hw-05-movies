import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 10px;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0;
  padding-bottom: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const AddInfo = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px #00000040;
  justify-content: center;
`;

export const Img = styled.img`
  width: 50px;
  padding-left: 20px;
  padding-top: 10px;

  border-radius: 5px;
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-right: 5px;
`;

export const CharacterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  font-style: italic;
`;

export const Character = styled.p`
  font-size: 16px;
  line-height: 1.17;
  color: #000000;
`;

export const DisabledLink = styled(Link)`
  pointer-events: none;
`;
