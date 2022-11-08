const module2Url = new URL("module-2", import.meta.url);
console.log("Module 2 URL", module2Url.href);

const module2OtherUrl = new URL("module-2/other", import.meta.url);
console.log("Module 2 other URL", module2OtherUrl.href);

import { module1 } from "module-1";
module1();
