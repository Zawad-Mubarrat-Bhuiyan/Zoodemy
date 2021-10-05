import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Data from './components/Data/Data';
import Data2 from './components/Data2/Data2';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Notfound from './components/Notfound/Notfound';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Data></Data>
          </Route>
          <Route path="/home">
            <Data></Data>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Data2></Data2>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
