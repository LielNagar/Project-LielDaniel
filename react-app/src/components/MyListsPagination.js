import {Box,Pagination} from '@mui/material';
import { useEffect,useState } from 'react';
import axios from 'axios';

const pageSize=12;

export default function MyListsPagination({setVehicle}){
    const [pagination,setPagination]= useState({
        count: 0,
        skip: 0
    });
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/myvehicles?skip=${pagination.skip}&limit=12` , {
            headers:{
                Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
            }
        }).then((response)=>{
            setPagination({...pagination, count: response.data.count});
            setVehicle({vehicles:response.data.vehicles})
    })},[pagination.skip])

    const handlePageChange=(event,page)=>{
        const skip= (page-1) * pageSize;
        setPagination({...pagination, skip})
    }

    return(
        <Box>
            <Pagination className='navbarPagination' count={Math.ceil(pagination.count/pageSize)} onChange={handlePageChange}/>
        </Box>
    );
}