import Amplify, { API } from 'aws-amplify';
import awsconfig from 'src/aws-exports';

Amplify.configure(awsconfig);

console.log (awsconfig);
console.log (awsconfig.aws_project_region);