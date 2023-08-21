import { PropsWithChildren } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImages, faShirt } from '@fortawesome/free-solid-svg-icons';

// props
type Props = {};

// functions

export default function BottomNavbar({}: PropsWithChildren<Props>) {
    return (
        <nav className="level box is-mobile has-background-black-ter" style={{width: "100%", position: "fixed", bottom: "0", borderRadius: "0"}}>
            <p className="level-item has-text-centered">
                <a className="icon has-text-white is-size-5"><FontAwesomeIcon icon={faImages} /></a>
            </p>
            <p className="level-item has-text-centered">
                <a className="icon has-text-white is-size-5"><FontAwesomeIcon icon={faHouse} /></a>
            </p>
            <p className="level-item has-text-centered">
                <a className="icon has-text-white is-size-5"><FontAwesomeIcon icon={faShirt} /></a>
            </p>
        </nav>
    );
}