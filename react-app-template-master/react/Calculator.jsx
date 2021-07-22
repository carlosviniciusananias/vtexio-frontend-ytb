import React, { Fragment } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['calculatorWrapper' ,'calculatorSelectedProducts', 'calculatorBox' ,'calculatorIsGift', 'calculatorQuantity', 'calculatorButton']

const Calculator = () => {
  const handles = useCssHandles(CSS_HANDLES)

  var items = [
    {
        "id": "0",
        "name": "Tênis Nike Revolution 5 Masculino",
        "price": "349.41"
    },
    {
        "id": "1",
        "name": "Tênis Kappa Jump Feminino ",
        "price": "249.00"
    },
    {
        "id": "2",
        "name": "Tênis Puma Sinistrão Masculino",
        "price": "159.55"
    },
    {
        "id": "3",
        "name": "Tênis Adidas Coreracer Masculino",
        "price": "399.99"
    },
    {
        "id": "4",
        "name": "Chinelo Kenner Masculino",
        "price": "99.99"
    }
  ]

  console.log(items)

  const RadioProducts = () => {
    return (
      <Fragment>
        {items.map((item) => (
          <div key={item.id}>
            <input type="radio" name="product" id={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div className={`${handles.calculatorWrapper}`}>
        <div className={`${handles.cacalculatorSelectedProductsl}`}>
          <h2>Selecione o produto</h2>
          <RadioProducts />
        </div>
        <div className={`${handles.calculatorBox}`}>
          <div className={`${handles.calculatorIsGift}`}>
            <h2>É para presente?</h2>
            <div>
              <input type="radio" />
              <label>Sim</label>
            </div>
            <div>
              <input type="radio" />
              <label>Nao</label>
            </div>
          </div>
          <div className={`${handles.calculatorQuantity}`}>
            <h2>Quantidade</h2>
            <div>
              <span>-</span>
              <input type="text" value="1" />
              <span>+</span>
            </div>
          </div>
        </div>
        <button className={`${handles.calculatorButton}`}>Preço final</button>
      </div>
    </Fragment>
  )
}

export default Calculator
