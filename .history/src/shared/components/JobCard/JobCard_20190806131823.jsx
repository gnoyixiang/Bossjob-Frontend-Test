import React from 'react';
import { classnames } from '../../../helpers';

const JobCard = props => {
    const { job, className, ...restProps } = props;

    return (
        <div className={classnames(className, 'JobCard')} {...restProps}>
            <
        </div>
    );
};

export default JobCard;