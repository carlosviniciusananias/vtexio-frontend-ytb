import React, { Fragment } from 'react'
import { useQuery } from 'react-apollo'
import ORDER_GROUP from './graphql/getOrderGroup.graphql'

const QueryExample: StorefrontFunctionComponent = () => {
  const orderItems = useQuery(ORDER_GROUP, {
    variables: {
      orderGroup: "1146800411132"
    }
  })

  console.log('Get example with graphql', orderItems)

  return (
    <Fragment></Fragment>
  )
}

export default QueryExample
