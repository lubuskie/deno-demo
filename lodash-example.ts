import { flattenDeep } from "https://cdn.pika.dev/lodash-es@^4.17.15";

const array = flattenDeep([1, [2, [3, [4, [5]]]]]);
console.log("array :>> ", array);
