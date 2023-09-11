import React from 'react'
import { FaPersonBooth } from 'react-icons/fa'
import '../style.css'
const About = () => {
  return (
    <div className='mt-40'>
      <h1 className='font-black text-black text-3xl'>Services</h1>
      <div className='flex justify-center items-center'>
        <div className='flex flex-wrap justify-around w-[80%] '>
          <div className=' w-52 shadow-md shadow-black  my-5  '>
            <h1 className='font-semibold text-black '>Clients</h1>
            <p className='text-[10px] p-4'>
              Looking for your dream property? Look no further! Our property dealing
              company offers a wide range of services to help you find your perfect home.
              From personalized consultations to property viewings and negotiations,
              our experienced agents are here to guide you every step of the way.
              Let us help you make your property search a stress-free and enjoyable experience.
              Contact us today to learn more about our services.
            </p>
          </div>
          <div className=' w-52 shadow-md shadow-black my-5  '>
            <h1 className='font-semibold text-black '>Property Agents</h1>
            <p className='text-[10px] p-4'>
              Looking to sell your property quickly and effectively?
              Our property advertising company is here to help!
              We offer a range of services to help you market your
              property to potential buyers. From professional property
              photography and virtual tours to targeted online advertising, we
              use the latest techniques to ensure your property is seen
              by the right people. Our experienced agents will also handle
              all inquiries and negotiations,ensuring a smooth and hassle-free
              selling experience for you. Contact us today to learn more about our services and how we
              can help you sell your property.
            </p>
          </div>
          <div className=' w-52 shadow-md shadow-black my-5 '>
            <h1 className='font-semibold text-black '>Connecting Clients to Property Dealers</h1>
            <p className='text-[10px] p-4'>
              At our property dealing company, we pride ourselves
              on connecting clients to sellers. Whether you're looking
              to buy or sell a property, our team of experienced agents
              will work closely with you to understand your needs and help
              you achieve your goals. We have a vast network of sellers and
              buyers, ensuring that you have access to a wide range of properties
              and potential buyers. Let us help you make the right connections and
              find your perfect property or buyer. Contact us today to learn more about our services.
            </p>
          </div>
        </div>

      </div>


    </div>

  )
}

export default About
