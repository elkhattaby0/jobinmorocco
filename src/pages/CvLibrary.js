
const CvLivrary = () => {
    return (
        <>
            <div
                className="h-[50vh] w-[100%] bg-gray-800 flex flex-col items-center justify-around my-[10px] text-white"
            >
                <h1 className="font-bold text-[30px]">
                    CV profile N°8280482.
                </h1>
                <button className="rounded-md px-[50px] py-[10px] bg-red-500 hover:bg-red-600">Show full CV</button>
                <p>Profile updated on 02/29/2024</p>
            </div>

            <div 
                className="p-[50px] w-[85%] border-2 rounded-md bg-white flex flex-col items-left justify-center my-[10px] leading-[45px]"
            >
                <h1 className="text-[30px] font-bold">Contact this profile for recruitment</h1>
                <ul>
                    <div className="flex justify-between w-[60%]">
                        <ul>
                            <li><b>Name: </b> Hakimi</li>
                            <li><b>Phone: </b> +(212) 64535234</li>
                            <li><b>Born: </b> Tanger</li>
                        </ul>
                        <ul>
                            <li><b>First name: </b> Achraf</li>
                            <li><b>Email: </b> hakimiachraf@gmail.com</li>
                            <li><b>Nationality: </b> Morocco</li>
                        </ul>
                    </div>                    
                    <li><b>Address: </b>Tanger N134, Morocco</li>
                </ul>
                <button className="rounded-md px-[50px] w-[30%] py-[px] bg-red-500 hover:bg-red-600 text-white">
                    Complete CV poster
                </button>
            </div>

            <div 
                className="p-[50px] w-[85%] border-2 rounded-md bg-white flex flex-col items-left justify-center my-[10px] leading-[45px]"
            >
                <h1 className="text-[30px] font-bold">Profile details</h1>
                <ul className="leading-[35px]">
                    <li><b>Types of jobs sought: </b> Management, accounting, finance</li>
                    <li><b>Experience in the following sectors of activity: </b> Banking, insurance, finance</li>
                    <li><b>Professional experience: </b> Student, recent graduate</li>
                    <li><b>SKILLS: </b> Team spirit and analysis, Stress and Time Management, Sense of Creativity and Decision Making</li>
                    <li><b>Training: </b>  Bac+2 Business management accounting and finance option - OFPPT - Since 09.2021</li>
                    <li><b>Key skills: </b> </li>
                    <li><b>LANGUAGES: </b> Fluent French</li>
                </ul>
                <ul className="leading-[35px]">
                    <li className="text-[30px] mt-[18px]">More information</li>
                    <li><b>Availability: </b> Immediately</li>
                    <li><b>Geographic mobility: </b> Casablanca-Mohammedia - Fez - Meknes - Rabat-Salé-Kénitra - Settat - International</li>
                    <li><b>Place of residence: </b> Kenitra</li>
                    <li><b>Types of contracts accepted: </b> CDI - CDD</li>
                    <li><b>Last update: </b> 02/29/2024</li>
                    <li><b>Number of CV views: </b> 14</li>
                </ul>
            </div>
        </>
    )
}

export default CvLivrary;