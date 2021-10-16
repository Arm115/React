
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
}

export default state;