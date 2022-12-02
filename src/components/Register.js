import {useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async e => {
        e.preventDefault();

        await axios.post('register', {
            name, email, password
        });

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }

    return <main>
        <form onSubmit={submit}>
            <h1>Please register</h1>

            <div>
                <input placeholder="Name"
                       onChange={e => setName(e.target.value)}
                />
                <label>Name</label>
            </div>

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

            <button type="submit">Submit</button>
        </form>
    </main>
}