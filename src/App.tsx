import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PageRegular } from "./page/PageRegular";
import { Home } from "./page/Home";
import { NotFound } from "./page/notFound/NotFound";
import { PageRegister } from "./page/register/PageRegister";
import { URLS } from "./_configs/URLS";

function App() {
    return (
        <div className="h-screen w-screen bg-bgColor">
            <Routes>
                <Route path={URLS.home()} element={
                    <PageRegular>
                        <Home/>
                    </PageRegular>
                }/>
                <Route path={URLS.auth.signUp()} element={
                    <PageRegular fixedHeader textWhite>
                        <PageRegister/>
                    </PageRegular>
                }/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
