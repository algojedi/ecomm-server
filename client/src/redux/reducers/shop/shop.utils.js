export const collectionMapping = (collection) => {

    const newCollection = {}
    collection.forEach((category) => {
        newCollection[category.title.toLowerCase()] =  {
            title: category.title,
            items: category.items,
            id: category._id,
            routeName: encodeURI(category.title.toLowerCase()),
        }
    })
    return newCollection

  
}
