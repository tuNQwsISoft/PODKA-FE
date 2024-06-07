import React, { useEffect } from 'react';
import SelectSingleComponent from '../../../components/Select/SelectSingleComponent';

const SelectPodkaComponent = ({
    defaultValue,
    options,
    renderKey,
    valueKey,
    onSelect,
    setBackgroundSound,
}) => {
    useEffect(() => {
        setBackgroundSound(options[0]?.url);
    }, [options, setBackgroundSound]);

    return (
        <SelectSingleComponent
            defaultValue={defaultValue}
            options={options}
            renderKey={renderKey}
            valueKey={valueKey}
            onSelect={onSelect}
            // nullable
        />
    );
};

export default SelectPodkaComponent;
