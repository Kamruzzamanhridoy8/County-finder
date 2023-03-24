const countries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries = country =>{
    const countriesContainer = document.getElementById('countries-container')
    country.forEach(element => {
        console.log(element.name.common);
        const CreatDiv = document.createElement('div');
        CreatDiv.innerHTML = `
        <div class="flags-div">
            <div>
                <div class="flag-img-div">
                    <img class="flags" src="${element.flags.png}" alt="">
                </div>
                <h1 class="flag-name">${element.name.common}</h1>
            </div>
            <button onclick="loadCountryDetails('${element.cca2}')" class="flag-div-butn">Details</button>
        </div>
        `;
        countriesContainer.appendChild(CreatDiv);
    });

}

const loadCountryDetails = (code)=>{
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res=>res.json())
        .then(data=>displayCountryDetails(data[0]))
}

const displayCountryDetails = country=>{
    // <img class="showFlag" src="${country.coatOfArms.png}">
    const countryArea = document.getElementById('country-details-area');
    countryArea.innerHTML=`
    <div class="display-container">
        <div class="flagImg">
            <div class="">
                <img class="showFlag" src="${country.flags.png}" alt="">
            </div>
            <div>
            <a class="icon" target="_blank" href="${country.maps.googleMaps}"><i class="fa-solid fa-location-dot fa-bounce"></i></a>
            </div>
            <div class="Arms-div">
                <h3>COAT OF ARMS</h3>
                <img class="coatofarms" src="${country.coatOfArms.png?country.coatOfArms.png:'Not Avaiable'}">
            </div>
        </div>
        <div class="country-info">
            <h3>Name: ${country.name.common}</h3>
            <p>Official: ${country.name.official}</p>
            <p>Capital: ${country.capital?country.capital[0]: 'No Capital'}</p>
            <p>Region: ${country.region}</p>
            <p>Demonyms: ${country.demonyms.eng.f}</p>
            <p>Area: ${country.area}</p>
            <p>Population: ${country.population}</p>
            <p>Timezone: ${country.timezones}</p>
            <p>Idd: ${country.idd.root}</p>
            <p>Tld: ${country.tld}</p>
            <p>Short Form: ${country.cca2}</p>
            
        </div>
    </div>
    `
}
countries();
