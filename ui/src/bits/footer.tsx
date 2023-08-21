import { PropsWithChildren } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// props
type Props = {};

// functions

export default function Footer({}: PropsWithChildren<Props>) {
    return (
        <footer className="footer has-background-black-ter p-6">
            <div className="container block">
                <div className="columns is-centered">
                    <div className="column has-text-centered is-1-desktop">
                        <FontAwesomeIcon className="icon is-medium has-text-white" icon={faFacebookF} />
                    </div>
                    <div className="column has-text-centered is-1-desktop">
                        <FontAwesomeIcon className="icon is-medium has-text-white" icon={faTwitter} />
                    </div>
                    <div className="column has-text-centered is-1-desktop">
                        <FontAwesomeIcon className="icon is-medium has-text-white" icon={faInstagram} />
                    </div>
                </div>
            </div>

            <div className="content has-text-centered has-text-white">
                <p>Bookworm Copyright © 2023 - All rights reserved</p>
            </div>
        </footer>
    );
}