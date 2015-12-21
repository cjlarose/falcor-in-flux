import EventEmitter from 'eventemitter3';
import falcor from 'falcor';
import cache from '../config/cache';
import dispatcher from '../lib/dispatcher';

const FalcorStore = new falcor.Model({
  cache,
  onChange: () => this.emit("change")
});
Object.assign(FalcorStore, EventEmitter);

const id = dispatcher.register(function(action){
  switch(action.type) {
  }
});
FalcorStore.flux = { id };

export default FalcorStore;
