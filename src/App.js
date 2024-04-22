import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"

import HeaderBar from './Top_Section/HeaderBar';
import TopSection from './Top_Section/Top_Section';
import MiddleSection from './Middle_Section/Middle_Section';
import BottomSection from './Bottom_Section/Bottom_Section';

import CardDetails from './Card_Details/CardDetails';

import ViewCV from './CV/ViewCV';

import Socials from './Socials/Socials';
function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="/" exact element={
        <>
          <TopSection />
          <MiddleSection />
        </>
        }></Route>
        <Route path="/card-details/:id" exact element={
          <CardDetails />
        }></Route>
        <Route path="/CV" exact elements={
          <ViewCV />
        }></Route>
        <Route path="/Socials" exact elements={
          <Socials />
        }></Route>
      </Routes>
      
      <BottomSection />
    </BrowserRouter>
  );
}

export default App;
