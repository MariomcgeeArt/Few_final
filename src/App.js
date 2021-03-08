import './App.css';
import Title from './Title';
import PARADISEList from './PARADISEList.js';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About';
import PARADISEDetails from './PARADISEDetails';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">

      <Title />

      <Route exact path="/" component={PARADISEList}/>
      <Route path="/about" component={About} />

      <Route path="/details/:id" component={PARADISEDetails} />

      <Footer/>

    </div>
    </Router>
  );
}

export default App;
