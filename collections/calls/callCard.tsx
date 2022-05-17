import React from 'react'
import { Container,Text } from '../../libs/shared-components'
import {Row,Col} from 'antd';
import moment from 'moment'
import Link from 'next/link';
import CallIcon from './call-Icon';
import { CallProps } from '../../types/collections/call';

const CallCard = ({call}:{call:CallProps}) => {
    
    return (
            <Col xs={24} sm={12} md={8} xl={6}  >
                <Link href={`callDetail/${call.id}`} passHref>
                    <Container boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px;' padding='1rem'   paddingLeft="0"  paddingRight='0' >
                        <Container marginBottom='0.25rem'><Text fontSize='1.1rem'>{moment(call.created_at).format('Do MMMM, YYYY')}</Text></Container>
                        <Row>
                            <Col xs={16}>
                                <Container >
                                    <Text display='block'>From : {call.from}</Text>
                                    <Text display='block'>To  : {call.to}</Text>
                                </Container>
                            </Col>
                            <Col xs={8}>
                                <Container fontSize='1rem'>
                                    <Container> <CallIcon type={call.call_type}/></Container>
                                    <Container> {call.direction === 'inbound' ? <CallIcon type="incomingCall" />  : <CallIcon type="outgoingCall" /> }</Container>
                                </Container>
                            </Col> 
                        </Row>
                    </Container>
                </Link>
              
            </Col>
     
    )
}

export default CallCard