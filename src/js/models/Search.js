//beb3c582f880ee3e696e138d987279a6
//http://food2fork.com/api/search 
import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com'
        const key = "beb3c582f880ee3e696e138d987279a6";
        try {
            const res = await axios(`${proxy}/http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
       
    };
}




