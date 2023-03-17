/* ROLE OF PERSON */
CREATE TABLE IF NOT EXISTS role 
(
	id serial NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL
);

/* COUNTRY */
CREATE TABLE IF NOT EXISTS country
(
	id serial NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL
);

/* GENRE */
CREATE TABLE IF NOT EXISTS genre
(
	id serial NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL
);

/* FILM */
CREATE TABLE IF NOT EXISTS film
(	
	id serial NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL,
	eng_name varchar(100) NOT NULL,
	year integer NOT NULL,
	description text,
	slogan text,
	rating real,
	numberOfRatings integer,
	budget money NOT NULL,
	fees money NOT NULL,
	premiereDate text NOT NULL,
	minAge integer,
	duration time NOT NULL,
	id_country integer REFERENCES country (id)
);

/* GENRES OF FILM */
CREATE TABLE IF NOT EXISTS genres_of_film
(
	id serial NOT NULL PRIMARY KEY,
	id_film integer REFERENCES film (id),
	id_genre integer REFERENCES genre (id)
);

/* PERSON */
CREATE TABLE IF NOT EXISTS person
(
	id serial NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL,
	surname varchar(100) NOT NULL,
	id_role integer REFERENCES role (id)
);

/* FILM PERSON */
CREATE TABLE IF NOT EXISTS film_person
(
	id serial NOT NULL PRIMARY KEY,
	id_film integer REFERENCES film (id),
	id_person integer REFERENCES person(id)
);

/* FILMMAKERS */
CREATE TABLE IF NOT EXISTS filmmakers
(
	id serial NOT NULL PRIMARY KEY,
	id_film integer REFERENCES film (id),
	id_director integer REFERENCES person (id),
	id_screenwriter integer REFERENCES person (id),
	id_producer integer REFERENCES person (id),
	id_cinematographer integer REFERENCES person (id),
	id_composer integer REFERENCES person (id),
	id_artist integer REFERENCES person (id),
	id_editor integer REFERENCES person (id)
);

/* AUDIENCE */
CREATE TABLE IF NOT EXISTS audience
(
	id serial NOT NULL PRIMARY KEY,
	id_film integer REFERENCES film (id),
	id_country integer REFERENCES country (id),
	count varchar(100) NOT NULL
);
