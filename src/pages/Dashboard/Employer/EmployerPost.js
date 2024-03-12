import { useSelector } from "react-redux";
import { format } from 'date-fns';

const EmployerPost = () => {
    const jobs = useSelector(state=> state.jim.jobs)
    const id = JSON.parse( localStorage.getItem('info') ).id

    const Show = () => {
        try {
            return(
            jobs[0].filter(n=> id == n.userId)
            .map(n=> (
                <div key={n.id} className="w-[100%] flex justify-between items-center border-2 mb-[8px] rounded-md bg-white cursor-pointer p-[15px] leading-10">
                    <span className="">
                        <h1 className="font-bold">{n.title.toUpperCase()}</h1>                    
                        <p>{format(new Date(n.created_at), 'yyyy-MM-dd')} | {n.company}</p>
                        <p className="leading-5">
                            {n.description}
                        </p>
                        <p>Region: {n.region}</p>
                    </span>
                    <span className="flex flex-col text-white w-[10%]">
                        <div className="flex flex-col">
                            <button className="bg-gray-400 hover:bg-gray-500 rounded-md mb-[8px]">Detail</button>
                            <button className="bg-gray-400 hover:bg-gray-500 rounded-md mb-[8px]">Edit</button>
                            <button className="bg-red-500 hover:bg-red-600 rounded-md">Delete</button>
                        </div>
                    </span>
                </div>
            ))
            )
        } catch (error) {
            return 
        }
    }

    return (
        <section
            className="w-[90%] border-"
        >
            <h1 className="text-[25px] py-[10px]">My Post(s)</h1>
        {
            Show()
        }
        </section>
    )
}

export default EmployerPost;