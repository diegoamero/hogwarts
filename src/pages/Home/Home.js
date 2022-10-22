import React from 'react'
import Section from '../../components/Section/Section'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <h2 className='home--title'>HOME</h2>
      <div className='home--sections'>
        <Section className='home__characters' title='characters' image='https://i.postimg.cc/nzBLYWYF/if-21-harry-potter-colour-glasses-and-scar-2730334-88126.png'/>
        <Section className='home__students' title='students' image='https://i.postimg.cc/Bnz2nXqd/hogwarts-logo.png'/>
        <Section className='home__proffesors' title='proffesors' image='https://i.postimg.cc/zf9BhNh2/if-19-harry-potter-colour-harrys-wand-2730332-88138.png' />
        <Section className='home__houses' title='houses' image='https://i.postimg.cc/L8QhHL8p/if-06-harry-potter-colour-sorting-hat-2730319-88134.png' />
      </div>
    </div>
  )
}

export default Home