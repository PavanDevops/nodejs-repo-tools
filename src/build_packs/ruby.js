/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const fs = require('fs-extra');
const path = require('path');

const SETUP = `
1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

        bundle install

[prereq]: ../README.md#prerequisites
[run]: ../README.md#how-to-run-a-sample`;

const TESTS = `
1.  Set the **GCLOUD_PROJECT** and **GOOGLE_APPLICATION_CREDENTIALS** environment variables.

1.  Run the tests:

        bundle exec rspec`;

module.exports = {
  display: 'Ruby',
  detect: cwd => fs.statSync(path.join(cwd, 'Gemfile')).isFile(),
  load: filename => require(filename),
  lint: {
    cmd: 'semistandard',
    args: [],
  },
  test: {
    app: {
      cmd: 'bundle',
      args: ['exec', 'ruby', 'app.rb'],
    },
    build: {},
    deploy: {},
    install: {
      cmd: 'bundle',
      args: ['install'],
    },
    run: {
      cmd: 'bundle',
      args: ['exec', 'rspec', '--format', 'documentation'],
    },
  },
  readme: {
    setup: SETUP,
    tests: TESTS,
  },
};
