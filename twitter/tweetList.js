// name - Team Name
// twitterHandle - Twitter Handle
// papaJohnsCode - Code for Papa Johns
// hashtag - Hashtag for team

// ${name}
// ${twitterHandle}
// ${papaJohnsCode}
// ${hashtag}

const composeTweet = ({twitterHandle, papaJohnsCode, hashtag}) => {
    const tweetsArray = [
        `${twitterHandle} have earned you a Papa John's discount with the code ${papaJohnsCode} P-I-Z-Z-A ${hashtag}`,
        `Pizza for Lunch? Dinner? Breakfast? Get 50% of Papa John's today thanks to ${twitterHandle}, use promo code ${papaJohnsCode} ${hashtag}`,
        `${hashtag} ... P-I-Z-Z-A give me 50% off pizza at Papa John's, thank you ${twitterHandle} for doing the business. promo code ${papaJohnsCode}`,
        `Pie in the sky or in your mouth ${hashtag}, nice work ${twitterHandle} ...use promo code ${papaJohnsCode}`,
        `${hashtag} Put some PIZZA on Home Plate thanks to ${twitterHandle} .. 50% off with promo code ${papaJohnsCode}`,
        `Feeling peckish? Thanks to ${twitterHandle} today you can get 50% off Papa Johns Pizza with promo code ${papaJohnsCode} ... ${hashtag}`,
        `${hashtag} ... LAAARRRRRGE PIZZA PLEASE! 50% off thanks to ${twitterHandle} use promo code ${papaJohnsCode}`,
        `Did somebody say half price Pizza? ${hashtag} use promo code ${papaJohnsCode}`,
        `50% Off, ${hashtag}, Papa Johns, Promo Code ${papaJohnsCode} thanks ${papaJohnsCode}`,
        `🍕🍕🍕 ${hashtag} ... ${papaJohnsCode}  <-- 50% off Papa Johns today`,
        `${twitterHandle} ⚾ + Papa John's 🍕 = 50% Off use code ${papaJohnsCode}`,
    ]

    const randomTweet =
        tweetsArray[Math.floor(Math.random() * tweetsArray.length)]

    return randomTweet
}

module.exports = composeTweet
