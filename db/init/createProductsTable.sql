CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY NOT NULL, -- The primary key
  name VARCHAR(40) NOT NULL, -- The IP of the host
  description TEXT,
  price INTEGER,
  imageUrl TEXT
);
