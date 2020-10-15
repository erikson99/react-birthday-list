import React, { useState }  from 'react'
import data from './data'


const BirthdayList = () => {
    const [people, setPeople] = useState(data);
    // console.log(data);

    // count array
    const count = data.length;

    // clear list
    const reset = () => {
        setPeople([]);
    };

    return (
        <>
            <h2>{count} Birthdays Today</h2>
            <hr></hr>
            {people.map((person) => {
                const {id, name, age, image} = person;
                
                return (
                    <section key={id}>
                        <article className='person'>
                            <img src={image} className='img' alt=''></img>
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </article>
                    </section>
                )
            })}
            <hr></hr>
            <button className='btn' onClick={reset}>Clear List</button>
        </>
    )
}

export default BirthdayList
