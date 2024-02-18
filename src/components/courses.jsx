import { useEffect, useState } from "react";
import "../styles/courses.css";
export default function Courses() {

    const [circle,setCircle] = useState();

  useEffect(() => {
    const handleResize = () => {
      setCircle((30/100) * window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  },[]);

  console.log(circle);
  
  return (
    <div className="courses">
      <h2>Courses Offered</h2>
      <div className="circle-div">
        <div className="circle" data-aos="fade-right" style={{
            width:circle,
            height:circle
        }}>
          <i className="fa-solid fa-graduation-cap"></i>
          <h1>Undergraduate</h1>
          <h1>Programs</h1>
        </div>
        <div className="circle" data-aos="zoom-in" style={{
            width:circle,
            height:circle
        }}>
          <i className="fa-solid fa-microscope"></i>
          <h1>Research</h1>
          <h1>Programs</h1>
        </div>
        <div className="circle" data-aos="fade-left" style={{
            width:circle,
            height:circle
        }}>
          <i className="fa-solid fa-medal"></i>
          <h1>Postgraduate</h1>
          <h1>Programs</h1>
        </div>
      </div>
    </div>
  );
}
