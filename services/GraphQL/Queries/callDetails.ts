import { gql } from '@apollo/client';



export const GET_CALL_DETAIL = gql`
    query call($id:ID!){
        call(id:$id){
            id,direction,from,to,duration,via,is_archived,call_type,created_at,notes{id,content}
        }
    }
`


