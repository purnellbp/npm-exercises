const $ = require('jquery');



const sayHello = () => {
    console.log("Hello.");
};
sayHello();

import { niceMessage} from "./say-hello";

console.log(niceMessage);