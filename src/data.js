export default fetch('https://api.hh.ru/areas').then((res) => {
    return res.json();
}).then((data) => {
    return dataConversion(data);
});

function dataConversion(data) {
    let cities = [];
    data[0].areas.map(region => cities.push(...region.areas));

    return cities;
}
