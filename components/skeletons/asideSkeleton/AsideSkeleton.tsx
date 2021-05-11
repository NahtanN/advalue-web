import styles from './asideSkeleton.module.css'

const AsideSkeleton = ({ style }) => {
    return (
        <div className={style}>
            <aside className={styles.categories}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </aside>
        </div>

    )
}

export default AsideSkeleton