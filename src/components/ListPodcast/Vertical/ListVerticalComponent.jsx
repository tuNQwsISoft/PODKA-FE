import React from 'react';
import ItemVerticalComponent from './_component/ItemVerticalComponent';

const ListVerticalComponent = ({ listItems }) => {
    return (
        <div className="flex flex-col scroll-container w-full">
            {listItems.map((item) => {
                return <ItemVerticalComponent item={item} />;
            })}
        </div>
    );
};

export default ListVerticalComponent;
