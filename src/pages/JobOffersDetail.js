
const JobOffersDetail = () => {
    return (
        <>
            <div
                className="h-[50vh] w-[100%] bg-gray-800 flex flex-col items-center justify-around my-[10px] text-white"
            >
                <h1 className="font-bold text-[30px]">
                    Accountant - Position Based In Bouskoura - Uninsured Transport
                </h1>
                <button className="rounded-md px-[50px] py-[10px] bg-red-500 hover:bg-red-600">To Apply</button>
                <p>Published on 01.03.2024</p>
            </div>

            <div 
                className="p-[50px] w-[85%] border-2 rounded-md bg-white flex flex-col items-left justify-center my-[10px] leading-[45px]"
            >
                <h1></h1>Company <hr/>
                <h1>Google</h1>
                <p><b>Website: </b> www.google.com</p>
                <p className="leading-[25px]"><b>Activity area: </b> Industry, production, manufacturing, others Construction, construction Metallurgy, steel industry Distribution, sales, wholesale Real estate, architecture, urban planning
                </p>
                <p><b>Job offers: </b> <a href="#">See all our announcements</a></p>
                <p className="leading-[25px]"><b>Description of the company: </b> SEPALUMIC MAROC, la marque de confiance Avec une dizaine d'années de présence sur le marché marocain, Sepalumic Maroc a...
                </p>
            </div>

            <div 
                className="p-[50px] w-[85%] border-2 rounded-md bg-white flex flex-col items-left justify-center my-[10px] leading-[45px]"
            >
                <h1></h1>Announcement details <hr/>
                <h1><b>Position offered: </b> Accountant - Position Based In Bouskoura - Uninsured Transport</h1>
                <p><b>Your missions: </b> 
                    <ul className="leading-[25px] list-disc pl-[40px]">
                        <li>Guarantee the recording, maintenance and monitoring of general accounting;</li>
                        <li>Analyze, justify the accounts and establish monthly account statements;</li>
                        <li>Participate in carrying out intermediate and balance sheet closing work;</li>
                        <li>Prepare and prepare tax returns;</li>
                        <li>Control and monitor the invoice validation circuit;</li>
                        <li>Produce summary reports (Monthly and Annual);</li>
                        <li>Establish the monthly and forecast cash position;</li>
                        <li>Ensure internal control in compliance with internal procedures;</li>
                        <li>Participate in various cross-functional and/or one-off missions (during the intervention of auditors, chartered accountants, etc.).</li>
                    </ul>
                </p>
                <p><b>Profile sought for the position: </b> Accountant - Position Based In Bouskoura - Uninsured Transport
                    <ul className="leading-[25px] list-disc pl-[40px]">
                        <li>Bac+3 training Option Finance/Accounting;</li>
                        <li>Minimum 1 and a half years in a similar position or audit firm;</li>
                        <li>Knowledge of good accounting practices and current regulations;</li>
                        <li>Perfect mastery of Moroccan taxation and new IT tools;</li>
                        <li>Proactive, organized, available and autonomous;</li>
                        <li>Rigorous and with a spirit of analysis and synthesis...</li>
                    </ul>
                </p>
                <p><b>Advertisement criteria for the position: </b>  Accountant - Position Based In Bouskoura - Uninsured Transport
                    <ul className="leading-[25px] pl-[20px]">
                        <li><b>Job : </b>Management, accounting, finance</li>
                        <li><b>Activity area: </b>Construction, construction, Metallurgy, steel industry</li>
                        <li><b>Type of Contract: </b>CDI</li>
                        <li><b>Region: </b>Casablanca-Mohammedia</li>
                        <li><b>City: </b>Bouskoura</li>
                        <li><b>Level of experience: Beginner {'<'} 2 years</b></li>
                        <li><b>Level of studies: </b>Bac+3</li>
                        <li><b>Languages ​​required: </b>Arabic›Good Level, French›Good Level</li>
                        <li><b>Key skills: </b>GENERAL, ACCOUNTING, MANAGEMENT, TREASURY, TAXATION, AUDIT, FINANCE</li>
                        <li><b>Number of positions: </b>1</li>
                    </ul>
                </p><hr className="my-[20px]"/>
                <p className="text-[15px] leading-[25px] text-gray-500  ">
                Be careful ! Do not send money to a potential employer. Do not pay any money in exchange for a potential employment contract or for pre-employment training. <br/>
                Please report any irregularities by using the candidate contact form and selecting the subject "Report a job advertisement".
                </p>
            </div>
        </>
    )
}

export default JobOffersDetail;