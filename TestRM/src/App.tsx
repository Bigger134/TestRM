import { StoreProvider, createStore } from "./../src/store/utils";
import { ThemeProvider } from '@mui/material';
import theme from './components/themes.ts';
import './App.css'
import Router from "./components/Router/Router.tsx";
import { BrowserRouter } from 'react-router-dom';

const store = createStore();
function App() {


  return (
    <>
      <StoreProvider value={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default App
