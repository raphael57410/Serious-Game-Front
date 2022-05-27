import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PageRegular } from "./page/PageRegular";
import { Home } from "./page/Home";
import { NotFound } from "./page/NotFound";

function App() {
    return (
        <div className="app_container">
            <Routes>
                <Route path="/" element={
                    <PageRegular>
                        <Home/>
                    </PageRegular>
                }/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
