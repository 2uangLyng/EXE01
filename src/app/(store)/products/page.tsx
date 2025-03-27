import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

function ProductPage() {
    return (
        <div className='pt-[120px]'>
            <h2 className='text-4xl text-center font-black text-orange-400'>
                À SÀI GÒN CÓ GÌ ?
            </h2>
            <div className='relative p-4'>
                <img
                    src="https://images.unsplash.com/photo-1613339038444-ca6b1e8eb7b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1c2h8ZW58MHx8MHx8fDA%3D"
                    alt="Plush Toy"
                    className="w-full max-w-[450px] h-[250px] mx-auto rounded-2xl object-cover sm:max-w-[600px] sm:h-[300px] md:max-w-[900px] md:h-[400px] lg:max-w-[1440px] lg:h-[500px]"
                />
                <div className='absolute bottom-10 right-10 md:right-20 lg:right-10'>
                    <Button variant={'outline'} className='flex justify-center items-center cursor-pointer'>
                        <p> Tự thiết kế theo sở thích của bạn</p>
                        <ArrowRightIcon className='text-center' />
                    </Button>
                </div>
            </div>
            {/* CATEGORIES */}
            <div className="w-full flex flex-col items-center px-4 gap-4 lg:flex-row lg:justify-center">
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="bg-blue-300 flex items-center p-4 rounded-2xl w-full"
                        >
                            <div className="w-1/3 flex justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1613339038444-ca6b1e8eb7b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1c2h8ZW58MHx8MHx8fDA%3D"
                                    alt=""
                                    className="rounded-2xl w-[250px] h-[100px] object-cover "
                                />
                            </div>
                            <div className="mt-2 w-2/3">
                                <h2 className="font-black text-xl text-center lg:text-3xl">Áo Thun</h2>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default ProductPage