import React, {Component, useEffect, useState} from 'react';
import "../../sass/home/home.scss"

import star from "../../assets/svgs/star.svg";
import {useDispatch, useSelector} from "react-redux";
import {List_all_Restaurants} from "../../constants";
import {listRestaurant} from "../../actions/restaurantAction";

export const Homepage = ({data}, props) => {

    const placeholder = 'Your review helps others learn about great local businesses.'
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(listRestaurant(List_all_Restaurants))
    // },[])

    const listAllRestaurants = useSelector((state) => state.restaurantsAllChron)

    return (

        <div className='home-page-container'>

            <div className="home-page-wrapper">

                <input type="text" placeholder="Search..."/>

                <button type="submit" id="search">Search</button>

            </div>

            <div className="lower-wrapper">

                <div className="title-container">

                    <h1 className="title">BEST RATED RESTAURANTS</h1>

                </div>

                <div className="best-rated-restaurants">



                </div>

            </div>

        </div>
    )
}