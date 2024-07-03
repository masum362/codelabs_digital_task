import logo from '../../assets/logo dark.png'
import Button from '../button/Button';
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between my-4'>
            <div>
                <img src={logo} alt="website logo" />
            </div>
            <ul className='flex items-center gap-4'>
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