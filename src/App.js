import './App.css';
import theme from './Theme';
import ButtonArea from './features/ButtonArea';
import InputArea from './features/InputArea';
import ModalArea from './features/ModalArea';
import SelectArea from './features/SelectArea';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Button</h1>
        <ButtonArea />
        <hr />
        <h1>Input</h1>
        <InputArea />
        <hr />
        <h1>Modal</h1>
        <ModalArea />
        <hr />
        <h1>Select</h1>
        <SelectArea />
      </ThemeProvider>
    </>
  );
}

export default App;
