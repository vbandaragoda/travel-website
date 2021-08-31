import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import SignUp from './components/Pages/SignUp'


function App() {
  return (
    <>
    
<Router>
        <Navbar />
        <Switch>
        
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
      </Router>



      {/* <Router>
        <Navbar />
        <Switch>
         
          <Route exact path="/" component={Home}>
            <Home />
          </Route>

          <Route path="/services" component={Services}>
            <Services />
          </Route>

          <Route path="/products" component={Products}>
            <Products />
          </Route>

          <Route path="/sign-up" component={SignUp}>
            <SignUp />
          </Route>

        </Switch>
      </Router> */}

      {/* <Router>
      <div>
        <Switch>
          <Route path="/products" render={() => (<div>Products</div>)} />
          <Route exact path="/" render={() => (<div>Home</div>)} />
          <Route component={NoMatch}/>
        </Switch>
     </div>
  </Router> */}


    </>
  );
}


export default App;

