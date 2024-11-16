import Pagination from "./Pagination"
import Search from "./Search"
import Stories from "./Stories"
import "./App.css"
//import { useContext } from "react"   // without custom we have to import this both
//import { AppContext } from "./Context"
//import { useGlobalContext } from "./Context"
function App() {
  // without custome hook 
  //const data = useContext(AppContext) //read full -> ye data context se aa gaya hain jo bhi value main likha tha or ab jaha bhi data chaiye waha {data} likh do wah awoh show ho jayega  
  
  // with custom hook 
  

  return (
    <>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  )
}

export default App
