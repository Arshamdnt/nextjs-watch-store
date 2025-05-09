import React from 'react';

const Card = () => {
    return (
            <>
            
            <div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-20 backdrop-blur-md">
                <img className="w-full h-56 object-cover" src="https://via.placeholder.com/500" alt="Image Description" />
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-white">Product Title</h2>
                    <p className="text-white text-sm mt-2">This is a short description of the product. It highlights the key features and benefits.</p>
                    <p className="text-xl font-bold text-white mt-4">$199.99</p>
                </div>
            </div>
        </div>
            
            </>
    );
}

export default Card;
