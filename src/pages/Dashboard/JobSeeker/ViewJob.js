import { useState } from "react";
import { SearchData } from "../../data";


const ViewJob = () => {
    const [accordions, setAccordion] = useState(SearchData); 

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
                                    <input type="checkbox" /> {item.name}
                                </div>
                            ))
                        }
                    </div>
                )} 
        </div> 
        )
    } 
    
    return (
        <div
            className="w-[100%] h-[90%] flex items-center justify-center border- "
        >
            <div
                className=" w-[90%] h-[100%] flex  items-left justify-center "
            >
                <section className="w-[30%] h-[100%] bg-white rounded-md border-2" >
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
                <section className="w-[70%] ml-[10px] rounded-md">
                    <div
                        className="flex  justify-between w-[100%]"
                    >
                        <input 
                            type="text"
                            placeholder="Search for Jobs"
                            className="h-[50px] w-[90%] rounded-xl px-[20px] border-2 border-gray-800 outline-none"
                        />
                        <button className="h-[50px] w-[50px] bg- border-2 border-gray-800 bg-red-500 rounded-[20%] flex justify-center items-center mb-[20px]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2811/2811790.png"
                                alt=''
                                className="w-[45px]"
                            />
                        </button>
                    </div>
                    <div className="w-[100%] border-2 rounded-md bg-white cursor-pointer p-[15px] leading-10">
                        <span className="flex justify-between">
                            <h1 className="font-bold">Part Time Weekend Customer Support Representative</h1>
                            <img src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png" alt="" className="w-[23px] h-[24px]" />
                        </span>
                        <p>02.03.2024 | Alsa</p>
                        <p className="leading-5">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                        </p>
                        <p>Region: Agadir</p>
                        <button className="w-[150px] h-[35px] rounded-md text-gray-100 bg-red-500 flex items-center justify-center">To Apply</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ViewJob;