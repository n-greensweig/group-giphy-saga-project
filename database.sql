-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:
CREATE TABLE "favorite" (
"id" SERIAL PRIMARY KEY,
"gif_url" VARCHAR(1000),
"category_id" INTEGER,
"is_favorited" BOOLEAN DEFAULT FALSE
);

INSERT INTO "favorite"
("gif_url", "category_id", "is_favorited")
VALUES ('https://media1.giphy.com/media/UufAH7FSltoa7NzIKF/giphy.gif?cid=036a1b4009npiyfjwp36ap27rtjzad697aupm6r2h6wkir11&ep=v1_gifs_search&rid=giphy.gif&ct=g', 1, TRUE);

-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.
