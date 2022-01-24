import getTweets from "./getTweets";
const deleteTweet = async(id) => {
    const response = await fetch(`http://localhost:5000/tweets/${id}`, {
        method : 'delete',
        headers : {
            'content-type' : 'application/json'
        },
        credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
    const tweetDeleted = await response.json()

    getTweets()
    return tweetDeleted
};

export default deleteTweet;