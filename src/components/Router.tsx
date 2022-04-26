import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Misdemeanours from "./Misdemeanours";
import Confessions from "./Confessions";
import PageNotFound from "./PageNotFound";
import Layout from "./Layout";
import MisdemeanourContext from "../misdemeanourContext"

const MainRouter = () =>

    <MisdemeanourContext>
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route index element={<Home />} />
                <Route path="misdemeanours" element={<Misdemeanours />} />
                <Route path="confessions" element={<Confessions />} />
                <Route path="*" element={<PageNotFound />} />

            </Route>
        </Routes >
    </MisdemeanourContext>


export default MainRouter