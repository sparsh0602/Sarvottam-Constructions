import React from 'react'
import './Collection.css'
const Collection=(() =>{

    return (
        <div className='OurCollectionOutterMainDiv'id="ourCollection" >
            <div className='OurCollectionOuterDiv collectionDesktop'>
                <div className='OurCollectionHeading'>Our Collection</div>
                <div className='collectionGridContainer'>
                    <button className='collectionItem collectionItem1'>
                        <div className='collectionItemName collectionItemName1'>Bathrooms</div>
                    </button>
                    <button className='collectionItem collectionItem2'>
                        <div className='collectionItemName collectionItemName2'>Rooms</div>
                    </button>
                    <button className='collectionItem collectionItem3'>
                        <div className='collectionItemName collectionItemName3'>Kitchens</div>
                    </button>
                </div>
                <div className='collectionGridContainer'>
                    <button className='collectionItem collectionItem4'>
                        <div className='collectionItemName collectionItemName4'>Halls</div>
                    </button>
                    <button className='collectionItem collectionItem5'>
                        <div className='collectionItemName collectionItemName5'>Elevations</div>
                    </button>
                    <button className='collectionItem collectionItem6'>
                        <div className='collectionItemName collectionItemName6'>Terrace</div>
                    </button>
                </div>
            </div>


            <div className='OurCollectionOuterDiv collectionMobile'>
                <div className='OurCollectionHeading'>Our Collection</div>
                <div className='collectionGridContainer'>
                    <button className='collectionItem collectionItem1'>
                        <div className='collectionItemName collectionItemName1'>Bathrooms</div>
                    </button>
                    <button className='collectionItem collectionItem2'>
                        <div className='collectionItemName collectionItemName2'>Rooms</div>
                    </button>

                </div>
                <div className='collectionGridContainer'>
                    <button className='collectionItem collectionItem3'>
                        <div className='collectionItemName collectionItemName3'>Kitchens</div>
                    </button>
                    <button className='collectionItem collectionItem4'>
                        <div className='collectionItemName collectionItemName4'>Halls</div>
                    </button>
                </div>
                <div className='collectionGridContainer'>
                    <button className='collectionItem collectionItem5'>
                        <div className='collectionItemName collectionItemName5'>Elevations</div>
                    </button>
                    <button className='collectionItem collectionItem6'>
                        <div className='collectionItemName collectionItemName6'>Terrace</div>
                    </button>
                </div>
            </div>
        </div>


    );
}
);

export default Collection;