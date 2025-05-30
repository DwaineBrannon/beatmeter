import React, { useEffect  } from 'react';
import { AdContainer } from './AdsComponents.styles';

const AdsComponent = (props) => {
    const { dataAdSlot } = props;  

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        // eslint-disable-next-line no-unused-vars
        catch (e) { /* empty */ }
    },[]);

    return (
        <>
            <AdContainer
                className="adsbygoogle"
                data-ad-client="ca-pub-1938859389381783"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </>
    );
};

export default AdsComponent;