import React from 'react';
import NavBarVertical from '../components/NavBarVertical'
import CenterBar from '../components/CenterBar';
import EndBar from '../components/EndBar';
import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-columns: 0.6fr 2fr 1.6fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
max-width: 100%;
overflow-x: hidden;
`



const HomePage = () => {
    return (
        
            <Grid>
                <NavBarVertical/>
                <CenterBar/>
                <EndBar/>
            </Grid>
        
    );
};

export default HomePage;