const db = require('../db')

class GenreController {
    async createGenre(req, res){
        const name = req.body.name
        const string = 'INSERT INTO genre (name) values ($1) RETURNING *'
        const newGenre = await db.query(string, [name])
        res.json(newGenre.rows[0])
    }

    async getGenres(req, res){
        const genres = await db.query('SELECT * FROM genre')
        res.json(genres.rows)
    }

    async getOneGenre(req, res){
        const id = req.params.id
        const genre = await db.query('SELECT * FROM genre WHERE id = $1', [id])
        res.json(genre.rows[0])
    }

    async updateGenre(req, res){
        const {id, name} = req.body
        const string = 'UPDATE genre SET name = $1 WHERE id = $2 RETURNING *'
        const updateGenre = await db.query(string, [name, id])
        res.json(updateGenre.rows[0])
    }

    async deleteGenre(req, res){
        const id = req.params.id
        await db.query('DELETE FROM film_genre WHERE id_genre = $1', [id])
        const genre = await db.query('DELETE FROM genre WHERE id = $1', [id])
        res.json(genre.rows[0])
    }

    async getFilmByGenre(req, res){
        const id = req.params.id
        const string = 'SELECT * FROM film_genre WHERE id_genre = $1'
        let films = await db.query(string, [id])
        films = films.rows.map(item => item.id_film)
        res.json(films)
    }
}

module.exports = new GenreController()