import React from 'react';

var kirigami = (<svg className="kirigami-logo" width="940" height="496" viewBox="0 0 940 496" xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink" transform="scale(.9,.9), translate(-50, -30)"className="kirigami-logo">
    <defs>
        <polygon id="path-1" points="0 0 943.5 0 471.75 258.621329 0 498" />
    </defs>
    <g id="Welcome" fill="none" fillRule="evenodd">
        <g id="Desktop-HD" transform="translate(0 -2188)">
            <g id="5-Kirigami" transform="translate(-9 2165)">
                <g id="Kirigami" transform="translate(5 23)">
                    <g id="Group-5">
                        <path d="M695.5,156.692085 L659.963046,175.651163 L666.75,135.495193 L638,107.056576 L677.731523,101.197899 L695.5,64.6627907 L713.268477,101.197899 L753,107.056576 L724.25,135.495193 L731.036954,175.651163 L695.5,156.692085 Z M696,152.409195 L726.901699,168.895349 L721,133.977114 L746,109.247882 L711.45085,104.153381 L696,72.3837209 L680.54915,104.153381 L646,109.247882 L671,133.977114 L665.098301,168.895349 L696,152.409195 Z"
                        id="Combined-Shape" stroke="#956565" strokeWidth="5" />
                        <mask id="mask-2" fill="#fff">
                            <use xlinkHref="#path-1" />
                        </mask>
                        <use id="Mask" fill="#956565" xlinkHref="#path-1" />
                        <path d="M695.5,156.692085 L659.963046,175.651163 L666.75,135.495193 L638,107.056576 L677.731523,101.197899 L695.5,64.6627907 L713.268477,101.197899 L753,107.056576 L724.25,135.495193 L731.036954,175.651163 L695.5,156.692085 Z M696,152.409195 L726.901699,168.895349 L721,133.977114 L746,109.247882 L711.45085,104.153381 L696,72.3837209 L680.54915,104.153381 L646,109.247882 L671,133.977114 L665.098301,168.895349 L696,152.409195 Z"
                        id="Combined-Shape" stroke="#FFFEEC" strokeWidth="5" mask="url(#mask-2)"
                        />
                        <text id="KIRIGAMI" mask="url(#mask-2)" fontFamily="Advent Pro"
                        fontSize="144" fontWeight="300" fill="#FFFEEC">
                            <tspan x="53.016" y="181.465">KIRIGAMI</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>)

const Kirigami = () => {
        return (
            <div className="kirigami mainelement">
                {kirigami}
                
                <div className="kirigami-text">
                    <h1>JAC's Idol Group</h1>
                    <p>Beginner-friendly dance and cosplay!</p>
                    <p>Weekly Practice and Quarterly Performances</p>
                    <p>Check us out on <a href="https://www.facebook.com/KiRiGaMiDancers/">Facebook</a>!</p>
                </div> 
            </div>
        );
}
export default Kirigami;