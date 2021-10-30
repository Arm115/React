import * as axios from "axios";
import React from "react";
import modules from './Users.module.css'
import usersPhotoDefault from './../../assets/images/usersDefaultPhoto.jpg'
import { NavLink } from "react-router-dom";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p => {
                    return <NavLink to={this.props.currentPage} className={this.props.currentPage === p && modules.pages} onClick={(e) => this.onPageChanged(p)}>{p}</NavLink>
                })}
                <div>
                    {
                        this.props.users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : usersPhotoDefault} className={modules.images} />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                        : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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

}

export default Users