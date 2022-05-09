import { useEffect } from 'react';
import { useLoginStore, useRootStore } from '.';
import './App.css';
import { CustomFuter } from './pageComponents/CustomFooter';
import { CustomHeader } from './pageComponents/CustomHeader';

function App() {

  const rootStore = useRootStore()
  const loginS = useLoginStore();

  useEffect(() => {
      rootStore.setInitialStorageContents()
  }, [])

  useEffect(() => {
      loginS.setInitialStorageContents()
  }, [])

  return (
    <>
      <CustomHeader />

      {/* <CustomLayout /> */}
      {/* <CustomLogin /> */}

      <CustomFuter />
    </>
  );
}

export default App;
