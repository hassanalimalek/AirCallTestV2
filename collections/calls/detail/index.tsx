import React, { useState } from 'react'
import {
  Container,
  FlexContainer,
  Spin,
  Text,
  Button
} from '../../../libs/shared-components'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { GRAPHQL_USER } from '../../../services/GraphQL'
import moment from 'moment'
import CallIcon from '../call-Icon'
import { getCallDuration } from '../../../libs/shared-utils'
import AddNoteModal from './addNoteModal'
import DetailListText from './detailListText'
import { CallDetailProps } from '../../../types/collections/call'

const CallDetail: React.FC<CallDetailProps> = ({
  call,
  setCall,
  loading,
  error,
  refetchCall
}) => {
  const router = useRouter()

  const [noteModal, setNoteModal] = useState(false)
  const [
    performArchiveMutation,
    { loading: archiveLoading, reset }
  ] = useMutation(GRAPHQL_USER.MUTATIONS.ARCHIVE_CALL)

  const closeModal = () => {
    setNoteModal(false)
  }
  const archiveCall = (id: string | undefined) => {
    performArchiveMutation({
      onCompleted: data => {
        reset()
        setCall({ ...call, is_archived: data.is_archived })
      },
      onError: error => {
        reset()
      },
      variables: { id }
    })
  }
  const renderNotes = (
    notes: { id?: string; content?: string }[] | undefined
  ) => {
    if (notes) {
      return notes.map(note => {
        return (
          <Container
            key={note.id}
            border='0.5px solid #666'
            marginBottom='0.5rem'
            padding='0.75rem'
            borderRadius='0.25rem'
          >
            <Text>{note.content}</Text>
          </Container>
        )
      })
    } else {
      return <Text>No notes added yet</Text>
    }
  }
  const renderDetail = () => {
    if (loading)
      return (
        <Container textAlign='center' margin='50px'>
          <Spin size='large' />
        </Container>
      )
    else if (error || !call)
      return (
        <Container textAlign='center' margin='50px'>
          <Text fontSize='2rem'>Something went wrong</Text>
        </Container>
      )
    else {
      return (
        <Container
          boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px;'
          padding='1rem'
          letterSpacing='0.075rem'
        >
          <Text
            display='block'
            fontSize='1.5rem'
            fontWeight={600}
            marginBottom='1.5rem'
          >
            Call Detail
          </Text>
          <DetailListText
            primaryText='Type'
            secondaryText={
              <span>
                {call.call_type} <CallIcon type={call.call_type} />
              </span>
            }
          ></DetailListText>
          <DetailListText
            primaryText='From'
            secondaryText={call.from}
          ></DetailListText>
          <DetailListText
            primaryText='To'
            secondaryText={call.to}
          ></DetailListText>
          <DetailListText
            primaryText='Via'
            secondaryText={call.via}
          ></DetailListText>
          <DetailListText
            primaryText='Direction'
            secondaryText={
              <span>
                {call.direction}{' '}
                {call.direction === 'inbound' ? (
                  <CallIcon type='incomingCall' />
                ) : (
                  <CallIcon type='outgoingcall' />
                )}
              </span>
            }
          ></DetailListText>
          <DetailListText
            primaryText='Date'
            secondaryText={moment(call.created_at).format('Do MMMM, YYYY')}
          ></DetailListText>
          <DetailListText
            primaryText='Duration'
            secondaryText={getCallDuration(call.duration)}
          ></DetailListText>
          <Container padding='0'>
            {archiveLoading ? (
              <Spin size='small' />
            ) : (
              <Container padding='0'>
                <DetailListText
                  display='inline'
                  primaryText='Archive'
                  secondaryText={call.is_archived ? 'Yes' : 'No'}
                ></DetailListText>
                <CallIcon
                  color='blue'
                  display='inline'
                  type='archive'
                  onClick={() => {
                    archiveCall(call.id)
                  }}
                />
              </Container>
            )}
          </Container>

          <Container padding='0' margin='1rem' marginLeft='0' marginRight='0'>
            <FlexContainer justifyContent='space-between'>
              <Text
                display='block'
                fontSize='1.2rem'
                fontWeight={600}
                marginBottom='1.5rem'
              >
                Notes
              </Text>
              <Button
                size='small'
                fontSize='0.75rem'
                onClick={() => {
                  setNoteModal(true)
                }}
              >
                Add Note
              </Button>
            </FlexContainer>
            {renderNotes(call.notes)}
          </Container>
          <AddNoteModal
            refetchCall={refetchCall}
            activityId={call.id}
            noteModal={noteModal}
            closeModal={closeModal}
          />
        </Container>
      )
    }
  }

  return (
    <Container marginTop='1.25rem' marginBottom='1.25rem'>
      <Container marginBottom='0.75rem' padding='0'>
        <Text
          cursor='pointer'
          onClick={() => {
            router.back()
          }}
          fontSize='1.2rem'
        >
          <CallIcon type='goBack' />
        </Text>
      </Container>
      {renderDetail()}
    </Container>
  )
}

export default CallDetail
