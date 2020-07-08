import { join } from "path";
import { log } from "util";
import { getHeapSpaceStatistics } from "v8";
//Join paths using path.join
const dirUploads = join(__dirname, "www","files","uploads");
console.log(dirUploads);

//Util module
log(dirUploads);


//system heam memory statistics using the v8 module
log(getHeapSpaceStatistics());


