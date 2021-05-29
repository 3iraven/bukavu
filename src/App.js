import React from 'react';
import './components/Navigation.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';

import Navigation from './components/Navigation';

function App() {
  return (
<BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
          <Footer/>
        </div> 
      </BrowserRouter>

  );
}

export default App;
