import React, { useContext,useEffect} from 'react'
// import Shows from '../../container/Shows'
import { ListGroup } from 'react-bootstrap';
import { ShowContext } from '../../Contexts/Contexts';
import { Card, Button, Badge } from 'react-bootstrap';
import Navbar from '../../componentsold/navbar/Navbar';
import ShowItem from '../ShowItems/ShowItem';

function RentedItems() {
    const { rentedItems,getRentedList } = useContext(ShowContext)

    useEffect(() => {
        getRentedList()
        return () => {

        }
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ position: "relative", top: "5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h1 style={{ fontWeight: "bold" }}>RENTED ITEMS</h1>
            </div>
            <div style={{ position: "relative", top: "5rem", width: "100%", height: "auto" }}>
                <ShowItem shows={rentedItems} cartItem={true}></ShowItem>

                {/* {
                    rentedItems.map((item) => (
                        <Card className="col-sm-2" style={{ padding: "1rem" }} key={item.id} >
                            <Card.Img variant="top" className="img-thumbnail" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Button variant="primary">
                                    Rent Time remaining <Badge bg="secondary">{item.rentTime} min</Badge>
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                } */}
            </div>
        </div>
    )
}

export default RentedItems
