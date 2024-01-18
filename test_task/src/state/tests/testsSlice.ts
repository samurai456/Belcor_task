import {createSlice} from "@reduxjs/toolkit";

interface TestState {
    id: number;
    state: 'correct' | 'mistake' | 'notDone';
}

const initialState: {value: TestState[]} = {
    value: [1, 2, 3, 4, 5, 6, 7].map((id: number): TestState => ({
        id: id,
        state: 'notDone'
    }))
};

const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        setCorrect: (state, action) => {
            const test: TestState | undefined = state.value.find(
                (t: TestState) => t.id === action.payload
            );
            if(test) {
                test.state = 'correct';
            }
        },
        setMistake: (state, action) => {
            const test: TestState | undefined = state.value.find(
                (t: TestState) => t.id === action.payload
            );
            if(test) {
                test.state = 'mistake';
            }
        }
    }
});

export const {setCorrect, setMistake} = testsSlice.actions;
export default testsSlice.reducer;