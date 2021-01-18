import { h, render } from 'preact'

import App from './App'

render(<App />, document.getElementById('root'))

// HMR
if (import.meta.hot) {
    import.meta.hot.accept()
}
