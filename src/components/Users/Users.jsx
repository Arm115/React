import * as axios from "axios";
import React from "react";
import modules from './Users.module.css'
import usersPhotoDefault from './../../assets/images/usersDefaultPhoto.jpg'


let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
    }

    let usersElements = props.users.map(u => <div key={u.id}>
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
                <div>{u.name}</div>
                <div>{u.status != null ? u.status : "Нет статуса"}</div>
            </span>
            <span>
                {/* <div>{u.location.country}</div>
                <div>{u.location.city}</div> */}
            </span>
        </span>
    </div>)

    return (<div>
        {usersElements}
    </div>)
}

export default Users