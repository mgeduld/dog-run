import { IAction, IState } from './interfaces'
import { ActionType } from './actions/action-type'
import { normalizeData } from './utils'

export const dogRuns = (state: IState = { data: {} }, action: IAction) => {
  switch (action.type) {
    case ActionType.storeData:
      return { ...state, data: normalizeData(action.data) }
    default:
      return state
  }
}
