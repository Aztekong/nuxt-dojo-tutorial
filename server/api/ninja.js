export default defineEventHandler (async(event) => {

    //handle query params

    //const { name } = getQuery(event)

    //handle post data

   // const { age } = await readBody(event)

    // api call with private key 

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=v2pHYEuQw2MUjAf4ecn4zD4ekra1rXrxFlgZd6Sb')

    return data

})
