import React from 'react';
import styled from 'styled-components'
import CardFollow from '../components/CardFollow';
import CardTrends from '../components/CardTrends';
import Nav from '../components/Nav';
const Parent = styled.div`
{
    display: grid;
    grid-template-columns: 1fr 2fr repeat(2, 0fr) 1fr;
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
    grid-area: 1 / 2 / 2 / 3;
    border-left : 1px solid lightgray ;
    margin-right : 50px; 
    border-bottom: 1px solid lightgray;
}`
const Div3 = styled.div`
{                                                               
 grid-area: 2 / 2 / 4 / 3;
 border-left : 1px solid lightgray ;
}`
const Div4 = styled.div`
{                                                               
 grid-area: 4 / 2 / 6 / 3;
 border-top: 1px solid lightgray;
 border-left : 1px solid lightgray

}`
const Div5 = styled.div`
{                                                               
 grid-area: 1 / 5 / 6 / 6;
 border-left: 1px solid lightgray;
}`


const Title= styled.div`
    display:flex;
    justify-content : space-between;
    align-items : center;
 
`
const Icons  = styled.div`
{ border-radius: 10px ;
  margin-right: 10px ;
  &:hover {
  background-color: #e5e5e5;
}`
const Titele2Contenaire2  = styled.div`
{  
  margin-right: 10px ;
 
}`

const Flex = styled.div`
display: flex;
justify-content: space-between;
padding : 5px;
align-items: center;
&:hover{
background-color : lightgray;
transition : 1s;
}
`
const Button = styled.button`
background-color: #EFF3F4;
color: #0F1419;
width: 20%;
height : 50%;
padding: 0px 10px;
border-radius : 20px;
border-color: black;
&:hover{
    opacity : 0.7
}
`
const Text = styled.div`
span {color : grey};
div {
    color : black;
    &:hover{
        text-decoration: underline;
        transition : 1s;}}
`
const Container = styled.div`
background-color: #F7F9F9;
border radius: 10px;
margin: 30px 0px;
border-radius: 10px;
padding: 5px;
with: 100%;`

const List = () => {
 
        
  
    return (
        <div>
            <Parent>
                <Div1>
                    <Nav />
                </Div1>
                <Div2>
                    <Title>  
                    <div className="d-flex">
                            <Icons> <img src="https://img.icons8.com/external-line-icons-royyan-wijaya/30/000000/external-arrow-arrow-me-line-icons-royyan-wijaya-7.png" alt='icon'/> </Icons>
                            <h4>Comment</h4>
                    </div>
                    <div className="d-flex">
                            <Icons> <img src="https://img.icons8.com/wired/30/000000/add-list.png" alt="IconeNewList"/> </Icons>
                            <Icons> <img src="https://img.icons8.com/material-outlined/30/000000/more.png" alt="IconeMore" /> </Icons> 
                    </div>
                    </Title>
                            <h4>Pinned Lists</h4>
                            <p> Nothing to see here yet — pin your favorite Lists to access them quickly.</p> 
                </Div2>
                <Div3>
                        <Titele2Contenaire2>
                            <h4>Discover new Lists</h4>
                        </Titele2Contenaire2>
                       
                    {/* <CardFollow/> */}
                    <Container>
                        <Flex>
                        <img src="https://img.icons8.com/cute-clipart/64/000000/add-property.png" alt='icon'/>
                            <Text>
                                <h5>Journaliste</h5>
                                <p>Patric le technique</p>
                            
                            </Text>
                            <Button>Follow</Button>

                        </Flex>
                        <Flex>
                        <img src="https://img.icons8.com/cute-clipart/64/000000/add-property.png" alt='icon'/>
                            <Text>
                                <h5>Journaliste</h5>
                                <p>Monsieur Popo</p>
                            
                            </Text>
                            <Button>Follow</Button>

                        </Flex>
                        <Flex>
                        <img src="https://img.icons8.com/cute-clipart/64/000000/add-property.png" alt='icon'/>
                            <Text>
                                <h5>Journaliste</h5>
                                <p>Toto le Fourbe</p>
                            
                            </Text>
                            <Button>Follow</Button>

                        </Flex>
                    </Container>
                </Div3>
                <Div4>
                    <h4>Your Lists</h4>
                    <p>You haven't created or followed any Lists. When you do, they'll show up here.</p>
                </Div4>
                <Div5>
                    <CardTrends />
                    <CardFollow/>
                </Div5>
            </Parent>
        </div>
    );
};

export default List;