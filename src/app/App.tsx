import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { 
  CountriesPage,
  CountryDetailsPage
} from '../pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountriesPage />} />
      <Route path="/details/:countryCode" element={<CountryDetailsPage />} />
    </Routes>
  );
}

export default App;
