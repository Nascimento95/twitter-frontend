

const createTweets = async(values) => {
    const response = await fetch(`http://localhost:5000/tweets`, {
        method : 'post',
        headers : {
            'content-type' : 'application/json'
        },
        credentials: "include",
        body:JSON.stringify({
            content: values.text,
        }),
    })
    if (response.status >= 400) {
        throw response.stautusText
    }
    const tweet = await response.json()

    return tweet
};

export default createTweets;