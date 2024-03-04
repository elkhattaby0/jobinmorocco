import { useState } from "react";

const Setting = () => {
    const [txtPsw, setTxtPsw] = useState('password');
    const [showHide, setShowHide] = useState('https://cdn-icons-png.flaticon.com/512/2767/2767194.png')
    return (
        <div className="w-[100%] h-[90%] flex items-center justify-center border-">
            <form className="w-[50%]" onSubmit={(e)=> e.preventDefault()}>
                <h1 className="text-[25px]">Setting</h1>
                <label>
                    <p>Fullname</p>
                    <input type="text" className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" />
                </label>
                <label>
                    <p>Date Birth</p>
                    <input type="date" className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" />
                </label>
                <label>
                    <p>Gender</p>
                    <select className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"> 
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </label>                
                <label>
                    <p>Email Adress</p>
                    <input type="email" className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" />
                </label>
                <label>
                    <p>Password</p>
                    <span
                        className="border-2 border-gray-800 flex rounded"
                    >
                        <input 
                            type={txtPsw}
                            className="w-[90%] h-[40px] px-[18px] rounded outline-none"    
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