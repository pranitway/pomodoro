import Home from "./Components/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import "./App.css";

function App() {
    return (
        <AuthContextProvider>
            <Home></Home>
        </AuthContextProvider>
    );
}

export default App;
