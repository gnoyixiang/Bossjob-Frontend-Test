import React from 'react';
import currencyCodes from 'currency-codes';

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
        job_title, salary_range_from, salary_range_to, job_location, job_country, xp_lvl, type, degree
    } = job;

    const locale = window.navigator.language;
    const currencyCode = currencyCodes.country(job_country ? job_country.toLowerCase() : '');
    console.log(currencyCode, currencyCodes);

    const intlNumberFormatParams = [
        locale,
        {style: 'currency', currency: currencyCode}
    ]

    return (
        <div className={classnames(className, 'JobCard')} {...restProps}>
            <div className="JobHeader">
                <div className="JobTitle">{job_title}</div>
                <div className="Salary">
                    {/* {Intl.NumberFormat().format(salary_range_from)} - {Intl.NumberFormat().format(salary_range_to)} */}
                </div>
            </div>
            <div className="JobInfo">
                <div className="JobTag">
                    <span>Q</span>
                    <span>{job_location}</span>
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