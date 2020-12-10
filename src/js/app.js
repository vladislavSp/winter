const daysFields = document.querySelectorAll('*[data-days]');
const hoursFields = document.querySelectorAll('*[data-hours]');
const minutesFields = document.querySelectorAll('*[data-minutes]');
const timerDelimetrs = document.querySelectorAll('*[data-delimetr]');
const text = document.querySelector('.sale__text');

// Return Left Time to input date
const getLeftTime = (year = 2021, month = 1, day = 1) => {
  const dateFuture = new Date(year, month, day);
  const dateNow = Date.now();
  const delta = dateFuture.getTime() - dateNow;

  const days = delta / (60000 * 60 * 24);
  const hours = (days % 1) * 24;
  const minutes = (hours % 1) * 60;
  const seconds = (minutes % 1) * 60;

  return {
    days: Math.floor(days),
    hours: Math.floor(hours),
    minutes: Math.floor(minutes),
    seconds: Math.floor(seconds),
    delta,
  };
}


function insertData(data, fields) {
  if (data < 10) {
    fields[0].textContent = 0;
    fields[1].textContent = data;
  } else {
    fields[0].textContent = parseInt(data / 10);
    fields[1].textContent = (data % 10);
  }
}

let firstData = getLeftTime(2020, 10, 27);
let endData = getLeftTime(2020, 10, 30);
let data;

const timer = () => {
  let data = getLeftTime(2020, 10, 27);

  if (data.delta > 0) {
    data = getLeftTime(2020, 10, 27);
    text.textContent = `До начала предложения осталось:`;
  } else {
    data = getLeftTime(2020, 10, 30);
    text.textContent = `До конца действия предложения осталось:`;
  }

  insertData(data.days * 24 + data.hours, daysFields);
  insertData(data.minutes, hoursFields);
  insertData(data.seconds, minutesFields);
}


setInterval(timer, 1000);
