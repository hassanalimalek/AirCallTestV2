import React, { ReactNode } from 'react'
import {MdOutlineCall} from 'react-icons/md'
import {FcMissedCall,FcVoicemail} from 'react-icons/fc'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {VscCallOutgoing,VscCallIncoming } from 'react-icons/vsc'
import {AiOutlineHistory} from 'react-icons/ai'
import {Container} from '../../libs/shared-components'
import { CallIconProps } from '../../types/collections/call';

let getCallIcon:{"answered":ReactNode,"missed":ReactNode,"voicemail":ReactNode,"goBack":ReactNode,"outgoingCall":ReactNode,"incomingCall":ReactNode,"archive":ReactNode} = {
    "answered":<MdOutlineCall/>,
    "missed":<FcMissedCall/>,
    "voicemail":<FcVoicemail/>,
    "goBack":<BsFillArrowLeftCircleFill/>,
    "outgoingCall":<VscCallOutgoing/>,
    "incomingCall":<VscCallIncoming/>,
    "archive":<AiOutlineHistory/>
}
const CallIcon : React.FC<CallIconProps> = ({type,fontSize,onClick,display,color}) => {
    return (
        <Container cursor='pointer' color={color} padding='0' margin='0' display={display ? display :'inline'} style={{fontSize:fontSize ? fontSize : '1rem'}} onClick={onClick}>
          {getCallIcon[type]}  
        </Container>
    )
}

export default CallIcon