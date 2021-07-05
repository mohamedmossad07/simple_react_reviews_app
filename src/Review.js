import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const {name,image,job,text}=people[index];


  // get next person
  function nextPerson(){
    setIndex((index)=>{
      let i=index+1;
      if(i===people.length)
          i=0;
      return i;
    })
  }


// get prv person
  function prevPerson(){
    setIndex((index)=>{
      let i=index-1;
      if(i<0)
          i=people.length-1;
      return i;
    })
  }

  // get random person
  function randomPerson(){
    return setIndex(Math.floor(Math.random()*people.length))
  }









   return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name} </h4>
    <p className="job">{job} </p>
    <p className="info">{text} </p>

    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
      <button className="random-btn"  onClick={randomPerson}>
        suprise me
      </button>

  </article>;
};

export default Review;
