import { useState, useEffect } from "react";
import { SearchData } from "../../data";
import { format } from 'date-fns';
import { useSelector } from "react-redux";


const ViewJob = () => {
    const [accordions, setAccordion] = useState(SearchData); 
    const [ser, setSer] = useState('')
    const [show, setShow] = useState()
    const [checkedItems, setCheckedItems] = useState({});

    const jobs = useSelector(state=> state.jim.jobs)

    useEffect(()=> {setShow(jobs)}, [jobs])

    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 

        setAccordion(updatedAccordions); 
    }; 

    const Accordion = (props) => {
        return (
            <div className="rounded-md mb-1 "> 
                <button 
                    className="w-[100%] p-4 flex justify-between items-center text-left transition duration-300 font-bold"
                    onClick={props.toggleAccordion} 
                > 
                    <p className="text-[18px]">{props.title} </p>
                    {
                        props.isOpen ? 
                        <img src='https://cdn-icons-png.flaticon.com/512/4096/4096251.png' alt='' className="w-[15px]" /> :
                        <img src='https://cdn-icons-png.flaticon.com/512/1237/1237946.png' alt='' className="w-[15px]" /> 
                        
                    }
                </button> 
                {props.isOpen && ( 
                    <div className="ml-[30px] text-[15px]"> 
                        {
                            props.data.map((item)=> (
                                <div key={item.id}>
                                    <input 
                                        type="checkbox"
                                        name={item.name}
                                        onChange={(e)=> {
                                            setCheckedItems(n=>({...n, name: e.target.name, type: e.target.checked })) 
                                        }}
                                    /> {item.name}
                                </div>
                            ))
                        }
                    </div>
                )} 
        </div> 
        )
    } 
    
    const Result = () => {
        if(jobs.length > 0) 
        {
            return (
                jobs[0].filter(n=>  n.title.toLowerCase().includes(ser.toLowerCase()) && (checkedItems.type ? n.job === checkedItems.name || n.language === checkedItems.name || n.region === checkedItems.name || n.contract === checkedItems.name || n.experience === checkedItems.name || n.educational === checkedItems.name : n)
                )
                .map(n=> (
                    <div key={n.id} className="w-[100%] border-2 mb-[8px] rounded-md bg-white cursor-pointer p-[15px] leading-10">
                        <span className="flex justify-between">
                            <h1 className="font-bold">{n.title.toUpperCase()}</h1>
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                                onClick={(e) => {
                                    const currentFill = e.target.getAttribute('fill');
                                    const newFill = currentFill === 'black' ? 'none' : 'black';
                                    e.target.setAttribute('fill', newFill);
                                    alert(n.id)
                                }}
                            >
                                <path
                                    d="M5 22V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v19l-7-6.111z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>


    
                        </span>
                        <p>{format(new Date(n.created_at), 'yyyy-MM-dd')} | {n.company}</p>
                        <p className="leading-5">
                            {n.description}
                        </p>
                        <p>Region: {n.region}</p>
                    </div>
                ))
            )
        }
    }

    return (
        <div
            className="w-[100%] h-[90%] flex items-center justify-center border- "
        >
            <div
                className=" w-[90%] h-[100%] flex  items-left justify-center "
            >
                <form  className="w-[30%] h-[100%] bg-white rounded-md border-2" >
                {accordions.map((accordion) => ( 
                    <Accordion 
                        key={accordion.key} 
                        title={accordion.title} 
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))}
                </form>
                <section className="w-[70%] ml-[10px] rounded-md">
                    <div
                        className="flex  justify-between w-[100%]"
                    >
                        <input 
                            type="text"
                            placeholder="Search for Jobs"
                            className="h-[50px] w-[90%] rounded-xl px-[20px] border-2 border-gray-800 outline-none"
                            onChange={(e)=> setSer(e.target.value)}
                        />
                        <button className="h-[50px] w-[50px] bg- border-2 border-gray-800 bg-red-500 rounded-[20%] flex justify-center items-center mb-[20px]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2811/2811790.png"
                                alt=''
                                className="w-[45px]"
                            />
                        </button>
                    </div>
                    {
                        <Result />
                    }
                </section>
            </div>
        </div>
    )
}

export default ViewJob;