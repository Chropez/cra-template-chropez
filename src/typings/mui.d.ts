/* eslint-disable @typescript-eslint/no-empty-interface */
import { PartialDeep } from 'type-fest';

interface ExtendedComponents {
  TypedText?: {
    color?: string;
    fontFamily?: string;
  };
}

interface ExtendedTheme {
  secondaryBackground: {
    bgImage: string;
    linkColor: string;
    textColor: string;
    secondaryTextColor: string;
  };
}

declare module '@mui/material/styles/components' {
  export interface Components extends ExtendedComponents {}
}

declare module '@mui/material/styles/createTheme' {
  export interface Theme extends ExtendedTheme {}
  export interface ThemeOptions extends PartialDeep<ExtendedTheme> {}
}
