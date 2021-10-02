export default (state, action)=> {
    switch (action.type) {
        case "FETCH_MOVIES":
            console.log(action.payload)
            return { ...state, movies:action.payload.movies }

        default: return state
    }
}