import React, { useState, useEffect} from 'react';
import './App.css';
import { MenuItem, FormControl, Select, Menu, Card, CardContent} from "@material-ui/core";
import InfoBox from './InfoBox'
import Map from './Map'




function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});


  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
    })
  }, []);


  
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

    const url = countryCode === 'worldwide' 
    ? `https://disease.sh/v3/covid-19/all` 
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode)

    // All of the Data from the coutnry response
      setCountryInfo(data);
    })
    
  };

  console.log("country info ayo", countryInfo)



  return (
    <div className="app">
       <div className="app_left">
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
      <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />

      <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />

      <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />


       

    </div>


    {/* Header*/}
    
     {/* Titile + Select input dropdown field*/}

    {/* infoboxes*/}
    {/* infoboxes*/}
    {/* infoboxes*/}


      {/* Map */}
<Map />

        </div>

      <Card className="app_right">

        <CardContent>
            <h3> Live cases by country</h3>


            <h3> Worldwide new cases</h3>
        </CardContent>
     {/* Table*/}
      {/* Graph*/}
      </Card>

    </div>
  );
}

export default App;
