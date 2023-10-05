
const products = [
  {
      id:1,
      name: "Sơ Mi Dài Tay Oxford SMUDCH96",
      price: 319000,
      imgSrc1: "/images/product_01.webp",
      imgSrc2: "/images/product_1.webp",
      altText: "Product 1",
    },
    {
        
      id:2,
      name: "Áo Khoác Nỉ Trơn Unisex",
      price: 249000,
      imgSrc1: "/images/product_02.webp",
      imgSrc2: "/images/product_2.webp",
      altText: "Product 2",
    },
    {
        
      id:3,
      name: "Quần Jeans Slim Fit QJNSF234",
      price: 389000,
      imgSrc1: "/images/product_03.webp",
      imgSrc2: "/images/product_3.webp",
      altText: "Product 3",
    },
    {
        
      id:4,
      name: "Áo Polo Trắng APOTW45",
      price: 159000,
      imgSrc1: "/images/product_04.webp",
      imgSrc2: "/images/product_4.webp",
      altText: "Product 4",
    },
    {
        
      id:5,
      name: "Váy Đầm Hoa Văn VDVHV67",
      price: 279000,
      imgSrc1: "/images/product_05.webp",
      imgSrc2: "/images/product_5.webp",
      altText: "Product 5",
    },
    {
        
      id:6,
      name: "Balo Laptop 15 Inch BLP15I34",
      price: 299000,
      imgSrc1: "/images/product_06.webp",
      imgSrc2: "/images/product_6.webp",
      altText: "Product 6",
    },
    {
        
      id:7,
      name: "Giày Sneaker Nam SNKSM56",
      price: 499000,
      imgSrc1: "/images/product_07.webp",
      imgSrc2: "/images/product_7.webp",
      altText: "Product 7",
    },
    {
        
      id:8,
      name: "Áo Sơ Mi Cổ Đức DMSDD53",
      price: 269000,
      imgSrc1: "/images/product_08.webp",
      imgSrc2: "/images/product_8.webp",
      altText: "Product 8",
    },
  ];



  localStorage.setItem("products",JSON.stringify(products))
// var products = JSON.parse(localStorage.getItem("products")) || [];
//   console.log(products)
  // Lặp qua mảng sản phẩm và hiển thị chúng trên giao diện
  const productContainer = document.querySelector(".content-product-list");
  
  products.forEach((product) => {

    productContainer.innerHTML += ` <div class="content-product">
    <div class="product-block">
    <div class="product-img">
            <a href="#">
            <img class="fist-image" src="${product.imgSrc1}" alt="" srcset="">
            <img class="second-image" src="${product.imgSrc2}" alt="" srcset="">

            </a>
            <div class="actions">
                <div class="btn-cart-products">
                    <a href="#">
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="view-details">
                    <a href="#">
                        <i class="fa fa-clone" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="btn-quickview-products">
                    <a href="#">
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="product-detail">
        <h3 class="pro-name">
                <a href="#">${product.name}</a>
            </h3>
            <div class="pro-prices">
                <span class="pro-price">${product.price}đ</span>
        </div>
    </div>
</div>`
// productContainer.appendChild(productDiv);
});
  
  // const products_02 = [
  //   {
  //     name: "Sơ Mi Dài Tay Oxford SMUDCH96",
  //     price: 319000,
  //     imgSrc1: "/images/slideshowdown/anh1.jpeg",
  //     imgSrc2: "/images/slideshowdown/anh01.jpeg",
  //     altText: "Product 1",
  //   },
  //   {
  //     name: "Áo Khoác Nỉ Trơn Unisex",
  //     price: 249000,
  //     imgSrc1: "/images/slideshowdown/anh2.jpeg",
  //     imgSrc2: "/images/slideshowdown/anh02.jpeg",
  //     altText: "Product 2",
  //   },
  //   {
  //     name: "Quần Jeans Slim Fit QJNSF234",
  //     price: 389000,
  //     imgSrc1: "/images/slideshowdown/anh3.jpeg",
  //     imgSrc2: "/images/slideshowdown/anh03.jpeg",
  //     altText: "Product 3",
  //   },
  //   {
  //     name: "Áo Polo Trắng APOTW45",
  //     price: 159000,
  //     imgSrc1: "/images/slideshowdown/anh4.jpeg",
  //     imgSrc2: "/images/slideshowdown/anh04.jpeg",
  //     altText: "Product 4",
  //   },
  //   {
  //     name: "Váy Đầm Hoa Văn VDVHV67",
  //     price: 279000,
  //     imgSrc1: "/images/slideshowdown/anh5.jpeg",
  //     imgSrc2: "/images/slideshowdown/anh05.jpeg",
  //     altText: "Product 5",
  //   },
  //   {
  //     name: "Balo Laptop 15 Inch BLP15I34",
  //     price: 299000,
  //     imgSrc1: "/images/slideshowdown/anh6.jpeg",
  //     imgSrc2: "/images/slideshowdown/anh06.jpeg",
  //     altText: "Product 6",
  //   },
  //   {
  //     name: "Giày Sneaker Nam SNKSM56",
  //     price: 499000,
  //     imgSrc1: "/images/slideshowdown/anh7.jpeg",
  //     imgSrc2: "/images/slideshowdown/anh07.jpeg",
  //     altText: "Product 7",
  //   },
  //   {
  //     name: "Áo Sơ Mi Cổ Đức DMSDD53",
  //     price: 269000,
  //     imgSrc1: "/images/slideshowdown/anh8.jpeg",
  //     imgSrc2: "/images/slideshowdown/anh08.jpeg",
  //     altText: "Product 8",
  //   },
  // ];

  // localStorage.setItem("products_02", JSON.stringify(products_02))
  // console.log(JSON.parse(localStorage.getItem("products_02")))
  var products_02 = JSON.parse(localStorage.getItem("products_02"))
  // Lặp qua mảng sản phẩm và hiển thị chúng trên giao diện
  const productContainer_02 = document.querySelector(".main-content .product-list:last-child .content-product-list");
  
  products_02.forEach((e) => {

    productContainer_02.innerHTML += ` <div class="content-product">
    <div class="product-block">
        <div class="product-img">
            <a href="#">
            <img class="fist-image" src="${e.imgSrc1}" alt="" srcset="">
            <img class="second-image" src="${e.imgSrc2}" alt="" srcset="">

            </a>
            <div class="actions">
                <div class="btn-cart-products">
                    <a href="#">
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="view-details">
                    <a href="#">
                        <i class="fa fa-clone" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="btn-quickview-products">
                    <a href="#">
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="product-detail">
        <h3 class="pro-name">
                <a href="#">${e.name}</a>
            </h3>
            <div class="pro-prices">
                <span class="pro-price">${e.price}</span>
        </div>
    </div>
</div>`
    // productContainer.appendChild(productDiv);
  });