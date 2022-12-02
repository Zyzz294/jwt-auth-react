import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Home} from "./components/Home";

function App() {
    return <BrowserRouter>

        <header>
            <div>
                <div>
                    <Link to="/">Home</Link>
            
                    <div className="text-end">
                        <Link to="/login">Login</Link>
                        <br />
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </header>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>;
}

export default App;