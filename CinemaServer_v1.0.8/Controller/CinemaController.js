const fetch = require('node-fetch');

module.exports = {
    GetCinema: async (req, res) => {
        try {
            let data = [
                {
                    "Id": 6,
                    "Name": "CGV",
                    "FeaturedNote": "69K/vé 2D mỗi tuần, áp dụng cho ghế thường & VIP, từ T6-CN khi thanh toán Ví Trả Sau",
                    "FeaturedNote2": "",
                    "RatingCount": 1326,
                    "RatingValue": 5,
                    "Avatar": "https://static.mservice.io/default/s/no-image-momo.jpg",
                    "Background": "https://static.mservice.io/cinema/momo-upload-api-210812191129-637643922898236024.jpg",
                    "Logo": "https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg",
                    "Slogan": "Hệ thống rạp chiếu phim lớn nhất Việt Nam",
                    "Description": null,
                    "Short": null,
                    "TotalCinemas": 86,
                    "TotalCities": 31,
                    "TotalViews": 0,
                    "Link": "/cinema/rap/cgv",
                    "UrlRewrite": "cgv",
                    "DisplayOrder": 1
                },
                {
                    "Id": 8,
                    "Name": "Lotte Cinema",
                    "FeaturedNote": "Khuyến mãi 79K/vé từ T6-CN hàng tuần, không giới hạn!",
                    "FeaturedNote2": "",
                    "RatingCount": 1520,
                    "RatingValue": 5,
                    "Avatar": "https://static.mservice.io/default/s/no-image-momo.jpg",
                    "Background": "https://static.mservice.io/cinema/momo-upload-api-210812191018-637643922185106035.jpg",
                    "Logo": "https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png",
                    "Slogan": "Hệ thống rạp chiếu phim từ Hàn Quốc",
                    "Description": null,
                    "Short": null,
                    "TotalCinemas": 48,
                    "TotalCities": 30,
                    "TotalViews": 0,
                    "Link": "/cinema/rap/lotte-cinema",
                    "UrlRewrite": "lotte-cinema",
                    "DisplayOrder": 2
                },
                {
                    "Id": 9,
                    "Name": "Galaxy Cinema",
                    "FeaturedNote": "",
                    "FeaturedNote2": null,
                    "RatingCount": 599,
                    "RatingValue": 5,
                    "Avatar": "https://static.mservice.io/default/s/no-image-momo.jpg",
                    "Background": "https://static.mservice.io/cinema/momo-upload-api-210812191028-637643922289129544.jpg",
                    "Logo": "https://static.mservice.io/cinema/momo-upload-api-211123095138-637732578984425272.png",
                    "Slogan": "Mang Hollywood đến gần bạn",
                    "Description": null,
                    "Short": null,
                    "TotalCinemas": 18,
                    "TotalCities": 9,
                    "TotalViews": 0,
                    "Link": "/cinema/rap/galaxy-cinema",
                    "UrlRewrite": "galaxy-cinema",
                    "DisplayOrder": 3
                },
                {
                    "Id": 3,
                    "Name": "BHD Star",
                    "FeaturedNote": "",
                    "FeaturedNote2": "65K",
                    "RatingCount": 385,
                    "RatingValue": 5,
                    "Avatar": "https://static.mservice.io/default/s/no-image-momo.jpg",
                    "Background": "https://static.mservice.io/cinema/momo-upload-api-210812191036-637643922368260041.jpg",
                    "Logo": "https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png",
                    "Slogan": "Hệ thống rạp chiếu phim hiện đại",
                    "Description": null,
                    "Short": null,
                    "TotalCinemas": 10,
                    "TotalCities": 3,
                    "TotalViews": 0,
                    "Link": "/cinema/rap/bhd-star",
                    "UrlRewrite": "bhd-star",
                    "DisplayOrder": 4
                },
                {
                    "Id": 10,
                    "Name": "Beta Cinemas",
                    "FeaturedNote": null,
                    "FeaturedNote2": "",
                    "RatingCount": 917,
                    "RatingValue": 5,
                    "Avatar": "https://static.mservice.io/default/s/no-image-momo.jpg",
                    "Background": "https://static.mservice.io/cinema/momo-upload-api-210813143950-637644623901193089.jpg",
                    "Logo": "https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png",
                    "Slogan": "Rạp chiếu phim Beta Cinemas",
                    "Description": null,
                    "Short": null,
                    "TotalCinemas": 13,
                    "TotalCities": 8,
                    "TotalViews": 0,
                    "Link": "/cinema/rap/beta-cinemas",
                    "UrlRewrite": "beta-cinemas",
                    "DisplayOrder": 5
                },
                {
                    "Id": 5,
                    "Name": "Cinestar",
                    "FeaturedNote": "",
                    "FeaturedNote2": null,
                    "RatingCount": 896,
                    "RatingValue": 5,
                    "Avatar": "https://static.mservice.io/default/s/no-image-momo.jpg",
                    "Background": "https://static.mservice.io/cinema/momo-upload-api-210812191056-637643922560498568.jpg",
                    "Logo": "https://static.mservice.io/blogscontents/momo-upload-api-210604170530-637584231309495829.png",
                    "Slogan": "Hệ thống rạp chiếu phim giá rẻ, hiện đại bậc nhất",
                    "Description": null,
                    "Short": null,
                    "TotalCinemas": 6,
                    "TotalCities": 5,
                    "TotalViews": 0,
                    "Link": "/cinema/rap/cinestar",
                    "UrlRewrite": "cinestar",
                    "DisplayOrder": 6
                },
                {
                    "Id": 4,
                    "Name": "Mega GS",
                    "FeaturedNote": "",
                    "FeaturedNote2": null,
                    "RatingCount": 249,
                    "RatingValue": 5,
                    "Avatar": "https://static.mservice.io/default/s/no-image-momo.jpg",
                    "Background": "https://static.mservice.io/cinema/momo-upload-api-210812191046-637643922467566404.jpg",
                    "Logo": "https://static.mservice.io/blogscontents/momo-upload-api-210604170511-637584231119272266.png",
                    "Slogan": "Rạp chiếu phim tiêu chuẩn quốc tế tại Việt Nam",
                    "Description": null,
                    "Short": null,
                    "TotalCinemas": 2,
                    "TotalCities": 1,
                    "TotalViews": 0,
                    "Link": "/cinema/rap/mega-gs",
                    "UrlRewrite": "mega-gs",
                    "DisplayOrder": 7
                },
                {
                    "Id": 7,
                    "Name": "DCINE",
                    "FeaturedNote": "",
                    "FeaturedNote2": null,
                    "RatingCount": 301,
                    "RatingValue": 5,
                    "Avatar": "https://static.mservice.io/default/s/no-image-momo.jpg",
                    "Background": "https://static.mservice.io/cinema/momo-upload-api-210812191105-637643922659947662.jpg",
                    "Logo": "https://img.mservice.io/momo_app_v2/new_version/img/THAO.MAI/DcineLogo.png",
                    "Slogan": "Rạp chiếu phim DCINE",
                    "Description": null,
                    "Short": null,
                    "TotalCinemas": 2,
                    "TotalCities": 2,
                    "TotalViews": 0,
                    "Link": "/cinema/rap/dcine",
                    "UrlRewrite": "dcine",
                    "DisplayOrder": 8
                }
            ]

            res.send(data);
        } catch (error) {
            res.sendStatus(500);
        }
    },
    GetListBranch: async (req, res) => {
        try {
            //https://webmomoapi.momo.vn/api/ci-cinema/loadMore?&count=10&cineplex=6&apiCityId=50&lastIndex=0
            let data = {};
            let cineplex = req.query.cineplex;
            let lastIndex = req.query.lastIndex
            let count = req.query.count

            await fetch(`https://webmomoapi.momo.vn/api/ci-cinema/loadMore?&count=${count}&cineplex=${cineplex}&apiCityId=50&lastIndex=${lastIndex}`)
                .then(res => res.json())
                .then(json => data = json.Data);

            res.send(data);
        } catch (error) {
            res.sendStatus(500);
        }
    },
    GetCinemaDetail: async (req, res) => {
        try {
            //https://webmomoapi.momo.vn/api/ci-cinema/detail-by-apiCinemaId/034/6
            let data = {};
            let apiCinemaId = req.query.apiCinemaId;
            let cineplex = req.query.cineplex;
            await fetch(`https://webmomoapi.momo.vn/api/ci-cinema/detail-by-apiCinemaId/${apiCinemaId}/${cineplex}`)
                .then(res => res.json())
                .then(json => data = json.Data);
            res.send(data);
        } catch (error) {
            res.sendStatus(500);
        }
    },
    GetSchedule: async (req, res) => {
        try {
            //https://webmomoapi.momo.vn/api/ci-cinema/session/038/6?&date=2022-10-11
            let data = {};
            let apiCinemaId = req.query.apiCinemaId;
            let cineplex = req.query.cineplex;
            let date = req.query.date;

            await fetch(`https://webmomoapi.momo.vn/api/ci-cinema/session/${apiCinemaId}/${cineplex}?&date=${date}`)
                .then(res => res.json())
                .then(json => data = json.Data);

            res.send(data);
        } catch (error) {
            res.sendStatus(500);
        }
    }
}