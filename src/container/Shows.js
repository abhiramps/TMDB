import React, { useContext, useEffect } from 'react'
import { ShowContext } from '../Contexts/Contexts'
import ShowItem from '../components/ShowItems/ShowItem'
import PaginationComponent from '../components/Pagination/PaginationComponent'
import { categoryContext } from '../components/Tabs/TabsComponent'
// import PaginationNew from '../components/Pagination/PaginationNew'
const Shows = (props) => {

    const { FetchData, showsItem, loading } = useContext(ShowContext)

    const categorys = useContext(categoryContext)
    // console.log(categorys)
    // let category='tv';

    useEffect(() => {
        FetchData(1,categorys)
    }, [])

    const pageNo=(no)=>{  
        FetchData(no,categorys)
    }
    return ( 
        <div>
            <div style={{ height: "320vh" }}>
                <h2>{categorys}</h2>
                {loading ? 'loading' : <ShowItem shows={showsItem} />}
            </div>
           <div style={{display:"flex",justifyContent: "flex-end"}}>
               <PaginationComponent onPageChange={pageNo}></PaginationComponent>
               {/* <PaginationNew/> */}
           </div>
        </div>
    )
}

export default Shows
