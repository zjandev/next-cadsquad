import React from 'react'
import type { SVGProps } from 'react'

export function FabCall(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            {...props}
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={4}
            >
                <path
                    strokeLinecap="round"
                    d="M41.78 20.607a13.1 13.1 0 0 0-.25-5.102a12.94 12.94 0 0 0-3.415-6.018a12.94 12.94 0 0 0-6.018-3.416a13.1 13.1 0 0 0-5.102-.249m7.195 13.982a5.99 5.99 0 0 0-1.692-5.132a5.99 5.99 0 0 0-5.132-1.692"
                ></path>
                <path
                    fill="currentColor"
                    d="M14.376 8.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.541 6.37c2.859 2.858 6.359 3.53 6.359 3.53l4.712-2.357a2 2 0 0 1 1.867.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.848 3.623c-5.028-1.696-12.832-4.927-17.78-9.873c-4.946-4.947-8.176-12.752-9.873-17.78c-.826-2.448 1.04-4.848 3.624-4.848z"
                ></path>
            </g>
        </svg>
    )
}
