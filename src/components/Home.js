import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

export const Home = () => {
    const [name, setName] = useState('');
    const [navigate, setNavigate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('user');

                setName(data.name);
            } catch (e) {
                setNavigate(true);
            }
        })();
    }, []);

    const logout = async () => {
        await axios.post('logout', {}, {withCredentials: true});

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }

    return <div>
        <h3>Hi {name}</h3>

        <a href="javascript:void(0)"
           onClick={logout}
        >Logout</a>
    </div>
}