import React from 'react'

const Testimonials = () => {


    const testimonials = [
        {
            logo:"",
            name:"Rahul Shrivastava",
            post:"founder",
            company:"The AgeX",
            description:"“It’s been really nice working with New Hue Studio. They are reliable, easy to collaborate with, and understands feedback well. The overall experience has been smooth, and I appreciate their flexibility and willingness to improve with every iteration. Wishing them the best for their future projects.”",
        },
        {
            logo:"",
            name:"Manik Dhiman",
            post:"founder",
            company:"Manik Digital",
            description:"“I recently had the opportunity to work with New Studio for graphic designing services, and the experience was truly impressive. It was a great pleasure working with them, and I genuinely enjoyed the entire process.Their team demonstrates a high level of professionalism and expertise, delivering advanced-level editing and visually appealing designs that perfectly align with modern standards.”",
        },
        {
            logo:"",
            name:"Random",
            post:"founder",
            company:"Random",
            description:"“Rejouice helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way.”",
        },
       
       
    ]

  return (
    <div className=' mt-10 lg:mt-[40vh] font-[heading-font]'>
        <div className='text-7xl font-[heading-font] p-5 lg:p-10 text-center'>
            <h1>Our Clients Says It Best</h1>
        </div>
        <div className="flex flex-col lg:flex-row px-5 lg:gap-5 justify-center items-center mt-[10vh] w-full">
            {testimonials.map((testimonial, idx) => (
                <div
                    key={idx}
                    className="w-full sm:w-[90vw] md:w-[70vw] lg:w-[27vw] h-[40vh] md:h-[70vh] bg-white flex flex-col justify-between text-black rounded-lg overflow-hidden mb-8 lg:mb-0 shadow-lg"
                >
                    <div className="flex items-center justify-center pt-8">
                        <img
                            className="h-[10vh] w-[16vw] sm:h-[12vh] sm:w-[12vw] md:w-[7vw] object-cover rounded-full"
                            src="https://images.prismic.io/rejouice-2024/Z0csjZbqstJ970gj_abdul-wahid-ovaice-profile-picture3.jpg?auto=format,compress&w=2294&h=1820&fm=avif"
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