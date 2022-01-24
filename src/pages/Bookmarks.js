import React from 'react';
import styled from 'styled-components'
import Nav from '../components/Nav';
import CardTrends from '../components/CardTrends';
import CardFollow from '../components/CardFollow';
import NavTopFixe from '../components/NavTopFixe'

const Parent = styled.div`
{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
`
const Div1 = styled.div`
{grid-area: 1 / 1 / 6 / 2; 
border-right : 1px solid lightgray
}
`
const Div2 = styled.div`
{ grid-area: 1 / 2 / 6 / 4;; 
border-right : 1px solid lightgray ;
display : inline-block;
}
`
const Div3 = styled.div`
{grid-area: 1 / 4 / 6 / 6;
// padding:350px 150px ; 
// border-right : 1px solid lightgray ;
margin-right : 50px; 
}
`
const Title= styled.div`
z-index: 1;;
justify-content : space-between;
align-items : center;
`
const Bold= styled.div`
font-weight:bold;
`

const Bookmarks = () => {
    return (
        <div>
           <Parent>
                <Div1>
                    <Nav/>
               </Div1>
               <Div2>
                    <Title>
                        <NavTopFixe/>
                        <br/>
                        <br/>
                        <Bold>
                            <h4>Bookmarks</h4>     
                            <h2>You haven’t added any Tweets to your Bookmarks yet</h2>
                            <p>When you do, they’ll show up here.</p>
                       </Bold>
                     </Title>
                </Div2>
                <Div3>
                    <CardTrends/>
                    <CardFollow/>
                </Div3>
               
               
               
               
            </Parent> 
        </div>
    );
};

export default Bookmarks;