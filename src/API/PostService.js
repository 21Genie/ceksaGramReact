import axios from 'axios';

export class PostService {
    static async getPosts() {
        const response = await axios.get('https://31.javascript.htmlacademy.pro/kekstagram/data');
        return response.data
    }
}
