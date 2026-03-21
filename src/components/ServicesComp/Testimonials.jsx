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
            name:"lund",
            post:"founder",
            company:"lund",
            description:"“Rejouice helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way.”",
        },
       
       
    ]

  return (
    <div className='text-white mt-[40vh] font-[heading-font]'>
        <div className='text-7xl font-[heading-font] text-center'>
            <h1>Our Clients Says It Best</h1>
        </div>
        <div className='flex gap-5 justify-center mt-[10vh]'>
             {testimonials.map((testimonial)=>{
                return <div className='h-[60vh] w-[27vw] bg-white flex flex-col justify-between text-black rounded-lg overflow-hidden'>
                    <img className='h-[12vh] w-[7vw] object-cover'
                     src="https://images.prismic.io/rejouice-2024/Z0csjZbqstJ970gj_abdul-wahid-ovaice-profile-picture3.jpg?auto=format,compress&w=2294&h=1820&fm=avif" alt="" />

                     <h3 className='text-xs p-5 font-bold'>{testimonial.description}</h3>
                     <div className='p-5  text-sm '>
                        <h3>{testimonial.name}</h3>
                        <h3>{testimonial.post}, {testimonial.company}</h3>
                     </div>

                </div>

             })}
        </div>
    </div>
  )
}

export default Testimonials