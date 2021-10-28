import React from 'react';

import {
  ThemeProvider as StyledProvider,
  DefaultTheme
} from '@neon-district/system';

import theme from '@neon-district/theme';

import ResetStyles from './reset';

type ThemeProviderProps = {
  /**
   *
   */
  theme?: DefaultTheme;
  /**
   *
   */
  resetCss?: boolean;
  /**
   * @default `true`
   */
  children?: React.ReactNode;
};

export const ThemeProvider = ({
  resetCss = true,
  children
}: ThemeProviderProps) => {
  return (
    <StyledProvider theme={theme}>
      {resetCss && <ResetStyles />}

      {children}
    </StyledProvider>
  );
};
