import * as React from 'react'
import { Table } from 'semantic-ui-react'
import { Bounds, LatLng } from '../domain/calculateMesh'
import { round } from '../domain/roundPoint'

export interface Props {
  code: string
  center: LatLng
  bounds: Bounds
}

interface TableRowValue {
  latLng: LatLng
  title: string
}

const mapPropsToTableRowValues = ({
  center,
  bounds,
}: Props): TableRowValue[] => [
  { latLng: center, title: 'center' },
  { latLng: bounds.leftTop, title: 'leftTop' },
  { latLng: bounds.rightBottom, title: 'rightBottom' },
]

export const MeshDetail = (props: Props) => (
  <Table inverted={true}>
    <Table.Body>
      <Table.Row>
        <Table.Cell>mesh code</Table.Cell>
        <Table.Cell>{props.code}</Table.Cell>
      </Table.Row>
      {mapPropsToTableRowValues(props).map(
        (value: TableRowValue, key: number) => (
          <Table.Row key={key}>
            <Table.Cell>{value.title}</Table.Cell>
            <Table.Cell>
              {round(value.latLng.lat, 5)}
              <br />
              {round(value.latLng.lng, 5)}
            </Table.Cell>
          </Table.Row>
        )
      )}
    </Table.Body>
  </Table>
)
