// const button = document.getElementById('search-button');
// const input = document.getElementById('city-input');

// const cityName = document.getElementById('city-name');
// const cityTime = document.getElementById('city-time');
// const cityTemp = document.getElementById('city-temp');

// async function getData(cityName) {                            // ✅ Fix 1: added 'city' parameter
//     const promise = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=4b5f5e8d1bf545ae95375736262402&q=${cityName}&aqi=yes`  // ✅ Fix 2: https
//     );
//     return await promise.json();
// }

// button.addEventListener("click", async () => {
//     const value = input.value;
//     const result = await getData(value);                  

//     cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;
//     cityTime.innerText = result.location.localtime;
//     cityTemp.innerText = result.current.temp_c + "°C";   
// });

const button = document.getElementById('search-button');
const input  = document.getElementById('city-input');

const cityName      = document.getElementById('city-name');
const cityTime      = document.getElementById('city-time');
const cityTemp      = document.getElementById('city-temp');
const cityCondition = document.getElementById('city-condition');
const cityFeels     = document.getElementById('city-feels');
const cityHumidity  = document.getElementById('city-humidity');
const cityWind      = document.getElementById('city-wind');
const resultEl      = document.getElementById('result');
const errorEl       = document.getElementById('error-msg');
const hintEl        = document.getElementById('hint');

async function getData(city) {
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=4b5f5e8d1bf545ae95375736262402&q=${city}&aqi=yes`
    );

    if (!res.ok) throw new Error('City not found');

    return res.json();
}

button.addEventListener('click', async () => {
    const value = input.value.trim();
    if (!value) return;

    // Reset UI
    button.textContent = '...';
    button.classList.add('loading');
    errorEl.classList.remove('show');
    resultEl.classList.remove('visible');
    hintEl.classList.add('hidden');

    try {
        const result = await getData(value);

        cityName.textContent      = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
        cityTemp.textContent      = result.current.temp_c;
        cityTime.textContent      = `Local time: ${result.location.localtime}`;
        cityCondition.textContent = result.current.condition.text;
        cityFeels.textContent     = `${result.current.feelslike_c}°C`;
        cityHumidity.textContent  = `${result.current.humidity}%`;
        cityWind.textContent      = `${result.current.wind_kph} km/h`;

        // Animate in
        requestAnimationFrame(() => {
            resultEl.classList.add('visible');
        });

    } catch (e) {
        errorEl.classList.add('show');
        hintEl.classList.remove('hidden');
    } finally {
        button.textContent = 'Search';
        button.classList.remove('loading');
    }
});

// Allow Enter key
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') button.click();
});