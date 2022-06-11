import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PageRegular } from "./page/PageRegular";
import { Home } from "./page/Home";
import { NotFound } from "./page/notFound/NotFound";
import { PageRegister } from "./page/register/PageRegister";
import { URLS } from "./_configs/URLS";
import { PageLogin } from "./page/login/PageLogin";
import { PageFormations } from "./page/formations/PageFormations";
import { DetailFormations } from "./page/DetailFormation/DetailFormations";
import { PageGame } from "./page/game/PageGame";

function App() {
    return (
        <div className="h-full  bg-bgColor">
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
                <Route path={URLS.auth.signIn()} element={
                    <PageRegular fixedHeader>
                        <PageLogin/>
                    </PageRegular>
                }/>
                <Route path={URLS.game()} element={
                    <PageGame/>
                }/>
                <Route path={URLS.formations()} element={
                    <PageRegular>
                        <PageFormations/>
                    </PageRegular>
                }/>
                <Route path={URLS.formations()} element={
                    <PageRegular>
                        <PageFormations/>
                    </PageRegular>
                }/>
                <Route path={URLS.formations() + "/:id"} element={
                    <PageRegular fixedHeader>
                        <DetailFormations/>
                    </PageRegular>
                }/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
