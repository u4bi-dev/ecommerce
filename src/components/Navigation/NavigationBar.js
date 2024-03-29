import React from 'react'

import './NavigationBar.scss'

import NavLink from '../NavLink/NavLink'
import { faShoppingCart, faAlignJustify, faUser } from '@fortawesome/free-solid-svg-icons'

import Logo from '../Logo/Logo'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import NavigationItems from './NavigationItems'

export default ({ transparent, onMenu, onCart, onLogin, children }) => (
    <header className={ `NavigationBar ${ transparent ? 'NavigationBar__Transparent' : ''}` }>

        { children }

        <div className='erer__container'>

            <div className='NavigationBar__nav'>

                <div className='NavigationBar__mobile'>

                    <ButtonIcon icon={ faAlignJustify } onClick= { onMenu } />

                </div>

                <NavLink exact to='/' className='NavigationBar__logo'>
                    <Logo size='1.3rem' />
                </NavLink>

                <nav className='NavigationBar__desktop'>

                    <NavigationItems />

                </nav>

                <div className='NavigationBar__Icon'>

                    <NavLink exact to='/login'>
                        <ButtonIcon icon={ faUser } />
                    </NavLink>

                    <ButtonIcon icon={ faShoppingCart } onClick= { onCart } />

                </div>

            </div>

        </div>

    </header>
)