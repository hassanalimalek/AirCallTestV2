import { Header,FlexContainer,Text,Button,Container } from "../../shared-components"
import { logoutUser, useUserContext } from '../../../context';
import { useRouter } from 'next/router';
import { GRAPHQL_USER } from "../../../services/GraphQL";
import {  useQuery } from "@apollo/client";
import {BiPhoneCall} from 'react-icons/bi'
import Link from 'next/link'

export const TopHeader: React.FC = ()=>{
    const router = useRouter()
    const { dispatch } = useUserContext();
    const {loading,
        error,
        data:userData,
     } =useQuery(
        GRAPHQL_USER.QUERIES.GET_USER
      )
    return (
        <Header >
        <FlexContainer justifyContent="space-between">
            <Link href="/" >
                <Container>
                    <Text fontSize="22px" fontWeight={600} marginRight="8px">Air Call</Text>
                    <BiPhoneCall fontSize="18px" color="blue"/>
                </Container>
            </Link>
          
            <Container  >
                <FlexContainer justifyContent="flex-end" alignItems="center"  >
                    <Text display="inline-block"  marginRight="10px">{userData?.me?.username ?userData?.me?.username : "" }</Text>
                    <Button display="inline-block" size="small" onClick={()=>{
                        dispatch(logoutUser())
                        router.push('/auth/sign-in')
                    }}>Logout</Button>
                </FlexContainer>
            </Container>
     
           
        </FlexContainer>
    </Header>)
}
