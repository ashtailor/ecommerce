import React from 'react'

export const Rating = ({rating}) => {

    const fullStars = Math.floor(rating);
    const ratingArray = [];
    
    for(let i=0; i<5; i++)
    {
        ratingArray.push(i<fullStars);
    }
  return (
    <div className='flex items-center'> 
    {ratingArray.map((value, index) => (
        <span key={index}>
            <i className={`text-lg bi ${value ? 'bi-star-fill' : 'bi-star'} text-yellow-400 mr-2`}>
            </i>
        </span>
    ))}
</div>
  );
};
