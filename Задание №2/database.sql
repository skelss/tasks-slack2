CREATE TABLE IF NOT EXISTS film
(
	id serial NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL,
    year integer NOT NULL
);

CREATE TABLE IF NOT EXISTS genre
(
	id serial NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS film_genre
(
    id serial NOT NULL PRIMARY KEY,
    id_film integer REFERENCES film (id),
    id_genre integer REFERENCES genre (id)
);

