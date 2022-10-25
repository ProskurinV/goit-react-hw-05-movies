import styled from 'styled-components';

import { Form, Field } from 'formik';

export const Search = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  flex-direction: column;
`;

export const FormEl = styled(Form)`
  position: relative;
  width: 200px;
  align-self: center;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 20px;
  outline: none;
  color: black;

  border: none;
  border-radius: 4px;

  background-color: lightskyblue;
  border-bottom: 0.5px solid #f7f7f7;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    display: flex;
    align-items: center;

    color: black;
  }
`;

export const BtnSearch = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;
