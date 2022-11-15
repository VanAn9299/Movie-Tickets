const fetch = require('node-fetch');

var dateNow = (new Date()).getDate();
var dataGetMovie = null;

module.exports = {
    GetMovie: async (req, res) => {
        try {
            //https://webmomoapi.momo.vn/api/ci-film/paging?pageIndex=0&year=2022&PageSize=1000
            if (!dataGetMovie || dateNow != (new Date()).getDate()) {
                let date = new Date();
                let temp = [];

                dataGetMovie = {
                    soon: [],
                    now: []
                }

                await fetch(`https://webmomoapi.momo.vn/api/ci-film/paging?pageIndex=0&year=${date.getFullYear()}&PageSize=1000`)
                    .then(res => res.json())
                    .then(json => {
                        dataGetMovie.soon = json.Data.Items.filter(n => new Date(n.OpeningDate) > date)
                    });

                for (const item of ['https://webmomoapi.momo.vn/api/ci-cinema/session/012/6', 'https://webmomoapi.momo.vn/api/ci-cinema/session/8009/8']) {
                    sleep(500);

                    await fetch(item)
                        .then(res => res.json())
                        .then(json => {
                            json.Data.Films.forEach(n => {
                                if (temp.filter(m => m.Id === n.Id).length == 0) {
                                    n.VersionsCaptions = undefined;
                                    temp.push(n)
                                }
                            });
                        });
                }

                dataGetMovie.now = temp;
            }

            res.send(dataGetMovie);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    GetMovieSchedule: async (req, res) => {
        try {
            //https://webmomoapi.momo.vn/api/ci-film/session/6020?apiCityId=50&date=2022-10-08
            let data = {};
            let apiFilmId = req.query.apiFilmId;
            let cineplex = req.query.cineplex;
            let date = req.query.date;

            await fetch(
                cineplex ?
                    `https://webmomoapi.momo.vn/api/ci-film/session/${apiFilmId}?apiCityId=50&date=${date}&Count=1000&apiCityId=50&cineplex=${cineplex}`
                    :
                    `https://webmomoapi.momo.vn/api/ci-film/session/${apiFilmId}?apiCityId=50&date=${date}&Count=1000&apiCityId=50`)
                .then(res => res.json())
                .then(json => data = json.Data)
            res.send(data);
        } catch (error) {
            res.sendStatus(500);
        }
    },
    GetMovieComment: async (req, res) => {
        try {
            //https://webmomoapi.momo.vn/api/ci-film/v1.1/rating/5460
            let data = {};
            let apiFilmId = req.query.apiFilmId;

            await fetch(`https://webmomoapi.momo.vn/api/ci-film/v1.1/rating/${apiFilmId}`)
                .then(res => res.json())
                .then(json => data = json.Data)

            res.send(data);
        } catch (error) {
            res.sendStatus(500);
        }
    },
    GetMovieDetail: async (req, res) => {
        try {
            let date = new Date();
            let apiFilmId = req.query.apiFilmId;
            let data = [];

            await fetch(`https://webmomoapi.momo.vn/api/ci-film/paging?pageIndex=0&year=${date.getFullYear()}&PageSize=1000`)
                .then(res => res.json())
                .then(json => data = json.Data.Items)

            res.send(data.filter(n => n.ApiFilmId === apiFilmId));
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));