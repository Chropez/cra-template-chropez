import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { createTheme as createMuiTheme, LinkProps, Theme, ThemeOptions } from '@mui/material';

const LinkBehavior = React.forwardRef<
    any,
    Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
    const { href, ...other } = props;
    return <RouterLink ref={ref} to={href} {...other} />;
});

const defaultMuiTheme: ThemeOptions = {
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
        MyOwnComponent: {
            color: 'teal'
        }
    },
    secondaryBackground: {
        textColor: 'green'
    }
}

const createAppTheme = (theme: ThemeOptions) => {
    return createMuiTheme(theme);
};

const defaultTheme = createAppTheme(defaultMuiTheme);

export default defaultTheme;