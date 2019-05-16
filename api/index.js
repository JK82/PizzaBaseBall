const request = require('superagent')

const api = {
    getYesterdaysGames: () =>
        request
            .get(
                'http://statsapi.mlb.com/api/v1/schedule/?sportId=1&date=05/14/2019'
            )
            .then((res) => JSON.parse(res.text))
            .then((json) => {
                // res.body, res.headers, res.status
                console.log(json.dates[0].games.length)
                return json.dates[0].games
            })
            .catch((err) => {
                // err.message, err.response
                console.log(err)
            }),
}

module.exports = api
