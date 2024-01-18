import {createSlice} from "@reduxjs/toolkit";

interface User {
    id: number | null;
    firstName: string;
    lastName: string;
    age: number | null;
    gender: string;
    email: string;
    phone: string;
    username: string;
    image: string;
}

const initialState: {value: User} = {
    value: {
        id: null,
        firstName: '',
        lastName: '',
        age: null,
        gender: '',
        email: '',
        phone: '',
        username: '',
        image: '',
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state: {value: User}, action) => {
            state.value = action.payload;
        },
        removeUserData: state => {
            state.value = initialState.value;
        }
    }
});

export const {setUserData, removeUserData} = userSlice.actions;
export default userSlice.reducer;