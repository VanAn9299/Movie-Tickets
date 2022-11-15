const CinemaController = require('../Controller/CinemaController');
const router = require('express').Router();

router.get('/', CinemaController.GetCinema);
router.get('/branch', CinemaController.GetListBranch);
router.get('/branch/detail', CinemaController.GetCinemaDetail);
router.get('/branch/schedule', CinemaController.GetSchedule)

module.exports = router;