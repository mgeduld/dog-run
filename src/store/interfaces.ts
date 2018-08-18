import { ActionType } from './actions/action-type'

export interface IState {}

export interface IAction {
  type: ActionType
  [key: string]: any
}

export type maybeString = string | null

export interface IRawDatum {
  Prop_ID: maybeString
  Name: maybeString
  Address: maybeString
  DogRuns_Type: maybeString
  Accessible: maybeString
  Notes: maybeString
}

export interface IDatum {
  name: maybeString
  address: maybeString
  accessible: maybeString
  notes: maybeString
  type?: maybeString | undefined
}

export interface IData {
  [key: string]: IDatum[]
}
