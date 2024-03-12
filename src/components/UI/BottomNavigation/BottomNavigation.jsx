import styles from "./BottomNavigation.module.scss";

const tabs = [
    {
        _id: 1,
        name: 'Overview'
    },
    {
        _id: 2,
        name: 'Episode'
    },
    {
        _id: 3,
        name: 'Details'
    }
]

const BottomNavigation = ({activeTab, setActiveTab}) => {
    return (
        <div className={styles.nav}>
            {tabs.map(tab => (
                <button className={activeTab === tab._id ? styles.active : ''} key={tab._id}
                        onClick={() => setActiveTab(tab._id)}>{tab.name}</button>
            ))}
        </div>
    )
}

export default BottomNavigation