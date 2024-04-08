import React from 'react';
import ItemLargeComponent from './_component/ItemLargeComponent';

const ListItemLargeComponent = ({ listItems }) => {
    return (
        <div className="flex flex-col items-center gap-2 pl-4 pr-4 scroll-container">
            {listItems?.map((item) => {
                return (
                    <ItemLargeComponent
                        thumbnailSrc={item.thumbnailSrc}
                        title={item.title}
                    />
                );
            })}
        </div>
    );
};

export default ListItemLargeComponent;
