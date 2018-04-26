import san from 'san';
import List from './List.san'
import './main.css'

var MyApp = san.defineComponent({
  components: {
    'list': List
  },
  template: '<div id="app"><list></list></div>'
});

var myApp = new MyApp();
myApp.attach(document.body);