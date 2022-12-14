load()
async function load(){
    let url='https://fakestoreapi.com/products'
    const data = await fetchData(url)

    const table=document.getElementById('tableBody')
    data.forEach(d => {
        const row = table.insertRow()
        const no = row.insertCell()
        no.innerHTML=d.id 

        const title = row.insertCell()
        title.innerHTML=d.title
        
        const price = row.insertCell()
        price.innerHTML=d.price

        const desc = row.insertCell()
        desc.innerHTML=d.description

        const category = row.insertCell()
        category.innerHTML=d.category
    });
}

async function fetchData(url) {
    const resp = await fetch(url)
    return resp.json()
}