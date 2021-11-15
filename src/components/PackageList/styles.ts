import styled from "styled-components";
import {InputWrapper} from "../Input/styles";
import {BaseButton} from "../Button/styles";

export const Container = styled.div`
	margin: 30px auto;
	width: 90%;
`;

export const Title = styled.h1`
	text-align: center;
	margin-bottom: 30px;
`;

export const Toolbar = styled.div`
	display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  ${InputWrapper} {
    margin: 0 10px 10px 0;
  }
  
  ${BaseButton} {
    height: 40px;
  }
`;

export const Content = styled.div`
	width: 100%;
	min-height: 400px;
  display: flex;
  align-items: center;
	margin-top: 30px;
	border-radius: 8px;
  background-color: ${({theme: {colors}}) => colors.Iron };
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: end;
`;

export const Total = styled.p`
  ${({theme}) => theme.fonts.Sizings.Normal};
  margin: 0 10px;
`;

export const Empty = styled.div`
  width: 100%;
  ${({theme}) => theme.fonts.Sizings.par1};
  color: ${({theme}) => theme.colors.Woodsmoke};
  padding-top: 48px;
  text-align: center;
`;
