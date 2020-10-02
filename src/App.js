import React, { useState, useEffect} from 'react';
import './App.css';
import { MenuItem, FormControl, Select, Menu} from "@material-ui/core";
import InfoBox from './InfoBox'



function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')
  
useEffect(() => {
  const getCountriesData = async () => {
    await fetch ("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.map((country) => (
        {
          name: country.country, // United States
          value: country.countryInfo.iso2, // US
        }));

        setCountries(countries);
    });
  };

  getCountriesData();
}, []);


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);
  }


  return (
    <div className="app">
     
     <div className="app_header">

     <h1>Tracking Covid 19</h1>

     <FormControl className="app-dropdown">
       <Select 
          variant="outlined"
          onChange={onCountryChange}
          value={country} >
             <MenuItem value="worldwide">Worldwide</MenuItem>
           {countries.map(country => (
               <MenuItem value={country.value}>{country.name}</MenuItem>
             ))}
        </Select>
     </FormControl>

     </div>

    
    <div className="app_stats">
      <InfoBox title="Coronavirus Cases" cases={123} total={2000} />

      <InfoBox title="Recovered" cases={123} total={3000} />

      <InfoBox title="Deaths" cases={123} total={4000} />


       

    </div>


    {/* Header*/}
    
     {/* Titile + Select input dropdown field*/}

    {/* infoboxes*/}
    {/* infoboxes*/}
    {/* infoboxes*/}

     {/* Table*/}
      {/* Graph*/}


      {/* Map */}

    </div>
  );
}

export default App;
