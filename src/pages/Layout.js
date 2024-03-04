import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <section
            className='w-[100%] flex flex-col items-center bg-gray-100 text-gray-800 font-mono text-[18px]'
        >
            <ul
                className='h-[10vh] flex w-[90%] justify-between items-center p-[18px] font-bold'
            >
                <li>
                    <Link className='m-[8px] p-[8px]' to='/'>
                        <b className='font-bold text-red-500 text-[25px]'>J</b>OB<b className='font-bold text-red-500 text-[25px]'>I</b>N<b className='font-bold text-red-500 text-[25px]'>M</b>OROCCO.
                    </Link>
                </li>
                <li>
                    <Link className='m-[8px] p-[8px] hover:bg-red-500 rounded' to='/'>Home</Link>
                    <Link className='m-[8px] p-[8px] hover:bg-red-500 rounded' to='/contact'>Contact</Link>
                    <Link className='m-[8px] p-[8px] hover:bg-red-500 rounded' to='/about'>About</Link>
                    <Link className='m-[8px] p-[8px] hover:bg-red-500 rounded' to='/sign-In'>Sign In</Link>
                    <Link className='m-[8px] p-[8px] hover:bg-red-500 rounded' to='/register'>Register</Link>
                </li>
            </ul>
            <Outlet />
        </section>
    )
}

export default Layout;