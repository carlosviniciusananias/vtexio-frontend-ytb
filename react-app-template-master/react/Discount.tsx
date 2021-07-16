import React, { useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['container', 'price', 'discountMessage']

const Discount: StorefrontFunctionComponent = () => {
  const productContext = useProduct()
  const handles = useCssHandles(CSS_HANDLES)
  const [price, setPrice] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [discountTotal, setDiscountTotal] = useState<number>(0)

  useEffect(() => {
    if (productContext && productContext.product) {
      setPrice(productContext.product.priceRange.sellingPrice.highPrice)

      DiscountCalcution()
    }
  }, [productContext])

  const DiscountCalcution = () => {
    const discount = price * 0.05
    const priceFinal = price - discount

    setDiscountTotal(priceFinal)
    setLoading(true)
  }

  const RenderDiscountPrice = () => {
    return (
      <div className={`${handles.container}`}>
        <div className={`${handles.price}`}>{discountTotal}</div>
        <div className={`${handles.discountMessage}`}>à vista no boleto com 5% de desconto</div>
      </div>
    )
  }

  return (
    <>
      {loading ? <RenderDiscountPrice /> : null}
    </>
  )
}

export default Discount
