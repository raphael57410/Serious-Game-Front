import "./App.css";
import { Header } from "./componenets/layout/Header";
import { Title } from "./componenets/title";
import { Text } from "./componenets/text";
import { Button } from "./componenets/button";

function App() {
    return (
        <div className="app_container">
            <Header/>
            <main className="main_container flex">
                <div className="section_home_container flex flex_column justifyContent_center">
                    <Title text={"Bienvenue sur Metz Numeric Game"}/>
                    <Text
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum "}/>
                    <Button name={"En savoir plus"} full={false} borderColor={true}/>
                </div>
                <div className="img_container flex alignItems_center justifyContent_center">
                    <div className="img">

                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
