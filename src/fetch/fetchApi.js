
const api = async (query) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json();
    const regex = data.results.map((item)=>{
        item.thumbnail = item.thumbnail.replace(/I\.jpg$/, 'W.jpg');
        return item
    })
    console.log(regex)
    return regex;
    
};


export default api;