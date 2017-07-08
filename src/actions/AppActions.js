// @flow
import type { LatLng } from '../MeshCalculator'

export const INPUT_MESHES = 'INPUT_MESHES'
export const SELECT_SEPARATOR = 'SELECT_SEPARATOR'
export const UPDATE_CONTEXTMENU_POSITION = 'UPDATE_CONTEXTMENU_POSITION'

export type Action =
  | {
      type: typeof INPUT_MESHES,
      payload: {
        meshesString: string
      }
    }
  | {
      type: typeof SELECT_SEPARATOR,
      payload: {
        separator: string
      }
    }
  | {
      type: typeof UPDATE_CONTEXTMENU_POSITION,
      payload: {
        latLng: ?LatLng
      }
    }

export const inputMeshes = (meshesString: string): Action => ({
  type: INPUT_MESHES,
  payload: { meshesString }
})

export const selectSeparator = (separator: string): Action => ({
  type: SELECT_SEPARATOR,
  payload: {
    separator
  }
})

export const updateContextmenuPosition = (latLng: ?LatLng): Action => ({
  type: UPDATE_CONTEXTMENU_POSITION,
  payload: {
    latLng
  }
})
