import * as React from 'react';
import { RES_URL } from '../../../config';
import { LinkButton } from '../Button/Button';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <LinkButton href={"/#"}>
                    <div className="banner__wrapper--circle">
                        <img src={RES_URL + "img/test.jpg"} />
                        <p>
                            Home
                        </p>
                    </div>
                </LinkButton>
                <LinkButton href={"/#about"}>
                    <div className="banner__wrapper--circle">
                        <img src={RES_URL + "img/test.jpg"} />
                        <p>
                            About
                        </p>
                    </div>
                </LinkButton>
            </div>
        </div>
    )
}

export default Banner;