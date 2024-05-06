const loadPhones = async(searchText,datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json(res);
    displayPhones(data.data,datalimit);
}

const displayPhones = (phones, datalimit) =>{
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent = '';
    // display 10 phones only
    const showAll = document.getElementById('show-all');

    if(datalimit && phones.length > 5){
        phones = phones.slice(0,5);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }


    // no phone found
    const no_phone = document.getElementById('no-phone-message');

    if(phones.length === 0){
        no_phone.classList.remove('d-none');
        toggleSpinner(false);
    }
    else{
        no_phone.classList.add('d-none');
    }
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModel">Show Details</button>
                </div>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);
        // stop loader
        toggleSpinner(false);
    });
}

const processSearch = (datalimit) =>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, datalimit);
}

document.getElementById('btn-search').addEventListener('click',function(){
    // start loader
    processSearch(5);
})

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress',function(e){
    console.log(e.key);
    if (e.key === 'Enter'){
        processSearch(5);
    }
})


// loading spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click',function(){
    processSearch();
})

const loadPhoneDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone =>{
    const modalTitle = document.getElementById('phoneDetailModelLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        <p>Release Date : ${phone.releaseDate ? phone.releaseDate : "No Release Date Found"} </p>
        <p> Others : ${phone.others ? phone.others.Bluetooth : "No Bluetooth Information"}
        <p> Storage : ${phone.mainFeatures ? phone.mainFeatures.storage : "No Storage Information Found"}
    `;
}

// loadPhones();