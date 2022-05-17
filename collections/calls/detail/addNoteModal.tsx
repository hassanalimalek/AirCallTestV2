import React, { useState } from 'react'
import {
  Button,
  Form,
  TextArea,
  FlexContainer,
  Modal,
  FormItem,
  useForm
} from '../../../libs/shared-components'
import { useMutation } from '@apollo/client'
import { GRAPHQL_USER } from '../../../services/GraphQL'
import { CallNoteProps } from '../../../types/collections/call'

const AddNoteModal: React.FC<CallNoteProps> = ({
  activityId,
  noteModal,
  closeModal,
  refetchCall
}) => {
  const [performAddNoteMutation, { loading, reset }] = useMutation(
    GRAPHQL_USER.MUTATIONS.ADD_NOTE
  )

  // const [form] = useForm();
  const [noteContent, setNoteContent] = useState()

  let addNote = () => {
    if (noteContent) {
      performAddNoteMutation({
        onCompleted: data => {
          reset()
          setNoteContent('')
          closeModal()
          refetchCall()
        },
        onError: error => {
          reset()
        },
        variables: {
          activityId,
          content: noteContent
        }
      })
    }
  }

  return (
    <div>
      <Modal
        width='50%'
        title='Add Call Note'
        maskClosable={true}
        onCancel={closeModal}
        visible={noteModal}
        footer={
          <FlexContainer justifyContent='flex-end' margin='10px 0' width='100%'>
            <Button
              loading={loading}
              fontSize='16px'
              htmlType='submit'
              size='small'
              onClick={addNote}
            >
              Submit
            </Button>
          </FlexContainer>
        }
      >
        <Form layout='vertical' onFinish={addNote}>
          <FormItem label='Note' name='Note' rules={[{ required: true }]}>
            <TextArea
              placeholder='Note content here'
              name='Note'
              value={noteContent}
              onChange={event => {
                setNoteContent(event.target.value)
              }}
            />
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}

export default AddNoteModal
