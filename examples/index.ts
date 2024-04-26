/**
 * Instructions on how to run an example:
 * Step 1: do this.
 * Step 2: do that.
 */
import { SparkError } from '@cspark/starter';

const error = new SparkError({ message: 'This is an error message.' });
console.log(error.message);
