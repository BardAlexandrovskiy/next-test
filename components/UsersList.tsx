import User from '@/components/User';
import { UserType } from '@/components/User';
import styles from '@/styles/UsersList.module.scss';

const UsersList = ({ users }: { users: UserType[] }) => {
    return <section className={styles.usersList}>
        <h2 className={styles.title}>оur users</h2>
        <div className={styles.schedule}>
            <ul className={styles.topSide}>
                <li>photo</li>
                <li>name</li>
                <li>status</li>
                <li>registration</li>
                <li>age</li>
                <li>action</li>
            </ul>
            <ul className={styles.list}>
                {users.map((user) => <User key={user.name + user.age} user={user} />)}
            </ul>
        </div>
    </section>
}

export default UsersList;