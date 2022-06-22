import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

export default function Logo({ size }) {
    return (
        <StaticImage
            alt="NAU!"
            src="../images/isologotipo.svg"
            placeholder='tracedSVG'
            width={80}
        />
    )
}
