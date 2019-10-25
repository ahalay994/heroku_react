import React from 'react'
import { ListStoreServiceConsumer } from '../components/list-store-service-context'

const withListStoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <ListStoreServiceConsumer>
                {
                    (listStoreService) => {
                        return (<Wrapped {...props}
                                         listStoreService={listStoreService}/>);
                    }
                }
            </ListStoreServiceConsumer>
        );
    }
};

export default withListStoreService;