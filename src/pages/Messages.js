import React from 'react';
import styled from 'styled-components'
import Nav from '../components/Nav';
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
}
`
const Div2 = styled.div`
{ grid-area: 1 / 2 / 6 / 4;; 
border-right : 1px solid lightgray ;
display : inline-block;
}
`
const Div3 = styled.div`
{   grid-area: 1 / 4 / 6 / 6;
    padding:350px 150px ; 
    border-right : 1px solid lightgray ;
    margin-right : 50px; 
}
`
const Title= styled.div`
    display:flex;
    justify-content : space-between;
    align-items : center;
`
const Button = styled.button`
{ border-radius: 40px ;
  background :  ;
  margin-right: 10px ;
  width : 420px;
  height : 80px;
  background: #1D9BF0;
  color : white; 
}
`
const Icons  = styled.div`
{ border-radius: 10px ;
  margin-right: 10px ;
}
`
const Button2 = styled.button`
{ border-radius: 40px ;
  background :  ;
  margin-right: 10px ;
  width : 420px;
  height : 80px;
  background: #1D9BF0;
  color : white; 
}
`
const Messages = () => {
    return (
        <div>

           <Parent>
               <Div1>
                   <Nav />
               </Div1>
                <Div2>
                    <Title>
                        <h4>Messages</h4> 
                        <div className="d-flex">
                            <Icons> <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/30/000000/external-setting-user-interface-kmg-design-detailed-outline-kmg-design.png" alt="setting"/> </Icons>
                            <Icons> <img src="https://img.icons8.com/pastel-glyph/30/000000/new-message--v2.png"  alt="messageIcone" /> </Icons> 
                        </div>
                     
                    </Title>
                       <h1>Send a message, get a message</h1>
                       <p>Direct Messages are private conversations between you and other 
                           people on Twitter. Share Tweets, media, and more!</p>
                        <Button> Start conversation</Button>
                </Div2>
                <Div3>
                    <h2>You don’t have a message selected</h2>
                    <p>Choose one from your existing messages, or start a new one.</p>
                    <Button2> New Message</Button2>
                </Div3>
           </Parent>
           
        </div>
    );
};

export default Messages;