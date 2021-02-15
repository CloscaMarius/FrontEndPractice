import React from 'react'
import style from './Tabs.module.scss'


class FirstTabs extends React.Component {
    constructor(props) {
        super(props)
    }
    changeMode = () => {
        document.body.toggleAttribute('class');
    }
    render() {
        return (

            <div className={style.section}>

                <div className={style.header}>
                    <div className={style.firstTitle}>
                        <p className={style.mainTitle1}>Social Media Dashboard</p>
                        <p className={style.subTitle}>Total Followers: 23,004</p>
                    </div>

                    <div className={style.toggleButton}>
                        {/* <form> */}
                            <div className={style.switch}>
                                <label>
                                    <strong>Dark Mode</strong>
     </label>
                                <input type="checkbox" onClick={this.changeMode}/>
                                
                                <span className={style.slider}></span>

                            </div>

                        {/* </form> */}
                    </div>
                </div>
                <div className={style.upperTabs} >
                    {
                        this.props.firstTabList.map((tab) => (
                            <div className={style.upperTab} style={{ borderImage: tab.upperColor }} >
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