import React, { Component } from 'react';
// reference: https://loadable-components.com/docs/library-splitting/
import loadable from '@loadable/component'
const Moment = loadable.lib(() => import('moment'))

class DemoLoadingLibrary extends Component  {
  moment = React.createRef();

  handleClick = () => {
    if (this.moment.current) {
      return alert(new Date()) //this.moment.current.default.format('HH:mm') = not working...
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What time is it?</button>
        <Moment ref={this.moment} />
      </div>
    )
  }
}

export default DemoLoadingLibrary;