import { getCookie } from './cookie';

export const isAuthenticated = (req) => {
   
  const authUserCookie = getCookie('authUser', req);
 
  if (authUserCookie) {
    //   return !!JSON.parse(authUserCookie).accessToken
    // let parsed = !!JSON.parse(authUserCookie)
    //   console.log("parsed --->",parsed)
    return authUserCookie
    // return true
   
  }  else {
    return false;
  }
};
export const redirectToSignIn = () => {
  return {
    redirect: {
      destination: '/auth/sign-in',
      permanent: false,
    },
  };
};

export const alreadyAuthenticatedRedirect = (route: string) => {
  return {
    redirect: {
      destination: route,
      permanent: false,
    },
  };
};


