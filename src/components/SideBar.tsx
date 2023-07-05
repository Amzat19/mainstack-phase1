import React from 'react';
import { ReactComponent as MainStackLogo } from "../assets/mainstack-logo.svg";
import { ReactComponent as DashBoard } from "../assets/dashboard.svg";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Group } from "../assets/group.svg";
import { ReactComponent as HourGlass } from "../assets/hourglass_empty.svg";
import { ReactComponent as Camera } from "../assets/add_a_photo.svg";
import { ReactComponent as Bin} from "../assets/delete.svg";
import { ReactComponent as Subscription } from "../assets/subscriptions.svg";
import { ReactComponent as File } from "../assets/file_present.svg";
import { ReactComponent as Alarm } from "../assets/alarm.svg";
import { ReactComponent as Ellipses } from "../assets/more_horiz.svg";
import blessing from "../assets/blessing.png";
import styles from '../styles/sidebar.module.scss';

const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <MainStackLogo />
            </div>
            <div className={styles.sideLinks}>
                <div>
                    <span className={styles.activePage}>
                        <DashBoard />
                        <p>Dashboard</p>
                    </span>
                    <ul>
                        <li>
                            <Edit />
                            <p>Item 1</p>
                        </li>
                        <li>
                            <Group />
                            <p>Item 2</p>
                        </li>
                        <li>
                            <HourGlass />
                            <p>Item 3</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Others1</span>
                    <ul>
                        <li>
                            <Camera />
                            <p>Item 4</p>
                        </li>
                        <li>
                            <Bin />
                            <p>Item 5</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>Other2</span>
                    <ul>
                        <li>
                            <Subscription />
                            <p>Item 7</p>
                        </li>
                        <li>
                            <File />
                            <p>Item 8</p>
                        </li>
                        <li>
                            <Alarm />
                            <p>Item 9</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.profile}>
                <img src={blessing} alt="a dark skin woman" />
                <p>Blessing Daniels</p>
                <Ellipses />
            </div>
        </aside>
    )
}

export default Sidebar;