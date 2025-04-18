import React from 'react';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';

const App = () => {
  return (
    <div>
       <Router>
         <Routes>
           <Route path ="/" element = {<Root/>}/>
           <Route path ="/login" exact element = {<Login />}/>  
           <Route path ="/signUp" exact element = {<SignUp/>}/>
           <Route path ="/dashboard" exact element = {<Home/>}/>
           <Route path ="/income" exact element = {<Income/>}/>
           <Route path ="/expense" exact element = {<Expense/>}/>
           {/* <Route path ="/expense"  element = {<Expense/>}/>   removing exact will also be right*/}
         </Routes>
       </Router>
    </div>
  );
};

export default App;

const Root = () =>{
  //check if token exists in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard i fauthenticated , otherwise back to login
  // return isAuthenticated ? (
  //   <Navigate to = "/dashboard" />
  // ) : (
  //   <Navigate to = "/login" />
  // );

  return <Navigate to = {isAuthenticated ? "/dashboard" : "/login"} replace />
};

// In react-router-dom v6, the exact prop is unnecessary. It was used in previous versions but is now redundant because routes match exactly by default.