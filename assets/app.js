// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
import 'bootstrap';
import bsCustomFileInput from 'bs-custom-file-input';

 // start the Stimulus application
 import './bootstrap';

 import './controllers/scroll.js';
 import './controllers/tinymce.js';

 
 global.$ = global.jQuery = $;

bsCustomFileInput.init();