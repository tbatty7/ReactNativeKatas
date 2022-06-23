import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppStack} from './AppStack';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
