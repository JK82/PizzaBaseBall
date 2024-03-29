// Reference https://fivethirtyeight.com/features/a-definitive-guide-to-baseballs-pizza-discounts/
// Somewhat inaccurate but the jist was right, example, none of the run teams need to win

const teams = [
    {
        apiId: 138,
        name: 'St. Louis Cardinals',
        win: true,
        runs: false,
        runCount: 0,
        winOnday: false,
        day: '',
        papaJohnsCode: 'CARDSWIN',
        twitterHandle: '@Cardinals',
        hashtag: '#STLCards'
    },

    {
        apiId: 134,
        name: 'Pittsburgh Pirates',
        win: true,
        runs: false,
        runCount: 0,
        winOnday: false,
        day: '',
        papaJohnsCode: 'BUCSWIN',
        twitterHandle: '@Pirates',
        hashtag: '#LetsGoBucs'
    },

    {
        apiId: 115,
        name: 'Colorado Rockies',
        win: true,
        runs: false,
        runCount: 0,
        winOnday: false,
        day: '',
        papaJohnsCode: 'ROXWIN',
        twitterHandle: '@Rockies',
        hashtag: '#RoxWin'
    },

    {
        apiId: 109,
        name: 'Arizona Diamondbacks',
        win: true,
        runs: false,
        runCount: 0,
        winOnday: false,
        day: '',
        papaJohnsCode: 'DBACKS50',
        twitterHandle: '@Dbacks',
        hashtag: '#Dbacks'
    },

    {
        apiId: 136,
        name: 'Seattle Mariners',
        win: false,
        runs: true,
        runCount: 5,
        winOnday: false,
        day: '',
        papaJohnsCode: 'MARINERS5',
        twitterHandle: '@Mariners',
        hashtag: '#SeaUsRise'
    },

    {
        apiId: 143,
        name: 'Philadelphia Phillies',
        win: true,
        runs: false,
        runCount: 0,
        winOnday: false,
        day: '',
        papaJohnsCode: 'PHILLIES',
        twitterHandle: '@Phillies',
        hashtag: '#RingTheBell'
    },

    {
        apiId: 158,
        name: 'Milwaukee Brewers',
        win: true,
        runs: false,
        runCount: 0,
        winOnday: false,
        day: '',
        papaJohnsCode: 'BREWERS50',
        twitterHandle: '@Brewers',
        hashtag: '#ThisIsMyCrew'
    },

    {
        apiId: 110,
        name: 'Baltimore Orioles',
        win: false,
        runs: true,
        runCount: 5,
        winOnday: false,
        day: '',
        papaJohnsCode: 'ORIOLES50',
        twitterHandle: '@Orioles',
        hashtag: '#Orioles'
    },

    {
        apiId: 142,
        name: 'Minnesota Twins',
        win: true,
        runs: false,
        runCount: 0,
        winOnday: false,
        day: '',
        papaJohnsCode: 'TWINSWIN',
        twitterHandle: '@Twins',
        hashtag: '#MNTwins'
    },

    {
        apiId: 119,
        name: 'Los Angeles Dodgers',
        win: false,
        runs: true,
        runCount: 5,
        winOnday: false,
        day: '',
        papaJohnsCode: 'DODGERS5',
        twitterHandle: '@Dodgers‏',
        hashtag: '#Dodgers'
    },

    {
        apiId: 118,
        name: 'Kansas City Royals',
        win: false,
        runs: true,
        runCount: 5,
        winOnday: false,
        day: '',
        papaJohnsCode: 'ROYALS5',
        twitterHandle: '@Royals‏',
        hashtag: '#TogetherRoyal'
    },

    {
        apiId: 145,
        name: 'Chicago White Sox',
        win: true,
        runs: false,
        runCount: 0,
        winOnday: false,
        day: '',
        papaJohnsCode: 'SOXWIN',
        twitterHandle: '@whitesox‏',
        hashtag: '#ChangeTheGame'
    },

    {
        apiId: 114,
        name: 'Cleveland Indians',
        win: false,
        runs: true,
        runCount: 5,
        winOnday: false,
        day: '',
        papaJohnsCode: 'TRIBE5',
        twitterHandle: '@CleGuardians',
        hashtag: '#ForTheLand'
    },

    {
        apiId: 146,
        name: 'Miami Marlins',
        win: false,
        runs: true,
        runCount: 5,
        winOnday: false,
        day: '',
        papaJohnsCode: 'MARLINS5',
        twitterHandle: '@Marlins',
        hashtag: '#MakeItMiami'
    },

    {
        apiId: 135,
        name: 'San Diego Padres',
        win: false,
        runs: true,
        runCount: 5,
        winOnday: false,
        day: '',
        papaJohnsCode: 'PADRES5',
        twitterHandle: '@Padres',
        hashtag: '#TimeToShine'
    },

    {
        apiId: 147,
        name: 'New York Yankees',
        win: false,
        runs: true,
        runCount: 6,
        winOnday: false,
        day: '',
        papaJohnsCode: 'YANKEES6',
        twitterHandle: '@Yankees',
        hashtag: '#RepBX'
    },

    {
        apiId: 120,
        name: 'Washington Nationals',
        win: false,
        runs: true,
        runCount: 7,
        winOnday: false,
        day: '',
        papaJohnsCode: 'NATS50',
        twitterHandle: '@Nationals',
        hashtag: '#NATITUDE'
    },

    {
        apiId: 139,
        name: 'Tampa Bay Rays',
        win: false,
        runs: true,
        runCount: 6,
        winOnday: false,
        day: '',
        papaJohnsCode: 'RAYS6',
        twitterHandle: '@RaysBaseball',
        hashtag: '#RaysUp'
    },

    {
        apiId: 140,
        name: 'Texas Rangers',
        win: false,
        runs: true,
        runCount: 7,
        winOnday: false,
        day: '',
        papaJohnsCode: 'RANGERS7',
        twitterHandle: '@Rangers',
        hashtag: '#StraightUpTX'
    },

    {
        apiId: 117,
        name: 'Houston Astros',
        win: false,
        runs: false,
        runCount: 0,
        winOnday: true,
        day: 'Tuesday',
        papaJohnsCode: 'ASTROS',
        twitterHandle: '@astros',
        hashtag: '#LevelUp'
    },
    {
        apiId: 144,
        name: 'Atlanta Braves',
        win: false,
        runs: true,
        runCount: 5,
        winOnday: false,
        day: '',
        papaJohnsCode: 'BRAVES5',
        twitterHandle: '@Braves',
        hashtag: '#ForTheA'
    }
]

module.exports = teams
