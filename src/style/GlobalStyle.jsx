import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    
    background: rgb(81 56 99 / 81%);
    background: linear-gradient(337deg,rgb(63 21 58),transparent);
    }

    .imglogo{
      position: relative;
      width: 100px;
      border: 0px solid white;
      margin: 30px 0 50px 0;
    }
    
    .imglogo img{
      width: 100%;
    }
.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 15px 0;
  ${'' /* border: 2px solid white; */}
}

.timeline::after {
  content: '';
  position: absolute;
  width: 20px;
  background: #006E51;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
  border-radius: 10px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
  ${'' /* border: 2px solid green; */}
}

.container.left {
  left: 0;
}

.container.right {
  left: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 26px;
  height: 26px;
  top: calc(50% - 15px);
  right: -22px;
  background: #ffffff;
  border: 2px solid #006E51;
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -4px;
}

.container::before {
  content: '';
  position: absolute;
  width: 55px;
  height: 4px;
  top: calc(50% - 3px);
  right: 3px;
  background: #006E51;
  z-index: 1;
}

.container.right::before {
  left: 3px;
}

.container .date {
  position: absolute;
  display: inline-block;
  top: calc(50% - 8px);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #fffeee;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.container.left .date {
  right: -75px;
}

.container.right .date {
  left: -75px;
}

.container .icon {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 9px 0;
  top: calc(50% - 20px);
  background: radial-gradient(black, transparent);
  border: 2px solid #006E51;
  border-radius: 40px;
  text-align: center;
  font-size: 18px;
  color: #fffeee;
  z-index: 1;
}

.container.left .icon {
  right: 56px;
}

.container.right .icon {
  left: 56px;
}

.container .content {
  padding: 30px 90px 30px 30px;
  background: #c7047c;
  /* background: #F6D155; */
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h2 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #fffeee;
}

.container .content p {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

.footCopyright{
  width: 95%;
  margin: 0 auto;
  margin-top: 11em;
  padding: 20px 5px;
  background: rgba(190,190,190,9%);
  border-radius: 10px 10px 0 0;
}
.footCopyright p{
  text-align: center;
  ${'' /* padding: 25px 0; */}
  }
  .footCopyright p a{
    text-decoration: none;
  }


  @media (max-width: 767.98px) {
  .timeline::after {
    left: 90px;
  }

  .container {
    width: 100%;
    padding-left: 120px;
    padding-right: 30px;
  }

  .container.right {
    left: 0%;
  }

  .container.left::after, 
  .container.right::after {
    left: 82px;
  }

  .container.left::before,
  .container.right::before {
    left: 100px;
    border-color: transparent #006E51 transparent transparent;
  }

  .container.left .date,
  .container.right .date {
    right: auto;
    left: 15px;
  }

  .container.left .icon,
  .container.right .icon {
    right: auto;
    left: 146px;
  }

  .container.left .content,
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
  }
}
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
