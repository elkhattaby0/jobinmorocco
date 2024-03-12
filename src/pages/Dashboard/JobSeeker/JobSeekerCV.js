import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JobSeekerCV = () => {
    const selector = useSelector(state=> state.jim.cvs)[0]
    const [cv,setCv] = useState(selector.filter(n=> n.userId == (JSON.parse(localStorage.getItem('info')).id))[0])
    useEffect(()=> {
        setCv(selector.filter(n=> n.userId == (JSON.parse(localStorage.getItem('info')).id))[0])
    }, [cv])
    const [info, setInfo] = useState( cv )

    const getInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInfo(n=> ({...n, userId:JSON.parse(localStorage.getItem('info')).id , [name]: value}));
    }

    const stopRef = (e) => {
        e.preventDefault()
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(info);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch("http://127.0.0.1:8000/api/cv", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }

    return (
        <form 
            onSubmit={stopRef}
            className="w-[90%]"
        >
            <div className="w-[100%] bg-white rounded-md p-[30px] border-2">
                <section className="flex justify-between">
                    <div>
                        <label>
                            <h1 className="text-gray-300 font-bold text-[18px]">Fullname:
                            <input 
                                type="text" 
                                className="border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]" 
                                name="fullname"
                                value={info.fullname || ""}
                                onChange={getInfo}
                            /> 
                            </h1>
                        </label><br/>
                        <label >
                            <p className="text-gray-300 font-bold text-[18px]">Date Bith: 
                            <input 
                                type="date" 
                                className="border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]" 
                                name="dateBirth"
                                value={info.dateBirth || ""}
                                onChange={getInfo}
                            /> 
                            </p>
                        </label>
                        <label >
                            <p className="text-gray-300 font-bold text-[18px]">Phone Number: 
                            <input 
                                type="text" 
                                className="border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]" 
                                name="phoneNumbre"
                                value={info.phoneNumbre || ""}
                                onChange={getInfo}
                            /> </p>                    
                        </label>
                        <label >
                            <p className="text-gray-300 font-bold text-[18px]">Address: 
                            <input 
                                type="text" 
                                className="border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]" 
                                name="address"
                                value={info.address || ""}
                                onChange={getInfo}    
                            /> </p>                    
                        </label>
                        <label >
                            <p className="text-gray-300 font-bold text-[18px]">Email: 
                            <input 
                                type="email" 
                                className="border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]" 
                                name="email"
                                value={info.email || ""}
                                onChange={getInfo}
                            /> 
                            </p>
                        </label><br /><br />
                    </div>
                    <div className="">
                        <img src="" alt="image" className="border-2 border-gray-800 rounded-md w-[100px] h-[100px]" />
                        <input 
                                type="file" 
                                className="border-[0px] rounded text-gray-800 text-[18px] outline-none  w-[125px]" 
                                // name="image"
                                // value={info.image || ""}
                                // onChange={getInfo}
                            />
                    </div>
                </section>
                

                <h1 className="text-[22px] bg-red-500 rounded text-white text-center w-[100%]">Education</h1><br/>
                <label className="w-[100%]">
                    <p className="text-gray-300 font-bold text-[18px] ">
                        <textarea 
                            className="w-[100%] h-[100px] border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]"
                            name="education"
                            value={info.education || ""}
                            onChange={getInfo}
                        ></textarea> </p>                    
                </label><br />

                <h1 className="text-[22px] bg-red-500 rounded text-white text-center w-[100%]">Professional Experience</h1><br/>
                <label className="w-[100%]">
                    <p className="text-gray-300 font-bold text-[18px] ">
                        <textarea 
                            className="w-[100%] h-[100px] border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]"
                            name="experience"
                            value={info.experience || ""}
                            onChange={getInfo}
                        ></textarea> </p>                    
                </label><br />

                <h1 className="text-[22px] bg-red-500 rounded text-white text-center w-[100%]">Specific Skills</h1><br/>
                <label className="w-[100%]">
                    <p className="text-gray-300 font-bold text-[18px] ">
                        <textarea 
                            className="w-[100%] h-[100px] border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]"
                            name="skills"
                            value={info.skills || ""}
                            onChange={getInfo}    
                        ></textarea> </p>                    
                </label><br />

                <h1 className="text-[22px] bg-red-500 rounded text-white text-center w-[100%]">Interests</h1><br/>
                <label className="w-[100%]">
                    <p className="text-gray-300 font-bold text-[18px] ">
                        <textarea 
                            className="w-[100%] h-[100px] border-[1px] rounded text-gray-800 text-[18px] outline-none px-[8px]"
                            name="interests"
                            value={info.interests || ""}
                            onChange={getInfo}    
                        ></textarea> </p>                    
                </label><br />
            </div>        
            <button type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-[100%] p-[10px] rounded-md text-white my-[25px]"
            >Save</button>    
        </form>
    )
}

export default JobSeekerCV;