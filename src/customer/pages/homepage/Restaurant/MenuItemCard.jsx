import { Button, Card } from '@mui/material'
import React from 'react'

const MenuItemCard = ({item}) => {
  const handleAddItemToCart=()=>
  console.log("handle add item to cart")
  return (
    <Card className='p-5 lg:flex item-center justify-between box'>
      <div className='lg:flex items-center lg:space-x-5'>
        <img className='w-[7rem] h-[7rem] object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUJOGKWZkvf9bi7dJ8VbMMJonfREKIkhAW--O6Ya2PNnOisyk_D7qwbw&s' alt=''/>
        
        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
            <p className='font-semibold text-xl'>{'Pizza'}</p>
            <p>₹{300}</p>
            <p className='text-gray-400'>{'Rice,Sambar,Papad'}</p>
        </div>
      </div>
      <div>
        <Button onClick={handleAddItemToCart}> Add to cart </Button>
      </div>
    </Card>
  )
}

export default MenuItemCard
