StoreManager.reducers['view2'] = function(state, action) {
    if (!state) {
        state = {};
    }
    
    switch (action.type) {
        case 'view2_notifyAddress':
            key = 'indirizzo_' + action.data.tipo;
            state[key] = {
                via: action.data.via,
                localita: action.data.localita,
                provincia: action.data.provincia,
            }
            break;
    }
    
    return state;
};