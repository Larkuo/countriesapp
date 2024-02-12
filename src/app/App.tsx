import React, { useContext } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { 
  CountriesPage,
  CountryDetailsPage
} from '../pages';
import { ThemeContext } from '../theme/ThemeContext';
import { colors } from '../theme/theme';

function App() {
  const {theme} = useContext(ThemeContext);
  
  const styles = {
    app:theme === "light" ? {
        backgroundColor: colors.light.background,
    } : {
        backgroundColor: colors.dark.background,
    },
}

  return (
    <div className='app' style={styles.app}>
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/details/:countryCode" element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
