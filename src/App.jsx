import './App.css'

import Form from './components/forms/form'

function App(){
  return (
    <>
      <div className="hidden sm:block">
        <Form/>
      </div>

      <div className="w-screen h-screen flex justify-center items-center sm:hidden">
        <div className="text-center p-4 text-base">
          <p>This project isn&apos;t made for mobile.</p>
          <p>Try accessing it on your desktop.</p>
        </div>
      </div>
    </>
  )
}

export default App