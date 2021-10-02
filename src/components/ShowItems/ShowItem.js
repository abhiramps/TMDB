import React, { useContext, useState, useRef, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Card, Button, Badge } from 'react-bootstrap';
import { categoryContext } from '../Tabs/TabsComponent';
import { ShowContext } from '../../Contexts/Contexts';
import moment from 'moment';

function ShowItem(props) {
    const { deleteItem, rentedItems, purchaisedItems } = useContext(ShowContext)
    const history = useHistory();
    // console.log("movie item", props.moives)

    const categorys = useContext(categoryContext)
    // let category='tv';
    const onHandleClick = (id) => {
        history.push(`/${categorys}/${id}`)
    }
    // const deleteItem = (id) => {
    //     console.log(id)
    // }

    // const [num, setNum] = useState(100);
    // const intervalRef = useRef();

    // const decreaseNum = () => setNum((prev) => prev - 1);

    // useEffect(() => {
    //     intervalRef.current = setInterval(decreaseNum, 60000);

    //     return () => clearInterval(intervalRef.current);
    // }, []);

    // let currentdate= new Date()

    const expiryDate = (date,itemId) => {
        // console.log("expiry date", date)
        var currentDate = moment().format('DD/MM/YYYY HH:mm:ss')
        // console.log(currentDate)
        // var date=moment(date).format('DD/MM/YYYY HH:mm:ss');
        var day = moment({ date }).diff({ currentDate },'days');
        // console.log(day)
        var hr = moment({ date }).diff({ currentDate},'hours');
        // var hrRemaining = hr%24;
        // console.log(hrRemaining)
        // var hours=moment()
        var min = moment({ date }).diff({ currentDate }, 'minutes');
        
        if (day > 1) {
            return  `${day} days` 
        }
        else if ((hr > 1)&&(hr<=24)) {
            return  `${hr} hours` 
        }
        else if ((min > 1) && (min<=60)) {
            return  `${min} minutes` 
        }
        else {
            deleteItem(itemId)
            // return   'no time' 
        }
        // console.log(hr)
    }

    // console.log(expiryDate('2021-09-04'))

    // console.log(num)

    // if(num===0){
    //     deleteItem()
    // }

    return (
        <div>
            {
                props.shows.map((item) => (
                    <Card className="col-sm-2" style={{ padding: "1rem" }} key={item.id} >
                        <Card.Img variant="top" className="img-thumbnail" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />

                        <Card.Body onClick={() => onHandleClick(item.id)}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>STATUS:{item.Status}</Card.Text>
                            <Button variant="primary">
                                {
                                    props.cartItem ? <Badge bg="secondary">validity:{expiryDate(item.rentTime,item.id)} left</Badge> : (<Badge bg="secondary">RATING: {item.vote_average}</Badge>)
                                }
                            </Button>
                            {/* RATING <Badge bg="secondary">{item.vote_average}</Badge> */}

                            <Card.Text>
                                {item.release_date}
                            </Card.Text>
                        </Card.Body>
                        {
                            props.cartItem ? (
                                <Button variant="danger">
                                    <Badge onClick={() => deleteItem(item.id)}>delete</Badge>
                                </Button>
                            ) : ("")
                        }
                    </Card>
                ))
            }
        </div>
    )
}

export default ShowItem
