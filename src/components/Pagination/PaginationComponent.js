import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'
function PaginationComponent({ onPageChange }) {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item onClick={() => {
                onPageChange(number);
                setCurrentPageNo(number)
            }} key={number} >
                {number}
            </Pagination.Item>,
        );
    }
    const [CurrentPageNo, setCurrentPageNo] = useState()
    // console.log("current:",CurrentPageNo)

    const [PrevState, setPrevState] = useState(0)
    // console.log("previous:",PrevState)

    const [Count, setCount] = useState({
        first: 1,
        last: 500,
    })
  
    // const [Count, setCount] = useState(1)

    return (
        <div>
            <Pagination >
                <Pagination.First onClick={() => { onPageChange(Count.first) }} />
                <Pagination.Prev onClick={() => {
                  setPrevState(CurrentPageNo-1)
                    onPageChange(PrevState)
                }} />
                {items}
                <Pagination.Ellipsis />
                <Pagination.Next />
                <Pagination.Last onClick={() => { onPageChange(Count.last) }} />
            </Pagination>
        </div>
    )
}

export default PaginationComponent
