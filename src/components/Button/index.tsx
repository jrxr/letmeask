import { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonContainer
      className={` ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  );
}
