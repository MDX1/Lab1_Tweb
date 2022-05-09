import './App.css';
import { CustomLayout } from './components/CustomLayout';
import { CustomLogin } from './components/Login';
import { CustomFuter } from './pageComponents/CustomFooter';
import { CustomHeader } from './pageComponents/CustomHeader';

function App() {
  return (
    <>
      <CustomHeader />

      {/* <CustomLayout /> */}
      <CustomLogin />

      <CustomFuter />
    </>
  );
}

export default App;
