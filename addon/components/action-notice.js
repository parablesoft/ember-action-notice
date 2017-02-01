import Ember from 'ember';
import layout from '../templates/components/action-notice';

const{observer,Component,get,set} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: "",
  interval: 2500,
  hideNotice: observer("show",function(){
    let {show,interval} = this.getProperties("show","interval");
    if(!show){return;}
    Ember.run.later(this,function(){
      set(this,"show",false);
    },interval);
  }),
});
