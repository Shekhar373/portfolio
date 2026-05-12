import React from 'react'

const Testimonials = () => {


    const testimonials = [
        {
            logo:"/testimonials/The-Age-X.jpg",
            name:"Rahul Shrivastava",
            post:"Founder",
            company:"The AgeX",
            description:"“It’s been really nice working with New Hue Studio. They are reliable, easy to collaborate with, and understands feedback well. The overall experience has been smooth, and I appreciate their flexibility and willingness to improve with every iteration. Wishing them the best for their future projects.”",
        },
        {
            logo:"/testimonials/Manik-Digital.jpg",
            name:"Manik Dhiman",
            post:"Founder",
            company:"Manik Digital",
            description:"“I recently had the opportunity to work with New Studio for graphic designing services, and the experience was truly impressive. It was a great pleasure working with them, and I genuinely enjoyed the entire process.Their team demonstrates a high level of professionalism and expertise, delivering advanced-level editing and visually appealing designs that perfectly align with modern standards.”",
        },
        {
            logo:"/testimonials/Black.png",
            name:"Tanveer",
            post:"Founder",
            company:"Hair Art Salon",
            description:"Working with New Hue Studio has been a great experience for us. They managed our social media exceptionally well, delivering high-quality video editing and professional shoots. Their team also created eye-catching creatives that truly elevated our online presence.I would highly recommend New Hue Studio to anyone looking for expert video editing or complete social media management. Definitely give them a try.",
        },
       
       
    ]

  return (
    <div className=' mt-10 lg:mt-[40vh] font-[text-font]'>
        <div className='text-5xl lg:text-7xl font-[text-font] p-5 lg:p-10 text-center'>
            <h1>Our Clients Says It Best</h1>
        </div>
        <div className="flex flex-col lg:flex-row px-5 lg:gap-5 justify-center items-center mt-[10vh] w-full">
            {testimonials.map((testimonial, idx) => (
                <div
                    key={idx}
                    className="w-full sm:w-[90vw] md:w-[70vw] lg:w-[27vw] h-[60vh] md:h-[40vh] lg:h-[70vh] bg-white flex flex-col justify-between text-black rounded-lg overflow-hidden mb-8 lg:mb-0 shadow-lg"
                >
                    <div className="flex items-center justify-center pt-8">
                        <img
                            className="h-[7vh] md:h-[5vh] lg:h-[10vh] w-[20vw] sm:h-[12vh] sm:w-[12vw] md:w-[7vw] object-cover"
                            src={testimonial.logo}
                            alt={testimonial.name}
                        />
                    </div>
                    <h3 className="text-sm sm:text-sm md:text-sm p-5  leading-tight">{testimonial.description}</h3>
                    <div className="p-5 text-sm">
                        <h3>{testimonial.name}</h3>
                        <h3>
                            {testimonial.post}, {testimonial.company}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials