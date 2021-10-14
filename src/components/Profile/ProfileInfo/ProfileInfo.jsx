import modules from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={modules.content_image} src={props.content_image}/>
            </div>
            <div>
                <img className={modules.ava_image} src={props.ava_image} />
            </div>
            
        </div>
    )
}

export default ProfileInfo