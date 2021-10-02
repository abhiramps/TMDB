import React, { useReducer, createContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import ShowReducer from './ShowReducer';
import axios from 'axios'

// shows= {movies,tv}
const initialState = {
    shows: [],
    showDescriptions: [],
    loading: false,
    purchaisedItems: [],
    rentedItems: []
}

export const ShowContext = createContext(initialState);

export const ShowProvider = ({ children }) => {

    // let history = useHistory();

    const [state, dispatch] = useReducer(ShowReducer, initialState);
    // console.log(state)

    const FetchData = (no, category) => {
        dispatch({ type: 'FETCH_REQUEST' })

        axios.get(`https://api.themoviedb.org/3/${category}/550/similar?api_key=f5d6924515589bd86df2db0fa179ec08&page=${no}`)
            .then((res) => {
                // console.log(res)
                // console.log("feching shows...")
                dispatch({ type: "FETCH_SHOWS", payload: { shows: res.data.results } })
                // console.log(state.loading)
            })
    }

    const fetchShowDescriptions = (id, category) => {
        // console.log(id)
        axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=f5d6924515589bd86df2db0fa179ec08&language=en-US`)
            .then((res) => {
                console.log("feching show description...")
                // console.log(res.data)
                dispatch({ type: "FETCH_SHOWDESCRIPTION", payload: { description: res.data } })
            })
    }


    const SendSignInCredentials = (username, password, history) => {
        // console.log(username,password)
        axios.post("http://localhost:4000/signin", {
            username,
            password
        }).then((res) => {
            // console.log(res.data);
            localStorage.setItem("token", res.data.token)
            alert(res.data.message);
            history?.push('/movie')
            // return res
        })

    }
    const SendSignUpCredentials = (username, email, password, gender, history) => {
        // console.log(username,email,password,gender)
        axios.post("http://localhost:4000/signup", {
            username,
            email,
            password,
            gender
        })
            .then((res) => {
                // console.log(res.data);
                alert(res.data.message)
                history?.push('/signin')
            })
    }

    var token = localStorage.getItem("token");


    const getPurchaisedList =  () => {
      axios.get("http://localhost:4000/purchaised", {
            "headers": {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((result) => {
                // console.log(result.data.purchaisedItems)
                dispatch({ type: 'PURCHASEDITEMS', payload: result.data.purchaisedItems })
            })
    }
    // console.log(state.purchaisedItems)

    const getRentedList = () => {
        axios.get("http://localhost:4000/rented", {
            "headers": {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((result) => {
                dispatch({ type: 'RENTEDITEMS', payload: result.data.rentedItems })
            })
    }

    const purchasedItemsList = (data) => {
        axios.post("http://localhost:4000/purchaised", {
            data :{ ...data, rentTime: 0,Status:'purchaised' }
        }, {
            "headers": {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((result) => {
                alert(result.data.message)
                console.log(result.data)
                dispatch({ type: 'PURCHASEDITEMS', payload: result.data.purchaisedItems })
                // dispatch({ type: 'PURCHASEDITEMS', payload: result.data.user.purchaisedItems })
                // dispatch({ type: 'PURCHASEDITEMS', payload:result.data.user })
            })
        // dispatch({ type: 'PURCHASEDITEMS', payload: data })
    }

    const rentedItemsList = (data,RentedDateAndTime) => {
        axios.post("http://localhost:4000/rented", {
            data: { ...data, rentTime: RentedDateAndTime,Status:'rented' }
        }, {
            "headers": {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((result) => {
                // console.log(result.data.user)
                alert(result.data.message)
                dispatch({ type: 'RENTEDITEMS', payload: result.data.user.rentedItems })
                // dispatch({ type: 'RENTEDITEMS', payload: result.data.user})
            })

        // dispatch({ type: 'RENTEDITEMS', payload: { ...data, rentTime: 40 } })
        // console.log(state.rentedItems)
    }
  
    const deleteItem=(itemId)=>{
        console.log(itemId)
        // axios.delete("http://localhost:4000/deleteitem",{
        //     itemId
        // })
    }
    
    return (
        <ShowContext.Provider value={{
            showsItem: state.shows,
            loading: state.loading,
            FetchData,
            fetchShowDescriptions,
            showDescriptions: state.showDescriptions,
            SendSignInCredentials,
            History: state.history,
            SendSignUpCredentials,
            purchasedItemsList,
            rentedItemsList,
            purchaisedItems: state.purchaisedItems,
            rentedItems: state.rentedItems,
            getPurchaisedList,
            getRentedList,
            deleteItem

        }}>
            {children}
        </ShowContext.Provider>
    )
}


