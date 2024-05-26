//const ipHost = 'http://5.35.86.63:5000';
const ipHost = 'https://nftreegarden.ru';

const user_id = 362172411;

const config = {
    userId: user_id, 
    getScore: () => `${ipHost}/api/users/score`,
    incScore: () => `${ipHost}/api/users/increase-score`,
    getTopUsers: () => `${ipHost}/api/users`,

};

export default config;