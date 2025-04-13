const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getMovies);
router.post('/', controller.addMovie);
router.put('/:id', controller.updateMovie);
router.get('/:id', controller.getMovieById);

module.exports = router;