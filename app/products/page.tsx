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
const Products = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center mt-16  px-4 lg:px-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {panels.map((panel) => (
          <Card key={panel.id}>
            <CardHeader className=''>
              <Image
                src={panel.image}
                alt={panel.name}
                width={500}
                height={500}
              />
            </CardHeader>
            <CardContent className='h-72 flex flex-col justify-between gap-2'>
              <CardTitle>{panel.name}</CardTitle>
              <CardDescription>{panel.description}</CardDescription>
              <p className='text-lg font-bold'>{panel.price} zł</p>
            </CardContent>
            
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Products
