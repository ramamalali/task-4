import './NavStyle.css';

function Navber() {
  return (
    <>
    <nav className='FQ-nav1'>
        <div className='Fq-3infoLeft'>
            <div className='ch1'><i class="fa-regular fa-circle-question"></i><span>Have a questions?</span></div>
            <div className='ch2'><i class="fa-solid fa-phone"></i><span>10 20 30 1234</span></div>
            <div className='ch3'><i class="fa-solid fa-envelope"></i><span>info@mydimain.com</span></div>
        </div>
        <div className='Fq-2infright'>
            <div className='ch1'><i class="fa-solid fa-lock"></i><span>Loge In</span></div>
            <div className='ch2'><i class="fa-solid fa-user"></i><span>Register</span></div>
        </div>
    </nav>
    <nav className='FQ-nav2'>
        <div>
            <span>Learner</span>
            <ul>
                <li>Home</li>
                <li>Dropdown</li>
                <li>Our Staff</li>
                <li>News</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
            <button>ENROLL NOW</button>
        </div>
    </nav>
    </>
  )
}

export default Navber