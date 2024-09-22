
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelector('.slides');
        const slideCount = document.querySelectorAll('.slide').length;
        let index = 0;
        const intervalTime = 5000; // 5 seconds

        function showSlide(n) {
            if (n >= slideCount) index = 0;
            else if (n < 0) index = slideCount - 1;
            else index = n;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        document.querySelector('.next').addEventListener('click', function() {
            showSlide(index + 1);
        });

        document.querySelector('.prev').addEventListener('click', function() {
            showSlide(index - 1);
        });

        // Automatic slide rotation
        setInterval(function() {
            showSlide(index + 1);
        }, intervalTime);

        // Ensure the slider displays the first slide initially
        showSlide(index);
    });
