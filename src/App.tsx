import React from 'react';

// style options
import theme from './style/theme';
import { GlobalStyles } from './style/global';
import {ThemeProvider} from 'styled-components';

// components
import PackageList from './components/PackageList';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PackageList />
      </ThemeProvider>
    </div>
  );
}

export default App;
