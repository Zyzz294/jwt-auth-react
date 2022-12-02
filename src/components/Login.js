import axios from "axios";
import {Navigate} from "react-router-dom";
import {useState} from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async e => {
        e.preventDefault();

        const {data} = await axios.post('login', {
            email, password
        }, {withCredentials: true});

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/"/>;
    }

    return <main>
        <form onSubmit={submit}>
            <h1>Please sign in</h1>

            <div>
                <input type="email" id="floatingInput" placeholder="name@example.com"
                       onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div>
                <input type="password" id="floatingPassword" placeholder="Password"
                       onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button type="submit">Sign in</button>
        </form>
    </main>
}