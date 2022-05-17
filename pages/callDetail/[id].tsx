import React,{useState,useEffect} from 'react'
import CallDetail from '../../collections/calls/detail'
import { useQuery } from '@apollo/client';
import { GRAPHQL_USER } from '../../services/GraphQL';
import { useRouter } from 'next/router';

const Detail = () => {
    const router = useRouter()
    const [call,setCall] = useState(null)
    const {
        loading,
        error,
        data:callData,
        refetch:refetchCall
    } = useQuery(GRAPHQL_USER.QUERIES.GET_CALL_DETAIL, {
        variables: { id:router?.query?.id },
    });

    useEffect(()=>{
        if(callData){
            setCall(callData.call)
        } 
    },[callData])
  
    // console.log("Call Detail --->",data)
    // console.log("loading --->",loading)
    // console.log("error --->",error)
    return (
        <div>
            <CallDetail call={call} setCall={setCall} loading={loading } error={error} refetchCall={refetchCall}/>
        </div>
    )
}

export default Detail