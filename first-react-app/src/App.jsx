
import "./App.css"
import GreatingsCard from "./components/GreatingsCard"
import Welcome from "./components/Welcome"

function App() {
  return (
    <div>
      <GreatingsCard name="Suhail Khan" age='30' />
      <GreatingsCard name="Raj" age='25' />
      <hr />
      <GreatingsCard name="Soniya" age='25' />
      <GreatingsCard name="Soniya" age='25' />
      <GreatingsCard name="Versha" age='26' />
      <hr />
      <hr />
      <Welcome />
      <Welcome school="MNIT" course="Diploma Electrical Engg." />
      <Welcome school="Integral" course="Diploma Engg." />
      <Welcome school="MNIT" course="Diploma Electrical Engg." />
      <Welcome school="MNIT" course="Diploma Electrical Engg." />
      <Welcome school="MNIT" course="Diploma Electrical Engg." />
      <Welcome school="MNIT" course="Diploma Electrical Engg." />
      <Welcome school="MNIT" course="Diploma Electrical Engg." />
    </div>
  )
}

export default App
