import {SpaceProps, FlexboxProps} from 'styled-system';
import {MouseEventHandler} from 'react';
import {IconType} from '../Icon';

export type ChangeHandler = (value: string) => unknown;

export type InputProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  error?: boolean;
  prefix?: string;
  suffix?: string;
  icon?: IconType;
  iconAtRight?: boolean;
  value?: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeHandler;
  placeholder?: string;
} & SpaceProps &
  FlexboxProps;

export type TRight = { right?: boolean };
