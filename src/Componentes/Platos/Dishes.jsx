import React from 'react'
import DishesCards from '../layouts/DishesCards'
import img1 from '../../assets/img1.jpg'
import img2  from '../../assets/img2.jpg'
import img3  from '../../assets/img3.jpg'
import img4  from '../../assets/img4.jpg'
import img5  from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
const Dishes = () => {
  return (
    <div className='min-h- screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='font-semibold text-4xl text-center pt-24 pb-10'>Our Dishes</h1>

        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCards img={img1} title='Tasty Dish' price='$20' />
            <DishesCards img={img2} title='Tasty Dish' price='$15' />
            <DishesCards img={img3} title='Tasty Dish' price='$13' />
            <DishesCards img={img4} title='Tasty Dish' price='$17' />
            <DishesCards img={img5} title='Tasty Dish' price='$14' />
            <DishesCards img={img6} title='Tasty Dish' price='$12' />
        </div>
    </div>
  )
}

export default Dishes