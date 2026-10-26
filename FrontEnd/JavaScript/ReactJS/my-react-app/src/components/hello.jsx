
import React from "react";

const Hello = () => {
    return React.createElement(
        'div',
        { id: 'Hello', className: 'dummyClass' },
        React.createElement(
            'h1',
            null,
            'Wellcome Al-s999'
        )
    );
};

export default Hello;
