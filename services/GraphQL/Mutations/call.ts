import { gql } from '@apollo/client';


export const ADD_NOTE = gql`
    mutation addNote($activityId:ID!,$content:String!){
        addNote(input:{activityId:$activityId,content:$content}){
            id
        }
        
}`



export const ARCHIVE_CALL = gql`
    mutation archiveCall($id:ID!){
        archiveCall(id:$id){
            id,
            is_archived
        }
        
}`