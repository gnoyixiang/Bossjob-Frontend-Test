import React from 'react';

import { classnames } from '../../../helpers';
import './JobCard.css';

const JobCard = props => {
    const { job = {}, className, ...restProps } = props;

    return (
        <div className={classnames(className, 'JobCard')} {...restProps}>
            <div className="JobHeader">
                <div className="JobTitle">Customer Service Representative</div>
                <div className="Salary">30k - 35k</div>
            </div>
            <div className="JobInfo">
                <div className="JobTag">
                    <span>Q</span>
                    <span>Cebu City</span>
                    <span>Q</span>
                    <span>1 - 3 years</span>
                </div>
                <div className="JobTag">
                    <span>Q</span>
                    <span>Diploma</span>
                    <span>Q</span>
                    <span>Fulltime</span>
                </div>
            </div>
            <div className="JobFooter">
                <div className="Company">
                    <span>COIMG</span>
                    <span>Arc Refreshments Corp</span>
                </div>
                <div className="Duration">3 hours ago</div>
            </div>
        </div>
    );
};

export default JobCard;