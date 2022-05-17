export interface UserActionType {
    UPDATE_ACCESS_TOKEN: string;
    USER_LOGIN: string;
    LOGOUT_USER: string;
    UPDATE_USER: string;
  }
  
  export interface UserData {
    id: string;
    username:string
   
  }
  
  export interface UserState {
    accessToken: string;
    refreshToken?:string;
    rememberMe?: boolean;
    user: UserData;
  }