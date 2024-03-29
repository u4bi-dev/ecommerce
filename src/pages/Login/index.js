import React, { Component } from 'react'

import './index.scss'

import Center from '../../components/Center/Center'
import NavLink from '../../components/NavLink/NavLink'

import Logo from '../../components/Logo/Logo'

export default class extends Component {
    render() {

        return (
            <div className='Login'>

                <Center>

                    <div className='Login__form'>

                        <Logo size='2.8rem' />

                        <span className='erer__text-sub'>소셜 계정으로 로그인</span>

                        <button className='erer__btn erer__btn-basic'>인스타그램 로그인하기</button>

                        <button className='erer__btn erer__btn-basic'>네이버 로그인하기</button>

                        <button className='erer__btn erer__btn-basic'>구글 로그인하기</button>

                        <label>
                            <span className='erer__text-sub'>이메일</span>
                            <input />
                        </label>


                        <label>
                            <span className='erer__text-sub'>비밀번호</span>
                            <input type='password' />
                        </label>

                        <button className='erer__btn erer__btn-black'>로그인하기</button>

                        <NavLink exact to='/signup'>
                            <span className='erer__text-sub'>회원가입 하러 가기</span>
                        </NavLink>

                    </div>

                </Center>

            </div>
        )
    }

}