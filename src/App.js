import './App.css'
import Profile from './images/pic.jpg'
import Image1 from './images/image1.jpeg'
import Image2 from './images/image2.jpeg'
import Image3 from './images/image3.jpeg'
import Image4 from './images/image4.jpeg'
import Image5 from './images/image5.jpeg'
import Image6 from './images/image6.jpeg'

function App() {
  return (
    <div className='App' class='px-8 py-8'>
      <header class='text-center'>
        <img class='w-48 rounded-full m-auto' src={Profile} alt='Profile' />
        <h1 class='text-red-600 px-4 py-4'>Sandy Rav</h1>
        <p class='text-white-400 px-4 py-4'>
          Hello, I’m Sandy. I'm a web developer at Onja. You can contact me via
          email.
        </p>
      </header>
      <div class='text-center'>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
        </p>
      </div>
      <div class='grid grid-cols-3 grid-rows-2 p-8'>
        <img src={Image1} class='w-64 h-48 object-fit gap-4' alt='Shooting' />
        <img src={Image2} class='w-64 h-48 object-fit gap-4' alt='Shooting' />
        <img src={Image3} class='w-64 h-48 object-fit gap-4' alt='Shooting' />
        <img src={Image4} class='w-64 h-48 object-fit gap-4' alt='Shooting' />
        <img src={Image5} class='w-64 h-48 object-fit gap-4' alt='Shooting' />
        <img src={Image6} class='w-64 h-48 object-fit gap-4' alt='Shooting' />
      </div>
    </div>
  )
}

export default App
