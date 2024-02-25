import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = (item) => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex item-center space-x-5'>
            <img className='h-16 w-16' src='https://lh5.googleusercontent.com/p/AF1QipOglU5OIGvWKnQ0qugKf4HvkchcBRnDnRmy1svE=w115-h115-n-k-no' alt=''/>
             <div>
                <p>Pizza</p>
                <p className='text-gray-400 '>₹399</p>
             </div>   
        </div>
        <div>
            <Button variant='contained'>Track</Button>
        </div>
    </Card>
  )
}

export default OrderCard
