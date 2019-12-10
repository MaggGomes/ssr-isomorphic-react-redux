import { FETCH_USERS } from '../actions/actions';

export default (state = [], action) => {
    switch (action.type){
        case FETCH_USERS:
            console.log("fecth users");
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}