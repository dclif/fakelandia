import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Misdemeanours from "./Misdemeanours";
import Confessions from "./Confessions";
import PageNotFound from "./PageNotFound";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="misdemeanours" element={<Misdemeanours />} />
            <Route path="confessions" element={<Confessions />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Router