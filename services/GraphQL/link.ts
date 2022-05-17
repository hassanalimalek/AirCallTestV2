import { setContext } from '@apollo/client/link/context';
import { getCookie } from '../../libs/shared-utils';
import Cookies from 'js-cookie'

export const authLink = setContext((request, { headers }) => {
    if(request.operationName === 'REFRESH_TOKEN'){
      return {
          headers: {
            ...headers,
            authorization: request.variables?.refreshToken ? `Bearer ${request.variables?.refreshToken}` : '',

          },
        };
    }
  const accessToken = Cookies.get('authUser')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    //   'Authorization': accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});
