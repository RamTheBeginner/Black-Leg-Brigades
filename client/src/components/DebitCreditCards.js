import React from 'react';
import chipImg from '../assets/images/chip.png';
import visaImg from '../assets/images/visa.png';
import patternImg from '../assets/images/pattern.png';
import mapImg from '../assets/images/map.png';
import creditcardImg from '../assets/images/creditcard.png'
import mastercardImg from '../assets/images/mastercard.png'



const Card = ({cards}) => {
  return (
    
<div class="space-y-16">
{cards.map(card =>(
            <div  key={card.id} className="w-96 h-56 m-auto bg-gradient-to-r from-black via-white to-black rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            
                <img class="relative object-cover w-full h-full rounded-xl" src={creditcardImg}/>
                
                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-medium tracking-widest">
                                {card.type}
                            </p>
                        </div>
                        <img class="w-14 h-14" src={mastercardImg}/>
                    </div>
                    <div class="pt-1">
                        <p class="font-medium tracking-more-wider">
                           {card.HolderName}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                
                                <p class="font-medimu tracking-wider text-xl">
                                    {card.issuer}
                                </p>
                            </div>
                            <div class="">
                                <p class="font-light">
                                    Expiry
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    03/25
                                </p>
                            </div>
    
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            ))}
    </div>
  );
}

export default Card;