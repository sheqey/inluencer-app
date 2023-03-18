fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
      // Handle the data here
      console.log(data);
  
      // Display the products
      const productsDiv = document.getElementById('MixItUp889961');
      data.products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-lg-3 col-md-4 col-sm-6 mix ' + product.category;
        productDiv.innerHTML = `
          <div class="product__item" >
            <div class="product__item__pic set-bg" data-setbg="${product.thumbnail}" style="background-image: url(${product.thumbnail});">
              ${product.new ? '<div class="label new">New</div>' : ''}
              <ul class="product__hover">
                <li>
                  <a href="${product.thumbnail}" class="image-popup">
                    <span class="arrow_expand"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon_heart_alt"></span>
                    
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon_bag_alt"></span>
                  </a>
                
                </li>
              
              </ul>
             
            </div>
            <div class="product__item__text">
              <h6>
                <a class="product__name" href="#">${product.title}</a>
              </h6>
              <div class="rating">
                ${getStars(product.rating)}
              </div>
              <div class="product__price">$ ${product.price}</div>
              <button class="add-to-cart">Add to Cart</button>
            </div>
          
          </div>
         
        `;
        productsDiv.appendChild(productDiv);
      });
    })
    .catch(error => console.error(error));
  
  function getStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '  <i class="fa fa-star">  </i>';
    }
    return stars;
  }
  