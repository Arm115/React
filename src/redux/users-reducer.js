const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://bipbap.ru/wp-content/uploads/2019/08/Malenkie-8.jpg',
            fullName: 'Dima', status: 'Good', followed: true, location: { city: 'Minsk', country: 'Belarus' }
        },
        {
            id: 2,
            photoUrl: 'https://www.meme-arsenal.com/memes/12be6fef3f4ab64e65e4f69a19b9f64d.jpg',
            fullName: 'Sasha', status: 'Busy', followed: false, location: { city: 'Moscow', country: 'Russia' }
        },
        {
            id: 3,
            photoUrl: 'https://www.meme-arsenal.com/memes/0f8248f0809b1231a56fa7a18c24796f.jpg',
            fullName: 'Vadim', status: 'Good', followed: true, location: { city: 'Minsk', country: 'Ukraine' }
        }
    ]


}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }


}



export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer