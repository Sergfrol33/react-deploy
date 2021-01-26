    import React from "react";
    import style from './DialogueHeader.module.css'
    import Search from '@material-ui/icons/Search';

    import userPhoto from '../../../assets/images/kal.jpg'
    import Menu from "./Menu";


    const DialogueHeader = (props) => {

        return (
            <div className={style.headerContainer}>
                <div className={style.chatHeader}>
                    <div className={style.chatHeaderIn}>
                        <div className={style.tools}>
                            <div className={style.aside}>
                                <div>
                                    <button className={style.headerIcon} type={'button'} aria-label={'Поиск по беседе'}>
                                        <Search style={{
                                            color: 'gray'
                                        }}/>
                                    </button>
                                </div>
                                <Menu/>
                                <div className={style.asidePhoto}><img src={userPhoto} alt="userPhoto"/></div>
                            </div>
                            <div className={style.titleWrapper}>
                                <div className={style.title}>
                                    <span className={style.titleMain} title={'Сергей'}>
                                        <span className={style.titleMainIn}>
                                            <a className={style.titleMainInner} target={'_blank'} href="/">Сергей Фролов</a>
                                        </span>
                                    </span>
                                    <span className={style.titleMeta}>В сети</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    export default DialogueHeader;