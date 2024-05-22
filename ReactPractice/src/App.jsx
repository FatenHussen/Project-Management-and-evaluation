import { useState } from 'react'
import './App.css'
import Signup from './components/Signup.1'
import { Route,Router,Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Users from './Users'
import Porfile from './components/Porfile/Porfile'
import StudentList from './components/StudentList/StudentList'
import About from './components/About/About'
import Fsidebar from './components/Style/fsidebar'
import Fdashbord from './components/Fdashboard/Fdashbord'
import Finputuser from './components/Finputuser/Finputuser'
import Fadmin from './components/Fadmin/Fadmin'
import Fpage1 from './components/Fpage1/Fpage1'
import Evaluate from './components/Evaluate/Evaluate'
import Proposal from './components/Proposal/Proposal'
import StudentTable from './components/StudentTable/StudentTable'
import Supervisor from './components/Supervisor/Supervisor'
import Project_Follow_up from './components/Project_Follow_up/Project_Follow_up'
import ContactForm from './components/ContactForm/ContactForm'
import T_home from './components/T_home/T_home'
import ViewProposal from './components/ViewProposal/ViewProposal'
import ViewProject_Follow_up from './components/ViewProject_Follow_up/ViewProject_Follow_up'
import ViewEvaluate from './components/ViewEvaluate/ViewEvaluate'
import F_dashboard from './components/F_dashboard/F_dashboard'
import FinalEvaluate from './components/FinalEvaluate/FinalEvaluate'
import ViewFinalEuvluate from './components/ViewFinalEvaluate/ViewFinalEuvluate'
import InputProject from './components/InputProject/InputProject'
import FinalProfileAdmin from './components/FinalProfileAdmin/FinalProfileAdmin'
import Projects from './components/Projects/Projects'
function App() {
  const user = localStorage.getItem('role')
  
  return (
    <>
     <Routes>
      <Route path='/finalprofileadmin' element={<FinalProfileAdmin/>}/>
      <Route path='/inputproject' element={<InputProject/>}/>
      <Route path='/viewfinaleuvluate' element={<ViewFinalEuvluate/>}/>
      <Route path="/finalevaluate" element={<FinalEvaluate/>}/>
      <Route path="/finalevaluate/:id" element={<FinalEvaluate/>}/>
      <Route path='/f_dashboard' element={<F_dashboard/>}/>
      <Route path='/viewevaluate' element={<ViewEvaluate/>}/>
      <Route path='/viewproject_follow_up' element={<ViewProject_Follow_up/>}/>
      <Route path='/viewproposal' element={<ViewProposal/>}/>
      <Route path='/home' element={<T_home/>}/>
      <Route path='/home/:id' element={<T_home/>}/>
      <Route path='/contactform' element={<ContactForm/>}/>
      <Route path="/Project_Follow_up" element={<Project_Follow_up/>}/>
      <Route path="/Project_Follow_up/:id" element={<Project_Follow_up/>}/>
      <Route path='/supervisor' element={<Supervisor/>}/>
      <Route path='/studenttable' element={<StudentTable/>}/>
      <Route path="/proposal/:id" element={<Proposal />} />
      <Route path='/proposal/' element={<Proposal/>}/>
      <Route path='/evaluate/:id' element={<Evaluate/>}/>
      <Route path='/evaluate' element={<Evaluate/>}/>
      <Route path='/' element={<Fpage1/>}/>
      <Route path='/fadmin' element={<Fadmin/>}/>
      <Route path='/finputuser' element={<Finputuser/>}/>
      <Route path='/fdashboard' element={<Fdashbord/>}/>
      <Route path='/fsidebar' element={<Fsidebar/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/profile' element={<Porfile/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
     <Route path="/register" element={<Signup />} />
     <Route path="/log-in"  element={<Login />} />
     <Route path="/projects"  element={<Projects />} />
     <Route path="/projects/:id"  element={<Projects />} />

     </Routes>
    </>
  )
}
export default App