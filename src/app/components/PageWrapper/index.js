import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

export const PageWrapper = styled(props => (
    <Container {...props} maxWidth="lg" />
))({
    margin: '0 auto',
    padding: '0 1.5rem',
});
