import React, { ReactNode } from 'react'
import { Container,Text } from '../../../libs/shared-components'
import { DetailListTextProps } from '../../../types/collections/call'
const DetailListText:React.FC<DetailListTextProps> = ({primaryText,secondaryText,display}) => {
    return (
        <Container padding='0'  display={display}>
            <Text fontSize='1rem' marginBottom='0.25rem'><Text fontWeight={600}>{primaryText}</Text> : {secondaryText} </Text>
        </Container>
       
    )
}

export default DetailListText