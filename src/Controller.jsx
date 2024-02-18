import { useEffect, useState } from "react";
import App from "./App";
import Preloader from "./components/preloader";

function Controller() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return <App />;
}

export default Controller;
