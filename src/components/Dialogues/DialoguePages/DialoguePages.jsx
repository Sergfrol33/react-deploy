    import React from "react";
    import cn from 'classnames';
    import style from './DialoguePages.module.css'
    import '../../../utility/landing/Landing.css'


    const DialoguePages = ({dialog,message}) => {

        return (
            <div className={style.pageDialogs}>
                <ul className={cn(style.pageDialogsContent, style.cleanList, style.scrollContainer)} style={{
                    width: '316px'
                }}>
                    <div className={style.scrollOverflow}>
                        <div className={style.scrollOuter}>
                            <div className={style.scrollInner}>
                                <div className={style.scrollContent}>
                                    {
                                       dialog.map(d =>{
                                           return <li className={style.dialog}>
                                               <div className={style.dialogPhoto}>
                                                   <img src={d.photo} alt=""/>
                                               </div>
                                               <div className={style.dialogContent}>
                                                   <div style={{
                                                       padding: '8px 0',
                                                       width:'150px'
                                                   }}>
                                                <span className={style.dialogName}>
                                                    {d.name} {d.surname}
                                                </span>

                                                       <div className={style.textPreview}>
                                                    <span className={style.dialogWho}>
                                                        {d.name}:
                                                </span>
                                                           <span className={style.dialogInnerText}>
                                                               {d.message}
                                                </span>
                                                       </div>
                                                   </div>
                                               </div>
                                           </li>
                                       })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </ul>
            </div>
        );
    }


    export default DialoguePages;