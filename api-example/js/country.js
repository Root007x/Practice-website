const load_country = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => display_countries(data))
}

const display_countries = countries => {
    // for(const country of countries){
    //     console.log(country)
    // }
    const contries_container = document.getElementById('countries-container');
    
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3> Name : ${country.name.common}</h3>
            <p> Capital : ${country.capital ? country.capital[0] : "No Capital" } </p>
            <button onclick="load_couuntry_detail('${country.cca2}')">Details</button>
        `;
        contries_container.appendChild(countryDiv);
    });
}

const load_couuntry_detail = (country_code) => {
    const url = `https://restcountries.com/v3.1/alpha/${country_code}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => dislay_country_details(data[0]))
}

const dislay_country_details = country => { 

    const countryDetail = document.getElementById('country-detail');

    countryDetail.innerHTML = `
        <h2>Details : ${country.name.common}</h2>
        <img src="${country.flags.png}">
    `;
}

load_country();