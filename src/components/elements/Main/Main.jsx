import Information from "./Information";
import Sidebar from "../../UI/Sidebar/Sidebar";
import {DATA} from "../../../data";
import BottomNavigation from "../../UI/BottomNavigation/BottomNavigation";
import {useState} from "react";
import styles from './Main.module.scss';
import Episodes from "../Episodes/Episodes";

const Main = () => {
    const [isSidebarShow, setIsSidebarShow] = useState(false)
    const [activeTab, setActiveTab] = useState(false)

    return (
        <div className={styles.wrapper}>
            <Sidebar isSidebarShow={isSidebarShow}
                     setIsSidebarShow={setIsSidebarShow}
            />
            <div
                className={styles.main}
                style={{
                    backgroundImage: `url(${DATA[0].mainImage})`,
                    width: isSidebarShow ? '85%' : '90%'
                }}
            >
                {activeTab === 1 ? (
                    <Information movie={DATA[0]}/>
                    ) :
                    (activeTab === 2 && <Episodes /> )}
            </div>
            <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
    )
}

export default Main