import React from 'react'
import { Hero } from './Hero'
import { FeaturesProd } from './FeaturesProd'
import { Testimonial } from './Testimonial'
import { Faq } from './Faq'
import { ProductList } from '../../../Products/components/ProductList'
import { useTitle } from '../../../hook/useTitle'

export const HomePage = () => {

  useTitle("Access Latest computer Science E-books")
  return (
    <main>

        <Hero/>
        <FeaturesProd/>
        <Testimonial/>
        <Faq/>
        <ProductList/>

    </main>
  )
}
