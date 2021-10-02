import React, { useState, useContext, useEffect } from 'react'
import { ShowContext } from '../Contexts/Contexts'
import { Col, Container, Row, ButtonGroup, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Navbar from '../componentsold/navbar/Navbar';
import DatePicker from '../components/datePicker/DatePicker';


function ShowDescription() {
    const { showDescriptions, fetchShowDescriptions, purchasedItemsList, rentedItemsList, getPurchaisedList, getRentedList } = useContext(ShowContext)

    const { id, category } = useParams()

    useEffect(() => {
        // console.log(id)
        fetchShowDescriptions(id, category)
        return () => {
        }
    }, [])

    const buyItem = (data) => {
        // console.log(data)
        purchasedItemsList(data)
    }
    const [RentedDateAndTime, setRentedDateAndTime] = useState()

    // const [CurrentDateAndTime, setCurrentDateAndTime] = useState(new Date().toLocaleString())
    // {
    //     time: new Date().toLocaleTimeString(),
    //     date: new Date().getDate(),
    //     month: new Date().getMonth() + 1,
    //     year: new Date().getFullYear()
    // }
    // console.log(CurrentDateAndTime)
    // const handleSubmit = (ev) => {
    //     setRentTime(ev.target.value)
    // }

    const rentItem = (data) => {
        rentedItemsList(data, RentedDateAndTime)
    }
    const DateAndTime = (date) => {
        setRentedDateAndTime(date.toLocaleString())
        // console.log(date.toLocaleString())
    }

    return (
        <Container fluid>
            <Navbar></Navbar>
            <Row style={{ paddingTop: "6rem" }}>
                <Col sm={4}>
                    <img style={{ width: "80%", margin: "0 0 0 6rem" }} src={`https://image.tmdb.org/t/p/w500${showDescriptions.poster_path}`} />
                </Col>

                <Col sm={8}>
                    <Row style={{ display: "flex", flexDirection: "column", margin: "5rem 0 0 5rem" }}>
                        <div>
                            <span style={{ fontSize: "4rem", fontWeight: "600" }}>{showDescriptions.original_title}</span>
                            <span style={{ fontSize: "2.5rem" }}>({showDescriptions.release_date})</span>
                        </div>

                        <span style={{ fontSize: "1.5rem", fontWeight: "200" }}>{showDescriptions.tagline}</span>
                    </Row>

                    <Row style={{ display: "flex", flexDirection: "column", margin: "5rem 0 0 5rem" }}>
                        <div>
                            <span style={{ fontSize: "2rem", color: "green" }}>RATING:{showDescriptions.vote_average}</span>
                        </div>
                    </Row>

                    <Row style={{ display: "flex", flexDirection: "column", margin: "5rem 0 0 5rem" }}>
                        <div>
                            <span style={{ fontSize: "2rem", fontWeight: "200" }}>{showDescriptions.overview}</span>
                        </div>
                    </Row>
                    <Row style={{ display: "flex", flexDirection: "column", margin: "5rem 0 0 5rem" }}>

                        <div aria-label="Basic example">
                            <Button variant="success" onClick={() => buyItem(showDescriptions)}>BUY ITEM</Button>
                            {/* <input type="text" placeholder="renting time" onChange={(ev)=>handleSubmit(ev)}></input> */}

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "100px" }}>
                            <DatePicker dateItem={DateAndTime}></DatePicker>
                            <Button variant="primary" onClick={() => rentItem(showDescriptions)}>RENT ITEM</Button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ShowDescription
