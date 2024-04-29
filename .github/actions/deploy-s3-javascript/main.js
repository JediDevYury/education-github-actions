const core = require('@actions/core');
const exec = require('@actions/exec');
// const github = require('@actions/github');

function run() {
  // 1) Get the input values
  const bucket = core.getInput('bucket', {
    required: true
  });
  const bucketRegion = core.getInput('bucket-region', {
    required: true
  });
  const distFolder = core.getInput('dist-folder', {
    required: true
  });

  const s3Uri= `s3://${bucket}`;

  // 2) Upload files to S3
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice('Hello from my custom JavaScript action!');
}

run();
