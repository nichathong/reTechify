PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL,
        image TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    , condition TEXT);
INSERT INTO products VALUES(1,'Apple iPhone 13 Pro Max','The latest iPhone with a larger Super Retina XDR display, 5G capability, and A15 Bionic chip for lightning-fast performance.',1299.9899999999999877,'https://www.apple.com/v/iphone-13-pro/x/images/overview/hero/hero__dvs53v5piaie_large_2x.png','2023-03-30 21:51:46','refurbished');
INSERT INTO products VALUES(2,'GoPro Hero10 Black','The latest action camera from GoPro, with HyperSmooth 4.0 stabilization and 5.3K video for stunning footage.',499.9900000000000233,'https://gopro.com/content/dam/shared-link/hero10-black/front/hero10-black-front-right-facing.png','2023-03-30 21:51:46','good');
INSERT INTO products VALUES(3,'DJI Mavic Air 2','Fly faster, longer, and quieter than ever before with the DJI Mavic Air 2. With 4K video at 60fps and a 48MP camera, you can capture stunning aerial footage with ease.',799.00000000000002131,'https://cdn.shopify.com/s/files/1/0558/2637/products/DJI_Mavic_Air_2_-_Front_View.jpg?v=1590639169','2023-03-30 21:51:46','like-new');
INSERT INTO products VALUES(4,'Samsung Galaxy Z Fold3','A cutting-edge foldable smartphone with a large, flexible screen and 5G capability.',1799.9900000000000233,'https://images.samsung.com/is/image/samsung/assets/ca-smartphones-galaxy-z-fold3-5g/2_1/CA-Smartphones-Galaxy-Z-Fold3-5G-Mystic-Black-Front-160546921.jpg?$default-png$','2023-03-30 21:51:46','like-new');
INSERT INTO products VALUES(5,'Bose QuietComfort 35 II Wireless Headphones','Premium noise-cancelling headphones with up to 20 hours of battery life and built-in Alexa voice control.',299.9900000000000233,'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_35_ii/product_silo_images/qc35_black_EC_hero_010717.psd/_jcr_content/renditions/cq5dam.web.320.320.png','2023-03-30 21:51:46','refurbished');
INSERT INTO products VALUES(6,'Apple MacBook Pro M1 Max','A powerful laptop with the new M1 Max chip, a stunning Retina display, and up to 10 hours of battery life.',2799.9899999999997568,' https://www.apple.com/v/macbook-pro-14/l/images/overview/hero/hero__ew8nd0fa2e0u_large_2x.png','2023-03-30 21:51:46','refurbished');
INSERT INTO products VALUES(7,'Apple Watch Series 7','The latest smartwatch from Apple, with a larger Retina display, faster charging, and new workout modes.',399.9900000000000233,'https://www.apple.com/v/watch-series-7/c/images/overview/hero/hero__crh4ruyw6i4i_large_2x.jpg','2023-03-30 21:51:46','good');
INSERT INTO products VALUES(8,'Microsoft Surface Laptop 4','A sleek and stylish laptop with up to 19 hours of battery life and powerful performance for productivity and entertainment',1299.9899999999999877,'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4hO7B?ver=8170&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&l=f&o=t&aim=true','2023-03-30 21:51:46','good');
INSERT INTO products VALUES(9,'Sony Playstation 5','The latest gaming console from Sony, featuring lightning-fast load times and stunning graphics for an immersive gaming experience.',499.9900000000000233,'https://gmedia.playstation.com/is/image/SIEPDC/ps5-consoles-product-detail-01-en-30jul20?$native--t$','2023-03-30 21:51:46','like-new');
INSERT INTO products VALUES(10,'Apple iPhone 13 Pro Max','The latest iPhone with a larger Super Retina XDR display, 5G capability, and A15 Bionic chip for lightning-fast performance.',1299.9899999999999877,'https://www.apple.com/v/iphone-13-pro/x/images/overview/hero/hero__dvs53v5piaie_large_2x.png','2023-03-30 21:52:18','refurbished');
INSERT INTO products VALUES(11,'GoPro Hero10 Black','The latest action camera from GoPro, with HyperSmooth 4.0 stabilization and 5.3K video for stunning footage.',499.9900000000000233,'https://gopro.com/content/dam/shared-link/hero10-black/front/hero10-black-front-right-facing.png','2023-03-30 21:52:18','good');
INSERT INTO products VALUES(12,'DJI Mavic Air 2','Fly faster, longer, and quieter than ever before with the DJI Mavic Air 2. With 4K video at 60fps and a 48MP camera, you can capture stunning aerial footage with ease.',799.00000000000002131,'https://cdn.shopify.com/s/files/1/0558/2637/products/DJI_Mavic_Air_2_-_Front_View.jpg?v=1590639169','2023-03-30 21:52:18','like-new');
INSERT INTO products VALUES(13,'Samsung Galaxy Z Fold3','A cutting-edge foldable smartphone with a large, flexible screen and 5G capability.',1799.9900000000000233,'https://images.samsung.com/is/image/samsung/assets/ca-smartphones-galaxy-z-fold3-5g/2_1/CA-Smartphones-Galaxy-Z-Fold3-5G-Mystic-Black-Front-160546921.jpg?$default-png$','2023-03-30 21:52:18','like-new');
INSERT INTO products VALUES(14,'Sony Playstation 5','The latest gaming console from Sony, featuring lightning-fast load times and stunning graphics for an immersive gaming experience.',499.9900000000000233,'https://gmedia.playstation.com/is/image/SIEPDC/ps5-consoles-product-detail-01-en-30jul20?$native--t$','2023-03-30 21:52:18','like-new');
INSERT INTO products VALUES(15,'Microsoft Surface Laptop 4','A sleek and stylish laptop with up to 19 hours of battery life and powerful performance for productivity and entertainment',1299.9899999999999877,'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4hO7B?ver=8170&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&l=f&o=t&aim=true','2023-03-30 21:52:18','good');
INSERT INTO products VALUES(16,'Bose QuietComfort 35 II Wireless Headphones','Premium noise-cancelling headphones with up to 20 hours of battery life and built-in Alexa voice control.',299.9900000000000233,'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_35_ii/product_silo_images/qc35_black_EC_hero_010717.psd/_jcr_content/renditions/cq5dam.web.320.320.png','2023-03-30 21:52:18','refurbished');
INSERT INTO products VALUES(17,'Apple Watch Series 7','The latest smartwatch from Apple, with a larger Retina display, faster charging, and new workout modes.',399.9900000000000233,'https://www.apple.com/v/watch-series-7/c/images/overview/hero/hero__crh4ruyw6i4i_large_2x.jpg','2023-03-30 21:52:18','good');
INSERT INTO products VALUES(18,'Apple MacBook Pro M1 Max','A powerful laptop with the new M1 Max chip, a stunning Retina display, and up to 10 hours of battery life.',2799.9899999999997568,' https://www.apple.com/v/macbook-pro-14/l/images/overview/hero/hero__ew8nd0fa2e0u_large_2x.png','2023-03-30 21:52:18','refurbished');
CREATE TABLE orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        total REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
CREATE TABLE order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        price REAL NOT NULL,
        FOREIGN KEY(order_id) REFERENCES orders(id),
        FOREIGN KEY(product_id) REFERENCES products(id)
    );
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('products',18);
COMMIT;
