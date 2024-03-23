import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { OpenContextProvider } from "./Components/Contexts/OpenContext";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import Loader from "./Ui/Loader";

const Homepage = lazy(() => import("./Components/Pages/Homepage"));
const About = lazy(() => import("./Components/Pages/About"));
const Contact = lazy(() => import("./Components/Pages/Contact"));

function App() {
  return (
    <div className="p-0 m-0 lg:w-full lg:overflow-x-hidden">
      <OpenContextProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={50}
          containerStyle={{ margin: "30px" }}
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
            },
          }}
        />
      </OpenContextProvider>
    </div>
  );
}

export default App;
