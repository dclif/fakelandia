import React from 'react'

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ width: "40%", fontSize: "1.5em" }}>
        Welcome to the home of the Justice Department of Fakelandia.
        <br /><br />
        Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeamour.
      </h2>
    </div>
  )
}

export default Home