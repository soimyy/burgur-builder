import React from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <Layout name='name'>
      <p>test</p>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
