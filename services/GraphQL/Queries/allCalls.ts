import { gql } from '@apollo/client';


export const GET_CALLS = gql`
    query paginatedCalls($offset:Float!,$limit:Float!){
        paginatedCalls(offset:$offset,limit:$limit){
        nodes{id,direction,from,to,duration,via,is_archived,call_type,created_at,notes{id,content}}
        totalCount
        hasNextPage
    }

}`


