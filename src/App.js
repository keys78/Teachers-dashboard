import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Home from './Pages';
import ClassList from './Pages/ClassList';
import StudentDetails from './Pages/StudentDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidenav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/classlist" component={ClassList} exact />
        <Route path="/classlist/studentdetails/:id" component={StudentDetails} />
      </Switch>
    </Router>
  );
}

export default App;
