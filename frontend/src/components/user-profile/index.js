import React, { Component } from 'react';
import {render} from "@testing-library/react";
import star from '../../assets/svgs/star.svg';

const UserProfile = () => {

    const [currentStage, setcurrentStage] = useState(0)

        return(

            //Holds whole profile container
            <div className='container-user-profile'>

                {/*LEFT COLUMN*/}

                {/*PROFILE PIC LEFT COLUMN*/}
                <div className='wrapper-profile-lc'>
                    <img className='profile-picture'/>
                    <p className='user-profile-text-lc'>Laurent's Profile</p>
                </div>

                    {/*MENU LEFT COLUMN*/}
                    <div className='wrapper-menu-lc'>
                        {/*Reviews*/}
                        <div className='reviews-menu-lc'>
                            <img className='menu-icon-lc'  alt=''/>
                            <p>Reviews</p>
                        </div>

                        {/*Comments*/}
                        <div className='comments-menu-lc'>
                            <img className='menu-icon-lc'  alt=''/>
                            <p>Comments</p>
                        </div>

                        {/*Restaurants*/}
                        <div className='restaurant-menu-lc'>
                            <img className='menu-icon-lc'  alt=''/>
                            <p>Restaurants</p>
                        </div>

                        {/*Edit Profile*/}
                        <div className='edit-profile-menu-lc'>
                            <img className='menu-icon-lc'  alt=''/>
                            <p>Edit Profile</p>
                        </div>
                    </div>

                {/*MIDDLE COLUMN*/}

                {/*User Info*/}
                <div className='user-info-mc'>
                    <p className='username-mc'>Laurent H.</p>
                    <p className='location-mc'>Zürich, CH</p>
                    <p className='amount-reviews-mc'>6 Reviews</p>
                    <p className='amount-comments'>210, Comments</p>
                </div>

                {/*MENU SWAPPING COMPONENTS*/}

                {/*REVIEW SHOW ON CLICK*/}
                {/*Wrapper*/}
                {currentStage === 'show-reviews' ?
                <div className='reviews-wrapper-mc'>
                    {/*Title*/}
                    <p>REVIEWS</p>

                        {/*SINGLE REVIEW*/}
                        <div className='single-review-mc'>

                            {/*Restaurant Name and Date*/}
                            <div className='wrapper-review-title-date-mc'>
                            <p className='restaurant-name-mc'> Läderach Chocolatier Suisse</p>
                            <p className='date-review-mc'>10.10.2020</p>
                            </div>

                            {/*Stars*/}
                            <div className='stars-review-mc'>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                                <img src={star}/>
                            </div>

                            {/*Review TEXT CONTENT WRAPPER*/}
                            <div className='review-content-warpper-mc'>
                                <p className='text-review-mc'>Läderach schoggi war subba leckaa^^!</p>
                            </div>

                        </div>

                </div>
                : null }

                {/*COMMENTS SHOW ON CLICK*/}
                {currentStage === 'show-comments' ?
                <div className='comments-wrapper-mc'>

                    <p>COMMENTS</p>

                    {/*SINGLE COMMENT*/}
                    <div className='comments-title-date-wrapper-mc'>
                        <p className='comments-title-mc'>Review 1</p>
                        <p className='comments-date-mc'>20.20.2020</p>
                    </div>

                    <div className='comments-content-wrapper-mc'>
                        <p className='comments-content-mc'></p>
                    </div>

                </div>
                    : null }



            </div>
        )
}

export default  UserProfile