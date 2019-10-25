import React from 'react'

const {
    Provider: ListStoreServiceProvider,
    Consumer: ListStoreServiceConsumer
} = React.createContext();

export {
    ListStoreServiceConsumer,
    ListStoreServiceProvider
}