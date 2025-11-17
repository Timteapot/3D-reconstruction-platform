import "./index.scss"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import bgurl from "../../assets/svgData/icon_background.dataurl?raw";

const Home = () => {
  const navigate = useNavigate();
  // const [bgContent, setBgContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isToggleHovered, setIsToggleHovered] = useState(false);

  const handleClick = () => {
    setLoading(true);
    navigate("/upload");
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    // 模拟加载完成，可以在这里添加实际的加载逻辑
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 2秒后结束加载，你可以根据实际加载时间调整

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && bgurl) {
      // 在加载完成后启动动画
      const timer = setTimeout(() => {
        setAnimationStarted(true);
      }, 100); // 短暂延迟确保元素已渲染
      return () => clearTimeout(timer);
    }
  }, [loading, bgurl]);

  // 如果还在加载，只显示Spin
  if (loading) {
    return (
      <div className="container">
        <Spin size="large" />
      </div>
    );
  }

  return <div className="container">
      {bgurl && (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="560" height="560" viewBox="0 0 560 560">
            <image width="560" height="560" xlinkHref={bgurl} className={`normal ${animationStarted ? 'animate-to-position' : 'small'}`} />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" className={`bg-svg-line-icon vertex1 ${animationStarted ? 'animate-to-position' : 'at-center'}`}>

            <g transform="translate(-413 -229.5)">

              <line className="svg-line" x2="20" transform="translate(413.5 240)" />

              <line className="svg-line" x2="20" transform="translate(423.5 230) rotate(90)" />

            </g>

          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" className={`bg-svg-line-icon vertex2 ${animationStarted ? 'animate-to-position' : 'at-center'}`}>

            <g transform="translate(-413 -229.5)">

              <line className="svg-line" x2="20" transform="translate(413.5 240)" />

              <line className="svg-line" x2="20" transform="translate(423.5 230) rotate(90)" />

            </g>

          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" className={`bg-svg-line-icon vertex3 ${animationStarted ? 'animate-to-position' : 'at-center'}`}>

            <g transform="translate(-413 -229.5)">

              <line className="svg-line" x2="20" transform="translate(413.5 240)" />

              <line className="svg-line" x2="20" transform="translate(423.5 230) rotate(90)" />

            </g>

          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" className={`bg-svg-line-icon vertex4 ${animationStarted ? 'animate-to-position' : 'at-center'}`}>

            <g transform="translate(-413 -229.5)">

              <line className="svg-line" x2="20" transform="translate(413.5 240)" />

              <line className="svg-line" x2="20" transform="translate(423.5 230) rotate(90)" />

            </g>

          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" className={`bg-svg-line-icon vertex5 ${animationStarted ? 'animate-to-position' : 'at-center'}`}>

            <g transform="translate(-413 -229.5)">

              <line className="svg-line" x2="20" transform="translate(413.5 240)" />

              <line className="svg-line" x2="20" transform="translate(423.5 230) rotate(90)" />

            </g>

          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="235" viewBox="0 0 6 235" className="line-svg-line-icon bottom-line">
            <g transform="translate(-904 -660)">
              <line className="svg-line-a" y2="230" transform="translate(907 665)" />
              <circle className="svg-line-b" cx="3" cy="3" r="3" transform="translate(904 660)" />
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="235" viewBox="0 0 6 235" className="line-svg-line-icon top-line">
            <g transform="translate(-904 -660)">
              <line className="svg-line-a" y2="230" transform="translate(907 665)" />
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="205" viewBox="0 0 6 205" className="line-svg-line-icon bottom-line transform-rotate">
            <g transform="translate(-904 -660)">
              <line className="svg-line-a" y2="230" transform="translate(907 665)" />
            </g>
          </svg>
          <div className="content-container toggle" onMouseEnter={() => setIsToggleHovered(true)} onMouseLeave={() => setIsToggleHovered(false)}>

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="249" height="142" viewBox="0 0 249 142" className={`text-svg-line-icon ${isToggleHovered ? 'hidden' : ''}`}>

              <defs>

                <style>{`.a{fill:#fff;font-size:60px;font-family:CenturyGothic, Century Gothic;}.b{font - size:35px;}.c{filter:url(#a);}`}</style>

                <filter id="a" x="0" y="0" width="249" height="142" filterUnits="userSpaceOnUse">

                  {/* <feOffset dy="6" input="SourceAlpha" /> */}

                  <feGaussianBlur stdDeviation="4.5" result="b" />

                  <feFlood flood-opacity="0.161" />

                  <feComposite operator="in" in2="b" />

                  <feComposite in="SourceGraphic" />

                </filter>

              </defs>

              <g className="c" transform="matrix(1, 0, 0, 1, 0, 0)">

                <text className="a" transform="translate(124.5 65.5)">

                  <tspan x="-110.83" y="0">MVS 3D</tspan>

                  <tspan className="b" y="0"></tspan>

                  <tspan className="b"><tspan x="0" y="49" /></tspan>

                </text>

              </g>

            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="252" height="318" viewBox="0 0 252 318" className={`text-svg-line-icon-2 mt ${isToggleHovered ? 'hidden' : ''}`}>

              <defs>

                <style>{`.a1{fill:#fff;font-size:35px;font-family:SegoeUI, Segoe UI;}.b1{filter:url(#a);}`}</style>

                <filter id="a" x="0" y="0" width="252" height="318" filterUnits="userSpaceOnUse">

                  {/* <feOffset dy="3" input="SourceAlpha" /> */}

                  <feGaussianBlur stdDeviation="3" result="b" />

                  <feFlood flood-opacity="0.161" />

                  <feComposite operator="in" in2="b" />

                  <feComposite in="SourceGraphic" />

                </filter>

              </defs>

              <g className="b1" transform="matrix(1, 0, 0, 1, 0, 0)">

                <text className="a1" transform="translate(9 6)">

                  <tspan x="0" y="38">reconstruction</tspan>

                </text>

              </g>

            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="252" height="318" viewBox="0 0 252 318" className={`text-svg-line-icon-3 ${isToggleHovered ? 'visible' : ''}`} onClick={handleClick}>

              <defs>

                <style>{`.a2{fill:#fff;font-size:45px;font-family:YuGothicUI-Regular, Yu Gothic UI;}.b2{filter:url(#a);}`}</style>

                <filter id="a" x="0" y="0" width="252" height="318" filterUnits="userSpaceOnUse">

                  {/* <feOffset dy="3" input="SourceAlpha" /> */}

                  <feGaussianBlur stdDeviation="3" result="b" />

                  <feFlood flood-opacity="0.161" />

                  <feComposite operator="in" in2="b" />

                  <feComposite in="SourceGraphic" />

                </filter>

              </defs>

              <g className="b2" transform="matrix(1, 0, 0, 1, 0, 0)">

                <text className="a2" transform="translate(9 6)">

                  <tspan x="27" y="49">开始重建</tspan>

                </text>

              </g>

            </svg>

          </div>
        </>
      )}
    </div>;
};

export default Home;