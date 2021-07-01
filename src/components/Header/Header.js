import React from 'react';
import { Link } from '@reach/router';

//Somehow extend Fill-2 across screen
const Header = () => {
  return (
    <Link to="/">
      <div id="logo">
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 1030 917"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="V1-Fall-2020" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Home/Work" transform="translate(-1628.000000, -324.000000)">
              <g id="The-G" transform="translate(1628.000000, 324.000000)">
                <text
                  id="G"
                  fontFamily="Futura-Medium, Futura"
                  fontSize="690.5783"
                  fontWeight="400"
                  fill="#F7F4F3"
                >
                  <tspan x="0" y="717">
                    G
                  </tspan>
                </text>
                <polygon
                  // ref={bar}
                  id="Fill-2"
                  fill="#F7F4F3"
                  points="519 520 1030 520 1030 446 519 446"
                />
                <polygon
                  // ref={vertical}
                  id="Fill-3"
                  fill="#191E27"
                  points="85 679 94 679 94 218 85 218"
                />
                <polygon
                  // ref={(e) => (horizontal.current[0] = e)}
                  id="Fill-4"
                  fill="#191E27"
                  points="87 483 497 483 497 474 87 474"
                />
                <polygon
                  // ref={(e) => (horizontal.current[1] = e)}
                  id="Fill-5"
                  fill="#191E27"
                  points="86 222 496 222 496 213 86 213"
                />
                <polygon
                  // ref={(e) => (horizontal.current[2] = e)}
                  id="Fill-6"
                  fill="#191E27"
                  points="86 684 496 684 496 675 86 675"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </Link>
  );
};

export default Header;
