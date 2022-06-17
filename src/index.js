import react,{ component} from 'react'
import { render } from 'react-dom'

class App extends component {
     render(){
         return (
            <h1>hola react </h1>
         )
     }
}

render(
    <app />,
    document.getElementById('app')
)