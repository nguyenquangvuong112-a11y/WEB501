import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
function App() {
    const [isOn, setIsOn] = useState(true) // khai báo state
    const handleClick = () => {
        const newValue = !isOn 
        console.log(newValue)
        setIsOn(newValue) // cách dùng 
    }
    const handleClickArg = isClicked => {
        setIsOn(isClicked)
    }
    return (
        <BrowserRouter>
        <button className="bg-amber-300" onClick={handleClick}>
            Click {isOn ? 'Bat' : 'Tat'}
        </button>
        <button className="bg-amber-300" onClick={() => handleClick(!isOn)}>
            Click {isOn ? 'Bat' : 'Tat'}
        </button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App