

async function getApiRequest(url) {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .catch(err => console.log(err))
        
        if(res) {
            return res.json()
        }
        return res
}

export default getApiRequest