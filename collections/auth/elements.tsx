import { Form } from '../../libs/shared-components'
import { maxMobile, maxTablet } from '../../libs/shared-styles'
import { FormProps } from '../../types'
import styled from 'styled-components'

export const StyledForm = styled((props: FormProps) => <Form {...props} />)`
  @media (min-width: ${maxTablet}) {
    min-width: 50%;
  }
  @media (min-width: ${maxMobile}) {
    min-width: 50%;
  }
`
