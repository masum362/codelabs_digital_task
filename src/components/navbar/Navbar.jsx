import logo from '../../assets/logo dark.png'
import Button from '../button/Button';
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between my-4'>
            <div className='flex items-center gap-2'>
                <div className="dropdown sm:hidden
            ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href='#'>Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>

                <div>
                    <img src={logo} alt="website logo" />
                </div>
            </div>
            <ul className='hidden sm:flex items-center gap-4 text-themeColor font-medium '>
                <li><a href='#'>Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            <div>
                <Button style={'rounded-lg bg-transparent hover:bg-slate-800 hover:text-white border-black font-bold'}>Appoinment</Button>
            </div>
        </nav>
    )
}

export default Navbar