
const ReviewApp = () => {
    return (
        <div className="border- w-[90%] flex flex-col items-center justify-center">
            <section
                className="flex justify-between w-[100%]"
            >
                <input 
                    type="text"
                    placeholder="Search for resumes or candidates "
                    className="h-[50px] w-[90%] rounded-xl px-[20px] border-2 border-gray-800 outline-none"
                />
                <button className="h-[50px] w-[50px] bg- border-2 border-gray-800 bg-red-500 rounded-[20%] flex justify-center items-center mb-[20px]">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2811/2811790.png"
                        alt=''
                        className="w-[35px]"
                    />
                </button>
            </section>

            <section className="w-[]">
                <div className="bg-white text-gray-800 flex rounded-md border-2 cursor-pointer">
                    <section 
                        className="w-[20%] flex items-center justify-center"
                    >
                        <img
                            src="https://locker.com.au/wp-content/uploads/2017/01/user-icon-png-person-user-profile-icon-20.png"
                            alt=""
                            className="h-[150px] w-[150px] border-2 rounded-md"
                        />
                    </section>
                    <section
                        className="w-[80%] px-[20px] py-[20px] text-gray-800 text-[15px] leading-[25px]"
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
        </div>
    )
}

export default ReviewApp;