export default (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true }
        case "FETCH_SHOWS":
            // console.log(action.payload)
            return { ...state, shows: action.payload.shows, loading: false }
        case "FETCH_SHOWDESCRIPTION":
            return { ...state, showDescriptions: action.payload.description, loading: false }
        // case 'HISTORY':
            // return { ...state, history: action.payload }
        // case 'PURCHASEDITEMS':
        //     return { ...state, purchaisedItems: [...action?.payload] }
        case 'RENTEDITEMS':
            return { ...state, rentedItems: [...action?.payload] }
        default: return state
    }
}