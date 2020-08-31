import axios from 'axios'
const baseURL = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes'
async function quotePost(data) {
    return axios.post(baseURL, data);
}

async function updateQuote(data) {
    return axios.put(baseURL+`/${data.quote.quoteId}`,data)
}

export {quotePost, updateQuote}
