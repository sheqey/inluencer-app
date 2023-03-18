
  $(document).ready(function() {
    $('.checkout-button').click(function() {
      var products = [];
      $('.cart-items li').each(function() {
        var name = $(this).find('.cart-item-name').text();
        var quantity = $(this).find('.cart-item-quantity').val();
        var price = $(this).find('.cart-item-price').text().replace('$', '');
        products.push({name: name, quantity: quantity, price: price});
      });
      var total = $('.cart-total').text();
      $.post('http://localhost:5054/payment', {products: products, total: total}, function(response) {
        // handle the payment response
      });
    });
  });

