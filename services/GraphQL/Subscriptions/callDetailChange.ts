import { gql } from '@apollo/client';


export const CALL_DETAIL_CHANGE = gql`
    subscription onUpdatedCall($id:ID!){
        onUpdatedCall(id:$id){
             id,direction,from,to,duration,via,is_archived,call_type,created_at 
    }

}`


