import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  border-radius: 8px;
`;

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: scroll;
`;

export const Row = styled.tr`
  padding: 10px;
  border-radius: 8px;
  text-align: left;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  &:hover {
    background-color: ${({theme: {palettes}}) => palettes.OldAsphalt.L30 };
  }
`;

export const Cell = styled.th`
  color: ${({theme: {colors}}) => colors.Woodsmoke };
  font-weight: 100;
  display: flex;
  align-items: center;
  margin: 0 10px;
  
  &:last-of-type {
    border-right: none;
  }
`;

export const Thead = styled.thead`
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 8px;

  ${Row} {
    &:last-of-type {
      border-bottom: none;
    }
    
    &:hover {
      background-color: ${({theme: {palettes}}) => palettes.OldAsphalt.L30 };
    }
  }
  
  ${Cell} {
    font-weight: bold;
  }
`;

export const Tbody = styled.tbody`
  //background-color: ${({theme: {palettes}}) => palettes.OldAsphalt.L30 };
  border-radius: 8px;
`;

export const Empty = styled.div`
  ${({theme}) => theme.fonts.Sizings.par1};
  color: ${({theme}) => theme.colors.Woodsmoke};
  padding-top: 48px;
  text-align: center;
`;

export const IconsWrap = styled.div`
  flex: 0 0 8px;
  padding-left: 12px;
  margin: -3px 0;
`;
export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 6px;
  border: none;
  background: transparent;
  color: ${({theme}) => theme.colors.CadetBlue};
  margin: 3px 0;

  &.active {
    color: ${({theme}) => theme.colors.Chambray};
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  
  button {
    margin-right: 5px;
  }
`;

