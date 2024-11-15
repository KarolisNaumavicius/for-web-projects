import styles from './UserProfile.module.css';

const UserProfile = ({ data }) => {

    return (
        <div className={styles.profile}>
           <div className={styles.photo}> 
                <img src={'http://localhost:3000/uploads/' + data.photo} />
            </div>
            <div className={styles.info}>
                <div className={styles.userName}> {/* Corrected className */}
                    {data.user_name}
                </div>
                <div clasaName={styles.postsCount}>
                    <strong>{data.postCount}</strong>
                    <span> posts</span>
                </div>
                <div className={styles.bio}>
                    {data.bio}
                </div>
                
            </div>
        </div>
    );
}

export default UserProfile;
