import { gql } from '@apollo/client';


export const LOGIN = gql`
    mutation LOGIN($username:String!,$password:String!){
        login(input: { username: $username, password: $password })
            {
                access_token,
                refresh_token,
                user { id,username }
            }
}`