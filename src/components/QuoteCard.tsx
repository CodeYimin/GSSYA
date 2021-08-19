import React from 'react';
import IQuote from "../interfaces/IQuote";


const QuoteCard: React.FC<IQuote> = ({ name, quote, readMoreLink }) => {
  return (
    <div className="w-64 bg-black">
      <h1>{name}</h1>
      <p>{quote}</p>
      <button>Read more</button>
    </div>
  )
};

export default QuoteCard;