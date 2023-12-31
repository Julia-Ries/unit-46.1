const INITIAL_STATE = {face: '┐( ˘_˘ )┌'};

const moodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'MOOD_HAPPY':
            return{...state, face: action.payload };
        case 'MOOD_SAD':
            return{...state, face: action.payload };
        case 'MOOD_ANGRY':
            return{...state, face: action.payload };
        case 'MOOD_CONFUSED':
            return{...state, face: action.payload };
        default: 
            return state;
    }
};


