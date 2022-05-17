import { Display } from "../../css";


export interface AllCallsProps {
  loading:boolean;
  data:any;
  pageChange:any;
  page:number;
  error:any
}

export interface CallProps {
  
    call_type?:  string;
    created_at?: string;
    direction?: string;
    duration?: number;
    from? : string;
    id?: string;
    is_archived?: boolean;
    notes?:{
        id?:string,
        content?:string
    }[]
    to?:string;
    via?:string;   
  }
  
export interface CallIconProps{
    type:string | undefined;
    fontSize?:string | undefined;
    onClick?:React.MouseEventHandler<HTMLSpanElement>  | undefined;
    display?:Display|undefined;
    color?:string | undefined
}

export interface CallDetailProps {
    call?:  CallProps | null;
    setCall?: any;
    loading?:boolean;
    error?:any;
    refetchCall?:any

  }
  