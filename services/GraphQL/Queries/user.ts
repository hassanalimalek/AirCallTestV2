import { gql } from '@apollo/client';



export const GET_USER = gql`
    query me{
        me{
            id,
            username
        }
    }
`


