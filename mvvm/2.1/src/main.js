import san from 'san';
import Message from './Message.san'
import './main.css'

var MyApp = san.defineComponent({
  components: {
    'message': Message
  },
  template: '<div id="app"><message></message></div>'
});

var myApp = new MyApp();
myApp.attach(document.body);