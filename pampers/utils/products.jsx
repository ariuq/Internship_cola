

//   export const data = () => {
//     fetch("http://66.181.175.237:8881/api/product")
//     .then(r => r.json().then(data=> ({status: r.status, body: data})))
//     .then(obj => console.log("PROOODUUUCT"+obj))
//     // console.log("PROOODUUUCT"+ product);
//   }


export const fetchData = async () => {
      const response = await fetch('https://mocki.io/v1/108e5d38-2f0b-4fc7-a3e7-df1a39a0fc2c');
      const data = await response.json();
      return data;
  };
  