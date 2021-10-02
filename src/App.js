// import Main from './componentsold/main/Main';
// import Navbar from './componentsold/navbar/Navbar'
// import { Container } from 'react-bootstrap';
// import Movies from './container/Shows';
// import { ShowProvider } from './Contexts/Contexts'
// import SimpleTabs from './components/Tabs/TabsComponent'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShowDescription from './container/ShowDescription';
import SignIn from './components/LoginPage/SignIn';
import MainComponent from './MainComponent';
import SignUp from './components/Registration/Signup';
import RentedItems from './components/Cart/RentedItems';
import PurchaisedItems from './components/Cart/PurchaisedItems';
function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <SignIn></SignIn>
        </Route>

        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>
        <Route path='/signup'>
          <SignUp></SignUp>
        </Route>

        <Route exact path='/movie'>
          <MainComponent></MainComponent>
        </Route>

        <Route exact path='/:category/:id'>
          <ShowDescription></ShowDescription>
        </Route>

        <Route exact path='/tv'>
          <MainComponent></MainComponent>
        </Route>

        <Route exact path='/:category/:id'>
          <ShowDescription></ShowDescription>
        </Route>

        <Route exact path='/rented'>
          <RentedItems></RentedItems>
        </Route>

        <Route exact path='/purchaised'>
          <PurchaisedItems></PurchaisedItems>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;






    // <Container fluid>
    //   <Navbar></Navbar>

    //     <div style={{ position: "relative", top: "5rem" }}>

    //       <BrowserRouter>
    //         <Switch>

    //           <Route exact path='/'>
    //             <div style={{ marginTop: "1rem" }}>
    //               <SimpleTabs></SimpleTabs>
    //             </div>
    //           </Route>

    //           <Route exact path='/movie'>
    //             <div style={{ marginTop: "1rem"}}>
    //               <SimpleTabs></SimpleTabs>
    //             </div>
    //           </Route>

    //           <Route exact path='/:category/:id'>
    //             <ShowDescription></ShowDescription>
    //           </Route>

    //           <Route exact path='/tv'>
    //             <div style={{ marginTop: "1rem" }}>
    //               <SimpleTabs></SimpleTabs>
    //             </div>
    //           </Route>

    //           <Route exact path='/:category/:id'>
    //             <ShowDescription></ShowDescription>
    //           </Route>

    //         </Switch>
    //       </BrowserRouter>

    //     </div>

    // </Container>