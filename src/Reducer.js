export const initialState = {
    basket:[],
};
function reduc(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
                //logic for adding items to basket
                break;
        case 'REMOVE_FROM_BASKET':
                //logic for removeing from basket
                break;
        default:
            return state;
    }
}
export default reduc;