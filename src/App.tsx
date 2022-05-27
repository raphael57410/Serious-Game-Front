import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PageRegular } from "./page/PageRegular";
import { Home } from "./page/Home";
import { NotFound } from "./page/notFound/NotFound";
import { PageLogin } from "./page/login/PageLogin";
import { URLS } from "./_configs/URLS";

function App() {
    return (
        <div className="app_container">
            <Routes>
                <Route path={URLS.home()} element={
                    <PageRegular>
                        <Home/>
                    </PageRegular>
                }/>
                <Route path={URLS.auth.signIn()} element={
                    <PageRegular>
                        <PageLogin/>
                    </PageRegular>
                }/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
