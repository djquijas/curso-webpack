const API = process.env.API;

const getData = async (id) => {
    const apiURL = id ? `${API}${id}`: API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.results[0];
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;