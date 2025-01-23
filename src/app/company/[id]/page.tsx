"use client"

import { CompanyData } from '@/types';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const params = useParams();
  const id = params?.id;

  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  const dummyData: CompanyData = {
    id: 1,
    name: 'Google',
    description : 'This is google website',
    director_name: 'Holla',
    logo_url: 'https://i.pinimg.com/736x/68/3d/9a/683d9a1a8150ee8b29bfd25d46804605.jpg'
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-row gap-2'>
        <h1>Director's Name: </h1>
      <h1>{dummyData.director_name}</h1>
      </div>
      <Image src={dummyData.logo_url} width={50} height={25} className='object-contain w-[30%] h-[10%]' alt='Company Image'/>
      <div className='flex gap-3 text-start'>
      <h1>Company Name: <span className='font-semibold'>{dummyData.name}</span></h1>
      <p>Company  Description: {dummyData.description}</p>
      </div>
    </div>
  )
}

export default page
