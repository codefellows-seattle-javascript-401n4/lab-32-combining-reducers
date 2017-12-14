import React from 'react';
import ReactDom from 'react-dom';

const CategoryDisplay = ({toggleCategory, category}) => {
    const toggle = () => {
        toggleCategory(category.id);
    }

    return(
        <button onClick={toggle}>Do nothing</button>
    );
};

export default CategoryDisplay;