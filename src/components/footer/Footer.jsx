import lightLogo from '../../assets/logo light.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer bg-themeColor text-white p-24 mt-24'>
      <aside>
        <img src={lightLogo} alt="company logo" />
        <p className='mt-4'>
          123 Main Street Anytown, USA
          <br />
          Postal Code: 12346
        </p>
        <p className='mt-4'>
          Support: support@oyolloo.com
          <br />
          (Available : 10:00am to 07:00pm)Postal Code: 12346
        </p>
      </aside>
      <nav>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Success Page</a>
        <a className="link link-hover">Terms and Condition</a>
      </nav>
      <nav>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Sheduling</a>
        <a className="link link-hover">Contact us</a>
        <a className="link link-hover">Patient Portal</a>
      </nav>
      <nav>
        <h6 className="">Follow Us</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaFacebook size={36} />
          </a>
          <a>
            <FaInstagram size={36} />

          </a>
          <a>
            <FaLinkedin size={36} />

          </a>
          <a>
            <FaYoutube size={36} />

          </a>

        </div>
      </nav>

    </footer>
  )
}

export default Footer