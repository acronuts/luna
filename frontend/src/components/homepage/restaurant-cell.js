import star from "../../assets/svgs/star.svg"


export const Restaurant_cell = ({data}, props) => {



    return (data) ? (

        <div className="restaurant_card_wrapper">

            <div id={`restaurant-${data.id}`}>

                <div className="upper-upper">

                    <p>{data.name}</p>
                    <p>{data.city}</p>

                </div>

                <div className="stars">

                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>

                </div>

                <div className="lower-card">s



                </div>

            </div>


        </div>
    ): null
}