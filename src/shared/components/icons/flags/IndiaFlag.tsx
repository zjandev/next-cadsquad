import React from 'react'
import type { SVGProps } from 'react'

export function IndiaFlag(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={24}
            viewBox="0 0 640 480"
            {...props}
        >
            <path fill="#f93" d="M0 0h640v160H0z"></path>
            <path fill="#fff" d="M0 160h640v160H0z"></path>
            <path fill="#128807" d="M0 320h640v160H0z"></path>
            <g transform="matrix(3.2 0 0 3.2 320 240)">
                <circle r={20} fill="#008"></circle>
                <circle r={17.5} fill="#fff"></circle>
                <circle r={3.5} fill="#008"></circle>
                <g id="flagIn4x30">
                    <g id="flagIn4x31">
                        <g id="flagIn4x32">
                            <g id="flagIn4x33" fill="#008">
                                <circle
                                    r={0.9}
                                    transform="rotate(7.5 -8.8 133.5)"
                                ></circle>
                                <path d="M0 17.5L.6 7L0 2l-.6 5z"></path>
                            </g>
                            <use
                                width="100%"
                                height="100%"
                                href="#flagIn4x33"
                                transform="rotate(15)"
                            ></use>
                        </g>
                        <use
                            width="100%"
                            height="100%"
                            href="#flagIn4x32"
                            transform="rotate(30)"
                        ></use>
                    </g>
                    <use
                        width="100%"
                        height="100%"
                        href="#flagIn4x31"
                        transform="rotate(60)"
                    ></use>
                </g>
                <use
                    width="100%"
                    height="100%"
                    href="#flagIn4x30"
                    transform="rotate(120)"
                ></use>
                <use
                    width="100%"
                    height="100%"
                    href="#flagIn4x30"
                    transform="rotate(-120)"
                ></use>
            </g>
        </svg>
    )
}
