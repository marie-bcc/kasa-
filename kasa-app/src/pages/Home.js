import React from 'react'
import Header from '../component/Header'
import LogementsList from '../component/logements/logementList'
import headerimg from '../Styles/HeaderBg.png'




export default function Home() {
  return (
    <div>

      <Header showTitle={true} backgroundImage={headerimg} />

      <LogementsList></LogementsList>




    </div>
  )
}
