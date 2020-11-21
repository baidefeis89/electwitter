import React from 'react';

import styled from '@emotion/styled';
import ILiterals from '../../../i18n';
import NotFoundSVG from './notFoundSVG';
import { Subtitle } from './textComponents';

const Credits = styled(Subtitle)`
  font-size: 10px
`;

interface IUserNotFound {
  literals: ILiterals
}
const UserNotFound = ({literals}: IUserNotFound) => {
  return (
    <NotFoundContainer>
      <NotFoundSVG />
      <Subtitle>
        {literals.USER_NOT_FOUND_TXT} <br />
      </Subtitle>
      <Credits>
        {literals.IMAGE_FROM_LBL} <a href="https://codepen.io/POWERGLOVE/pen/npDyq">https://codepen.io/POWERGLOVE/pen/npDyq</a>
      </Credits>
    </NotFoundContainer>
  )
}

export default UserNotFound;

const NotFoundContainer = styled('div')`
max-width: 100%;
text-align: center;
.me404 {
  .size(1000,480);
  position: relative;
  top: 50%;
  left: 50px;
}

.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#E8EBED;}
	.st1{fill:#FFFFFF;stroke:#89949B;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#DBDFE1;}
	.st3{fill:#FFFFFF;}
	
		.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#E8EBED;stroke:#89949B;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	
		.st5{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;stroke:#89949B;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	
		.st6{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#89949B;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	
		.st7{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#89949B;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	
		.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;stroke:#89949B;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st9{fill:#89949B;}
	.st10{fill-rule:evenodd;clip-rule:evenodd;fill:#89949B;}
	
		.st11{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#89949B;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st12{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
	
		.st13{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;stroke:#8894A0;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	
		.st14{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#89949B;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st15{fill:none;stroke:#89949B;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}


#cloud {
 .animation(cloud 9s infinite ease-in-out);
}
.keyframes(~'cloud, 0% { opacity: 0.3; left: 160px; transform:skewX(20deg); } 65% { opacity: 1; left: 114px; transform:skewX(0deg); } 100% { opacity: 0.3; left: 160px; transform:skewX(20deg); } ');

#moon {
  transform-origin: 640px 81px;
 .animation(moon-float 6s infinite ease-in-out);
}

.keyframes(~'moon-float, 0% { transform: translate(0, 20px) scale(1.1); } 65% { transform: translate(0, 0px) scale(1.0); } 100% { transform: translate(0, 20px) scale(1.1); } ');


#monkey-eye-l {
  transform-origin: 191px 257px;
 .animation(blink-l 12s infinite ease-in-out);
}

#monkey-eye-r {
  transform-origin: 205px 256px;
.animation(blink-r 12s infinite ease-in-out);
}

#monkey-arm {
  transform-origin: 155px 298px;
  .animation(monkey-arm 4s infinite ease-in-out);
}


.keyframes(~'monkey-arm, 0% { transform: rotateZ(-10deg);  } 50% { transform: rotateZ(20deg); } 100% { transform: rotateZ(-10deg); } ');

.keyframes(~'blink-l, 0% { transform: rotateX(0deg); } 2% { transform: rotateX(80deg); } 4%,20% { transform: rotateX(0deg); } 22% { transform: rotateX(80deg); } 24%,30% { transform: rotateX(0deg); } 32% { transform: rotateX(80deg); } 34%,70% { transform: rotateX(0deg); } 72% { transform: rotateX(80deg); } 74%,100% { transform: rotateX(0deg); }');

.keyframes(~'blink-r, 0% { transform: rotateX(0deg); } 2% { transform: rotateX(80deg); } 4%,30% { transform: rotateX(0deg); } 32% { transform: rotateX(80deg); } 34%,50% { transform: rotateX(0deg); } 52% { transform: rotateX(80deg); } 54%,100% { transform: rotateX(0deg); } ');



#star1 {
  transform-origin: 643px 338px;
 .animation(star1 12s infinite linear, star1-fade 12s infinite ease-in-out);
}
#star2 {
  transform-origin: 489px 82px;
 .animation(star2 12s infinite linear, star2-fade 12s infinite ease-in-out);
}
#star3 {
  transform-origin: 316px 344px;
 .animation(star3 12s infinite linear, star3-fade 12s infinite ease-in-out);
}
#star4 {
  transform-origin: 126px 182px;
 .animation(star4 12s infinite linear, star4-fade 12s infinite ease-in-out);
}

.keyframes(~'star1, 0% { transform: scale(.5)  skewX(15deg) rotateZ(0deg); } 15% { transform: scale(1) skewX(0deg) rotateZ(360deg); } 30%,100% {  transform: scale(.5) skewX(15deg) rotateZ(720deg); } ');
.keyframes(~'star2, 0%,15% { transform: scale(.5) skewX(15deg) rotateZ(0deg); } 30% { transform: scale(1) skewX(0deg) rotateZ(360deg); } 45%,100% {  transform: scale(.5) skewX(15deg) rotateZ(720deg); } ');
.keyframes(~'star3, 0%,30% { transform: scale(.5) skewX(15deg) rotateZ(0deg); } 45% { transform: scale(1) skewX(0deg) rotateZ(360deg); } 60%,100% {  transform: scale(.5) skewX(15deg) rotateZ(720deg); } ');
.keyframes(~'star4, 0%,45% { transform: scale(.5) skewX(15deg) rotateZ(0deg); } 60% { transform: scale(1) skewX(0deg) rotateZ(360deg); } 75%,100% {  transform: scale(.5) skewX(15deg) rotateZ(720deg); } ');

.keyframes(~'star1-fade, 0% { opacity: 0;} 15% { opacity: 1; } 30%,100% { opacity: 0; } ');
.keyframes(~'star2-fade, 0%,15% { opacity: 0;} 30% { opacity: 1; } 45%,100% { opacity: 0; } ');
.keyframes(~'star3-fade, 0%,30% { opacity: 0;} 45% { opacity: 1; } 60%,100% { opacity: 0; } ');
.keyframes(~'star4-fade, 0%,45% { opacity: 0;} 60% { opacity: 1; } 75%,100% { opacity: 0; } ');

#sword-path {
  transform-origin: 458px 206px;
  .animation(tetris-float 3s infinite ease-in-out);

  //.animation(sword 3s infinite ease-out);
}


#sword {
  transform-origin: 458px 206px;

  .animation(sword 4s infinite ease-out);
}

.keyframes(~'sword, 0%,15% { transform:rotate(-40deg); } 87% { transform:rotate(50deg);  } 100% { transform:rotate(-40deg); } ');

#tetris-path {
  transform-origin: 538px 374px;
  .animation(tetris-float 5s infinite ease-in-out);
//.animation(rotate 10s steps(1) infinite alternate); //steps(1)
} 

#tetris {
  transform-origin: 538px 374px;
  //.animation(tetris-float 5s infinite ease-in-out);
.animation(rotate 10s steps(1) infinite alternate); //steps(1)
} 

.keyframes(~'rotate, 0% { transform: rotateZ(0deg); } 25% { transform: rotateZ(90deg); } 50% { transform: rotateZ(180deg); } 75% { transform: rotateZ(270deg); } 100% { transform: rotateZ(360deg); }');
.keyframes(~'tetris-float, 0% { transform: translate(0px, 0px) scale(0.90)  } 65% { transform: translate(0px, 30px) scale(1.0); } 100% { transform: translate(0px, 0px) scale(0.90); }');

#triforce {
  transform-origin: 175px 91px;
 .animation(triforce-float 3s infinite ease-in-out);
}

.keyframes(~'triforce-float, 0% { transform: translate(0px, 0px) scale(0.90)  } 65% { transform: translate(0px, 30px) scale(1.0); } 100% { transform: translate(0px, 0px) scale(0.90); } ');
`;

