
import "./App.css"
import ConditionalRendering from "./components/ConditionalRendering"
import Counter from "./components/Counter"
import Counter1 from "./components/Counter1"
import FormExample from "./components/Form"
import NamesList from "./components/ListKey"
import Product from "./components/Product"
import Usereducer from "./components/Usereducer"
import Useref from "./components/Useref"
// import Toggler from "./components/Toggler"
// import Welcome from "./components/Welcome"

function App() {

  const handleClick = () => {
    console.log("button clicked")
    alert("button clicked")
  }

  return (
    <div>
      {/* <ConditionalRendering /> */}
      {/* <Counter1/> */}
      {/* <Useref /> */}
      {/* <Welcome/> */}
      {/* <Counter/> */}
      {/* <Toggler/> */}
      {/* <Product/> */}
      {/* <Usereducer/> */}

      {/* ///even handling */}

      {/* <button onClick={handleClick}>Click</button> */}
      {/* <NamesList/> */}
      <FormExample/>


    </div >
  )
}

export default App
