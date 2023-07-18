import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
    count: 0
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');


export default createReducer(initState, {
    [increment]: function (state) {
        state.count = state.count + 1
    },
    [decrement]: function (state) {
        state.count = state.count -1
    },
})
