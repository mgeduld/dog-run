import test from 'ava'
import { simplifyData, deKeyData, dekeyDatum, normalizeData } from './utils'
import { IRawDatum, IData } from './interfaces'

test('utils::simplifyData', (t) => {
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
  const expected = [
    {
      name: 'Bill',
      address: '1234',
      accessible: 'N',
      notes: 'blah',
      type: 'park'
    },
    {
      name: 'Fred',
      address: '4321',
      accessible: 'Y',
      notes: 'blah',
      type: 'mall'
    }
  ]
  t.deepEqual(simplifyData(data), expected)
})

test('utils::dekeyDatum', (t) => {
  t.deepEqual(
    dekeyDatum({
      name: 'Fred',
      address: '4321',
      accessible: 'Y',
      notes: 'blah',
      type: 'mall'
    }),
    {
      name: 'Fred',
      address: '4321',
      accessible: 'Y',
      notes: 'blah'
    }
  )
})

test('utils::dekeyData', (t) => {
  const data: IData = {
    park: [
      {
        name: 'Bill',
        address: '1234',
        accessible: 'N',
        notes: 'blah',
        type: 'park'
      }
    ],
    mall: [
      {
        name: 'Fred',
        address: '4321',
        accessible: 'Y',
        notes: 'blah',
        type: 'mall'
      }
    ]
  }
  t.deepEqual(deKeyData(data), {
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
  })
})

test('utils::normalizeData', (t) => {
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
  t.deepEqual(normalizeData(data), {
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
  })
})
