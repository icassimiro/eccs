import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../App";


import Initial from "../Initial";

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Initial />} />
                <Route path="/home" element={<App />} />

            </Routes>
        </Router>
    );
};
export default Routering;