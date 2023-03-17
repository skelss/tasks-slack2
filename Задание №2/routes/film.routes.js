const Router = require('express')
const router = new Router()
const filmController = require('../controllers/film.controller')

router.post('/film', filmController.createFilm)
router.get('/film', filmController.getFilms)
router.get('/film/:id', filmController.getOneFilm)
router.put('/film', filmController.updateFilm)
router.delete('/film/:id', filmController.deleteFilm)
router.post('/film/control', filmController.addGenreToFilm)
router.put('/film/control', filmController.deleteGenreOfFilm)
router.get('/film/control/:id', filmController.getGenresOfFilm) 

module.exports = router

