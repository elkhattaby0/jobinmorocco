import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [txtPsw, setTxtPsw] = useState('password');
    const [txtPsw1, setTxtPsw1] = useState('password');
    const [showHide, setShowHide] = useState('https://cdn-icons-png.flaticon.com/512/2767/2767194.png')
    const [showHide1, setShowHide1] = useState('https://cdn-icons-png.flaticon.com/512/2767/2767194.png')
    const [data, setData] = useState({});
    const [res, setRes] = useState([])

    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(n=> ({...n, [name]: value}))
    }

    const stopRef = async (e) => {
        e.preventDefault()
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IlYxbnEyTlYweWNCZFh5cmtHN3FadEE9PSIsInZhbHVlIjoieVVPcFY1R3QwaGF1c2ZvMVdFMzA3RHcwWU92YUFMelI3cUpVMmpRaUdHRncxcXhNNzZrRmtsUXYrZUdIQzlwZkZOU056TVBpNmZESmRscWVsRmNyOHQ3MmR5OGNtVmh0WHNjQVRuTXBob0ZzRGxWeElnVFIvWlB3RlZ3RUpXeGciLCJtYWMiOiIwMDY4NmI1ZmI4ODdiY2M0NGQ3OTI1MzQ1NzU0MGQxYTEwMjc5OTY2Njg0ZmE1Nzk1YmQwMmU3ZDFjZGQzZTUzIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InZzejFHbFpKdXFKeEhiWVkrZmdzWlE9PSIsInZhbHVlIjoiREp6VFc2ZzM1N0RYclROQ2RramRwVGEybWorclJpZm9Pdmc5bGY4NWpOTEhSWmhQSDZnQmZJNFpmcnpzbURWQk9VdFJrQjJKRm1DZ3VhK200SFpGOU5GdGRZTm93azJBQ1NUV0RpVEpiTnRaZTFHNHNiQTVoSWY2ek1SRG1adk0iLCJtYWMiOiIwY2FjMzEwOTg4ZTczNGIyOWIyYjc0OTYyNGUwOWFkODg5NGM1YzYzODRkY2YwYzY3NzBmNTExOGVkNzVhZmNlIiwidGFnIjoiIn0%3D");
        await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: "follow"
        })
        .then((response) => response.json())
        .then((result) => setRes(result))
        .catch((error) => (error));

        if(res === 'Sccessfully'){
            navigate('/sign-In')
        }
    }

    return (
        <div 
            className="h-[100%] w-[100%] border-2 rounded bg-white flex justify-center "
        >

            <img 
                src='https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=740&t=st=1709240551~exp=1709241151~hmac=8e9c56997e9e82c3a3d16623abfff436e17ddd61b5e8f9184f55528c5af3d934'
                alt=''
                className=" h-[90vh] w-[100%] absolute z-0 mix-blend-multiply opacity-[40%]"
            />
            <form
                onSubmit={stopRef}
                className="w-[30%] m-[50px] flex flex-col justify-center relative "
            >
                <Link className='m-[8px] p-[8px] text-center text-[20px]' to='/'>
                    <b className='font-bold text-red-500 text-[35px]'>J</b>OB<b className='font-bold text-red-500 text-[35px]'>I</b>N<b className='font-bold text-red-500 text-[35px]'>M</b>OROCCO.
                </Link>
                <h2 className="font-bold text-[25px] my-[15px]">Create Account.</h2>
                <label className="w-[100%] my-[12px]">
                    <p>Fullname</p>
                    <input 
                        type="text" 
                        className="w-[100%] h-[40px] px-[18px] rounded border-2 border-gray-700 outline-none"
                        name='fullname'
                        value={data.fullname}
                        onChange={getData}
                    />
                    <p className="text-red-500">{res.fullname}</p>
                </label>
                <label className="w-[100%] my-[12px]">
                    <p>Date Birth</p>
                    <input 
                        type="date" 
                        className="w-[100%] h-[40px] px-[18px] rounded border-2 border-gray-700 outline-none"
                        name='dateBirth'
                        value={data.dateBirth}
                        onChange={getData}
                    />
                    <p className="text-red-500">{res.dateBirth}</p>
                </label>
                <label className="w-[100%] my-[12px]">
                    <p>Gender</p>
                    <select  
                        className="w-[100%] h-[40px] px-[18px] rounded border-2 border-gray-700 outline-none"
                        name='gender'
                        value={data.gender}
                        onChange={getData}
                    >
                        <option value=''>Chose your gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                    <p className="text-red-500">{res.gender}</p>
                </label>
                <label className="w-[100%] my-[12px]">
                    <p>Type</p>
                    <select  
                        className="w-[100%] h-[40px] px-[18px] rounded border-2 border-gray-700 outline-none"
                        name='type'
                        value={data.type}
                        onChange={getData}
                    >
                        {/* <option value=''>Chose your gender</option> */}
                        <option value='Employer'>Employer</option>
                        <option value='JobSeeker'>Job seeker</option>
                    </select>
                    <p className="text-red-500">{res.type}</p>
                </label>
                <label className="w-[100%] my-[12px]">
                    <p>Email address</p>
                    <input 
                        type="email" 
                        className="w-[100%] h-[40px] px-[18px] rounded border-2 border-gray-700 outline-none"
                        name='email'
                        value={data.email}
                        onChange={getData}
                    />
                    <p className="text-red-500">{res.email}</p>
                </label>
                <label className="w-[100%] my-[12px]">
                    <p>Password</p>
                    <span
                        className="border-2 border-gray-700 flex rounded"
                    >
                        <input 
                            type={txtPsw}
                            className="w-[90%] h-[40px] px-[18px] rounded outline-none" 
                            name='password'
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
                    <p className="text-red-500">{res.password}</p>
                </label>
                <label className="w-[100%] my-[12px]">
                    <p>Re-Password</p>
                    <span
                        className="border-2 border-gray-700 flex rounded"
                    >
                        <input 
                            type={txtPsw1}
                            className="w-[90%] h-[40px] px-[18px] rounded outline-none"   
                            name='password_confirmation'
                            value={data.password_confirmation}
                            onChange={getData} 
                        />
                        <span className="w-[10%] h-[40px] bg-white flex items-center justify-center cursor-pointer"
                            onClick={()=> {
                            if(txtPsw1 === 'password'){
                                setTxtPsw1('text'); 
                                setShowHide1('https://cdn-icons-png.flaticon.com/512/2767/2767146.png');
                            } else {
                                setTxtPsw1('password');
                                setShowHide1('https://cdn-icons-png.flaticon.com/512/2767/2767194.png');
                            }
                        }}
                        >
                            <img src={showHide1} alt="" className="w-[20px]" />
                        </span>
                    </span>
                    <p className="text-red-500">{res.password_confirmation}</p>
                </label>
                <label  className="w-[100%] my-[15px]">
                    <input 
                        type="submit" 
                        value='Sign up' 
                        className="bg-red-500 w-[100%] h-[40px] rounded cursor-pointer hover:bg-gray-800 text-white"
                    />
                </label>    
            </form>
        </div>
    )
}

export default Register;