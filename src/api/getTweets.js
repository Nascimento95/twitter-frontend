

const getTweets = async() => {
    const response = await fetch(`http://localhost:5000/tweets`, {
        credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
    const tweet = await response.json()

    return tweet
};

export default getTweets;