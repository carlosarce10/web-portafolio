import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  full?: boolean;
};

export default function Button({ variant = 'primary', size = 'md', full, className, ...props }: Props) {
  return (
  <button
    {...props}
    className={clsx(
      'btn',
      `btn--${variant}`,
      size === 'sm' && 'btn--sm',
      full && 'btn--full',
      className
    )}
  />
);
}
