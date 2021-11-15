import React, {FC} from 'react';

import classnames from 'classnames';
import Icon from '../Icon';
import {ButtonProps} from './types';

import {
  Children,
  Loader,
  LeftBand,
  RoundedButton,
  FilledButton,
  Badge,
  ButtonIcon,
  LoaderWrapper,
} from './styles';

const Button: FC<ButtonProps> = ({
  className,
  colorScheme = 'blue',
  variant,
  size,
  disabled,
  loading,
  progress,
  icon,
  iconAtRight,
  iconOnly,
  badge,
  children,
  ...args
}) => {
  const ButtonWrapper = (variant || 'filled') === 'filled' ? FilledButton : RoundedButton;
  return (
    <ButtonWrapper
      className={classnames(
        size || 'medium',
        className || '',
        loading && 'loading',
        icon && !iconOnly && ((iconAtRight && 'icon-right') || 'icon-left'),
        iconOnly && 'icon-only',
      )}
      type="button"
      {...args}
      disabled={loading || disabled}
      colorScheme={colorScheme}
    >
      {loading && (
        <>
          <LoaderWrapper>
            <Loader as={Icon} type="loader" />
          </LoaderWrapper>
          <LeftBand style={{width: `${progress || 0}%`}} />
        </>
      )}
      {(icon && iconOnly && <ButtonIcon as={Icon} type={icon} />) || (
        <Children loading={loading}>
          {icon && !iconAtRight && <ButtonIcon as={Icon} type={icon} />}
          {children}
          {icon && iconAtRight && <ButtonIcon as={Icon} type={icon} />}
          {badge && <Badge colorScheme={colorScheme}>{badge}</Badge>}
        </Children>
      )}
    </ButtonWrapper>
  );
};

export default Button;
