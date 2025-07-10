import React from 'react'

const Reviews = () => {
  return (
    <section className="md:py-20 py-10 bg-gray-100 px-6 md:px-32" data-aos="fade-up">
  <div className="text-center mb-12">
    <h2 className="md:text-4xl text-2xl font-bold text-red-700 font-comfortaa">What Our Visitors Say</h2>
    <p className="text-gray-600 mt-2 text-lg font-poppins">Real smiles. Real experiences.</p>
  </div>
  
  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white shadow-lg p-6 rounded-xl">
      <p className="text-gray-600 italic mb-4">"FunVerge gave my kids the best birthday ever! So much laughter and fun."</p>
      <h4 className="text-red-600 font-bold">- Sarah, Lagos</h4>
    </div>
    
    <div className="bg-white shadow-lg p-6 rounded-xl">
      <p className="text-gray-600 italic mb-4">"Their staff is amazing, and the VR experience blew my mind. Highly recommended!"</p>
      <h4 className="text-red-600 font-bold">- Tunde, Abuja</h4>
    </div>
    
    <div className="bg-white shadow-lg p-6 rounded-xl">
      <p className="text-gray-600 italic mb-4">"Perfect spot for family bonding. Clean, safe, and unforgettable memories."</p>
      <h4 className="text-red-600 font-bold">- Amaka, Port Harcourt</h4>
    </div>
  </div>
</section>

  )
}

export default Reviews
