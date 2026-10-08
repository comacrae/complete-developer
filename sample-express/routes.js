const routeHello = () => "Hello World!";
const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const res = await fetch(url);
        data = (await res.json());
    }
    catch (error) {
        return "Error";
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br/>");
    return names;
};
const routeWeather = (query) => queryWeatherData(query);
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
export { routeHello, routeAPINames, routeWeather };
//# sourceMappingURL=routes.js.map