import "./App.css";
import { Header } from "./componenets/layout/Header";
import { Title } from "./componenets/title";
import { Text } from "./componenets/text";
import { Button } from "./componenets/button";

function App() {
    return (
        <div className="app_container">
            <Header textWhite={false}/>
            <main className="main_container flex">
                <div className="w-full flex flex-col justify-between items-center md:w-3/6 lg:p-10">
                    <Title text={"Bienvenue sur Metz Numeric Game"}/>
                    <Text
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum "}/>
                    <Button name={"En savoir plus"} full={false} borderColor={true} width="w-56"/>
                </div>
                <div className="img_container flex items-center justify-center lg:p-10">
                    <div className="img"></div>
                </div>
            </main>
        </div>
    );
}

export default App;
