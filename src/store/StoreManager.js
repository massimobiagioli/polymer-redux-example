StoreManager.store = Redux.createStore(Redux.combineReducers({
    view1: StoreManager.reducers['view1'],
    view2: StoreManager.reducers['view2'],
    view3: StoreManager.reducers['view3']
}));

StoreManager.ReduxBehavior = new PolymerRedux(StoreManager.store);