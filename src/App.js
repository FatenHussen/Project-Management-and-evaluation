import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
// import Signup from './Components/Dashboard/Signup';
import Students from './Pages/Students';
import Supervisors from './Pages/Supervisors';
import Projects from './Pages/Projects';
import Proposal from './Pages/Proposal';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import Weekly from './Pages/Weekly';

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>  
      <Route path='/' Component={Login}></Route>
      <Route path='/dashboard' Component={Dashboard}></Route>
      <Route path='/profile' Component={Profile}></Route>
      <Route path='/students' Component={Students}></Route>
      <Route path='/supervisors' Component={Supervisors}></Route>
      <Route path='/projects' Component={Projects}></Route>
      <Route path="/proposal/:id" element={<Proposal/>} />
      <Route path="/weekly/:id" element={<Weekly/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
