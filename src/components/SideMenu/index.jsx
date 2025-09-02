import { Collapse } from 'antd'
import styles from './index.module.less'


const SideMenu = () => {
    return (
        <div>
            <div className={styles.logo}>
                <img src="/imgs/logo.png" alt="" /> {false ? '' : <span>企业中台</span>}
            </div>
        </div>
        
    )
}

export default SideMenu