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
import { useDispatch, useSelector } from "react-redux";
import { addJob, addCv } from "./redux/jimSlice";
import { useEffect, useState } from "react";
import EmployerPost from "./pages/Dashboard/Employer/EmployerPost";
import JobSeekerCV from "./pages/Dashboard/JobSeeker/JobSeekerCV";


const App = () => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState('')
  const isAuth = useSelector(state=> state.jim.auth)

  useEffect(()=> {
    const userInfo = localStorage.getItem('info')
    const tpe = userInfo ? JSON.parse(userInfo).type : null;
    if(tpe){
      setAuth(tpe)
    }
  }, [isAuth])
  
  useEffect(()=> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    fetch("http://127.0.0.1:8000/api/job", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      dispatch(addJob(result))
    })
    .catch((error) => console.error(error));

    
    
    fetch("http://127.0.0.1:8000/api/cv", {
      method: "GET",
      redirect: "follow"
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch(addCv(result))
        // console.log(result[0]);
      })
      .catch((error) => console.error(error));
  }, [])

  
  const JobSeekerComp = () => {
      return (
        <Route path="/" element={<JobSeeker />}>
          <Route index element={<ViewJob />} />
          <Route path="/saved-jobs" element={<Savedjobs />} />
          <Route path="/CV" element={<JobSeekerCV />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      )
  } 
  const EmployerComp = () => {
      return (
        <Route path="/" element={<Employer />}>
          <Route index element={<ReviewApp />} />
          <Route path="/my-post" element={<EmployerPost />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      )
  } 
  const AdministratorComp = () => {
      return (
        <Route path="/" element={<Administrator />}>
          <Route index element={<ManageJobs /> } />
          <Route path="/manage-Users" element={<ManageUsers />} />
        </Route>
      )
  } 
  const BeforeSognInComp = () => {
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

  

  return (
    <BrowserRouter>
      <Routes>
        {(auth === 'JobSeeker' || isAuth === 'JobSeeker') && JobSeekerComp() }
        {(auth === 'Employer' || isAuth === 'Employer') && EmployerComp() }
        {(auth === 'Administrator' || isAuth === 'Administrator') && AdministratorComp() }
        {auth === '' && BeforeSognInComp() }
    
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
