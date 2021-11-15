import React, {FC} from 'react';

// types
import {LoadingProps} from './types';

// styles
import {Container, Inner} from './styles';


const Loading: FC<LoadingProps> = ({className}) => {
  return (
    <Container className={className}>
      <Inner />
      <Inner />
      <Inner />
    </Container>
  );
};

export default Loading;
