import {useEffect} from "react";
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import Login from "./components/Login";
import {checkAuth} from "./utils/helpers.ts";
import Tests from './components/Tests';
import Test from './components/Test'
import {removeUserData, setUserData} from "./state/user/userSlice.ts";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionStorage.token) {
            checkAuth(sessionStorage.token).then(resp => {
                if (resp.status === 200) {
                    resp.json().then(data => {
                        dispatch(setUserData(data));
                    })
                } else {
                    delete sessionStorage.token;
                    dispatch(removeUserData());
                }
            })
        }
    }, [dispatch]);

    if (location.pathname !== '/login' && !sessionStorage.token) {
        return <Navigate to='/login'/>;
    }

    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Tests/>}/>
            <Route path='/test/:testId' element={<Test/>}/>
        </Routes>
    );
}

export default App;
