import React, { useContext,useEffect } from 'react'
// import Shows from '../../container/Shows'
// import { ListGroup } from 'react-bootstrap';
import { Card, Button, Badge } from 'react-bootstrap';
import Navbar from '../../componentsold/navbar/Navbar';
import { ShowContext } from '../../Contexts/Contexts';
import ShowItem from '../ShowItems/ShowItem';
function PurchaisedItems() {

    const { purchaisedItems,getPurchaisedList } = useContext(ShowContext)
    // console.log(purchaisedItems)
    useEffect(() => {
        getPurchaisedList()
        // getRentedList()
        return () => {

        }
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ position: "relative", top: "5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h1 style={{ fontWeight: "bold" }}>PURCHAISED ITEMS</h1>
            </div>
            <div style={{ position: "relative", top: "5rem", width: "100%" }}>

                <ShowItem shows={purchaisedItems} cartItem={true} rentTime={'none'} ></ShowItem>

                {/* {
                    purchaisedItems.map((item) => (
                        <Card className="col-sm-2" style={{ padding: "1rem" }} key={item.id} >
                            <Card.Img variant="top" className="img-thumbnail" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    ))
                } */}
            </div>

        </div>
    );
}

export default PurchaisedItems
