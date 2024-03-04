import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addAuth } from "../redux/jimSlice";
import { useDispatch } from "react-redux";


const SignIn = () => {
    const [txtPsw, setTxtPsw] = useState('password');
    const [showHide, setShowHide] = useState('https://cdn-icons-png.flaticon.com/512/2767/2767194.png')
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    

    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(n=> ({...n, [name] : value}));
    }
    
    const stopRef = (e) => {
        e.preventDefault()

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(data);
        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("http://127.0.0.1:8000/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => localStorage.setItem('info', JSON.stringify(result)))
        .catch((error) => console.error(error));
        
        

        
    }

    return (
        <div 
            className="h-[100vh] w-[100%] border-2 rounded bg-white flex justify-center "
        >
            <img 
                src='https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=740&t=st=1709240551~exp=1709241151~hmac=8e9c56997e9e82c3a3d16623abfff436e17ddd61b5e8f9184f55528c5af3d934'
                alt=''
                className=" h-[90vh] w-[100%] absolute z-0 mix-blend-multiply opacity-[40%]"
            />
            
            <form
                onSubmit={stopRef}
                className="w-[30%]  m-[50px] flex flex-col justify-center relative"
            >
                <Link className='m-[8px] p-[8px] text-center text-[20px]' to='/'>
                    <b className='font-bold text-red-500 text-[35px]'>J</b>OB<b className='font-bold text-red-500 text-[35px]'>I</b>N<b className='font-bold text-red-500 text-[35px]'>M</b>OROCCO.
                </Link>
                <h2 className="font-bold text-[25px] my-[15px]">Hello! Welcome back.</h2>
                {/* <p>{info.isAuth}</p> */}
                <p className="text-[18px] text-gray-500">
                    Log in with your data that you entered during your registration.
                </p>
                <label className="w-[100%] my-[12px]">
                    <p>Email address</p>
                    <input 
                        type="text" 
                        className="w-[100%] h-[40px] px-[18px] rounded border-2 border-gray-700 outline-none"
                        name="email"
                        value={data.email}
                        onChange={getData}
                    />
                </label>
                <label className="w-[100%] my-[12px]">
                    <p>Password</p>
                    <span
                        className="border-2 border-gray-700 flex rounded"
                    >
                        <input 
                            type={txtPsw}
                            className="w-[90%] h-[40px] px-[18px] rounded outline-none" 
                            name="password"
                            value={data.password}
                            onChange={getData}   
                        />
                        <span className="w-[10%] h-[40px] bg-white flex items-center justify-center cursor-pointer"
                            onClick={()=> {
                            if(txtPsw === 'password'){
                                setTxtPsw('text'); 
                                setShowHide('https://cdn-icons-png.flaticon.com/512/2767/2767146.png');
                            } else {
                                setTxtPsw('password');
                                setShowHide('https://cdn-icons-png.flaticon.com/512/2767/2767194.png');
                            }
                        }}
                        >
                            <img src={showHide} alt="" className="w-[20px]" />
                        </span>
                    </span>
                    <a href="#" className="ml-[30px] underline">Forgot Password</a>
                </label>
                <label  className="w-[100%] my-[15px]">
                    
                    <input 
                        type="submit" 
                        value='Login' 
                        className="bg-red-500 w-[100%] h-[40px] rounded cursor-pointer hover:bg-gray-800 text-white"
                    />
                    
                </label>           
                <Link to='/register' className="text-center">I don't have an Account.</Link>
            </form>
        </div>
    )
}

export default SignIn;