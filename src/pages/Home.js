import { Region, Job } from "./data";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div 
                className="h-[90vh] w-[85%] border- rounded bg- flex items-center justify-center my-[10px]"
            >
                <img 
                    src='https://img.freepik.com/premium-photo/front-view-collection-men-women-with-different-jobs_23-2148453500.jpg?w=740'
                    alt=''
                    className=" h-[90vh] w-[100%] absolute z-0 mix-blend-multiply opacity-[80%]"
                />
                <img 
                    src='https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=740&t=st=1709240551~exp=1709241151~hmac=8e9c56997e9e82c3a3d16623abfff436e17ddd61b5e8f9184f55528c5af3d934'
                    alt=''
                    className=" h-[90vh] w-[100%] absolute z-10 mix-blend-multiply opacity-[90%]"
                />
                <div className="h-[90vh] w-[100%] absolute z-20 opacity-[30%] bg-gray-800"></div>
                <section
                    className="w-[40%] h-[50%] border- m-[50px] flex flex-col justify-around absolute z-20"
                >
                    <h1
                        className="text-[29px] font-bold text-gray-100"
                    >Find your future job among 5024 open positions.</h1>
                    <select
                        className="w-[100%] h-[40px] px-[18px] rounded border-2 border-gray-700 outline-none cursor-pointer"
                    >
                        <option>Region</option>
                        {
                            Region.map(n=> (
                                <option key={n.id} value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                    <select
                        className="w-[100%] h-[40px] px-[18px] rounded border-2 border-gray-700 outline-none cursor-pointer"
                    >
                        <option>Job</option>
                        {
                            Job.map(n=> (
                                <option key={n.id} value={n.name}>{n.name}</option>
                            ))
                        }
                    </select>
                    <Link to='/search-job'>
                        <button
                            className="bg-red-500 w-[100%] h-[40px] rounded cursor-pointer hover:bg-gray-800 text-white"
                        >Search</button></Link>
                </section>
            </div>

            <div 
                className="w-[85%] flex flex-col items-center justify-center my-[10px]"
            >
                <h1 
                    className="text-[30px] my-[50px]"
                >
                    LATEST JOB OFFERS.
                </h1>
                <section
                    className="w-[100%]"
                >
                    <Link to='/Job-offer-Detail' className="w-[100%] bg-white text-gray-800 flex rounded-md border-2 cursor-pointer">
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
                                <li className="leading-[25px] font-bold text-[18px]"><b>RECEVEZ PAR MAIL LES OFFRES D'EMPLOI QUI VOUS INTÉRESSENT.</b></li>
                                <li>10-03-2024 | Alsa</li>
                                <li className="leading-[20px]">
                                    RECEVEZ PAR MAIL LES OFFRES D'EMPLOI QUI VOUS INTÉRESSENTRECEVEZ PAR MAIL LES OFFRES D'EMPLOI QUI VOUS INTÉRESSENTRECEVEZ PAR MAIL LES OFFRES D'EMPLOI QUI VOUS INTÉRESSENTRECEVEZ PAR MAIL LES OFFRES D'EMPLOI QUI VOUS INTÉRESSENTRECEVEZ PAR MAIL LES OFFRES D'EMPLOI QUI VOUS INTÉRESSENTRECEVEZ PAR MAIL LES OFFRES D'EMPLOI QUI VOUS INTÉRESSENTRECEVEZ PAR MAIL LES OFFRES D'EMPLOI QUI VOUS INTÉRESSENT.
                                </li>
                                <li>Region: Agadir</li>
                            </ul>
                        </section>
                    </Link>
                </section>
            </div>

            <Link to='/CV-LIBRARY'
                className="w-[85%] flex flex-col items-center justify-center my-[10px]"
            >
                <h1 
                    className="text-[30px] my-[50px]"
                >
                    LATEST PROFILES ON THE CV LIBRARY
                </h1>
                <section
                    className="w-[100%]"
                >
                    <div className="bg-white text-gray-800 flex rounded-md border-2 cursor-pointer">
                        <section 
                            className="w-[20%] flex items-center justify-center"
                        >
                            <img
                                src="https://locker.com.au/wp-content/uploads/2017/01/user-icon-png-person-user-profile-icon-20.png"
                                alt=""
                                className="h-[200px] w-[200px] border-2 rounded-md"
                            />
                        </section>
                        <section
                            className="w-[80%] px-[20px] py-[20px] text-gray-800 text-[18px] leading-[25px]"
                        >
                            <ul>
                                <li><b>Profile No. </b> 08277584</li>
                                <li><b>Professional experience: </b> Experience between 2 years and 5 years</li>
                                <li><b>Sector of activity: </b> Public administration</li>
                                <li><b>Training: </b> Bac+2
                                    <ul className="pl-[40px] list-disc">
                                        <li><b>Business management: </b> Specialized Institute of Management and Informatics Beni Mellal-OFPPT Beni Mellal.<br/> 10.09.2016 - 10.07.2018</li>
                                        <li><b>English Studies: </b> Faculty of Letters and Humanities Beni Mellal.<br/> 10.09.2011 - 10.07.2016</li>
                                    </ul>
                                </li>
                                <li><b>Languages: </b> English (good level) Arabic (native) French(intermediate)</li>
                                <li><b>Skills: </b> Prepare, type, edit and proofread correspondence, invoices, presentations...</li>
                            </ul>
                            
                        </section>
                    </div>
                </section>
            </Link>
        </>
    )
}

export default Home;