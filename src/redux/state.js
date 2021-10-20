
let store = {
    _state: {
        profile: {
            postsData: [
                { id: 1, message: 'Hi,how are you', likesCount: 78 },
                { id: 2, message: 'My post', likesCount: 20 },
                { id: 3, message: '', likesCount: 0 },
                { id: 4, message: 'This is test of mapping', likesCount: 5 },
            ],
            newPostValue: ''
        },

        dialogs: {
            dialogsData: [
                { id: 1, name: 'Vlad', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36DPlGB9gHZ2cGWpOVwu9vfjH3ibtOkrzPg&usqp=CAU' },
                { id: 2, name: 'Dimych', avatar: 'https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg' },
                { id: 3, name: 'Elena', avatar: 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png' }
            ],
            messagesData: [
                { id: 1, message: 'Hi how are you' },
                { id: 2, message: 'How you did it' },
                { id: 3, message: 'Good luck' },
            ]
        },
        navbar: {
            friends: [
                { id: 1, name: 'Vlad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36DPlGB9gHZ2cGWpOVwu9vfjH3ibtOkrzPg&usqp=CAU' },
                { id: 2, name: 'Dimych', img: 'https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg' },
                { id: 3, name: 'Elena', img: 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png' }
            ],
        },
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('Hi')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profile.newPostValue,
            likesCount: 0
        }
        this._state.profile.postsData.push(newPost)
        this._state.profile.newPostValue = ''
        this._callSubscriber(this._state)
    },
    updateNewPostChange(newText) {
        this._state.profile.newPostValue = newText
        this._callSubscriber(this._state)
    },
    subcribe(observer) {
        this._callSubscriber = observer
    },
    addMessage(dialogMessage) {
        let newDialog = {
            id: 4,
            message: dialogMessage
        }
        this._statedialogs.messagesData.push(newDialog)
        this._callSubscriber(this._state)
    }
}




window.store = store

export default store;