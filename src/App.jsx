import { Outlet } from "react-router";
import Footer from "./Footer";
import Headers from "./Headers";

function App() {

  

  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
