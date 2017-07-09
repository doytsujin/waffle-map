// @flow

import * as AppActions from '../../src/actions/AppActions'
import reducer from '../../src/reducers'
import * as MeshCalculator from 'waffle-map-mesh-calculator-basic'

test('Should handle INPUT_MESHES', () => {
  const errorMessage = ''
  const meshesString = '5339'
  const expectedState = {
    meshInput: {
      errorMessage,
      meshesString,
      separator: '.'
    },
    meshes: [
      {
        code: meshesString,
        center: MeshCalculator.meshToLatLng(meshesString),
        bounds: MeshCalculator.meshToBounds(meshesString)
      }
    ],
    map: {
      contextmenuPosition: null
    }
  }
  expect(reducer(undefined, AppActions.inputMeshes(meshesString))).toEqual(
    expectedState
  )
})

test('Should handle INPUT_MESHES when setting invalid mesh code', () => {
  const errorMessage = `Invalid mesh code found.
The length of the mesh code is 4, 6, or 8.
The actual length is 3, the mesh code is 533.`
  const meshesString = '533'
  const expectedState = {
    meshInput: {
      errorMessage,
      meshesString,
      separator: '.'
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  expect(reducer(undefined, AppActions.inputMeshes(meshesString))).toEqual(
    expectedState
  )
})

test('Should handle SELECT_SEPARATOR', () => {
  const errorMessage = ''
  const separator = ','
  const expectedState = {
    meshInput: {
      errorMessage,
      meshesString: '',
      separator
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  expect(reducer(undefined, AppActions.selectSeparator(separator))).toEqual(
    expectedState
  )
})

test('Should handle SELECT_SEPARATOR', () => {
  const latLng = { lat: 35, lng: 139 }
  const expectedState = {
    meshInput: {
      errorMessage: '',
      meshesString: '',
      separator: '.'
    },
    meshes: [],
    map: {
      contextmenuPosition: latLng
    }
  }
  expect(
    reducer(undefined, AppActions.updateContextmenuPosition(latLng))
  ).toEqual(expectedState)
})

test('Should return an initial state when setting an invalid action', () => {
  const invalidAction = () => ({ type: 'INVALID_ACTION', payload: {} })
  const expectedState = {
    meshInput: {
      errorMessage: '',
      meshesString: '',
      separator: '.'
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  expect(reducer(undefined, (invalidAction(): any))).toEqual(expectedState)
})
