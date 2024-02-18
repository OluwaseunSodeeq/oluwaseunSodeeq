import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Contact from "./Components/Pages/Contact";
import Homepage from "./Components/Pages/Homepage";
import About from "./Components/Pages/About";
import { OpenContextProvider } from "./Components/Contexts/OpenContext";

function App() {
  return (
    <div className="p-0 m-0 lg:w-full lg:overflow-x-hidden">
      <OpenContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </OpenContextProvider>
    </div>
  );
}

export default App;

// import { OpenContextProvider } from "./Components/Contexts/OpenContext";
// import Contact from "./Components/Pages/Contact";
// // import About from "./Components/Pages/About";
// // import Homepage from "./Components/Pages/Homepage";

// function App() {
//   return (
//     <div className="">
//       <OpenContextProvider>
//         {/* <Homepage /> */}
//         {/* <About /> */}
//         <Contact />
//       </OpenContextProvider>
//     </div>
//   );
// }

// export default App;
