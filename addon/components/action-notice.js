import Ember from 'ember';
import layout from '../templates/components/action-notice';

const{observer,Component,get,set} = Ember;

export default Component.extend({
  layout,
  tagName: "",
  interval: 2500,
  hideIntervalId: null,
  hideNotice: observer("show",function(){
    if(this.isDestroyed)
      return;

    let {show,interval} = this.getProperties("show","interval");
    if(!show){return;}
    let hideIntervalId = Ember.run.later(this,function(){
      set(this,"show",false);
      set(this,"hideIntervalId",null);
    },interval);
    set(this,"hideIntervalId",hideIntervalId);
  }),
  willDestroyElement(){
    this._super(...arguments);
    if(this.isDestroyed)
      return;

    let hideIntervalId = get(this,"hideIntervalId");
    if(hideIntervalId){
      set(this,"show",false);
      Ember.run.cancel(hideIntervalId);
    }
  }

});
