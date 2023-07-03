import { GlobalStyles } from './styles/globalStyles';
import AppRouter from './setup/RouteManagement/AppRouter';
import Navbar from './components/Header';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { StyleSheetManager } from 'styled-components';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme' && prop !== 'sectionIsOpen'}>
          <GlobalStyles />
          <Navbar />
          <AppRouter />
        </StyleSheetManager>
      </ThemeProvider>
    </>
  );
}

export default App;
