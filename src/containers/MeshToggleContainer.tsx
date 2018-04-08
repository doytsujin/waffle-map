import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { CheckboxProps } from 'semantic-ui-react'
import { Action, toggleMeshes } from '../actions/AppActions'
import {
  GridToggle as MeshToggle,
  Props as MeshToggleProps,
} from '../components/GridToggle'
import { State as RootState } from '../reducers'

const mapStateToProps = (state: RootState) => ({
  isShowGrid: state.meshToggle.isShowMeshes,
  title: 'Show meshes',
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onToggleChanged: (
    event: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => dispatch(toggleMeshes(data.checked as boolean)),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export const MeshToggleContainer = connector(MeshToggle)
