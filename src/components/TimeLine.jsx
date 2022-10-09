import React from 'react'
import { Card } from './Card'

function TimeLine() {
  return (
    <div className="timeline">
      <Card position="left" date="15 Dec" icone="home" />

      <Card position="right" date="22 Oct" icone="gift"/>

      <Card position="left" date="10 Jul" icone="user"/>

      <Card position="right" date="18 May" icone="running"/>

      <Card position="left" date="10 Feb" icone="cog"/>

      <Card position="right" date="01 Jan" icone="certificate"/>
    </div>
  )
}

export default TimeLine
