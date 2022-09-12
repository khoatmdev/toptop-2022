import React from 'react';
import { styled } from '@mui/material';
import AppBarMui from '@mui/material/AppBar';

export const AppBar = styled(props => (
    <AppBarMui {...props} position="sticky" />
))`
    height: 60px;
    width: 100%;
    box-shadow: 0px 1px 1px rgba(0 0 0 / 12%);
    background-color: white;
    color: red;
`;
