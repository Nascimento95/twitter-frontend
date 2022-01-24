import React from 'react';
import Nav from '../components/Nav';
// import CardFollow from '../components/CardFollow';
import CardTrends from '../components/CardTrends';
import NavTopFixe from '../components/NavTopFixe'
import styled from 'styled-components'

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
     grid-area: 1 / 1 / 6 / 2 
    border-right : 1px solid lightgray ;
    
   
}`


const Div2 = styled.div`
{
    grid-area:1 / 2 / 2 / 3;; 
  
    z-index: 1;
    justify-content: space-between;
    padding : 5px;
    align-items: center;
    &:hover{
    background-color : lightgray;
    transition : 1s;
    // border-top : 1px solid lightgray ;
    // border-left : 1px solid lightgray ;
    // border-right : 1px solid lightgray ;
    // border-bottom : 1px solid lightgray ;
    
   
}`

const Div3 = styled.div`
{
    grid-area: 2 / 2 / 4 / 3;
     
    z-index: 1;
    justify-content: space-between;
    padding : 5px;
    align-items: center;
    &:hover{
    background-color : lightgray;
    transition : 1s;
    
    // border-top : 1px solid lightgray ;
    // border-left : 1px solid lightgray ;
    // border-right : 1px solid lightgray ;
    // border-bottom : 1px solid lightgray ;
}`
const Div4 = styled.div`
{
    grid-area:  4 / 2 / 6 / 3; 
    z-index: 1;
    justify-content: space-between;
    padding : 5px;
    align-items: center;
    &:hover{
    background-color : lightgray;
    transition : 1s;
    // border-top : 1px solid lightgray ;
    // border-left : 1px solid lightgray ;
    // border-right : 1px solid lightgray ;
    // border-bottom : 1px solid lightgray ;
   
}`
const Div5 = styled.div`
{
     grid-area: 1 / 5 / 6 / 6; 
    // border-top : 1px solid lightgray ;
    // border-left : 1px solid lightgray ;
    // border-right : 1px solid lightgray ;
    // border-bottom : 1px solid lightgray ;
   
}`
const Title = styled.div`
{
   font-weight:bold;
//    border-radius: 30px;
   
}`


    
const Explore = () => {
    return (
        <div>
            <Parent>
               
                    <Div1>
                        <Nav />   
                    </Div1>
                    <Div2>
                        <NavTopFixe/>
                        <img src ="https://tinyurl.com/4x4vvj36" style={{height: "380px" , width:"850px"}} alt=" thierry roro"></img>
                   <Title>
                   <h1>#Thierry Rororo </h1>
                    <p>Apres avoir Connue sa on peut mpurrire tranquille</p>
                   </Title>
          
                    
                    </Div2>
                    <Div3 >
                    <h3>GRAND PRIX D’AUTRICHE DE MOTOGP - LA GRILLE DE DÉPART</h3>
                        <img src ="https://tinyurl.com/bdd5p5hr" style={{height: "380px" , width:"850px",borderradius: "30px"}} alt="Fabio "></img>
                        <Title>  
                        <p>Quel journée pour Jorge Martìn. Le rookie espagnol décroche la pole position après être passé par la Q1 en raison d’une chute lors des FP3. Malgré cet inconvénient, Martìn décroche la pole position réalisant un nouveau record de la piste : 1'22'643.
                        Il devance Fabio Quartararo : le leader actuel du classement des pilotes s’élancera de la 2e position lors de la course de demain (à 14h10).
                        Pecco Bagnaia complète la première ligne. Derrière l’italien de Ducati Corse il y a Johann Zarco (4e), Marc Marquez (5e) et Jack Miller (6e). Dans les six premières positions, donc, il y a bien quatre Ducati.
                        Joan Mir, le champion en titre, partira de la 7e position. Aleix Espargaro, Miguel Oliveira et Bran Binder complètent le Top 10.
                        Dans la deuxième partie du classement on y trouve Alex Rins (13e) et Valentino Rossi (18e).

                        </p>
                        <span>
                        Voici la grille de départ complète du Grand Prix d’Autriche 2022.

                        Jorge Martìn - Ducati (Pramac Racing)
                        Fabio Quartararo - Yamaha (Monster Energy)
                        Francesco Bagnaia - Ducati (Lenovo Team)
                        Johann Zarco - Ducati (Pramac Racing)
                        Marc Marquez - Honda (Repsol Team)
                        Jack Miller - Ducati (Lenovo Team)
                        Joan Mir - Suzuki (Team Suzuki Ecstar)
                        Aleix Espargaro - Aprilia (Racing Team Gresini)
                        Miguel Oliveira - KTM  (Red Bull Factory Racing)
                        Brad Binder - KTM  (Red Bull Factory Racing)
                        Pol Espargaro - Honda (Repsol Team)
                        Takaaki Nakagami - Honda (LCR Honda)
                        Alex Rins - Suzuki (Team Suzuki Ecstar)
                        Alex Marquez - Honda (LCR Castrol)
                        Enea Bastianini – Ducati (Esponsorama Racing)
                        Iker Lecuona – KTM (Tech 3 Factory Racing)
                        Luca Marini – Ducati (SKY VR46 Esponsorama)
                        Valentino Rossi – Yamaha (Petronas Yamaha SRT)
                        Danilo Petrucci - KTM (Tech 3 Factory Racing)
                        Cal Crutchlow - Yamaha (Petronas Yamaha SRT
                        </span>
                        </Title>
                    </Div3>
                    <Div4 >
                         
                            <Title><h3>#Nouvelle Chico</h3></Title>
                                <img src ="data:image/jpeg;base64,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" style={{height: "300px"}} alt=" "></img>
                               <Title> <h3>#Nouvelle gova</h3> </Title>
                                <img src ="https://tinyurl.com/2ujywmdr" style={{height: "450px", width:"850px"}}alt="lolo"></img>
                               <Title> <span>Un collectionneur anonyme a acheté la voiture de James Bond dans le dernier film Spectre, la fameuse Aston Martin DB10 dans une vente aux enchères à Londres pour la somme de 3 millions d’euros.</span></Title>
                        
                    </Div4>
                    <Div5 >
                        <h6>POPOPOPOPOPO</h6>
                    <CardTrends/>
                    
                    </Div5>
                    
            </Parent>
            
            
         
        </div>
    );
};

export default Explore;