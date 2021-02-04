

 
async function testOne(){
const Amplify = require ('aws-amplify');
const API = require ('@aws-amplify/api');

const awsmobile = {
    "aws_project_region": "ap-southeast-1",
    "aws_cognito_identity_pool_id": "ap-southeast-1:52162913-f0bf-43ff-815b-e56ba2d7e9f4",
    "aws_cognito_region": "ap-southeast-1",
    "aws_user_pools_id": "ap-southeast-1_QyDA8MTS2",
    "aws_user_pools_web_client_id": "198839e0c0jsh9cspo86d2856p",
    "oauth": {},
    "aws_cloud_logic_custom": [
        {
            "name": "helloworldapi",
            "endpoint": "https://690cw9ug01.execute-api.ap-southeast-1.amazonaws.com/devo",
            "region": "ap-southeast-1"
        }
    ]
};

Amplify.default.configure(awsmobile);
 resources = {
	body: {}
  }
  try{
     const data = await API.get("helloworldapi", "https://690cw9ug01.execute-api.ap-southeast-1.amazonaws.com/devo", resources);
     if(success != null) console.log(success);
     console.log('data: ', data);
     return data;
  }catch(err){
      if(fail != null) console.log(fail);
      console.log('error: ', err);
  }
}
testOne();