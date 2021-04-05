import React from 'react'


let state = {
    profilePage: {
        post: [
            { id: 1, name: "ТВОЯ", time: "0:00" },
            { id: 2, name: "МАМА", time: "23:00" },
            { id: 3, name: "САМАЯ", time: "22:30" },
            { id: 4, name: "ЛУЧШАЯ", time: "20:15" },
        ]
    },

    messagePage: {
        message: [
            { id: 1, name: "Danil-ZV", time: "0:00", text: "Я стартап открыл" },
            { id: 2, name: "KiriLL", time: "0:00", text: "Ну ты даёшь!" },
            { id: 3, name: "IvanZadran", time: "0:00", text: "Давно пора" },
            { id: 4, name: "VoVen", time: "0:00", text: "И нахуя?" },
            { id: 5, name: "RubecPizdez", time: "0:00", text: "Заебись" }

        ]
    }

}

export let addPost = (postMessage) => {

    let newState = {...state }

    let newPost = {
        id: 123123,
        name: postMessage,
        time: "20:00"
    }
    debugger
    newState.profilePage.post.push(newPost)

    return newState

}




export default state