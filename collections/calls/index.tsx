import React,{useEffect,useState} from 'react'
import { Container,Pagination,Spin,Text, Option, Select} from '../../libs/shared-components'
import {Row} from 'antd';
import { callTypeOptions } from '../../data/option';
import CallCard from './callCard'
import { AllCallsProps,CallProps } from '../../types/collections/call';

const Calls:React.FC<AllCallsProps> = ({loading,data,pageChange,page,error}) => {
    
    const [calls,setCalls] = useState([])
    const [selectedCallType,setSelectedCallType] = useState('all')
  
    useEffect(()=>{
        if(data?.paginatedCalls?.nodes){
            callTypeFilter(data?.paginatedCalls?.nodes,selectedCallType)
        }
    },[data?.paginatedCalls?.nodes,selectedCallType])

    const callTypeFilter=(data:CallProps,filterBy:string)=>{
        if(filterBy !== "all"){
            setCalls(data && data.filter((call:CallProps)=>{
                if(call.call_type === selectedCallType)
                    return call
                })
            )
        }else{
            setCalls(data)
        }
    }

    if(loading)     return  (<Container textAlign='center' margin="50px"><Spin size="large"/></Container>)
    else if(error ) return  (<Container textAlign='center' margin="50px"><Text fontSize='2rem'>Something went wrong</Text></Container>)
    // else if(calls.length === 0)return (<Container textAlign='center' margin="50px"><Text fontSize='2rem'>No Calls Exist</Text></Container>)
   


    return (
        <Container padding='1.5rem' paddingLeft='0' paddingRight='0'>
            <Container  marginBottom='0.5rem' marginRight='0' width='200px' >
                <Select 
                    value={selectedCallType}
                    showSearch={false}
                    optionFilterProp="children"
                    onChange={(value:string)=>{
                        callTypeFilter(data?.paginatedCalls?.nodes,value)
                        setSelectedCallType(value)
                    }}
                    >
                    {callTypeOptions.map((item, index) => (
                        <Option key={index} value={item.value}>
                                {item.name}
                        </Option>
                    ))}
                </Select>
            </Container>
            <Row gutter={[12, 12]}>
               {calls && calls.map((call:CallProps)=>{
                    return <CallCard  key={call.id} call={call} ></CallCard>
                }
            )}
            </Row>
            <Container textAlign='center' marginTop='1.25rem' marginBottom='1.25rem '>
                <Pagination current={page} total={data?.paginatedCalls?.totalCount -10} simple onChange={pageChange}/>
            </Container>
        </Container>
    )
}

export default Calls