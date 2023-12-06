import './../css/Header.css';
import ForwardIcon from './../images/icon-arrow.svg';
import { apiKey } from '../lib/apiKey';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { getIPLocationDetails } from '../lib/getIPLocationDetails';

export const Header = ({ setIPDetails }) => {

    const ipOrDomainInput = useRef();
    const [errorMessage, setErrorMessage] = useState({ state: false, message: '' });

    useEffect(() => {
        getIPLocationDetails('8.8.8.8', null, setIPDetails, null);
    }, [])


    const searchIP = () => {

        errorMessage === true && setErrorMessage(false);
        const isDomain = Number(ipOrDomainInput.current.value.split('')[0]) !== NaN ? true : false;


        if (ipOrDomainInput.current.value.length === 0) {
            setErrorMessage({
                state: true,
                message: 'Please enter correct ip or domain'
            })
            return
        }

        if (isDomain && ipOrDomainInput.current.value.includes('.') === false) {
            setErrorMessage({
                state: true,
                message: 'Please enter correct ip or domain'
            })
            return
        }

        getIPLocationDetails(
            isDomain ? null : ipOrDomainInput.current.value,
            isDomain ? ipOrDomainInput.current.value : null,
            setIPDetails,
            setErrorMessage
        )
    }


    return (

        <header>

            <h2 className="header__heading">
                IP address tracker
            </h2>

            {
                errorMessage.state &&
                <p style={{ color: 'red', fontSize: '.9rem', fontWeight: '800', textAlign: 'center', marginBottom: '.5em' }}>
                    {errorMessage.message}
                </p>
            }

            <section className="ip-search">



                <div className="ip-input-container">
                    <input
                        ref={ipOrDomainInput}
                        type="text"
                        placeholder='Search for any IP address or domain'
                    />
                </div>


                <button className="search-ip-btn" onClick={searchIP}>
                    <img src={ForwardIcon} alt="Foward Arrow Icon" />
                </button>

            </section>

        </header>
    )
}
