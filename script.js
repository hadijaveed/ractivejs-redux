import Ractive from 'ractive';
import _ from 'lodash';
import { Store } from './store';
import Tasks from './components/task';
import './style.css';

const Provider = new Ractive({
    el: '.mount',
    template: '#tpl',
    data: {
        Store
    },
    components: {
        Tasks: Tasks
    },

    onrender: function() {
        console.log('provider have been rendered ');
    }
});

Store.subscribe(() => Provider.update());

Store.subscribe(() => {
    console.log('see new state ', Store.getState());
});

Store.dispatch({ type: '' });
