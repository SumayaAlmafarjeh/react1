/*import UserGreeting from "./UserGreeting"*/


   
  /*  const fruits = [
          { id: 1, name: 'apple', calories: 95 },
          { id: 2, name: 'orange', calories: 45 },
          { id: 3, name: 'banana', calories: 105 },
          { id: 4, name: 'coconut', calories: 37 }]
    //const newarr=planets.map((f)=><p>{f.name} / is ? {f.isGasPlanet?'yes':'no'}</p>)
       /*const newarr=planets.map((f,index)=> f.isGasPlanet &&
        <p key={index}>{f.name} </p>)
        
       // we use it with strings onlyyy: 
       fruits.sort((a,b)=> a.name.localeCompare(b.name))//a-z
       fruits.sort((b,a)=> b.name.localeCompare(a.name))//z-a
       //********
       with numbers:
       fruits.sort((a,b)=> a.calories - b.calories)
        
       const newlist= fruits.map((f)=> <li>{f.name}</li>)

//const newfilter= fruits.filter((f)=>f.calories>100)
const newfilter= fruits.filter((f)=>f.name.includes('o'))
const newarr=newfilter.map((f)=> <li> {f.name} - {f.calories}</li>)

//(p)=> !p.isGasPlanet && <p style={{color:'blue'}}>{p.name}</p>
const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
]
const newList = planets.map(
    (p)=>isGasPlanet?<p style={{color:'blue'}}>{p.name}</p>:<p>{p.name}</p>
)*/
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Header'
import MainPage from './MainPage'
import Features from './Features'
import Support from './Support'
import Enterprise from './Enterprise'

function App() {


    return(
            <Router>
                <Header/>
                <Routes>
                        <Route index element ={<MainPage/>}/>
                        <Route path='features' element={<Features/>}/>
                        <Route path='enterprise' element={<Enterprise/>}/>
                        <Route path='support' element={<Support/>}/>
                </Routes>
            </Router>
    )
       
}

export default App
