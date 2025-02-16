import './App.css'
import HostView from './components/host/HostView'
import Scoreboard from './components/host/Scoreboard'
import QuizSkeleton from './components/player/QuizSkeleton'
import StartGame from './components/player/StartGame'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuizContextProvider from './context/QuizContextProvider'
import Winners from './components/host/Winners'
import Instructions from './components/player/Instructions'
import Creator from './components/createQuiz/Creator'
import CreatorLayout from './components/createQuiz/CreatorLayout'
import Settings from './components/createQuiz/creatorComponents/navbarComponents/Settings'
import SignupForm from './components/auth/SignupForm'
import LoginForm from './components/auth/LoginForm'
function App() {

  return (
    <QuizContextProvider>
      <div className=''> {/* bg-black */}
        <Router>
          <Routes>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/signup' element={<SignupForm/>}/>
            <Route path="/" element={<StartGame />} />
            <Route path="/join" element={<StartGame placeholderName='Nickname..' buttonName='Go!' redirectionLink='/instructions' />} />
            <Route path="/instructions" element={<Instructions placeholderName='Nickname..' buttonName='Go!' redirectionLink='/instructions' />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/quiz" element={<QuizSkeleton />} />
            <Route path="/host" element={<HostView />} />
            <Route path="/winners" element={<Winners />} />
            <Route path="/creator" element={<CreatorLayout />} >
              <Route index element={<Creator/>}/>
              <Route path='settings' element={<Settings/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </QuizContextProvider>
  )
}

export default App
