import React from 'react'
import style from './Tabs.module.scss'

class FirstTabs extends React.Component {
    constructor(props) {
        super(props)
    }

//     changeBackground(e) {
//         e.target.style.background = 'hsl(232, 19%, 15%)'
// }
//     defaultBackground(e){
//         e.target.style.background = ' hsl(228, 28%, 20%)'
//     }

    render() {
        return (
            <div className={style.section}>
                <div className={style.firstTitle}>
                    <p className={style.mainTitle1}>Social Media Dashboard</p>
                    <p className={style.subTitle}>Total Followers: 23,004</p>

                </div>

                <div className={style.upperTabs} >
                    {
                        this.props.firstTabList.map((tab) => (
                            <div className={style.upperTab} style={{ borderImage: tab.upperColor }} /* onMouseOver={this.changeBackground} onMouseLeave={this.defaultBackground} */>
                                <span className={style.grayText}><img src={tab.icon}></img>{tab.user}</span>
                                <span className={style.biggerNumber}>{tab.number}</span>
                                <span className={style.grayText}>{tab.type}</span>

                                <span style={{ color: tab.colorRate }}> <img src={tab.upOrDown}></img>{tab.howMany}</span>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default FirstTabs