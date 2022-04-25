import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Subscribe from './components/Dashboard/Subscribe';
import Header from './components/Dashboard/Header';
import Collection from './pages/Dashboard/CollectionDetail';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home palette={theme.palette} />}></Route>
          <Route
            path='/dashboard'
            element={[
              <Subscribe />,
              <Header parent='DASHBOARD' />,
              <Dashboard />,
            ]}
          ></Route>
          <Route
            path='/dashboard/collection'
            element={[
              <Subscribe />,
              <Header parent='COLLECTION' />,
              <Collection />,
            ]}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color='inherit'
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box> */}
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
