export async function getProducts () {
    const res = await fetch('http://66.181.175.237:8881/api/product')
    if(!res.ok) {
        throw new Error ("fail")
    }
    return res.json()
}