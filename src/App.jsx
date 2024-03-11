import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Contact from "./Components/Pages/Contact";
import Homepage from "./Components/Pages/Homepage";
import About from "./Components/Pages/About";
import { OpenContextProvider } from "./Components/Contexts/OpenContext";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "8px 12px",
              backgroundColor: "#ffffff",
              color: "#333437",
              // color:"#67696E"
            },
          }}
        />
      </OpenContextProvider>
    </div>
  );
}

export default App;
