

//   export const data = () => {
//     fetch("http://66.181.175.237:8881/api/product")
//     .then(r => r.json().then(data=> ({status: r.status, body: data})))
//     .then(obj => console.log("PROOODUUUCT"+obj))
//     // console.log("PROOODUUUCT"+ product);
//   }


 export const fetchData = () => {
    fetch('http://66.181.175.237:8881/api/product') 
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch (error => {
        console.error(error);
        throw error
    });

  }