// @flow

import test from 'ava'
import * as AppActions from '../../src/actions/AppActions'
import reducer from '../../src/reducers'
import * as MeshCalculator from 'waffle-map-mesh-calculator-basic'

test('Should handle PUT_MARKER', t => {
  const latLng = '35,139'
  const unit = 'degree'
  const expectedState = {
    markerInput: {
      errorMessage: '',
      markerPositions: [{ lat: 35, lng: 139 }]
    },
    meshInput: {
      errorMessage: '',
      meshCodes: '',
      separator: '.'
    },
    tileToggle: {
      isShowDebugTiles: false
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  t.deepEqual(
    reducer(undefined, AppActions.putMarker(latLng, unit)),
    expectedState
  )
})

test('Should handle PUT_MARKER when setting invalid latLng', t => {
  const latLng = 'A,139'
  const unit = 'degree'
  const expectedState = {
    markerInput: {
      errorMessage: `Unexpected lat found.
Only numbers are acceptable.
Actual: A`,
      markerPositions: []
    },
    meshInput: {
      errorMessage: '',
      meshCodes: '',
      separator: '.'
    },
    tileToggle: {
      isShowDebugTiles: false
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  t.deepEqual(
    reducer(undefined, AppActions.putMarker(latLng, unit)),
    expectedState
  )
})

test('Should handle REMOVE_ALL_MARKERS', t => {
  const expectedState = {
    markerInput: {
      errorMessage: '',
      markerPositions: []
    },
    meshInput: {
      errorMessage: '',
      meshCodes: '',
      separator: '.'
    },
    tileToggle: {
      isShowDebugTiles: false
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  t.deepEqual(reducer(undefined, AppActions.removeAllMarkers()), expectedState)
})

test('Should handle INPUT_MESHES', t => {
  const errorMessage = ''
  const meshCodes = '5339'
  const expectedState = {
    markerInput: {
      errorMessage: '',
      markerPositions: []
    },
    meshInput: {
      errorMessage,
      meshCodes,
      separator: '.'
    },
    tileToggle: {
      isShowDebugTiles: false
    },
    meshes: [
      {
        code: meshCodes,
        center: MeshCalculator.meshToLatLng(meshCodes),
        bounds: MeshCalculator.meshToBounds(meshCodes)
      }
    ],
    map: {
      contextmenuPosition: null
    }
  }
  t.deepEqual(
    reducer(undefined, AppActions.inputMeshes(meshCodes)),
    expectedState
  )
})

test('Should handle INPUT_MESHES when setting invalid mesh code', t => {
  const errorMessage = `Invalid mesh code found.
The length of the mesh code is 4, 6, or 8.
The actual length is 3, the mesh code is 533.`
  const meshCodes = '533'
  const expectedState = {
    markerInput: {
      errorMessage: '',
      markerPositions: []
    },
    meshInput: {
      errorMessage,
      meshCodes,
      separator: '.'
    },
    tileToggle: {
      isShowDebugTiles: false
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  t.deepEqual(
    reducer(undefined, AppActions.inputMeshes(meshCodes)),
    expectedState
  )
})

test('Should handle SELECT_SEPARATOR', t => {
  const errorMessage = ''
  const separator = ','
  const expectedState = {
    markerInput: {
      errorMessage: '',
      markerPositions: []
    },
    meshInput: {
      errorMessage,
      meshCodes: '',
      separator
    },
    tileToggle: {
      isShowDebugTiles: false
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  t.deepEqual(
    reducer(undefined, AppActions.selectSeparator(separator)),
    expectedState
  )
})

test('Should handle TOGGLE_DEBUG_TILES', t => {
  const isShowDebugTiles = true
  const expectedState = {
    markerInput: {
      errorMessage: '',
      markerPositions: []
    },
    meshInput: {
      errorMessage: '',
      meshCodes: '',
      separator: '.'
    },
    tileToggle: {
      isShowDebugTiles
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  t.deepEqual(
    reducer(undefined, AppActions.toggleDebugTiles(isShowDebugTiles)),
    expectedState
  )
})

test('Should handle UPDATE_CONTEXTMENU_POSITION', t => {
  const latLng = { lat: 35, lng: 139 }
  const expectedState = {
    markerInput: {
      errorMessage: '',
      markerPositions: []
    },
    meshInput: {
      errorMessage: '',
      meshCodes: '',
      separator: '.'
    },
    tileToggle: {
      isShowDebugTiles: false
    },
    meshes: [],
    map: {
      contextmenuPosition: latLng
    }
  }
  t.deepEqual(
    reducer(undefined, AppActions.updateContextmenuPosition(latLng)),
    expectedState
  )
})

test('Should return an initial state when setting an invalid action', t => {
  const invalidAction = () => ({ type: 'INVALID_ACTION', payload: {} })
  const expectedState = {
    markerInput: {
      errorMessage: '',
      markerPositions: []
    },
    meshInput: {
      errorMessage: '',
      meshCodes: '',
      separator: '.'
    },
    tileToggle: {
      isShowDebugTiles: false
    },
    meshes: [],
    map: {
      contextmenuPosition: null
    }
  }
  t.deepEqual(reducer(undefined, (invalidAction(): any)), expectedState)
})
