import { Region, Job, Educationallevels, Experience, Contracttypes, Languages } from "../../data";
import { useState } from "react";

const PostJob = () => {
    const [data, setData] = useState({});
    
    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(n=> ({...n, [name]: value, 'userId':JSON.parse(localStorage.getItem('info')).id}))
    }

    const stopRef = (e) => {
        e.preventDefault();
        // console.log(data);
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(data);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://127.0.0.1:8000/api/job", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }

    return (
        <div className="w-[100%] h-[200%] flex items-center justify-center border-">
            <form className="w-[50%]" onSubmit={stopRef}>
                <h1 className="text-[25px]">New Post</h1>
                <label>
                    <p>Title</p>
                    <input 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" 
                        name="title"
                        value={data.title || ""}
                        onChange={getData}
                    />
                </label>
                <label>
                    <p>Company</p>
                    <input 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" 
                        name="company"
                        value={data.company || ""}
                        onChange={getData}
                    />
                </label>
                <label>
                    <p>Salary</p>
                    <input 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" 
                        name="salary"
                        value={data.salary || ""}
                        onChange={getData}
                    />
                </label>
                <label>
                    <p>Job</p>
                    <select 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="job"
                        value={data.job || ""}
                        onChange={getData}
                    > 
                        <option>Job </option>
                        {
                            Job.map(n=> (
                                <option key={n.id} value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <p>Educational levels</p>
                    <select 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="educational"
                        value={data.educational || ""}
                        onChange={getData}
                    > 
                        <option>Educational levels</option>
                        {
                            Educationallevels.map(n=> (
                                <option key={n.id} value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <p>Experience Levels</p>
                    <select 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="experience"
                        value={data.experience || ""}
                        onChange={getData}
                    > 
                        <option>Experience levels</option>
                        {
                            Experience.map(n=> (
                                <option key={n.id} value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <p>Contract</p>
                    <select 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="contract"
                        value={data.contract || ""}
                        onChange={getData}
                    > 
                        <option>Contract</option>
                        {
                            Contracttypes.map(n=> (
                                <option key={n.id} value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <p>Region</p>
                    <select 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="region"
                        value={data.region || ""}
                        onChange={getData}
                    > 
                        <option>Region </option>
                        {
                            Region.map(n=> (
                                <option key={n.id} value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <p>Language</p>
                    <select 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="language"
                        value={data.language || ""}
                        onChange={getData}
                    > 
                        <option>Language</option>
                        {
                            Languages.map(n=> (
                                <option key={n.id} value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <p>Description</p>
                    <textarea 
                        className="h-[100px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="description"
                        value={data.description || ""}
                        onChange={getData}
                    ></textarea>
                </label>
                <label>
                    <input type="submit" value='Post' className="h-[41px] w-[100%] rounded bg-red-500 text-white border-2 border-gray-800 px-[20px] cursor-pointer" />
                </label>
            </form>
        </div>
    )
}

export default PostJob;