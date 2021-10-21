import { createTheme as createMuiTheme, ThemeOptions } from '@mui/material';
import defaultTheme from './default-theme';

const createAppTheme = (theme: ThemeOptions) => createMuiTheme(theme);

const defaultAppTheme = createAppTheme(defaultTheme);

export default defaultAppTheme;
