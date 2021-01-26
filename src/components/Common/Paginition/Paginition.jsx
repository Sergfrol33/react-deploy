    import React, {useState} from "react";
    import style from './Paginition.module.css';
    import cn from 'classnames'
    import {Button, ButtonGroup} from "react-bootstrap";
    import 'bootstrap/dist/css/bootstrap.min.css';


    let Paginition = ({totalItemsCount,pageSize,onPageChanged,portionSize = 10}) => {
        let pagesCount = Math.ceil(totalItemsCount/ pageSize);
        let pages = [];
        for (let i = 1; i < pagesCount; i++){
            pages.push(i);
        }

        let portionCount = Math.ceil(pagesCount / portionSize);
        let [portionNumber,setPortionNumber] = useState(1);
        let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
        let rightPortionNumber = portionNumber * portionSize;
        return (
                    <div className={style.paginator}>
                        {portionNumber > 1 && <Button onClick={() =>{setPortionNumber(portionNumber - 1)}}>PREV</Button> }
                        {pages.filter(p =>p >= leftPortionNumber && p <= rightPortionNumber)
                            .map(p => {
                            return <ButtonGroup onClick={() => {onPageChanged(p)}} className = {cn( style.pageNumber)}
                                         key = {p}><Button variant={'outline-primary'}>{p}</Button></ButtonGroup>})}
                        {portionCount > portionNumber && <Button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</Button>}

                    </div>
        );
    };

    export default Paginition;
