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
    }
};
export type ProductListType =  {list : ProdObj[]}

// export type selectedObjectType = {
//     id : string,
//      name: string,
//      cost : {
//         old : string,
//         new : string
//     }
// }

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
    viewPage : addedType | {},
}

export type State = {
    productsBlock : productsBlockType,
    slider : SliderType[],
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