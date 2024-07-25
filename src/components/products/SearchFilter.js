import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

// const SearchFilter = ({ collectionFilter, tags, getCollectionFilter, getTagFilters }) => {
const SearchFilter = ({ collectionFilter, tags, onCollectionFilterChange, selectedCollections, getTagFilters, isFilterVisible }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleCollection = () => {
    setIsOpen(!isOpen);
  };

  const [isShowTag, setisShowTag] = useState(true);
  const toggleTag = () => {
    setisShowTag(!isShowTag);
  };

  var [isChecked, setIsChecked] = useState(false);
  // var [name, setName] = useState([]);
  var [tagArray, setTag] = useState([]);
  // const [isFilterVisible, setIsFilterVisible] = useState(false);
  // var [collections, setCollection] = useState([]);

// console.log('*** selectedCollections', selectedCollections);
  const handleTagCheckboxChange = (tagItemName) => {
    // console.log(tagItemName);
    // alert(tagArray.includes(tagItemName));
    if (tagArray.includes(tagItemName)) {
      setTag(tagArray.filter((item) => item !== tagItemName));
    } else {
      // console.log('FALSE', tagItemName)
      tagArray.push(tagItemName);
      // setTag([...tagArray, tagItemName])
    }
    // console.log(tagArray);
    // setIsChecked(!isChecked);
    // setIsFilterVisible(true);
    getTagFilters(tagArray);
  };

  const handleClearItem = (itemName) => {
    
  };

  const handleClearTagItem = (tagItemName) => {
    setTag(tagArray.filter((item) => item !== tagItemName));
    getTagFilters(tagArray);
  };

  const handleClearAll = () => {
    // setName([]);
    setTag([]);
    setIsChecked(false);
    // setIsFilterVisible(false);
    // setCollection([]);
    getTagFilters([]);
  }; 

  // if( selectedCollections.length > 0 || tagArray.length > 0){
  //   setIsFilterVisible(true);
  // }


  return (
    <>
      <div className="w-full py-4 space-y-4">
        {isFilterVisible && (selectedCollections.length > 0 || tagArray.length > 0) && (
          <div className="space-y-2 border-b border-gray-200 pb-4">
            <div className="flex justify-between ">
              <label className="text-sm 2xl:text-base">Filter By</label>
              <button type="button" className="text-xs" onClick={handleClearAll}>
                Clear All
              </button>
               {/* <Link to={window.location.href} className="text-xs">Clear All</Link> */}
            </div>
            <label>Collection :</label>
            {selectedCollections.map((item, index) => (
              <div key={index} className="flex flex-col">

                <div className="flex items-center justify-between gap-2">
                  <label className="font-bold text-sm">{item}</label>
                  <button
                    type="button"
                    onClick={() => handleClearItem(item)}
                    className="text-xs"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <label>Tag :</label>
            {tagArray.map((tagItem, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-sm">{tagItem}</label>
                  <button
                    type="button"
                    onClick={() => handleClearTagItem(tagItem)}
                    className="text-xs"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-3 border-b border-gray-200 pb-4">
          <label className='flex justify-between items-center'>
            <button
              type="button"
              className="font-bold uppercase flex gap-1 items-center text-sm 2xl:text-base"
              onClick={toggleCollection}
            >
              <svg
                className={`${isOpen ? 'w-3 h-3' : 'w-3 h-3 rotate-180'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>

              <span>Collection</span>
            </button>
            {selectedCollections.length > 0 && (
              <button type="button" className="text-xs" onClick={() => onCollectionFilterChange([])}>
                Clear
              </button>
            )}
          </label>
          {isOpen && (
            <div className="product_scroll space-y-2 h-44 overflow-auto">
              {collectionFilter.map((item, index) => (
                <div className=" text-sm 2xl:text-base flex itmes-center " key={`collection_${index}`}>
                  <div className="flex gap-1 items-center">
                    <input
                      type="checkbox"
                      id={`check${index}`}
                      className="opacity-0 absolute"
                      checked={selectedCollections.includes(item.collection_name)}
                      onChange={() => onCollectionFilterChange([item.slug, item.collection_name])}
                    />

                    <label
                      htmlFor={`check${index}`}
                      className={`bg-white border border-gray-300 rounded-sm w-4 h-4 flex flex-shrink-0 justify-center items-center hover:border-gray-800 ${selectedCollections.includes(item.collection_name) ? 'border-gray-800' : ''
                        }`}
                    >
                      <svg
                        className={`fill-current ${selectedCollections.includes(item.collection_name) ? 'block' : 'hidden'
                          } w-3 h-3 text-gray-700 pointer-events-none`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </label>
                    <label
                      htmlFor={`check${index}`}
                      className={`flex itmes-center ${selectedCollections.includes(item.collection_name) ? 'font-bold' : ''
                        }`}
                    >
                      {item.collection_name} <span className=''>({item.collection_to_products_count})</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3 border-b border-gray-200 pb-4">
          <label className="flex justify-between items-center">
            <button
              type="button"
              className="font-bold uppercase flex gap-1 items-center text-sm 2xl:text-base"
              onClick={toggleTag}
            >
              <svg
                className={`${isShowTag ? 'w-4 h-4' : 'w-4 h-4 rotate-180'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>

              <span>Tag</span>
            </button>
            {tagArray.length > 0 && (
              <button type="button" className="text-xs" onClick={() => setTag([])}>
                Clear
              </button>
            )}
          </label>
          {isShowTag && (
            <div className="product_scroll space-y-2 h-44 overflow-auto">
              {tags.map((tagItem, index) => (
                <div className="text-sm 2xl:text-base flex itmes-center " key={index}>
                  <div className="flex gap-1 items-center">
                    <input
                      type="checkbox"
                      id={`tagId${index}`}
                      className="opacity-0 absolute"
                      checked={tagArray.includes(tagItem.name)}
                      onChange={() => handleTagCheckboxChange(tagItem.name)}
                    />

                    <label
                      htmlFor={`tagId${index}`}
                      className={`bg-white border border-gray-300 rounded-sm w-4 h-4 flex flex-shrink-0 justify-center items-center hover:border-gray-800 ${tagArray.includes(tagItem.name) ? 'border-gray-800' : ''
                        }`}
                    >
                      <svg
                        className={`fill-current ${tagArray.includes(tagItem.name) ? 'block' : 'hidden'
                          } w-3 h-3 text-gray-700 pointer-events-none`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </label>
                    <label
                      htmlFor={`tagId${index}`}
                      className={`flex itmes-center ${tagArray.includes(tagItem.name) ? 'font-bold' : ''
                        }`}
                    >
                      {tagItem.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
