import React from 'react'
import {NextPage} from 'next'
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'
import styles from '../styles/Home.module.css'
import { Transition } from 'react-transition-group'

interface SocialLayoutProps {

}

export const SocialLayout: NextPage<SocialLayoutProps> = ({}) => {
    
        return (
            <Transition in={true} timeout={1000} appear>
                {(status) => (
                    <div className={styles.socials} style={{
                        opacity: status === 'entered' ? 1 : 0,
                        transition: 'all 600ms ease-in-out',
                        fontSize: '2rem',
                        cursor: "pointer",
                        color: '#FFFFFF30'
                    }}>
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                    <FiMail />
                </div>
                )}
            </Transition>
        ) ;
}