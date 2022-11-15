const MovieController = require('../Controller/MovieController');

const router = require('express').Router();

router.get('/', MovieController.GetMovie);
router.get('/schedule', MovieController.GetMovieSchedule);
router.get('/detail', MovieController.GetMovieDetail);
router.get('/comment', MovieController.GetMovieComment);

module.exports = router;