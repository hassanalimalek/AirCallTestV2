import CallerGqlClient from './CallerGqlClient';
// import * as User_Fragments from './Fragments';
import * as User_Mutations from './Mutations';
import * as User_Queries from './Queries';
import * as User_Supscriptions from './Subscriptions'



export const GRAPHQL_USER = {
  CLIENT: CallerGqlClient,

  MUTATIONS: {
    ...User_Mutations,
  },

  QUERIES: {
    ...User_Queries,
  },
  SUBSCRIPTIONS:{
    ...User_Supscriptions
  }
};
