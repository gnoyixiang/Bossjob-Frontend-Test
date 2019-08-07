import React from 'react';
import countryList from 'country-list';

import { classnames } from '../../../helpers';
import './JobCard.css';

/*
{
    "id": 17348,
    "degree": "Diploma",
    "job_title": "System Engineer",
    "job_country": "Philippines",
    "job_type": "Full-time",
    "job_location": "Makati",
    "salary_range_from": 30000,
    "salary_range_to": 40000,
    "company_name": "wealth access inc.",
    "company_location": "Makati",
    "xp_lvl": "3 - 5 years",
}
*/

const JobCard = props => {
    const { job, className, ...restProps } = props;

    const {
        title, salary_range_from, salary_range_to, location, country, xp_lvl, type, degree
    } = job;

    const countryCode = countryList.getCode(country);
    console.log(country);
    const intlNumberFormatParams = [
        countryList.getCode,
        {style: 'currency', currency: ''}
    ]

    return (
        <div className={classnames(className, 'JobCard')} {...restProps}>
            <div className="JobHeader">
                <div className="JobTitle">{title}</div>
                <div className="Salary">
                    {/* {Intl.NumberFormat().format(salary_range_from)} - {Intl.NumberFormat().format(salary_range_to)} */}
                </div>
            </div>
            <div className="JobInfo">
                <div className="JobTag">
                    <span>Q</span>
                    <span>{location}</span>
                </div>
                <div className="JobTag">
                    <span>Q</span>
                    <span>{xp_lvl}</span>
                </div>
                <div className="JobTag">
                    <span>Q</span>
                    <span>{degree}</span>
                </div>
                <div className="JobTag">
                    <span>Q</span>
                    <span>{type}</span>
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

JobCard.defaultProps = {
    job: {}
};

export default JobCard;