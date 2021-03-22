import React, { useState, useContext, useEffect } from 'react'

import { ProductContext } from '../../hooks/products'
import { IProduct } from '../../interfaces'
import { displayFormatter, priceFormatter } from '../../utils/formatter'
import { Container, Item, Info, Header, Description, Button } from './styles'

interface IOrderContentProps {
  collection: string
  category: string
}

const OrderItemCards: React.FC<IOrderContentProps> = ({
  collection,
  category
}) => {
  const context = useContext(ProductContext)

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  useEffect(() => {
    setFilteredProducts(
      context.products.filter(
        product =>
          product.category === category && product.collection === collection
      )
    )
  }, [context.products, collection, category])

  const [isActive, setIsActive] = useState(false)

  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <Container>
      <h1>{category}</h1>
      {filteredProducts.map((product, index) => {
        return (
          <Item onClick={handleIsActive} isActive={isActive}>
            <Info>
              <Header>
                <strong> {displayFormatter(index + 1)} </strong>
                <h2>
                  {product.name} - {product.variant}
                </h2>
              </Header>
              <Description>
                <strong>{priceFormatter(product.price || 0)}</strong>
              </Description>
            </Info>
            <Button>
              <p>+</p>
            </Button>
          </Item>
        )
      })}
    </Container>
  )
}

export default OrderItemCards
