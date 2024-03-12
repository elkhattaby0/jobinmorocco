import { useState, useEffect } from "react";

const Setting = () => {
    const [txtPsw, setTxtPsw] = useState('password');
    const [showHide, setShowHide] = useState('https://cdn-icons-png.flaticon.com/512/2767/2767194.png')
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem('info')))

    const getInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo(n=> ({...n, [name]:value}));
    }

    const stopRef = (e) => {
        e.preventDefault()
        console.log(info)

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6ImVsNXhoeGhZS1hCTVlBc0Rld0N5Tnc9PSIsInZhbHVlIjoiOEV6TUFqT29YRERZSmJGNzhUU2pBWmpXcnAzNU1sTVA1WVFFSlluVmp0NTZuajNKK3ZnMlpaU25ZS212cUpLcTFFT2NHdTNuSEQ0a0VyYkN1S1ZaQ0xKSlNtVW53NktiUnlsRHZKbU1SYVowVVkxQ1ZsYlJ3YjRqNUJBVUJvbjciLCJtYWMiOiJiN2IyOTkyYmY5ZTI5ODhlNDIwYmI2Y2I1OGRkZDg2NjczMmU0MzBiYjZjNjQwNjY4NjlkY2FjNDg5MTJlYTBjIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjEzOEhWN0orV0d5YkxMRkFld2lueUE9PSIsInZhbHVlIjoic3Nia0c5NnZvaWhPaGVHbXpqM2hvRXJSWWE0aVBUMlZzTm9TV0Nmb3BRakxtRGorTGczU3Y2VVdLT0t5YmhjMVRrNEZrcHZQaUhxaEE0LzZxaE13NjdaVDR6b05hdVpzSC9NVTZWa1BVWDFFemo0L29CaUJlTnV4OEdmdGZCNXMiLCJtYWMiOiI0YzY2ZjdlNjc1OTdiZGExOWM5N2NiYTllNzU0NjliMGU3MmIwZWU5M2FiYjA0M2Y1Zjc1MGNhZjlmYTA0NTgyIiwidGFnIjoiIn0%3D");

        const raw = JSON.stringify(info);

        const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("http://127.0.0.1:8000/api/update_user", requestOptions)
        .then((response) => response.json())
        .then((result) => localStorage.setItem('info', JSON.stringify(result)))
        .catch((error) => console.error(error));
    }
    

    return (
        <div className="w-[100%] h-[90%] flex items-center justify-center border-">
            <form className="w-[50%]" onSubmit={stopRef}>
                <h1 className="text-[25px]">Setting</h1>
                <label>
                    <p>Fullname</p>
                    <input 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" 
                        name='fullname'
                        value={info.fullname}    
                        onChange={getInfo}
                    />
                </label>
                <label>
                    <p>Date Birth</p>
                    <input 
                        type="date" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" 
                        name='dateBirth'
                        value={info.dateBirth}    
                        onChange={getInfo}
                    />
                </label>
                <label>
                    <p>Gender</p>
                    <select 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name='gender'
                        value={info.gender}    
                        onChange={getInfo}
                    > 
                        <option value=''></option>
                        <option value='male'>Male</option>
                        <option  value='female'>Female</option>
                    </select>
                </label>                
                <label>
                    <p>Email Adress</p>
                    <input 
                        type="email" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name='email'
                        value={info.email}    
                        onChange={getInfo}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <span
                        className="border-2 border-gray-800 flex rounded"
                    >
                        <input 
                            type={txtPsw}
                            className="w-[90%] h-[40px] px-[18px] rounded outline-none"  
                            // name='password'
                            // value={info.password}    
                            // onChange={getInfo}  
                        />
                        <button className="w-[10%] h-[40px] bg-white flex items-center justify-center"
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
                        </button>
                    </span>
                </label>
                <label>
                    <p>Re-Password</p>
                    <span
                        className="border-2 border-gray-800 flex rounded"
                    >
                        <input 
                            type={txtPsw}
                            className="w-[90%] h-[40px] px-[18px] rounded outline-none"    
                            // name='password_confirmation'
                            // value={info.password_confirmation}    
                            // onChange={getInfo}
                        />
                        <button className="w-[10%] h-[40px] bg-white flex items-center justify-center"
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
                        </button>
                    </span>
                </label>
                <label>
                    <input type="submit" value='Update' className="mt-[10px] h-[41px] w-[100%] rounded bg-red-500 text-white border-2 border-gray-800 px-[20px] cursor-pointer" />
                </label>
            </form>
        </div>
    )
}

export default Setting;