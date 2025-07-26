export async function getProductList(searchTerm) 
{
    const url=!searchTerm?'http://localhost:8000/products':`http://localhost:8000/products?name_like=${searchTerm}`
    const response = await fetch(url);
    if(!response.ok)
    {
        throw{message: response.statusText, status:response}.status
    }
    const data = await response.json()
    return data;
}

export async function getProduct(id) 
{
    const response = await fetch(`http://localhost:8000/products/${id}`);
    if(!response.ok)
    {
        throw{message: response.statusText, status:response}.status
    }
        const data = await response.json()
        return data;
}

export async function getFeaturedList() 
{
       const response = await fetch("http://localhost:8000/featured_products");
       if(!response.ok)
    {
        throw{message: response.statusText, status:response}.status
    }
          const data = await response.json()
          return data;
}