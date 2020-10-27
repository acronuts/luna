import React, {Component, useState} from 'react';
import '../../sass/create-restaurant/createrestaurant.scss';
import line from "../../assets/images/createrestaurant/Line.png"
export const CreateRestaurant = () => {

    return (

        <div className='container-create-restaurant'>

            <div className='wrapper-title'>
                <p className='title'>CREATE NEW RESTAURANT</p>
                <img src={line} />
            </div>

            <div className='wrapper-input'>

                <div className='left-column'>

                    <p className='input-title'>Name *</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>Street *</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>Website</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>Opening Hours *</p>
                    <input className='input' type='text'/>

                </div>

                <div className='middle-column'>

                    <p className='input-title'>Category *</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>City *</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>Phone *</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>Price Level *</p>
                    <input className='input' type='text'/>

                </div>

                <div className='right-column'>

                    <p className='input-title'>Country *</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>Zip</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>Email</p>
                    <input className='input' type='text'/>

                    <p className='input-title'>Image</p>
                    <button className='image-button'>CHOOSE A FILE TO UPLOAD...</button>

                </div>

            </div>

            <div className='save-btn-wrapper'>
                    <button className='button'>Save</button>
                </div>
        </div>
    )
}