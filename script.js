const apiKey = 'bef275073f83285769007b618650baf2'
const btn = document.querySelector('#search')
const cityData = document.querySelector('#city-data')
const cityName = document.querySelector('#city') // nome
const container = document.querySelector('.container') //image
const tem = document.querySelector('#temp') // temperatura
const mm = document.querySelector('#mm')
const des = document.querySelector('#des') // clima
const umi = document.querySelector('#humidity span') // umidade
const wind = document.querySelector('#wind span') // vento
const weather = document.querySelector('.weather-data')

cityData.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        const city = cityData.target.value

        weatherData(city)
    }
})

btn.addEventListener('click', async function weatherData(d) {

    const city = cityData.value
    d.preventDefault()
    // showData(city)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    if (data?.cod && data.cod === '404') {
        return alert('Cidade não encontrada, tente novamente.')
    } else {
        showData(data)
    }
})

function showData(city) {
    weather.style.display = 'block'

    cityName.innerText = city.name
    tem.innerHTML = parseInt(city.main.temp) + '&deg;C'
    des.innerText = city.weather[0].description
    mm.innerHTML = parseInt(city.main.temp_max) + '&deg;/' + parseInt(city.main.temp_min) + '&deg;'
    const desc = city.weather[0].description.replace(/\s/g, '')
    container.style.backgroundImage = `url(../Tempo/img/${desc}.jpg)`
    umi.innerText = city.main.humidity + '%'
    wind.innerText = parseInt(city.wind.speed) + 'km/h'

}







