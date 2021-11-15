import styled from "styled-components";

export const Container = styled.div`
	margin: 30px auto;
	width: 70%;
`;

export const Title = styled.h1`
	text-align: center;
	margin-bottom: 30px;
`;

export const Toolbar = styled.div`
	display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Content = styled.div`
	width: 100%;
	min-height: 400px;
	margin-top: 30px;
	border-radius: 8px;
  background-color: ${({theme: {colors}}) => colors.Iron };
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Total = styled.p`
  ${({theme}) => theme.fonts.Sizings.Normal};
  margin: 0 10px;
`;
