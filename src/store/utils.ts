import { groupBy, omit } from 'lodash'
import { IRawDatum, IData, IDatum } from './interfaces'

export const simplifyData = (data: IRawDatum[]): IDatum[] => {
  return data.map(({ Name, Address, Accessible, Notes, DogRuns_Type }) => {
    return {
      name: Name,
      address: Address,
      accessible: Accessible,
      notes: Notes,
      type: DogRuns_Type
    }
  })
}

export const dekeyDatum = (datum: IDatum): IDatum => omit(datum, 'type')

export const deKeyData = (data: IData): IData => {
  return Object.keys(data).reduce((accumulator, key) => {
    accumulator[key] = data[key].map(dekeyDatum)
    return accumulator
  }, {})
}

export const normalizeData = (data: IRawDatum[]): IData => {
  const simplified = simplifyData(data)
  const grouped = groupBy(simplified, 'type')
  return deKeyData(grouped)
}
