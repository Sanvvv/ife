import san from 'san';
import Block from './Block.san'
import './main.css'

var MyApp = san.defineComponent({
  components: {
    'block': Block
  },
  template: '<div id="app"><block></block></div>'
});

var myApp = new MyApp();
myApp.attach(document.body);