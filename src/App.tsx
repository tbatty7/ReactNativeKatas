import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {HelpScreen} from './HelpScreen';

const App = () => {
  return (
    <Provider store={store}>
      <HelpScreen />
    </Provider>
  );
};

export default App;
