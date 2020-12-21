import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000' });

const switchToSingle = async () => {
    const {data} = await instance.get('/single_player');
    console.log(data);
}

const switchToMultiple = async () => {
    const {data} = await instance.get('/multiple_player');
    return data;
}

const switchToRule = async () => {
    const {data} = await instance.get('/rule');
    return data;
}

const switchToLeaderboard = async () => {
    const {data} = await instance.get('/leaderboard');
    return data;
}

const switchToAuthor = async () => {
    const {data} = await instance.get('/author');
    return data;
}

const backToLobby = async () => {
    const {data} = await instance.get('/');
    console.log(data);
}

export { switchToSingle, switchToMultiple, switchToRule, switchToLeaderboard, switchToAuthor, backToLobby };