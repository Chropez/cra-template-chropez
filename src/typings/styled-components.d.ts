import { MainTheme } from '../themes';
import { Theme as MuiTheme } from '@mui/material/styles/createTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MuiTheme {}
}
