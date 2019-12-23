import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import './App.scss';
import { routes, RouteWithSubRoutes } from './routes';
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
