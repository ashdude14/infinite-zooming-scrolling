import { runTrip,runDistance} from './data.js';
//runDistance(2).then(res=>(console.log(res)));
runTrip(2).then(res=>(console.log(res['dataset'])));