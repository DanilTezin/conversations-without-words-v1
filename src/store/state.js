import React from 'react'


let store = {

    _state: {

        profilePage: {

            post: [
                { id: 1, name: "ТВОЯ", time: "0:00" },
                { id: 2, name: "МАМА", time: "23:00" },
                { id: 3, name: "САМАЯ", time: "22:30" },
                { id: 4, name: "ЛУЧШАЯ", time: "20:15" }
            ],

            newPostText: ''
        },

        friendsPage: {

            friend: [
                { id: 1, name: "KiriLL" },
                { id: 2, name: "IvanZadran" },
                { id: 3, name: "VoVen" },
                { id: 4, name: "RubecPizdez", time: "0:00", text: "Заебись" }
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

    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('good')
    },

    dispatch(action) {
        switch (action.type) {

            case 'ADD-POST':

                let newPost = { id: 123123, name: action.postMessage, time: "20:00" }
                this._state.profilePage.post.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
                break;

            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.text
                this._callSubscriber(this._state)
            default:
                break;
        }
    },

    addMessage(message) {
        let newState = {...this._state }
        let newMessage = { id: 123123, text: message, name: "IFYM", time: "20:00" }
        newState.messagePage.message.push(newMessage)
        this._callSubscriber(newState)
        return newState
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }



}


export default store