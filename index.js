const teams = require('./teams/constants')
const api = require('./api')
const composeTweet = require('./twitter/tweetList')
const {getDayOfWeek, getYesterdaysDate} = require('./utils')
const Twitter = require('./twitter/tweet')

const processTeamLogic = (team, game, isHomeTeam) => {
    // Does the team need to win on a certain day
    if (team.day.length) {
        // Is today that day
        const todaysDay = getDayOfWeek(getYesterdaysDate())
        if (team.day === todaysDay) {
            // Did the team win
            if (isHomeTeam) {
                return game.teams.home.isWinner
            } else {
                return game.teams.away.isWinner
            }
        }
        return false
    } else if (team.runs) {
        // Team needs to score a certain amount of runs
        if (isHomeTeam) {
            return game.teams.home.score >= team.runCount
        } else {
            return game.teams.away.score >= team.runCount
        }
    } else if (!team.runs && !team.winOnDay && team.win) {
        // Just need win
        if (isHomeTeam) {
            return game.teams.home.isWinner
        } else {
            return game.teams.away.isWinner
        }
    }
}

const doesTeamQualifyForFreePizza = (game) => {
    const gameTeams = [game.teams.home, game.teams.away]
    const ids = gameTeams.map((t) => {
        const indexOfTeam = teams.filter((team) => team.apiId === t.team.id)
        if (indexOfTeam.length) {
            const team = indexOfTeam[0]
            const doTheyQualify = processTeamLogic(
                team,
                game,
                t === gameTeams[0] // Is home team if true
            )
            if (doTheyQualify) {
                return team.apiId
            } else {
                return false
            }
        }
    })

    return ids.filter((id) => id !== false && id)
}

const processGames = (eligibleGames) => {
    const freePizzaIds = []
    eligibleGames.map((game) => {
        const teamId = doesTeamQualifyForFreePizza(game)
        if (teamId) {
            freePizzaIds.push(...teamId)
        }
    })

    return freePizzaIds
}

api.getYesterdaysGames(getYesterdaysDate())
    .then((games) => {
        const papaJohnsEligibleGames = games.filter((game) => {
            return teams.some((team) => {
                return (
                    team.apiId === game.teams.away.team.id ||
                    game.teams.home.team.id === team.apiId
                )
            })
        })

        const arrayOfTeamIds = processGames(papaJohnsEligibleGames)
        const teamsToTweetAt = teams.filter((team) =>
            arrayOfTeamIds.includes(team.apiId)
        )

        teamsToTweetAt.map((team) => {
            Twitter.post(
                'statuses/update',
                {status: composeTweet(team)},
                (err, data, response) => {
                    console.log('TWEETED')
                }
            )
        })
    })
    .catch((err) => console.log(err))
