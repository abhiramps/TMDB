import React, { useReducer, useEffect, createContext } from 'react'
import { Card, Button, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import Reducer from './Reducer';
// import MovieItem from './MovieItem';

var initialState = {
    movies: []
}

export const ContextData = createContext(initialState);

export const Test=({children})=> {

    const [state, dispatch] = useReducer(Reducer, initialState)
 
    console.log(state)

    const FetchData = () => {
        axios.get("https://api.themoviedb.org/3/movie/550/similar?api_key=f5d6924515589bd86df2db0fa179ec08")
            .then((res) => {
                console.log("feching...")
                console.log(res.data.results)
                dispatch({ type: "FETCH_MOVIES", payload: { movies: res.data.results } })
            })
    }

    return (
        // <Container>
        //     <Row>
                <ContextData.Provider value={{
                    item:state.movies,
                    FetchData
                }}>
                    {children}
                </ContextData.Provider>
        //     </Row>
        // </Container>
    )
}

