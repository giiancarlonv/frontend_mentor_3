
document.querySelector('.js-calc-button').addEventListener('click', () => {
  ageCalculator();
  
}) 
removeError();
const ageCalculator = () =>{ 
  const day = document.querySelector('.js-date').value,
    month = document.querySelector('.js-month').value,
    year = document.querySelector('.js-year').value;
  let date = new Date(),
      d2 = date.getDate(),
      m2 = 1 + date.getMonth(),
      y2 = date.getFullYear(),
      months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if(!month){
    document.querySelector('.js-error').classList.add('error-label');
    document.querySelector('.error-month').innerHTML = 'This field is required';
    document.querySelector('.js-label-month').setAttribute('id', 'invalid-label');
    document.querySelector('.js-month').setAttribute('id', 'invalid-date-input');
  }else if(month < 1 || month > 12){
    document.querySelector('.js-error').classList.add('error-label');
    document.querySelector('.error-month').innerHTML = 'Must be valid month';
    document.querySelector('.js-label-month').setAttribute('id', 'invalid-label');
    document.querySelector('.js-month').setAttribute('id', 'invalid-date-input');
  }

  if(!day){
    document.querySelector('.js-error').classList.add('error-label');
    document.querySelector('.error-day').innerHTML = 'This field is required';
    document.querySelector('.js-label-day').setAttribute('id', 'invalid-label');
    document.querySelector('.js-date').setAttribute('id', 'invalid-date-input');
  }
  else if(day < 1 || day > 31){
    document.querySelector('.js-error').classList.add('error-label');
    document.querySelector('.error-day').innerHTML = 'Must be valid day';
    document.querySelector('.js-label-day').setAttribute('id', 'invalid-label');
    document.querySelector('.js-date').setAttribute('id', 'invalid-date-input');
  }

  if(!year){
    document.querySelector('.js-error').classList.add('error-label');
    document.querySelector('.error-year').innerHTML = 'This field is required';
    document.querySelector('.js-label-year').setAttribute('id', 'invalid-label');
    document.querySelector('.js-year').setAttribute('id', 'invalid-date-input');
  }
  else if(!year || year > y2){
    document.querySelector('.js-error').classList.add('error-label');
    document.querySelector('.error-year').innerHTML = 'Must be in the past';
    document.querySelector('.js-label-year').setAttribute('id', 'invalid-label');
    document.querySelector('.js-year').setAttribute('id', 'invalid-date-input');
  }
  if(!day && !month && !year){
    document.querySelector('.js-error').classList.add('error-label');
    document.querySelector('.error-day').innerHTML = 'This field is required';
    document.querySelector('.error-month').innerHTML = 'This field is required';
    document.querySelector('.error-year').innerHTML = 'This field is required';
  }
  if(day > d2){
    d2 = d2 + months[m2 - 1];
    m2 = m2 - 1;
  }
  if(month > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let d = d2 - day;
  let m = m2 - month;
  let y = y2 - year;

  if(day === '' && month === '' && year === '' ){
    return false;
  }
  else if(day > 31 || month > 12 || year > y2){
    document.querySelector('.js-calc-day').innerHTML = `--`;
    document.querySelector('.js-calc-month').innerHTML = `--`;
    document.querySelector('.js-calc-year').innerHTML = `--`;
  }
  
  else{
    document.querySelector('.js-calc-day').innerHTML = `${d}`;
    document.querySelector('.js-calc-month').innerHTML = `${m}`;
    document.querySelector('.js-calc-year').innerHTML = `${y}`;
  }
  
} 

function removeError() {
  /*
    document.querySelector('.js-error').classList.remove('error-label');

    document.querySelector('.js-label-year').removeAttribute('id');
    document.querySelector('.js-year').removeAttribute('id');

    document.querySelector('.js-label-month').removeAttribute('id');
    document.querySelector('.js-month').removeAttribute('id');

    document.querySelector('.js-label-day').removeAttribute('id');
    document.querySelector('.js-date').removeAttribute('id');*/
  const day = document.querySelector('.js-date'),
    month = document.querySelector('.js-month'),
    year = document.querySelector('.js-year');

    day.value = '';
    month.value = '';
    year.value = '';
}

