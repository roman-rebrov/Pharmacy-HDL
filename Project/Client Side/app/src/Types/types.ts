import { IOrders } from "../Redux/Reducers/newOrderReducer";

export type ProdObj = {
    id : string,
    brand ?: string,
    name? : string,
    photo: string[],
    cost : {
        old : string,
        new : string
    },
    discribes? : string,
    categories ?: {
        main ?: string,
        keywords ?: string[]
    },
    topics: string[]
};
export type ProductListType =  {
    list : ProdObj[],
    arrLength: number,
    limit: number,
    page: number,
    topic: string
}


export type addedType = {
    id : string,
    name : string,
    cost : {
        new : string,
        old : string
    }
}

export type productsBlockType = {
    Products: ProductListType ,
    addedToCart : {
        addedId : string[],
        added : addedType[]
    },
    topics: string[],
    viewPage : addedType | {},
}

export type State = {
    productsBlock : productsBlockType,
    slider : SliderType[], 
    newOrder: IOrders,
    process : boolean,
    recommendedList : Array<ProdObj>,
    selectedObjects : {
        addedToCart : {
            addedId : string[],
            added : addedType[]
        },
        viewPage : {
            id : string,
            name: string,
            discribes: string,
            cost: {
                new : string
            },
            photo: string
        },
    }
};


export type addedToCartType = {
    addedId : string[],
    added : addedType[]
}

export type ActionType = {
    type: string,
    payload: {}
}
// ======================================

export type SliderType = {
    id: string,
    name: string,
    baner: string
}