const core = require('@actions/core')

async function run() {
  try {
    core.notice('Hello from my custom JavaScript action!');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
