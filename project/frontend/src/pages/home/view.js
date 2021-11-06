import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
padding: 0;
position: absolute;

`

export const Card = styled.div`
  background: #b2b2b2;
  width: 450px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;
export const TitleContainer = styled.ul`
list-style:none
`

export const Title = styled.li`
margin-bottom: 20px;
font-size: large;
font-weight:bold
`
