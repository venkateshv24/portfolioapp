'use client';
import classes from './header.module.scss';
import Image from "next/image";
import menuicon from '@/assets/icons/menuicon.svg';
import MenuOptions from './menuoption';
import { useState } from 'react';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <>
            <div className={classes['header-main']}>
                <Image onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)} className={classes?.menuicon} src={menuicon} alt='Menu Icon'/>
                <span className={classes['header-name']}>Venkatesh V</span>
            </div>
            <MenuOptions showMenu={showMenu} setShowMenu={setShowMenu}/>
        </>
    )
}