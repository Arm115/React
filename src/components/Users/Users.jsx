import modules from './Users.module.css'
import usersPhotoDefault from './../../assets/images/usersDefaultPhoto.jpg'
import { NavLink } from "react-router-dom";
import preloader from './../../assets/images/Rocket.gif'
import axios from 'axios';



let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }




    return (
        <div>
            {pages.map(p => {
                return <NavLink to={props.currentPage} className={props.currentPage === p && modules.pages} onClick={(e) => props.onPageChanged(p)}>{p}</NavLink>
            })}
            <div>
                {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : usersPhotoDefault} className={modules.images} /></NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingInProgress(true,u.id)
                                        props.unfollowing(u.id)
                                        props.toggleFollowingInProgress(false,u.id)
                                    }


                                    }>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingInProgress(true,u.id)
                                        props.following(u.id)
                                        props.toggleFollowingInProgress(false,u.id)

                                    }


                                    }>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div><NavLink to={'profile/' + u.id} activeClassName={modules.active}>{u.name}</NavLink></div>
                                <div>{u.status != null ? u.status : "Нет статуса"}</div>
                            </span>
                            <span>
                                {/* <div>{u.location.country}</div>
                <div>{u.location.city}</div> */}
                            </span>
                        </span>
                    </div>)}
            </div>
            <div>{props.isFetching ? <img src={preloader} className={modules.preloader} /> : null}</div>
        </div>
    )
}

export default Users