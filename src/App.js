import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Home from './Pages';
import Attendance from './Pages/Attendance';
import ClassList from './Pages/ClassList';
import StudentDetails from './Pages/StudentDetails';
import Results from './Pages/Results';
import SchemeOfWork from './Pages/SchemeOfWork';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidenav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/classlist" component={ClassList} exact/>
        <Route path="/classlist/studentdetails/:id" component={StudentDetails} />
        <Route path="/attendance" component={Attendance} exact/>
        <Route path="/results" component={Results} exact/>
        <Route path="/schemeofwork" component={SchemeOfWork} exact/>
      </Switch>
    </Router>
  );
}

export default App;
