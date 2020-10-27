import React, {Component, useState} from 'react';
import '../../sass/userprofile/userprofile.scss'
import star from '../../assets/svgs/star.svg';
import comment from '../../assets/svgs/comment.svg';
import restaurant from '../../assets/svgs/restaurant.svg';
import editprofile from '../../assets/svgs/edit.svg';
import profilepicture from '../../assets/images/user/laurents-pb.png'


export const UserProfile = () => {

    const [currentStage, setcurrentStage] = useState('show-reviews')

        return(

            //Holds whole profile container
            <div className='container-user-profile'>

                {/*LEFT COLUMN*/}

                {/*MENU LEFT COLUMN*/}
                <div className='wrapper-menu-lc'>
                {/*PROFILE PIC LEFT COLUMN*/}
                <div className='wrapper-profile-lc'>
                    <img className='profile-picture, responsive' src={profilepicture}/>
                    <p className='user-profile-text-lc'>Laurent's Profile</p>
                </div>


                        {/*Reviews*/}
                        <div className='reviews-menu-lc' onClick={(event) => setcurrentStage('show-reviews')}>
                            <img className='menu-icon-lc' src={star}  alt=''/>
                            <p>Reviews</p>
                        </div>

                        {/*Comments*/}
                        <div className='comments-menu-lc' onClick={(event) => setcurrentStage('show-comments')}>
                            <img className='menu-icon-lc' src={comment} alt=''/>
                            <p>Comments</p>
                        </div>

                        {/*Restaurants*/}
                        <div className='restaurant-menu-lc' onClick={(event) => setcurrentStage('show-restaurants')}>
                            <img className='menu-icon-lc' src={restaurant} alt=''/>
                            <p>Restaurants</p>
                        </div>

                        {/*Edit Profile*/}
                        <div className='edit-profile-menu-lc' onClick={(event) => setcurrentStage('show-editprofile')}>
                            <img className='menu-icon-lc' src={editprofile} alt=''/>
                            <p>Edit Profile</p>
                        </div>
                    </div>

                {/*MIDDLE COLUMN*/}

                {/*User Info*/}
                <div className='middle-column'>

                    <p className='username-mc'>Laurent H.</p>
                    <p className='location-mc'>Zürich, CH</p>
                    <p className='amount-reviews-mc'>6 Reviews</p>
                    <p className='amount-comments'>210, Comments</p>


                {/*MENU SWAPPING COMPONENTS*/}

                {/*REVIEW SHOW ON CLICK*/}
                {/*Wrapper*/}
                {currentStage === 'show-reviews' ?
                <div className='reviews-wrapper-mc'>
                    {/*Title*/}
                    <p className='reviews-title-mc'>REVIEWS</p>

                        {/*SINGLE REVIEW*/}
                        <div className='single-review-mc'>

                            {/*Restaurant Name and Date*/}
                            <div className='wrapper-review-title-date-mc'>
                            <p className='restaurant-name-mc'> Läderach Chocolatier Suisse</p>
                            <p className='date-review-mc'>10.10.2020</p>
                            </div>

                            {/*Stars*/}
                            <div className='stars-review-mc'>
                                <img className='star-one' src={star}/>
                                <img className='star-two' src={star}/>
                                <img className='star-three' src={star}/>
                                <img className='star-four' src={star}/>
                                <img className='star-five' src={star}/>
                            </div>

                            {/*Review TEXT CONTENT WRAPPER*/}
                            <div className='review-content-wrapper-mc'>
                                <p className='text-review-mc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo</p>
                            </div>
                            <div className='hr'><hr/></div>
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
                        <p className=''>This was horrible!</p>
                    </div>
                    <div className='hr'><hr/></div>

                </div>
                : null }

                {/*RESTAURANT SHOW ON CLICK*/}
                {currentStage === 'show-restaurants' ?
                    <div className='restaurant-wrapper-mc' >
                    <p className='restaurant-title'>RESTAURANTS</p>

                    {/*S*/}
                    <div className='single-restaurant-mc'>

                        {/*Restaurant Name and Date*/}
                        <div className='wrapper-restaurant-title-date-mc'>
                            <p className='restaurant-name-mc'>Laurention Gelato Store</p>
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
                        <div className='restaurant-content-wrapper-mc'>
                            <p className='text-restaurant-mc'>This is the Restaurant Laurents Gelato Store we have great gelato</p>
                        </div>
                        <div className='hr'><hr/></div>
                    </div>
                </div>
                : null }

                {/*EDIT PROFILE SHOW ON CLICK*/}
                {currentStage === 'show-editprofile' ?

                <div className='edit-profile-wrapper-mc'>

                {/*Title*/}
                <p className='edit-profile-title'>EDIT USERPROFILE</p>

                    <div className='input-fields-mc'>

                        {/*Username*/}
                        <div>
                            <p className='input-title'>Username</p>
                            <input type='text'/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*First name*/}
                        <div>
                            <p className='input-title'>First name</p>
                            <input type='text'/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*Last name*/}
                        <div>
                            <p className='input-title'>Last Name</p>
                            <input type='text'/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*E-mail*/}
                        <div>
                            <p className='input-title'>E-mail</p>
                            <input type='text'/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*Location*/}
                        <div>
                            <p className='input-title'>Location</p>
                            <input type='text'/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*Phone*/}
                        <div>
                            <p className='input-title'>Phone</p>
                            <input type='text'/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*Things i love*/}
                        <div>
                            <p className='input-title'>Things i love</p>
                            <input className='things-i-love-input' type='text'/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>

                        {/*Description*/}
                        <div>
                            <p className='input-title'>Description</p>
                            <input className='description-input' type='text'/>
                            <p className='error-required-field-mc'>*This field is required</p>
                        </div>
                    </div>

                    <div className='save-delete-mc'>
                    <button className='save-editdprofile-mc'>Save</button>
                    <p>Delete account</p>
                    </div>

                </div>
                : null }
                </div>

                {/*RIGHT COLUMN*/}
                <div className='right-column'>

                    <div className='title-about-rc'>
                        <p className='title-about'>About Laurent</p>
                    </div>

                    <div className='location-rc'>
                        <p className='title-rc'>Location</p>
                        <p className='text'>Zürich, CH</p>
                    </div>

                    <div className='member-since-rc'>
                        <p className='title-rc'>Luna member since</p>
                        <p className='text'>April, 2018</p>
                    </div>

                    <div className='things-i-love-rc'>
                        <p className='title-rc'>Things i love</p>
                        <p className='text'>Everything</p>
                    </div>

                    <div className='description-rc'>
                        <p className='title-rc'>Description</p>
                        <p className='text'>I'm a professional photographer with an eye fore details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop an take notes.</p>
                    </div>

                </div>

            </div>
        )
}
