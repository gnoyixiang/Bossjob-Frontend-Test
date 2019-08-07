import React from 'react';

import { classnames, formatCurrency, displayDateDifference } from '../../../helpers';
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
        job_title, salary_range_from, salary_range_to, job_location, job_country, company_name, xp_lvl, job_type, degree, company_logo, refreshed_at
    } = job;

    console.log(refreshed_at);
    return (
        <div className={classnames(className, 'JobCard')} {...restProps}>
            <div className="JobHeader">
                <div className="JobTitle">{job_title}</div>
                <div className="Salary">
                    {formatCurrency(salary_range_from, job_country)} - {formatCurrency(salary_range_to, job_country)}
                </div>
            </div>
            <div className="JobInfo">
                <div className="JobTag">
                    <span><i className="icofont-location-pin" /></span>
                    <span>{job_location}</span>
                </div>
                <div className="JobTag">
                    <span><i className="icofont-briefcase"></i></span>
                    <span>{xp_lvl}</span>
                </div>
                <div className="JobTag">
                    <span><i className="icofont-graduate"></i></span>
                    <span>{degree}</span>
                </div>
                <div className="JobTag">
                    <span><i className="icofont-clock-time"></i></span>
                    <span>{job_type}</span>
                </div>
            </div>
            <div className="JobFooter">
                <div className="Company">
                    <img src={company_logo} alt="" />
                    <span>{company_name}</span>
                </div>
                <div className="Duration">{displayDateDifference(refreshed_at)}</div>
            </div>
        </div>
    );
};

JobCard.defaultProps = {
    job: {}
};

export default JobCard;