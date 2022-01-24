import React from 'react';
import NavBarVertical from '../components/NavBarVertical';
import styled from 'styled-components'

const Parent = styled.div`
{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}`
const Div1 = styled.div`
{
    grid-area: 1 / 1 / 6 / 2;
}`
const Div2= styled.div`
{
    grid-area: 1 / 2 / 6 / 5;
}`
const Div3 = styled.div`
{
    grid-area: 1 / 5 / 6 / 6;
}`




const List = () => {
 
        

    return (
        <div>
            
        </div>
    );
};

export default List;