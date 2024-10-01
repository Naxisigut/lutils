import * as lutils from './dist/lutils';
import { formatTime } from './dist/lutils';

document.getElementById('app').textContent = formatTime(new Date, 'YYYY-MM-MM hh:mm:ss')
