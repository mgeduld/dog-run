import * as React from 'react'
import ReactDataGrid = require('react-data-grid')
import * as Addons from 'react-data-grid-addons'
import { IDatum } from '../store/interfaces'

interface IProps {
  data: IDatum[]
  rows: IDatum[]
  columns: any[]
  filters: object
  updateRows: Function
  updateFilters: Function
  updateColumns: Function
  dark: boolean
}

export const Grid: React.SFC<IProps> = ({
  data,
  rows,
  updateRows,
  filters,
  updateFilters,
  columns,
  updateColumns,
  dark
}) => {
  const resolveRows = () => {
    return Addons.Data.Selectors.getRows({ rows, filters, columns })
  }

  const rowGetter = (index: number) => {
    return resolveRows()[index]
  }

  const getSize = () => {
    return resolveRows().length
  }

  const handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return a[sortColumn] > b[sortColumn] ? 1 : -1
      } else if (sortDirection === 'DESC') {
        return a[sortColumn] < b[sortColumn] ? 1 : -1
      }
    }

    const sortedRows =
      sortDirection === 'NONE' ? data.slice(0) : rows.sort(comparer)

    updateRows({ sortedRows })
  }

  const handleFilterChange = (filter) => {
    let newFilters = { ...filters }
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter
    } else {
      delete newFilters[filter.column.key]
    }
    updateFilters(newFilters)
  }

  const handleClearFilters = () => {
    updateFilters({})
  }

  const onHeaderDrop = (source, target) => {
    const newColumns = [...columns]
    const columnSourceIndex = columns.findIndex((i) => i['key'] === source)
    const columnTargetIndex = columns.findIndex((i) => i['key'] === target)

    newColumns.splice(
      columnTargetIndex,
      0,
      newColumns.splice(columnSourceIndex, 1)[0]
    )

    updateColumns([])

    updateColumns(newColumns)
  }

  return (
    <div className={dark ? 'dark' : ''}>
      <Addons.DraggableHeader.DraggableContainer onHeaderDrop={onHeaderDrop}>
        <ReactDataGrid
          enableDragAndDrop
          minHeight={450}
          columns={columns}
          rowGetter={rowGetter}
          rowsCount={getSize()}
          onGridSort={handleGridSort}
          onAddFilter={handleFilterChange}
          onClearFilters={handleClearFilters}
          toolbar={<Addons.Toolbar enableFilter={true} />}
        />
      </Addons.DraggableHeader.DraggableContainer>
    </div>
  )
}
