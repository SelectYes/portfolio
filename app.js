document.addEventListener("DOMContentLoaded", () => {

    // INTERSECTION OBSERVER CONFIG FOR PAGE SECTIONS

    let options = {
        root: null, 
        rootMargin: "-125px 0px",
        threshold: 0.05

    };

    let observer = new IntersectionObserver(isTouching, options);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
        console.log('watching sections');
    });

    // INTERSECTION OBSERVER CONFIG FOR NAVBAR

    const header = document.querySelector('.header');
    const navBar = document.querySelector('.nav-container');

    let navOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.45
    }

    let navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navBar.classList.add('nav-active');
            } else {
                navBar.classList.remove('nav-active');
            }
        })
    }, navOptions)

    navObserver.observe(header);
    console.log('watching header');
});

const isTouching = (entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
        }
    })
}