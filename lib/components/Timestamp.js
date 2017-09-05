import React from 'react'
import storeProvider from './storeProvider'

class Timestamp extends React.PureComponent {
  static timeDisplay = timestamp =>
    timestamp.toUTCString().slice(0, 22)

  render() {
    return <div>{this.props.timestampDisplay}</div>
  }
}
function extraProps(store) {
  return {
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
  }
}
export default storeProvider(extraProps)(Timestamp)
