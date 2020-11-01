import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Border from './components/border/Border';
import { getColumns } from './redux/reducers/appReducer';
import { appStateType } from './redux/store';

function App() {
  const dispatch = useDispatch();

  const stateColumns = (state: appStateType) => state.columns;
  const columns = useSelector(stateColumns);

  useEffect(() => {
    dispatch(getColumns())
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Border columns={columns} />
    </div>
  );
}

export default App;
