import modules from './Users.module.css'
import usersPhotoDefault from './../../assets/images/usersDefaultPhoto.jpg'
import { NavLink } from "react-router-dom";
import preloader from './../../assets/images/Rocket.gif'
import axios from 'axios';
import { userFollow, userUnfollow } from '../../api/api';


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
                                    ? <button onClick={() => {
                                        
                                        userUnfollow(u.id)
                                            .then(response => {
                                                debugger
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }


                                            });
                                    }


                                    }>Unfollow</button>
                                    : <button onClick={() => {

                                        userFollow(u.id).then(response => {

                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }


                                        });

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