

const getTweetById = async(id) => {
    
    console.log(id);
    const response = await fetch(`http://localhost:5000/tweets/${id}`, {
        credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
    const tweet = await response.json()

    return tweet
};

export default getTweetById;