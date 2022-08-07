import React from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
function TinderCards() {
    // hooks are functions that can be used in react components.
    // they are similar to start and props, but they are not
    const [cars]=React.useState([
        {
            name:'Tesla',
            url:'https://media.wired.com/photos/5dd828ba9ac14a0008116983/4:3/w_1920,h_1440,c_limit/Transpo_TeslaStoryOne_Cybertruck-5.jpg'
        },
        {
            name:'BMW',
            url:'https://www.topgear.com/sites/default/files/2022/06/1-BMW-3-Series.jpg'
        },
        {
            name:'mercedes benz',
            url:'https://images.news18.com/ibnlive/uploads/2020/01/The-Mercedes-Benz-Vision-AVTR-concept-car-inspired-by-the-Avatar-movies-at-ces-2020.jpg?impolicy=website&width=0&height=0'
        },
        {
            name:'lykan',
            url:'https://www.motorbiscuit.com/wp-content/uploads/2020/06/Lykan-Hypersport-cover.jpg?w=1024&h=512'
        }
    ]);
  return (
    <div className='card-container'>
        {
            cars.map(car=>(
                <TinderCard
                className='swipe'
                key={car.name}
                preventSwipe={['up','down']}
                >
                <div 
                style={{backgroundImage:`url(${car.url})`}}
                className='card'>
                    <h2>{car.name}</h2>
                </div>
                </TinderCard>
            ))
        }
    </div>
  )
}

export default TinderCards