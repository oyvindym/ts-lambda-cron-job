import * as args from 'args';
import { handler as helloWorldHandler } from './hello-world';

args.option('function', 'The function to run');

const flags = args.parse(process.argv);

const { function: func } = flags;

enum FunctionName {
  HELLO_WORLD = 'hello-world',
}

if (func === FunctionName.HELLO_WORLD) {
  const result = helloWorldHandler();
  console.log(helloWorldHandler());
} else {
  console.error('Invalid function name', { functionName: func });
}
