import { useState } from 'react'

export const ShowOrHide = () => {
    const [active, setActive] = useState(3)
    return (
        <div className='space-y-2'>
            {
                cities.map((city) => {
                    return (
                        <CardItem key={city.id} city={city}
                            isActive={active === city.id}
                            setActive={setActive}
                        />
                    )
                })
            }
        </div>
    )
}

const CardItem = ({ city, isActive, setActive }) => {

    return (
        <div className='border border-gray-400 p-2 rounded-lg'>
            <div className='font-semibold'>
                {city.name}
            </div>
            {isActive && <p className='text-sm'>
                {city.content}
            </p>}
            {!isActive && <button
                onClick={() => setActive(city.id)}

                className='border text-xs p-1 rounded'>Show - {isActive ? 'Active' : 'Inactive'}</button>}
        </div>
    )
}

const cities = [
    {
        id: 0,
        name: "Butwal",
        content: "Butwal is a city in the state of Khyber Pakhtunkhwa, Pakistan. It is the capital of the province of Butwal."
    },
    {
        id: 1,
        name: "Islamabad",
        content: "Islamabad is the capital and largest city of Pakistan. It is located in the northwestern part of the country, on the Indus River, and is the country's fourth-largest city."
    },
    {
        id: 2,
        name: "Lahore",
        content: "Lahore is the capital and largest city of Punjab, Pakistan. It is located in the northwestern part of the country, on the Indus River, and is the country's fourth-largest city."
    },
    {
        id: 3,
        name: "Karachi",
        content: "Karachi is the capital and largest city of Sindh, Pakistan. It is located in the northwestern part of the country, on the Indus River, and is the country's fourth-largest city."
    }
]