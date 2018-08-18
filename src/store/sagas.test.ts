import sagaHelper from 'redux-saga-testing'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import avaTest from 'ava'
import fetchMock = require('fetch-mock')
import { sagas, fetchDataSaga, fetchData, fetchDataFromEndpoint } from './sagas'
import { takeEvery } from 'redux-saga/effects'
import { ActionType } from './actions/action-type'
import { storeData } from './actions/action-creators'
import { IRawDatum } from './interfaces'

const fakeResponse: IRawDatum[] = [
  {
    Prop_ID: 'A',
    Name: 'Bill',
    Address: '1234',
    Accessible: 'N',
    Notes: 'blah',
    DogRuns_Type: 'park'
  },
  {
    Prop_ID: 'B',
    Name: 'Fred',
    Address: '4321',
    Accessible: 'Y',
    Notes: 'blah',
    DogRuns_Type: 'mall'
  }
]

const testRoot = sagaHelper(sagas(), avaTest)

testRoot('sagas::sagas', (result, t) => {
  t.is(result.ALL[0].next().value.FORK.args[0], 'fetchData')
})

const testFetchDataSaga = sagaHelper(fetchDataSaga(), avaTest)

testFetchDataSaga('sagas::fetchDataSaga', (result, t) => {
  t.deepEqual(result, takeEvery(ActionType.fetchData, fetchData))
})

avaTest('sagas:fetchData', async (t) => {
  t.plan(1)
  const result = await expectSaga(fetchData, fetchDataFromEndpoint)
    .provide([[matchers.call.fn(fetchDataFromEndpoint), fakeResponse]])
    .call(fetchDataFromEndpoint)
    .put(storeData([...fakeResponse]))
    .run()

  t.pass()
})

avaTest('sagas::fetchDataFromEndpoint', async (t) => {
  fetchMock.get('*', fakeResponse)
  const response = await fetchDataFromEndpoint()
  t.deepEqual(response, fakeResponse)
  fetchMock.restore()
})
