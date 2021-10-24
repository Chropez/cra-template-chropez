import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { ThemeOptions, LinkProps as MuiLinkProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(
  (props, ref) => {
    // eslint-disable-next-line react/prop-types
    const { href, ...other } = props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <RouterLink ref={ref} to={href} {...other} />;
  }
);

const defaultTheme: ThemeOptions = {
  palette: {
    background: {
      default: '#f3f3f3',
    },
  },
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
    linkColor: '#62dafb',
  },
};

export default defaultTheme;
