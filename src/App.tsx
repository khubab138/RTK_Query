import InputSection from "./Components/InputSection"

const App = () => {
  return (
    <div className='max-width-screen min-hieght-screen flex flex-col items-center justify-center p-10 '>
      <h1 className="HEADING text-4xl text-slate-800" >Taskify</h1>
      <InputSection />
    </div>
  )
}

export default App