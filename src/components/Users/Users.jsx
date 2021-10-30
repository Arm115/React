import * as axios from "axios";
import React from "react";
import modules from './Users.module.css'
import usersPhotoDefault from './../../assets/images/usersDefaultPhoto.jpg'
import { NavLink } from "react-router-dom";


class UsersC extends React.Component {
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }



    render() {
        return (
            <div>
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

export default UsersC