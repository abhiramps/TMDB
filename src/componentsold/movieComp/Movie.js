import React, { useState, useEffect,useContext } from 'react'
import { Card, Button, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import {contextData} from '../API/GetDatas'
function Movie() {

    const usecontext = useContext(contextData)
    const [MovieData, setMovieData] = useState([])
    console.log(usecontext)
    const FetchData = () => {
        axios.get("https://api.themoviedb.org/3/movie/550/similar?api_key=f5d6924515589bd86df2db0fa179ec08")
        .then((res) => {
            // console.log(res.data)
            setMovieData(res.data.results)
            // console.log(MovieData)
        })
    }

    useEffect(() => {
        FetchData()
        return () => {

        }
    }, [])


    return (
    <Container>
            <Row>
                {
                    MovieData.map((item) => (
                        <Card className="col-sm-2" style={{padding:"1rem"}} key={item.id}>
                            <Card.Img variant="top" className="img-thumbnail" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.release_date}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
             
            </Row>
    </Container>
    )
}

export default Movie
