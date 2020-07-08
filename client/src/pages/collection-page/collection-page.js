import React from 'react'
import { connect } from 'react-redux'
import './collection-page.scss'
import { selectCollection } from '../../redux/selectors/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item'

const CollectionPage = ({ collection }) => {
    // console.log(collection)
    if (!collection) {
        return <h1>Loading</h1>
    }
    const { title, items } = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map((item) => (
                    <CollectionItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
}) // selectCollection is a function that returns a function, that accepts state

export default connect(mapStateToProps)(CollectionPage)
