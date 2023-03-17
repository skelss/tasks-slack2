const db = require('../db')
const { getOneGenre } = require('./genre.controller')

class FilmController {
    async createFilm(req, res){
        const {name, year} = req.body
        const string = 'INSERT INTO film (name, year) values ($1, $2) RETURNING *'
        const newFilm = await db.query(string, [name, year])
        res.json(newFilm.rows[0])
    }

    async getFilms(req, res){
        const films = await db.query('SELECT * FROM film')
        res.json(films.rows)
    }

    async getOneFilm(req, res){
        const id = req.params.id
        const film = await db.query('SELECT * FROM film WHERE id = $1', [id])
        res.json(film.rows[0])
    }

    async updateFilm(req, res){
        const {id, name, year} = req.body
        const string = 'UPDATE film SET name = $1, year = $2 WHERE id = $3 RETURNING *'
        const updateFilm = await db.query(string, [name, year, id])
        res.json(updateFilm.rows[0])
    }

    async deleteFilm(req, res){
        const id = req.params.id
        await db.query('DELETE FROM film_genre WHERE id_film = $1', [id])
        const film = await db.query('DELETE FROM film WHERE id = $1', [id])
        res.json(film.rows[0])
    }

    async addGenreToFilm(req, res){
        const {id_film, id_genre} = req.body
        const string = 'INSERT INTO film_genre (id_film, id_genre) values ($1, $2) RETURNING *'
        const genresOfFilm = await db.query(string, [id_film, id_genre])
        res.json(genresOfFilm.rows[0])
    }

    async deleteGenreOfFilm(req, res){
        const {id_film, id_genre} = req.body
        const string = 'DELETE FROM film_genre WHERE (id_film = $1) AND (id_genre = $2)'
        const deletedGenre = await db.query(string, [id_film, id_genre]) 
        res.json(deletedGenre.rows[0])     
    } 

    async getGenresOfFilm(req, res){
        const id = req.params.id
        const string = 'SELECT * FROM film_genre WHERE id_film = $1'
        let genresOfFilm = await db.query(string, [id])
        genresOfFilm = genresOfFilm.rows.map(item => item.id_genre)
        res.json(genresOfFilm)
    }
}

module.exports = new FilmController()