import { Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './components/header';
import { Transactions } from './pages/transactions';
import { Wallet } from './pages/wallet';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Wallet />
        </Route>
        <Route path='/transactions/:walletId'>
          <Transactions />
        </Route>
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
