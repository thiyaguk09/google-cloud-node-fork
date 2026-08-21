/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as fs from 'fs';
import * as path from 'path';
import {getDirName} from '../../src/util.js';
import {executeScenario, RetryTestCase} from '../conformanceCommon.js';
import assert from 'assert';

const testFile = JSON.parse(
  fs.readFileSync(
    path.join(
      getDirName(),
      '../../../conformance-test/test-data/retryStrategyTestData.json',
    ),
    'utf-8',
  ),
);

const SCENARIO_NUMBER_TO_TEST = 5;
const retryTestCase: RetryTestCase | undefined = (
  testFile.retryTests as RetryTestCase[]
).find(test => test.id === SCENARIO_NUMBER_TO_TEST);

describe(`Scenario ${SCENARIO_NUMBER_TO_TEST}`, () => {
  assert(retryTestCase);
  executeScenario(retryTestCase);
});
