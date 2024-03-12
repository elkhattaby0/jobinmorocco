import { Link, Outlet } from "react-router-dom";

const JobSeeker = () => {
    return (
        <div
            className="h-[100vh] flex justify-around items-center font-mono"
        >
            <section className="border-2 rounded-2xl shadow-md h-[95%] w-[20%] bg-gray-100 flex flex-col items-center">
                <div className="h-[15%] flex items-center justify-center">
                    <Link className='m-[8px] p-[8px] text-center text-[20px]' to='/'>
                        <b className='font-bold text-red-500 text-[35px]'>J</b>OB<b className='font-bold text-red-500 text-[35px]'>I</b>N<b className='font-bold text-red-500 text-[35px]'>M</b>OROCCO.
                    </Link>
                </div>
                <div className="h-[85%]  flex flex-col justify-around border- w-[90%]">
                    <ul className="w-[100%] h-[80%]  border-blue-500 flex flex-col ">
                        <Link to='/' className="flex justify-around  w-[60%] my-[20px]">
                            <img 
                                src='https://cdn-icons-png.flaticon.com/512/3645/3645037.png' 
                                alt='' 
                                className="h-[35px] mx-[5px]"
                            />
                            <p className="font-bold text-[20px]">View Jobs</p>
                        </Link>
                        <Link to='/saved-jobs' className="flex justify-around  w-[65%] my-[20px]">
                            <img 
                                src='https://cdn-icons-png.flaticon.com/512/5662/5662990.png' 
                                alt='' 
                                className="w-[25px] mx-[5px]"
                            />
                            <p className="font-bold text-[20px]">Saved jobs</p>
                        </Link>
                        <Link to='/CV' className="flex justify-around  w-[30%] my-[20px]">
                            <img 
                                src='https://cdn-icons-png.flaticon.com/512/8208/8208516.png' 
                                alt='' 
                                className="w-[25px] mx-[5px]"
                            />
                            <p className="font-bold text-[20px]">CV</p>
                        </Link>
                        <Link to='/setting' className="flex justify-around  w-[53%] my-[20px]">
                            <img 
                                src='https://cdn-icons-png.flaticon.com/512/3524/3524636.png' 
                                alt='' 
                                className="h-[30px] mx-[5px]"
                            />
                            <p className="font-bold text-[20px]">Setting</p>
                        </Link>
                    </ul>
                    <ul className="w-[100%] h-[15%] border- border-red-500 flex items-center ">
                        <form className="w-[100%]">
                        <button className="flex justify-around  w-[55%]" onClick={()=> localStorage.setItem('info', JSON.stringify({'isAuth':false, 'data': 'Employer'})) }>
                            <img 
                                src='https://cdn-icons-png.flaticon.com/512/1828/1828427.png' 
                                alt='' 
                                className="h-[30px] mx-[5px]"
                            />
                            <p className="font-bold text-[20px]">Log Out</p>
                        </button>
                        </form>
                    </ul>
                </div>
            </section>

            <section className="border-2 rounded-2xl flex flex-col items-center shadow-md h-[95%] w-[75%] bg-gray-100 overflow-y-scroll ">
                <div className="border- my-[0px] h-[10%] w-[90%] flex items-center justify-between"> 
                    <h1 className="font-bold text-[20px]">Job Seeker</h1>
                    <img 
                        src=""
                        alt=""
                        className="h-[40px] w-[40px] rounded-[100%] border-[2px] border-gray-800"
                    />
                </div>
                <hr className="bg-gray-100 h-[2px] w-[90%] mb-[15px]" />
                <Outlet />
            </section>
        </div>
    )
}

export default JobSeeker;