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
            <button class="flag-div-butn">Details</button>
        </div>
        `;
        countriesContainer.appendChild(CreatDiv);

    });

}


countries();
