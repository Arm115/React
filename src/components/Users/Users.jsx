import modules from './Users.module.css'
import usersPhotoDefault from './../../assets/images/usersDefaultPhoto.jpg'
import { NavLink } from "react-router-dom";

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
                                <img src={u.photos.small != null ? u.photos.small : usersPhotoDefault} className={modules.images} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
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
        </div>
    )
}

export default Users