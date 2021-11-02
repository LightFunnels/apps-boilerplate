const AWS = require('aws-sdk');

AWS.config.update({
  signatureVersion: 'v4',
  region: 'us-east-1'
});

const es = new AWS.ES({
	apiVersion: '2015-01-01',
});

const sns = new AWS.SNS();

const cloudFront = new AWS.CloudFront();

export {
	es,
	sns,
	cloudFront
};