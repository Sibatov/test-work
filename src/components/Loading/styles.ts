import styled, {keyframes} from 'styled-components';

const firstRotate = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;

const secondRotate = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;

const thirdRotate = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
  perspective: 780px;
`;

export const Inner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  
  &:nth-of-type(1) {
    top: 0;
    left: 0;
    animation: ${firstRotate} 1.15s linear infinite;
    border-bottom: 3px solid #5c5edc;
  }
  
  &:nth-of-type(2) {
    top: 0;
    right: 0;
    animation: ${secondRotate} 1.15s linear infinite;
    border-right: 3px solid rgba(76, 70, 101, 0.99);
  }
  
  &:nth-of-type(3) {
    right: 0;
    bottom: 0;
    animation: ${thirdRotate} 1.15s linear infinite;
    border-top: 3px solid rgb(233, 144, 138);
  }
`;
