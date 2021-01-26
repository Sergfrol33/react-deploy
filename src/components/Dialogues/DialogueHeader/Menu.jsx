    import React from "react";
    import  './DialogueHeader.module.css'
    import MoreHoriz from '@material-ui/icons/MoreHoriz'
    import './menu.css'




    const Menu = (props) => {

        return (
            <div className={'menu'}>
                <div className="menu__list">
                    <li>
                        <MoreHoriz style={{
                            color: 'gray',
                            height: '35px',}}/>
                        <ul className="sub-menu__list">
                            <li><a href="/" className="sub-menu__link">Показать вложения</a></li>
                            <li><a href="/" className="sub-menu__link">Поиск по истории вложении</a></li>
                            <li><a href="/" className="sub-menu__link">Поиск по истории сообщений</a></li>
                        </ul>
                    </li>
                </div>
            </div>
        );
    }


    export default Menu;