import axios from "axios";

async function getSong(value) {
    const urrl = `https://saavn.me/search/songs?query=${value}&page=1&limit=2`
    try{
        const response = await axios.get(urrl);
        // const searchData = await response.json().then((data) => data.results);
        console.log(response.data.data.results);
        return response.data.data.results[0].downloadUrl[4].link;
        
    }
    catch (error) {
        console.error(error);
      }
}

export {
    getSong
};
