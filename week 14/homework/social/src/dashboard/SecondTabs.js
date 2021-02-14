import React from 'react'
import style from './Tabs.module.scss'

class SecondTabs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style.section}>
                <div className={style.secondTitle}>
                    <p className={style.mainTitle2}>Overview - Today</p>
                </div>
                <div className={style.lowerTabs}>
                    {
                        this.props.secondTabList.map((tab) => (
                            <div className={style.lowerTab}>
                                <span className={style.grayText}>{tab.type}</span> <span className={style.secColumn}><img src={tab.icon}></img></span>
                                <span className={style.bigNumber}>{tab.number}</span>
                                <span className={style.secColumn} style={{ color: tab.colorRate }}><img src={tab.upOrDown}></img>{tab.rate}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default SecondTabs