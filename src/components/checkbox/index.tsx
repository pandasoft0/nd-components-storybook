import React from 'react';

import type * as CheckboxBase from '@radix-ui/react-checkbox';

import { Wrapper, Label, CheckboxInput, CheckboxIndicator } from './styles';

const CheckIcon = () => (
  <svg viewBox="0 0 1024 1024" height="12" width="12">
    <path
      fill="currentColor"
      d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
    />
  </svg>
);

export type CheckboxProps = {
  /**
   * Checkbox size
   *
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Checkbox text
   */
  children: React.ReactNode;
} & CheckboxBase.CheckboxProps;

/**
 * Checkbox component
 *
 * @description used in forms when a user needs to select multiple values from several options.
 *
 * Made with radix-ui
 *
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ name, size = 'md', children, ...props }, ref) => {
    return (
      <Wrapper>
        <CheckboxInput ref={ref} id={`checkbox-${name}`} size={size} {...props}>
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </CheckboxInput>

        <Label htmlFor={`checkbox-${name}`} size={size}>
          {children}
        </Label>
      </Wrapper>
    );
  }
);