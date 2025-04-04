import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PropertyDetail from './pages/PropertyDetail';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/properties/:id" component={PropertyDetail} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PropertyDetail from './pages/PropertyDetail';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/properties/:id" component={PropertyDetail} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </Router>
  );
};

export default App;
