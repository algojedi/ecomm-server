const INITIAL_STATE = { sections : [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        size: 'md',
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: 'md',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers',
        size: 'md',
    },
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'lg',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'lg',
        linkUrl: 'shop/mens',
        id: 5,
    },
] }
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer
