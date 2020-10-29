import {listsRestaurants} from "../constants";


export const setRestaurantData = (type, data) => {
    return {
        type: type,
        payload: data,
    }
}

export const listRestaurant = (type) => async (dispatch, getState) => {
    const { userLoginReducer:{ token } } = getState();
    const config = {
        method: "GET",
        headers: new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type" : "application/json"
        }),

    }

    const response = await fetch(listsRestaurants, config)
    const data = await response.json();
    dispatch(setRestaurantData(type, data))
}