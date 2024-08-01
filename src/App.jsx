// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./componant/Header";
// import About from "./pages/About";
// import Layout from "./componant/Layout";
// import "./App.css";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gray-900 text-white">
//         <Header />
//         <main className="pt-20">
//           <Routes>
//             <Route path="/" element={<About />} />
//             <Route path="/*" element={<Layout />} />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import Header from "./componant/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience ";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Layout from "./componant/Layout";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AnimatedRoutes from "./componant/AnimatedRoutes";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gray-900 text-white">
//         <Header />
//         <main className="pt-20">
//           <AnimatedRoutes />
//           <Layout/>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <ScrollToTop />
        <main className="pt-20">
          {" "}
          {/* Add padding-top to account for fixed header */}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/experiance" element={<WorkExperience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact-me" element={<Contact />} />
          </Routes>
        </main>
        <Layout/>
      </div>
    </BrowserRouter>
  );
};

export default App;
