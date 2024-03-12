import { useState } from "react";
import { SearchData } from "./data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { format } from 'date-fns';

const Search = () => {
    const [accordions, setAccordion] = useState(SearchData); 
    const selector = useSelector(state=> state.jim.jobs)
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
            <div className="rounded-md mb-1"> 
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
                                    <input type="checkbox" /> {item.name}
                                </div>
                            ))
                        }
                    </div>
                )} 
        </div> 
        )
    }

    const Show = () => {
        try {
            return (
                selector[0].map(n=> (
                    <Link to='/Job-offer-Detail' key={n.id} className="w-[100%] bg-white text-gray-800 flex rounded-md border-2 cursor-pointer">
                        <section 
                            className="w-[20%] flex items-center justify-center"
                        >
                            <img
                                src="https://www.dreamjob.ma/wp-content/uploads/2022/06/Alsa-Maroc-Emploi-Recrutement.png"
                                alt=""
                                className=" w-[90%] border-2 rounded-md"
                            />
                        </section>
                        <section
                            className="w-[80%] px-[20px] py-[20px] text-gray-800 text-[18px] "
                        >
                            <ul className="pl-[40px] leading-[40px] text-[15px]">
                                <li className="leading-[25px] font-bold text-[18px]"><b>{n.title.toUpperCase()}.</b></li>
                                <li>{format(new Date(n.created_at), 'yyyy-MM-dd')} | {n.company}</li>
                                <li className="leading-[20px]">
                                    {n.description}.
                                </li>
                                <li>Region: {n.region}</li>
                            </ul>
                        </section>
                    </Link>
                ))
            )
        } catch (error) {
            
        }
    }

    return (
        <>
            <div
                className="h-[40vh] w-[100%] bg-gray-800 flex flex-col items-center justify-around py-[50px] my-[10px] text-white"
            >
                <h1 className="font-bold text-[40px]">
                    Search for a job
                </h1>
                <div className="border- w-[40%] flex">
                    <input 
                        type="text" 
                        placeholder="What position are you looking for ?"
                        className="w-[100%] h-[50px] px-[18px] rounded-md border-2 border-gray-700 outline-none text-gray-800"    
                    />
                    <button
                        className="ml-[10px] border-2 border-gray-700 w-[55px] h-[50px] rounded-[90%] bg-red-500 hover:bg-red-600 outline-none flex items-center justify-center" 
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/2811/2811790.png" 
                            alt="" 
                            className="w-[60%]"
                            />
                    </button>
                </div>
            </div>

            <div
                className=" w-[85%]  flex  items-left justify-center my-[10px] "
            >
                <section className="w-[25%] p-[10px] border-2 rounded-md bg-white" >
                {accordions.map((accordion) => ( 
                    <Accordion 
                        key={accordion.key} 
                        title={accordion.title} 
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))}
                </section>
                <section className="w-[75%] ml-[10px]  rounded-md">
                    {
                        Show()
                    }
                    
                </section>
            </div>
        </>
    )
}

export default Search;