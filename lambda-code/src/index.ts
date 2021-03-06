import * as args from 'args';
import { handler as helloWorldHandler } from './hello-world';

args.option('function-name', 'The function to run');

const flags = args.parse(process.argv);

const func = flags['function-name'] || flags.f;

enum FunctionName {
  HELLO_WORLD = 'hello-world',
}

if (func === FunctionName.HELLO_WORLD) {
  const result = helloWorldHandler();
  console.log(result);
} else {
  console.error('Invalid function name', { functionName: func });
}
