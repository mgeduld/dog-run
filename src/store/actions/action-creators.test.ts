import test from 'ava'
import { fetchData, storeData } from './action-creators'
import { ActionType } from './action-type'
import { IRawDatum } from '../interfaces'

const data: IRawDatum[] = [
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

test('actionCreators::fetchData', (t) => {
  t.deepEqual(fetchData(), { type: ActionType.fetchData })
})

test('actionCreators::storeData', (t) => {
  t.deepEqual(storeData(data), { type: ActionType.storeData, data })
})
