import React from 'react';

const AboutUs = () => {
    return (
        <>
    	<div className='w-11/12 lg:w-8/12 py-16 mx-auto space-y-16'>
            <h1 className='text-4xl font-bold text-center '>About Us</h1>

            <div>
                <label>
                    <iframe className="h-[35rem] w-full" src="https://www.youtube.com/embed/vi6VHdMy6cU" title="Pneumatic Bollards at Loreto Mandeville Hall - Keeping Our Future Leaders Safe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </label>
            </div>

            <div className='space-y-6'>
                <p className='tracking-widest text-xl font-bold'>
                NJM GROUP WAS FOUNDED IN 1992 WITH SIX EMPLOYEES OPERATING OUT OF A 32M² FACILITY PROVIDING SERVICES TO UNIVERSITIES AND MANUFACTURERS AUSTRALIA WIDE.
                </p>
                <p className='text-xl tracking-wide'>
                Australian Bollards is a leading provider of safety and security solutions in Australia, specializing in high-quality bollards, safety barriers, and other safety equipment. We are a one-stop-shop for all your safety and security needs.
                </p>
                <p className='text-xl tracking-wide'>
                Today, the company has expanded to service the mining industry, railway stations, local councils, shopping centres and many more industries Australia wide. We manufacture and distribute products from our 1,700m² warehouse and factory in Heidelberg West. Our range of products include:
                </p>

                <div className='pl-10'>
                    <ul className='list-disc text-xl space-y-2 tracking-wide'>
                        <li>Bollards</li>
                        <li>Handrails</li>
                        <li>Bike racks</li>
                        <li>Speed humps</li>
                        <li>Wheel Stops</li>
                        <li>Variable rate boards</li>
                        <li>Steel staircases and structural steel beams.</li>
                        <li>Electronic Display Solutions</li>
                        <li>Steel Fabrications and repairs.</li>
                    </ul>
                </div>

                <p className='text-xl tracking-wide py-10 font-bold'>
                We Stock. We Supply. We Deliver. We Site Install. We Maintain. Australia Wide.
                </p>


                <div className='space-y-10'>
                    <h1 className='text-4xl font-bold text-[#ff8000] '>OUR COMMITMENT</h1>

                    <p className='text-xl tracking-wide'>
                    Our commitment to providing high-quality products that are built to last. We use only the best materials and manufacturing techniques to create products that are not only durable but also effective in providing the necessary safety and security measures.
                    </p>
                </div>

                <div className='space-y-10'>
                    <h1 className='text-4xl font-bold text-[#ff8000] '>OUR VALUES</h1>

                    <p className='text-xl tracking-wide'>
                    Our customers are our number one priority. We build strong customer relationships through:
                    </p>

                    <div className='pl-10'>
                        <ul className='list-disc text-xl space-y-2'>
                            <li>Dependable service</li>
                            <li>Consistent high levels of quality workmanship</li>
                            <li>Sourcing products and materials from quality approved suppliers</li>
                            <li>Innovating new products, technology and services</li>
                            <li>Being customer focused</li>
                            <li>Providing open and honest communication with our customers</li>
                            <li>Always fulfilling our commitments</li>
                            <li>Supporting industry initiatives</li>
                            <li>Using environmentally friendly building materials</li>
                            <li>Employee Satisfaction and Involvement – Our employees are essential to our success. We must create and maintain an environment that promotes pride through: </li>
                            <li>Workplace safety being of paramount importance</li>
                            <li>Teamwork and continuous improvement with contributions from all involved</li>
                            <li>Providing opportunities, rewards and training to support our growth individually and as a company</li>
                            <li>Corporate Citizenship – Being conscious of the community and environment in which we operate:</li>
                            <li>Supporting industry initiatives</li>
                            <li>Embracing green building materials ensuring a sustainable environmental future</li>
                            <li>Providing facilities to the highest environmental standards practicable</li>
                            <li>Creating safe and secure employment</li>
                        </ul>
                    </div>

                    <p className='text-xl tracking-wide'>
                    A great feature of Australian Bollards is that we are dedication to innovation. We are constantly researching and developing new products and technologies to stay ahead of the game in the safety and security industry. This means that our customers can always expect to receive the latest and most effective safety solutions.
                    </p>
                    
                    <p className='text-xl tracking-wide'>
                    Australian Bollards is also committed to sustainability and reducing our carbon footprint. We offer eco-friendly products and are always looking for ways to reduce waste and conserve resources in our manufacturing process.
                    </p>
                    
                </div>

                <div className='space-y-10 py-10'>
                    <h1 className='text-4xl font-bold text-[#ff8000] '>OUR PHILOSOPHY</h1>

                    <p className='text-xl tracking-wide'>
                    ’Service & Quality’ shape our philosophy. We are dedicated to fulfilling the needs of our customers. Our staff are engaged in direct sales and customer service as we believe there is no substitute for direct personal communication. Our team actively strives to learn and understand each of our customer's service needs and product requirements.
                    </p>
                    
                    <p className='text-xl tracking-wide'>
                    We offer quality products and proactively pursue faster and more efficient techniques to improve the cost and quality of our products and services. We recognise that to serve our customers better; we must adopt new technologies and innovations beyond the traditional methods in the industry.
                    </p>
                    
                    <p className='text-xl tracking-wide'>
                    We strive to increase our status as the preferred domestic supplier of safety products and services and become a competitive international bollard supplier.
                    </p>
                    
                </div>


            </div>
    	</div>
        </>
  );
}

export default AboutUs;
