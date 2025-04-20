
import MCQ from "@/pages/MCQ/MCQ";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const Web = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MCQ />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default Web;
