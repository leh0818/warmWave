import { useEffect } from "react";

function Preloader() {
    useEffect(() => {
        const cover = document.querySelector('.cover');

        if (cover) {
            cover.parallax({
                imageSrc: cover.dataset.image,
                zIndex: '1'
            });
        }

        // preloader 애니메이션 적용
        const preloader = document.getElementById('js-preloader');
        preloader.classList.add('loaded');

        // preloader 애니메이션 종료 후 숨김
        const preloaderElement = document.getElementById('js-preloader');
        preloaderElement.animate(
            { opacity: '0' },
            600,
            () => {
                setTimeout(() => {
                    preloaderElement.style.visibility = 'hidden';
                    preloaderElement.style.display = 'none';
                }, 300);
            }
        );
    }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행되도록 함

    return (
        <div id="js-preloader" className="js-preloader">
            <div className="preloader-inner">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Preloader;