import React from 'react';
import { Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Wrapper } from './Wrapper';
import { AppBar } from './AppBar';
import Logo from './Logo';

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
                    <Logo />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Wrapper>
        </AppBar>
    );
};

export default Header;
