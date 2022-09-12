import React from 'react';
import { Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Wrapper } from './Wrapper';
import { AppBar } from './AppBar';

const Header = () => {
    return (
        <AppBar position="static">
            <Wrapper>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { md: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}>
                        LOGO
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Wrapper>
        </AppBar>
    );
};

export default Header;
