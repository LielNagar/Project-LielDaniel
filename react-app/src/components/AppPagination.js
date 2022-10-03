import {Box,Pagination} from '@mui/material';
import { useEffect,useState } from 'react';
import axios from 'axios';

const pageSize=12;

export default function AppPagination({setVehicle}){
    const [pagination,setPagination]= useState({
        count: 0,
        skip: 0
    });
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/vehicles?skip=${pagination.skip}&limit=12`).then((response)=>{
            //console.log(response);
            setPagination({...pagination, count: response.data.count});
            setVehicle({vehicles:response.data.vehicles})
    })},[pagination.skip])

    const handlePageChange=(event,page)=>{
        const skip= (page-1) * pageSize;
        setPagination({...pagination, skip})
    }

    return(
        <Box justifyContent={"center"} alignItems='center' display={'flex'} sx={{margin: '20px 0px'}}>
            <Pagination count={Math.ceil(pagination.count/pageSize)} onChange={handlePageChange}/>
        </Box>
    );
}