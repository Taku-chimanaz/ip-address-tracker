import React from 'react';
import './../css/IPDetails.css';


export const IPDetails = ({ ipDetails }) => {
    return (
        <article className='ip-details'>

            <div className="ip-details__detail">
                <p className='ip-details__detail__detail-name'>
                    IP Address
                </p>

                <p className="ip-details__detail__detail-value">
                    {ipDetails !== null && ipDetails.ip}
                </p>
            </div>

            <div className="divider"></div>

            <div className="ip-details__detail">
                <p className='ip-details__detail__detail-name'>
                    location
                </p>

                <p className="ip-details__detail__detail-value">
                    {ipDetails !== null && `${ipDetails.location.city},${ipDetails.location.region}`}
                </p>
            </div>

            <div className="divider"></div>

            <div className="ip-details__detail">
                <p className='ip-details__detail__detail-name'>
                    timezone
                </p>

                <p className="ip-details__detail__detail-value">
                    {ipDetails !== null && ipDetails.location.timezone}
                </p>
            </div>

            <div className="divider"></div>


            <div className="ip-details__detail">
                <p className='ip-details__detail__detail-name'>
                    isp
                </p>

                <p className="ip-details__detail__detail-value">
                    {ipDetails !== null && ipDetails.isp}
                </p>
            </div>
        </article>
    )
}
