import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

import JobOffersDetail from "./pages/JobOffersDetail";
import CvLivrary from "./pages/CvLibrary";
import Search from "./pages/Search";
import NoPage from "./pages/NoPage";
import JobSeeker from "./pages/Dashboard/JobSeeker/JobSeeker";
// import { useState } from "react";
import ViewJob from "./pages/Dashboard/JobSeeker/ViewJob";
import Savedjobs from "./pages/Dashboard/JobSeeker/Savedjobs";
import Employer from "./pages/Dashboard/Employer/Employer";
import PostJob from "./pages/Dashboard/Employer/PostJob";
import ReviewApp from "./pages/Dashboard/Employer/ReviewApp";
import Setting from "./pages/Dashboard/Setting";
import Administrator from "./pages/Dashboard/Administrator/Administrator";
import ManageJobs from "./pages/Dashboard/Administrator/ManageJobs";
import ManageUsers from "./pages/Dashboard/Administrator/ManageUsers";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const App = () => {
  
  const [info, setInfo] = useState({'isAuth':false, 'data': 'Employer'});
  
  useEffect(()=> {
    if(localStorage.getItem('info')){
      const { isAuth } =   JSON.parse(localStorage.getItem('info'))
      const { data } =   JSON.parse(localStorage.getItem('info'))
      if(!isAuth || !data  ) {
        setInfo({'isAuth':false, 'data': 'Employer'})
      }
      setInfo({'isAuth':isAuth, 'data': data.type})
    }
  }, [info])
  

  

  const Dash = () => {
    let isAuthe = info.isAuth
    let type = info.data;

    if(!isAuthe) {
      return (
        <>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/search-job" element={<Search />} />
            <Route path="/Job-offer-Detail" element={<JobOffersDetail />} />
            <Route path="/CV-LIBRARY" element={<CvLivrary />} />
            
          </Route>  
          <Route path="/register" element={<Register />} />
          <Route path="/sign-In" element={<SignIn />} />
        </>
      )
    }

    if (isAuthe && type === 'JobSeeker'){
      return (
        <Route path="/" element={<JobSeeker />}>
          <Route index element={<ViewJob />} />
          <Route path="/saved-jobs" element={<Savedjobs />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      )
    } 
    if (isAuthe && type === 'Employer'){
      return (
        <Route path="/" element={<Employer />}>
          <Route index element={<ReviewApp />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      )
    } 
    if (isAuthe && type === 'Administrator'){
      return (
        <Route path="/" element={<Administrator />}>
          <Route index element={<ManageJobs /> } />
          <Route path="/manage-Users" element={<ManageUsers />} />
        </Route>
      )
    } 
  } 

  return (
    <BrowserRouter>
      <Routes>
        {Dash()}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
