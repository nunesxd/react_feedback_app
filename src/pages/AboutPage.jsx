import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a React app example page !</p>

            <p>
                <a href="/">Back to the App</a>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage