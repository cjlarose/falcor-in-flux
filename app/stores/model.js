import EventEmitter from 'eventemitter3';
import falcor from 'falcor';
import cache from '../config/cache';
import dispatcher from '../lib/dispatcher';

const FalcorStore = new falcor.Model({
  cache,
  onChange: () => FalcorStore && FalcorStore.emit("change")
});
Object.assign(FalcorStore, EventEmitter.prototype);

const id = dispatcher.register(function(action){
  switch(action.type) {
    case "FEATURE_LIKE": 
      let path = ["products", action.payload.itemId, "features", action.payload.featureIndex, "likes"];
      FalcorStore.getValue(path)
        .then(value => FalcorStore.setValue(path, ++value))
        .catch(error => console.error(error));
  }
});
FalcorStore.flux = { id };

export default FalcorStore;
