
let state = {
    profile: {
        postsData: [
            { id: 1, message: 'Hi,how are you', likesCount: 78 },
            { id: 2, message: 'My post', likesCount: 20 },
            { id: 3, message: '', likesCount: 0 },
            { id: 4, message: 'This is test of mapping', likesCount: 5 },
        ],
    },
    dialogs: {
        dialogsData: [
            { id: 1, name: 'Vlad' },
            { id: 2, name: 'Dimych' },
            { id: 3, name: 'Elena' }
        ],
        messagesData: [
            { id: 1, message: 'Hi how are you' },
            { id: 2, message: 'How you did it' },
            { id: 3, message: 'Good luck' },
        ]
    },
}

export default state