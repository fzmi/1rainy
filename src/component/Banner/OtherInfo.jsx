import React from 'react';

const OtherInfo = (props) => (
    <div>
        <p>{props.children}</p>
        <p>{props.value}</p>
    </div>
);

export default OtherInfo;