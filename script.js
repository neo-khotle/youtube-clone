(function () {
    'use strict';

    const DESKTOP_MIN = 1024;
    const INITIAL_BATCH = 9;
    const BATCH_SIZE = 3;

    const mainbody = document.querySelector('.mainbody');
    const menuBtn = document.querySelector('.menu-btn');
    const videosContainer = document.querySelector('.videos');
    const videoGrid = document.querySelector('.video-grid');
    const loadingIndicator = document.querySelector('.loading-indicator');
    const scrollSentinel = document.querySelector('.scroll-sentinel');

    function isDesktop() {
        return window.innerWidth >= DESKTOP_MIN;
    }

    if (menuBtn && mainbody) {
        menuBtn.addEventListener('click', function () {
            if (!isDesktop()) return;

            const collapsed = mainbody.classList.toggle('sidebar-collapsed');
            menuBtn.setAttribute('aria-expanded', String(!collapsed));
        });

        window.addEventListener('resize', function () {
            if (!isDesktop()) {
                mainbody.classList.remove('sidebar-collapsed');
                menuBtn.setAttribute('aria-expanded', 'true');
            }
        });
    }

    if (!videoGrid || !scrollSentinel || !videosContainer) return;

    const allVideos = Array.from(videoGrid.querySelectorAll('.video'));
    let loadedCount = 0;
    let isLoading = false;

    function showVideos(fromIndex, count) {
        const end = Math.min(fromIndex + count, allVideos.length);
        for (let i = fromIndex; i < end; i++) {
            allVideos[i].classList.remove('video-hidden');
        }
        return end;
    }

    function initVideos() {
        allVideos.forEach(function (video) {
            video.classList.add('video-hidden');
        });
        loadedCount = showVideos(0, INITIAL_BATCH);
    }

    function loadNextBatch() {
        if (isLoading || loadedCount >= allVideos.length) return;

        isLoading = true;
        if (loadingIndicator) loadingIndicator.hidden = false;

        window.setTimeout(function () {
            loadedCount = showVideos(loadedCount, BATCH_SIZE);
            isLoading = false;
            if (loadingIndicator) loadingIndicator.hidden = true;

            if (loadedCount >= allVideos.length) {
                observer.unobserve(scrollSentinel);
            }
        }, 400);
    }

    initVideos();

    const observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                loadNextBatch();
            }
        },
        { root: videosContainer, rootMargin: '200px', threshold: 0 }
    );

    observer.observe(scrollSentinel);
})();
