import React,{useEffect,useContext,} from 'react'
import { Card, Button, Row, Container } from 'react-bootstrap';
import {ContextData} from './Test'

function MovieItem() {
console.log("movie item")
    const {item,FetchData} = useContext(ContextData);
    console.log(item)
    useEffect(() => {
        FetchData()
        return () => {
            
        }
    }, [])
    return (
        
       <div>
            {
                item.map((item) => (
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
       </div>
    )
}

export default MovieItem
