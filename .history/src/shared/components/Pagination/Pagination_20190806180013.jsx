import React from 'react';

import { classnames } from '../../../helpers';
import './Pagination.css';

const Pagination = props => {
    const { className, ...restProps } = props;

    return (
       <div className="Pagination">
           <div></div>
           <div></div>
       </div>
    );
};

export default Pagination;