import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login} from "../utils/helpers.ts";
import {setUserData} from "../state/user/userSlice.ts";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        login(username, password)
            .then(resp => {
                if (resp.status === 200) {
                    resp.json().then(data => {
                        sessionStorage.token = data.token;
                        dispatch(setUserData(data));
                        navigate('/');
                    })
                } else {
                    setInvalidUsername(true);
                    setInvalidPassword(true);
                }
            })
    }

    return (
        <div className="container">
            <div className="pt-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="usernameInputTag" className="form-label">Username</label>
                        <input
                            value={username}
                            type="text"
                            className={"form-control " + (invalidUsername? 'is-invalid': '')}
                            id="usernameInputTag"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInputTag" className="form-label">Password</label>
                        <input
                            value={password}
                            type="password"
                            className={"form-control " + (invalidPassword? 'is-invalid': '')}
                            id="passwordInputTag"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className='pt-4'>
                    See authorization
                    data on <a href='https://dummyjson.com/users' target='_blank'>
                    https://dummyjson.com/users
                </a>
                </div>
            </div>
        </div>
    );
};

export default Login;