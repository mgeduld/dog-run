import { compose, lifecycle, withState } from 'recompose'
import { Grid as GridComponent } from './grid'

const columns = [
  {
    key: 'name',
    name: 'Name',
    width: 300,
    resizable: true,
    filterable: true,
    sortable: true,
    draggable: true
  },
  {
    key: 'address',
    name: 'Address',
    width: 500,
    resizable: true,
    sortable: true,
    filterable: true,
    draggable: true
  },
  {
    key: 'accessible',
    name: 'Accessible',
    width: 100,
    resizable: true,
    sortable: true,
    filterable: true,
    draggable: true
  },
  {
    key: 'notes',
    name: 'Notes',
    resizable: true,
    sortable: true,
    filterable: true,
    draggable: true
  }
]

export const Grid: any = compose(
  withState('rows', 'updateRows', []),
  withState('filters', 'updateFilters', {}),
  withState('columns', 'updateColumns', columns),
  lifecycle({
    componentWillMount() {
      this.setState({ rows: this.props['data'] })
    },
    componentWillReceiveProps(newProps) {
      this.setState({ rows: newProps['data'] })
    }
  })
)(GridComponent)
