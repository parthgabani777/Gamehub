import "./App.css";
import "./css/design.css";
import { Header } from "./components/header";
import { Sidemenu } from "./components/sidemenu";
import { PageRoutes } from "./pages/routes";

function App() {
    return (
        <div className="App">
            <Header />
            <Sidemenu />
            <div className="page-content">
                <PageRoutes />
            </div>
        </div>
    );
}

export default App;
