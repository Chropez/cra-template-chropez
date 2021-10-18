import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { createTheme as createMuiTheme, LinkProps as MuiLinkProps, ThemeOptions } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(
  (props, ref) => {
    // eslint-disable-next-line react/prop-types
    const { href, ...other } = props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <RouterLink ref={ref} to={href} {...other} />;
  }
);

const defaultMuiTheme: ThemeOptions = {
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as MuiLinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MyOwnComponent: {
      color: 'teal',
    },
  },
  secondaryBackground: {
    textColor: 'green',
  },
};

const createAppTheme = (theme: ThemeOptions) => createMuiTheme(theme);

const defaultTheme = createAppTheme(defaultMuiTheme);

export default defaultTheme;
