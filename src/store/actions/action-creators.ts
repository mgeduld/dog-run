import { ActionType } from './action-type'
import { IRawDatum } from '../interfaces'

export const fetchData = () => ({
  type: ActionType.fetchData
})

export const storeData = (data: IRawDatum[]) => ({
  data,
  type: ActionType.storeData
})
