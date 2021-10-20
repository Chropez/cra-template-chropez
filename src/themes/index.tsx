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
    TypedText: {
      fontFamily: 'monospace',
    },
  },
  secondaryBackground: {
    bgImage: `linear-gradient(
      to right bottom,
      #62a3ff,
      #579af6,
      #4b91ed,
      #3e89e5,
      #3080dc,
      #2779d4,
      #1e71cc,
      #116ac4,
      #0d62bb,
      #085ab1,
      #0452a8,
      #004a9f
    );`,
    textColor: 'white',
    linkColor: '#a7ffa3',
  },
};

const createAppTheme = (theme: ThemeOptions) => createMuiTheme(theme);

const defaultTheme = createAppTheme(defaultMuiTheme);

export default defaultTheme;
