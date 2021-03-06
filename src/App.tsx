import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import GlobalStyle from './styles/global';

import { AdminRoom } from './Pages/AdminRoom';
import { Home } from './Pages/Home';
import { NewRoom } from './Pages/NewRoom';
import { Room } from './Pages/Room';
import light from './styles/themes/light';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
