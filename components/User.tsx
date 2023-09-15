import styles from '@/styles/User.module.scss'
import Image from 'next/image';

export type UserType = {
    name: string,
    photo: string,
    online: boolean,
    registration: string,
    age: number
}

const User = ({ user }: { user: UserType }) => {
    const { name, photo, online, registration, age } = user;

    return <li className={styles.user}>
        <div className={styles.avatar}>
            <Image width={264} height={133} src={`https://tz.smart-ui.pro${photo}`} alt="User" />
        </div>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.online}>
            {online ? 'online' : 'offline'}
        </div>
        <div className={styles.registration}>
            {registration}
        </div>
        <div className={styles.age}>
            {`${age} year`}
        </div>
        <div className={`${styles.chatButton}${online ? ' ' + styles.chatButtonDisabled : ''}`}>
            <button>Chat</button>
            <Image alt='Chat icon' src="/images/chat-icon.svg" width={22} height={19} />
        </div>
    </li>
}

export default User;