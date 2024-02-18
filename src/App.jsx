import { useEffect, useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Stats from "./components/stats";
import Courses from "./components/courses";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log(entry);
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Stats reference={componentRef} visible={isVisible} />
      <Courses />
    </>
  );
}

export default App;
