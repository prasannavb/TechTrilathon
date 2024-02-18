import "../styles/navbar.css";

export default function Navbar(){
    return (
        <div className="nav">
        <nav>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/71/SVCE_logo.png/220px-SVCE_logo.png"></img>

            <div className="buttons">
                <a href="" className="nav-link nav-link-ltr">Home</a>
                <a href="" className="nav-link nav-link-ltr">About Us</a>
                <a href="" className="nav-link nav-link-ltr">Courses</a>
                <a href="" className="nav-link nav-link-ltr">Alumini</a>
                <a href="" className="nav-link nav-link-ltr">Contact Us</a>
            </div>
        </nav>  
        <span className="nav-bg">
            <h1 data-aos="fade-left">Let Us give freedom To our Thoughts</h1>
            <h5 data-aos="fade-right">Envision | Explore | Excel</h5>
            <h5 data-aos="fade-right">Engineering Mind Tranforming Lives</h5>
            <a href="http://" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">Why SVCE?</a>
        </span>
        </div>
    )
}