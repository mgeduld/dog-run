import * as React from 'react'
import { compose, withState } from 'recompose'
import { connect } from 'react-redux'
import { applyLifecycle } from 'react-lifecycle-component'
import { bindActionCreators } from 'redux'
import { fetchData } from './store/actions/action-creators'
import { Chooser } from './chooser'
import { IData } from './store/interfaces'
import { Grid } from './grid'

const mapStateToProps = ({ dogRuns }) => ({
  data: dogRuns.data
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      componentDidMount: fetchData
    },
    dispatch
  )
}

interface IProps {
  data: IData
  runType: string
  updateRunType: Function
  darkness: boolean
  updateDarkness: Function
}

export const Component: React.SFC<IProps> = ({
  data,
  updateRunType,
  runType,
  darkness,
  updateDarkness
}) => {
  return (
    <div>
      {Object.keys(data).length ? (
        <div>
          <div className="controls">
            <Chooser data={data} onChoice={(value) => updateRunType(value)} />
            <button
              className="toggle"
              onClick={() => updateDarkness(!darkness)}
            >
              Toggle The Darkness!
            </button>
          </div>
          <Grid data={data[runType]} dark={darkness} />
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  )
}

export const Container = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('runType', 'updateRunType', 'Off-Leash'),
  withState('darkness', 'updateDarkness', false),
  applyLifecycle
)(Component)
