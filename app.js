document.addEventListener('DOMContentLoaded', () => {

  const countrySelect = document.querySelector('#countries');
  const stateSelect = document.querySelector('#state');
  let allCountries = []
  let curentCountry
  const populateState = () => {
    let output
    curentCountry.states.forEach(state => {
      output += `<option value="${state.name}">${state.name}</option>`
    })
    stateSelect.innerHTML = output
  }
  fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json').then(res => {
    return res.json();
  }).then(data => {
    allCountries = data;
    let output = "";
    data.forEach(country => {
      output += `
      <option value="${country.name}">${country.name}</option>`;
    })

    countrySelect.innerHTML = output;
  }).catch(err => {
    console.log(err);
  })
  countrySelect?.addEventListener('change', (event) => {
    curentCountry = allCountries.find(country => country.name === event.target.value)
    populateState()
    
  })
});
