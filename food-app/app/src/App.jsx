import styled from 'styled-components';
const App = () => {
  return (<Container>
    <TopContainer>
      <div className="logo">
        <img src="./images/logo.svg" alt="logo"></img>
      </div>
      <div className="search"><input placeholder="search food here"/></div>
    </TopContainer>
  </Container>
)};
export default App;
const Container =styled.div`
background-color:#323334;
max-width:1200px;
margin:0 auto;
`;
const TopContainer=styled.section`
min-height:140px;
display:flex;
justify-content:space-between;
padding:16px;
align-items:center;
.search{
  input{
background-color:transparent;
border:1px solid red;
color:white;
border-radius:5px;
height:40px;
font-size:16px;
  }
}

`;
