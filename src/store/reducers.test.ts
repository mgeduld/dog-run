import test from 'ava'
import { dogRuns } from './reducers'
import { IRawDatum } from './interfaces'
import { ActionType } from './actions/action-type'

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

test('reducers::dogRuns with fetchData action type', (t) => {
  const state = dogRuns({ data: {} }, { type: ActionType.storeData, data })
  t.deepEqual(state, {
    data: {
      park: [
        {
          name: 'Bill',
          address: '1234',
          accessible: 'N',
          notes: 'blah'
        }
      ],
      mall: [
        {
          name: 'Fred',
          address: '4321',
          accessible: 'Y',
          notes: 'blah'
        }
      ]
    }
  })
})

test('reducers::dogRuns with unkown action type', (t) => {
  const state = dogRuns({ data: {} }, { type: undefined })
  t.deepEqual(state, { data: {} })
})

test('reducers::dogRuns with unkown action type and undefined state', (t) => {
  const state = dogRuns(undefined, { type: undefined })
  t.deepEqual(state, { data: {} })
})
