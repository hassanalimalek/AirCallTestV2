import { ReactNode } from "react"
import { Display } from "../../css"
export interface DetailListTextProps {
    primaryText:string,
    secondaryText:ReactNode,
    display?:Display | undefined
  }
  