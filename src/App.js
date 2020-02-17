import React, { Component, Suspense, Fragment } from 'react';
import loadable from '@loadable/component'
import './App.css';
import DemoLoadingLibrary from './Components/DemoLoadingLibrary';
import Page1 from './Components/Page1';
// Part 1 - No Code Splitting
// import Page2 from './Components/Page2';
// import Page3 from './Components/Page3';

// Part 3 - Cleaner Code Splitting
// import AsyncComponent from './AsyncComponent';

// Part 4 - React.lazy
// const Page2Lazy = React.lazy(() => import('./Components/Page2'));
// const Page3Lazy = React.lazy(() => import('./Components/Page3'));

// Part 5 - Loadable Components
const options = {
    fallback: <div
                style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem'}}
                >
                    <p>Loading...</p>
                </div>
}
const LoadablePage2Lazy = loadable(() => import("./Components/Page2"), options)
const LoadablePage3Lazy = loadable(() => import("./Components/Page3"), options)

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      // Part 2 - Code Splitting - manual
      // component: null
    }
  }
  onRouteChange = (route) => {
    // Part 1 - No Code Splitting
    this.setState({ route: route });
    // Part 2 - Code Splitting - manual
    // if (route === 'page1') {
    //   this.setState({ route: route })
    // } else if (route === 'page2') {
    //   import('./Components/Page2')
    //     .then((Page2) => {
    //       this.setState({ route: route, component: Page2.default })
    //     })
    //     .catch(err => {
    //     });
    // } else {
    //   import('./Components/Page3')
    //     .then((Page3) => {
    //       this.setState({ route: route, component: Page3.default })
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     });
    // }
  }
  render() {
    // Part 1 - No code splitting
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page2') {
    //   return <Page2 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <Page3 onRouteChange={this.onRouteChange} />
    // }

    // Part 2 - No Code Splitting - manual
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }

    // Part 3 - Cleaner Code Splitting
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page2') {
    //   const AsyncPage2 = AsyncComponent(() => import("./Components/Page2"));
    //   return <AsyncPage2 onRouteChange={this.onRouteChange} />
    // } else {
    //   const AsyncPage3 = AsyncComponent(() => import("./Components/Page3"));
    //   return <AsyncPage3 onRouteChange={this.onRouteChange} />
    // }

    // Part 4 - React.Lazy
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page2') {
    //   return (
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Page2Lazy onRouteChange={this.onRouteChange} />
    //     </Suspense>
    //   );
    // } else {
    //   return (
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Page3Lazy onRouteChange={this.onRouteChange} />
    //     </Suspense>
    //   );
    // }

    // Part 5 = loadable Components lib (this lib is complete for server-rendering solution)
    if (this.state.route === 'page1') {
        return (
            <Fragment>
                <Page1 onRouteChange={this.onRouteChange} />
                <DemoLoadingLibrary />
            </Fragment>
        )
    } else if (this.state.route === 'page2') {
        return <LoadablePage2Lazy onRouteChange={this.onRouteChange} />
    } else {
        return <LoadablePage3Lazy onRouteChange={this.onRouteChange} />
    }

  }
}

export default App;
