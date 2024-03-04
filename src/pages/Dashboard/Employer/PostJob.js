import { Region, Job, Educationallevels, Experience, Contracttypes, Languages } from "../../data";
import { useState } from "react";

const PostJob = () => {
    const [data, setData] = useState({});

    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(n=> ({...n, [name]: value}))
    }

    const stopRef = (e) => {
        e.preventDefault();
        console.log(data);
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
                        value={data.title}
                        onChange={getData}
                    />
                </label>
                <label>
                    <p>Company</p>
                    <input 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" 
                        name="company"
                        value={data.company}
                        onChange={getData}
                    />
                </label>
                <label>
                    <p>Salary</p>
                    <input 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]" 
                        name="salary"
                        value={data.salary}
                        onChange={getData}
                    />
                </label>
                <label>
                    <p>Job</p>
                    <select 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="job"
                        value={data.job}
                        onChange={getData}
                    > 
                        <option>Job </option>
                        {
                            Job.map(n=> (
                                <option value={n.name}>{n.name}</option>
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
                        value={data.educational}
                        onChange={getData}
                    > 
                        <option>Educational levels</option>
                        {
                            Educationallevels.map(n=> (
                                <option value={n.name}>{n.name}</option>
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
                        value={data.experience}
                        onChange={getData}
                    > 
                        <option>Experience levels</option>
                        {
                            Experience.map(n=> (
                                <option value={n.name}>{n.name}</option>
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
                        value={data.contract}
                        onChange={getData}
                    > 
                        <option>Contract</option>
                        {
                            Contracttypes.map(n=> (
                                <option value={n.name}>{n.name}</option>
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
                        value={data.region}
                        onChange={getData}
                    > 
                        <option>Region </option>
                        {
                            Region.map(n=> (
                                <option value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <p>LANGUAGES</p>
                    <select 
                        type="text" 
                        className="h-[41px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="language"
                        value={data.language}
                        onChange={getData}
                    > 
                        <option>LANGUAGES </option>
                        {
                            Languages.map(n=> (
                                <option value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label>
                    <p>Description</p>
                    <textarea 
                        className="h-[100px] w-[100%] rounded border-2 border-gray-800 px-[20px]"
                        name="description"
                        value={data.description}
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