
export const addToCart = (cartProducts, product) => {
    const existingProductIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.product === product
    );
  
    if (existingProductIndex !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingProductIndex].count += 1;
      return updatedCartProducts;
    } else {
      return [...cartProducts, { product, count: 1 }];
    }
  }
  
  export const getProductCartCount=(cartProducts, product)=> {
    const cartProduct = cartProducts.find(
      (cartProduct) => cartProduct.product === product
    );
    return cartProduct ? cartProduct.count : 0;
  }
  
  export const getTotalCartItems=(cartProducts)=> {
    return cartProducts.reduce((total, cartProduct) => total + cartProduct.count, 0);
  }
  