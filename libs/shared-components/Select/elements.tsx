import { boxProperties, theme } from '../../shared-styles';
import { Any, OptionProps, SelectProps } from '../../../types';
import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;
export const StyledOption = styled((props: OptionProps) => (
  <Option {...props} />
))`
  ${boxProperties};
`;

export const StyledSelect = styled((props: SelectProps<Any>) => (
  <Select {...props} />
))`
  border-radius: 3px;
  height: ${({ mode }) => (mode === 'multiple' ? 'auto' : '48px')};
  
  
  width: 100%;
  &.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  &.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-top: 5px;
  }

  .ant-select-selector,
  .ant-select-selection-item,
  .ant-select-selection-search input {
    height: 100% !important;
    line-height: 38px !important;
  }

  &.ant-select-disabled.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    color: currentColor;
  }

  .ant-select-item {
    padding: 12px;
    border-radius: 5px;
    margin: 3px;

    &.ant-select-item-option,
    &.ant-select-item-option-active,
    &.ant-select-item-option-selected,
    &.active {
      &:hover {
        background: ${theme.lemonGrass};
        color: ${theme.white} !important;
      }
    }

    &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background: ${theme.lemonGrass};
      color: ${theme.white} !important;
    }
  }

  .ant-select-selector {
    border-color: ${theme.concrete};
    font-size: 16px;
    .ant-select-selection-placeholder {
      color: ${theme.dustyGrey};
      font-size: 16px;
      line-height: 38px;
    }
  }
`;
