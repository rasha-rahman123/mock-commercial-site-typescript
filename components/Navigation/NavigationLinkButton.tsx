import React from 'react'
import styles from '../../styles/Home.module.css'
import {NextRouter, useRouter} from 'next/router'
import Link from 'next/link'

interface NavigationLinkButtonProps {
    title: string
}

export const NavigationLinkButton: React.FC<NavigationLinkButtonProps> = ({title}) => {
    //@ts-ignore    
    const router = useRouter<NextRouter>()
    const path = router.asPath
   
        return <div className={styles.navButton}  style={{
            color: path === '/' && title === 'Home' ? 'rgb(61, 90, 255)' : path === ('/' + title.toLowerCase()) ? 'rgb(61, 90, 255)' : 'initial'

        }}>
            <Link href={title === 'Home' ? '/' : `/${title.toLowerCase()}`} ><h4>{title}</h4></Link>
        </div>;
}