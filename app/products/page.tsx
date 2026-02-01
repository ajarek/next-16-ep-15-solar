"use client"

import panels from "@/data/data.json"
import Image from "next/image"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cartStore"
import { useState } from "react"
import { Minus, Plus } from "lucide-react"

const Products = () => {
  const { addItemToCart } = useCartStore()
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})

  const getQuantity = (id: number) => quantities[id] || 1

  const handleIncrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: getQuantity(id) + 1,
    }))
  }

  const handleDecrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(getQuantity(id) - 1, 1),
    }))
  }

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center mt-16  px-4 lg:px-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {panels.map((panel) => (
          <Card key={panel.id}>
            <CardHeader className=''>
              <Image
                src={panel.image}
                alt={panel.name}
                width={400}
                height={400}
              />
            </CardHeader>
            <CardContent className='h-72 flex flex-col justify-between gap-2'>
              <CardTitle>{panel.name}</CardTitle>
              <CardDescription>{panel.description}</CardDescription>
              <div className='flex items-center gap-2'>
                <Button onClick={() => handleDecrement(panel.id)}>
                  <Minus />
                </Button>
                <p>{getQuantity(panel.id)}</p>
                <Button onClick={() => handleIncrement(panel.id)}>
                  <Plus />
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <div className='w-full flex items-center justify-between'>
                <p className='text-lg font-bold'>
                  {panel.price * getQuantity(panel.id)} zł
                </p>
                <Button
                  onClick={() =>
                    addItemToCart({ ...panel, quantity: getQuantity(panel.id) })
                  }
                >
                  Dodaj do koszyka
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Products
