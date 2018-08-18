import * as React from 'react'
import { IData, maybeString } from './store/interfaces'

interface IProps {
  data: IData
  onChoice: Function
}

const getOptions = (keys: maybeString[]) => {
  return keys.map((key) => {
    const value = key === 'null' ? 'Unspecified' : key
    return (
      <option key={value} value={key}>
        {value}
      </option>
    )
  })
}

export const Chooser: React.SFC<IProps> = ({ data, onChoice }) => {
  return (
    <div>
      <select onChange={(e) => onChoice(e.target.value)}>
        {getOptions(Object.keys(data))}
      </select>
    </div>
  )
}
