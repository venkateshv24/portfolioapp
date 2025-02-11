import xmark from '@/assets/icons/xmark.svg';
import classes from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default function MenuOptions( { showMenu, setShowMenu }: { showMenu: boolean}) {
    return(
        <div className={`${classes['menuoption-main']} ${showMenu ? classes['open-menu'] : ''}`}>
            <Image onClick={() => setShowMenu(false)} src={xmark}  alt="Close Icon" className={classes['close-icon']}/>
            <ul className={classes?.menulist} onClick={() => setShowMenu(false)}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}