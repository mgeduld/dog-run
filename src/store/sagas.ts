import { all, call, takeEvery, put } from 'redux-saga/effects'
import { ActionType } from './actions/action-type'
import { endpoint } from './constants'
import { storeData } from './actions/action-creators'
import { IRawDatum } from './interfaces'

export const fetchDataFromEndpoint = () => {
  return fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.json()
  })
}

export function* fetchData() {
  const data: IRawDatum[] = yield call(fetchDataFromEndpoint)
  yield put(storeData(data))
}

export function* fetchDataSaga() {
  yield takeEvery(ActionType.fetchData, fetchData)
}

export function* sagas() {
  yield all([fetchDataSaga()])
}
