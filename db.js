const sqlite3 = require('sqlite3').verbose();
require('./init-db');

// creating connection to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('We are connected to the database.');
    }
});


function addProduct(name, description, price, image, condition) {
  const sql = `INSERT INTO products(name, description, price, image, condition) VALUES(?, ?, ?, ?, ?)`;
  const values = [name, description, price, image, condition];

  db.run(sql, values, function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`A new product has been added with rowid ${this.lastID}`);
  });
}
addProduct('Apple iPhone 13 Pro Max', 'The latest iPhone with a larger Super Retina XDR display, 5G capability, and A15 Bionic chip for lightning-fast performance.', 1299.99, 'https://www.apple.com/v/iphone-13-pro/x/images/overview/hero/hero__dvs53v5piaie_large_2x.png', 'refurbished');
addProduct('Samsung Galaxy Z Fold3', 'A cutting-edge foldable smartphone with a large, flexible screen and 5G capability.', 1799.99, 'https://images.samsung.com/is/image/samsung/assets/ca-smartphones-galaxy-z-fold3-5g/2_1/CA-Smartphones-Galaxy-Z-Fold3-5G-Mystic-Black-Front-160546921.jpg?$default-png$', 'like-new');
addProduct('Sony Playstation 5', 'The latest gaming console from Sony, featuring lightning-fast load times and stunning graphics for an immersive gaming experience.', 499.99, 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-consoles-product-detail-01-en-30jul20?$native--t$', 'like-new');
addProduct('Apple MacBook Pro M1 Max', 'A powerful laptop with the new M1 Max chip, a stunning Retina display, and up to 10 hours of battery life.', 2799.99, ' https://www.apple.com/v/macbook-pro-14/l/images/overview/hero/hero__ew8nd0fa2e0u_large_2x.png', 'refurbished');
addProduct('Bose QuietComfort 35 II Wireless Headphones', 'Premium noise-cancelling headphones with up to 20 hours of battery life and built-in Alexa voice control.', 299.99, 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_35_ii/product_silo_images/qc35_black_EC_hero_010717.psd/_jcr_content/renditions/cq5dam.web.320.320.png', 'refurbished');
addProduct('Apple Watch Series 7', 'The latest smartwatch from Apple, with a larger Retina display, faster charging, and new workout modes.', 399.99, 'https://www.apple.com/v/watch-series-7/c/images/overview/hero/hero__crh4ruyw6i4i_large_2x.jpg', 'good');
addProduct('Microsoft Surface Laptop 4', 'A sleek and stylish laptop with up to 19 hours of battery life and powerful performance for productivity and entertainment', 1299.99, 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4hO7B?ver=8170&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&l=f&o=t&aim=true', 'good');
addProduct('GoPro Hero10 Black', 'The latest action camera from GoPro, with HyperSmooth 4.0 stabilization and 5.3K video for stunning footage.', 499.99, 'https://gopro.com/content/dam/shared-link/hero10-black/front/hero10-black-front-right-facing.png', 'good');
addProduct('DJI Mavic Air 2', 'Fly faster, longer, and quieter than ever before with the DJI Mavic Air 2. With 4K video at 60fps and a 48MP camera, you can capture stunning aerial footage with ease.', 799.00, 'https://cdn.shopify.com/s/files/1/0558/2637/products/DJI_Mavic_Air_2_-_Front_View.jpg?v=1590639169', 'like-new');

module.exports = db;