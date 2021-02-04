const Amplify = require ('aws-amplify');
const API = require ('@aws-amplify/api');

const awsconfig = require ('src/aws-exports');

Amplify.configure(awsconfig);

console.log (awsconfig);
console.log (awsconfig.aws_project_region);