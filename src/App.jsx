import { useState } from 'react';
import './App.css';
import Thecard from './components/GenericCard';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <Thecard title="Did you know?" text="The center of our Milky Way galaxy has a supermassive black hole that's about 4 million times the mass of our Sun!" image=".\Images\Image1.jpg" backgroud="#0b102e"/>
    </>
  );
}

export default App;
