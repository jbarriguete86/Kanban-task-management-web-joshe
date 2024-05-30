

async function fetchData(){
    const response = await fetch("./data.json")
    if(!response.ok){
        throw new Error('Network response was not ok' + response.statusText)
    }
    return await response.json()
}

export default async function initialize(){
    try {
        const boards = await fetchData()
        return boards
    } catch (error){
        console.error('Error fetching data:', error)
    }
}