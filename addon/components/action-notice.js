import { later, cancel } from '@ember/runloop';
import Component from '@ember/component';
import { set, get, observer } from '@ember/object';
import layout from '../templates/components/action-notice';

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
    let hideIntervalId = later(this,function(){
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
      cancel(hideIntervalId);
    }
  }

});
