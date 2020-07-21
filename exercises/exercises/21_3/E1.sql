-- desafios
-- 1.1
SELECT name FROM betrybe.Products;
-- 1.2
SELECT name, price FROM betrybe.Products;
-- 1.3
SELECT name FROM betrybe.Products
WHERE price <= 200;
-- 1.4
SELECT * FROM betrybe.Products
WHERE price BETWEEN 60 AND 120;
-- 1.5
SELECT name, (price*100) AS price FROM betrybe.Products;
-- 1.6
SELECT AVG(price) FROM betrybe.Products;
-- 1.7
SELECT AVG(price) FROM betrybe.Products
WHERE manufacturer = 2;
-- 1.8
SELECT COUNT(*) FROM betrybe.Products
WHERE price >= 180;
-- 1.9
SELECT * FROM betrybe.Products
WHERE price >= 180
ORDER BY price DESC, name ASC ;

-- 1.10
SELECT p.*, m.name FROM betrybe.Products as p, betrybe.Manufacturers AS m
WHERE p.manufacturer = m.code;

SELECT p.*, m.name FROM betrybe.Products AS p
INNER JOIN betrybe.Manufacturers AS m
ON (p.manufacturer = m.code);

-- 1.11
SELECT p.name, p.price, m.name FROM betrybe.Products AS p
INNER JOIN betrybe.Manufacturers AS m
ON (p.manufacturer = m.code);

SELECT p.name, p.price, m.name FROM betrybe.Products AS p,
betrybe.Manufacturers AS m
WHERE p.Manufacturer = m.code;


-- 1.12
SELECT manufacturer, AVG(price) FROM betrybe.Products
GROUP BY manufacturer;

-- 1.13
SELECT AVG(p.price), m.name
FROM betrybe.Products AS p, betrybe.Manufacturers AS m
WHERE p.manufacturer = m.code
GROUP BY m.code;

-- 1.14
SELECT AVG(p.price) as PRICE, m.name
FROM betrybe.Products AS p, betrybe.Manufacturers AS m
WHERE p.manufacturer = m.code
GROUP BY m.code
HAVING AVG(p.price) >= 150;

SELECT AVG(Price), Manufacturers.Name
FROM betrybe.Products, betrybe.Manufacturers
WHERE Products.Manufacturer = Manufacturers.code
GROUP BY Manufacturers.Name
HAVING AVG(Price) >= 150;

-- 1.15
