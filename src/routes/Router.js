import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home"
import CheckOut from "../containers/CheckOut";

function Router (){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/checkout" element={<CheckOut/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;