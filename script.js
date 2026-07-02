// Active Navbar on Scroll

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
console.log("Script Connected Successfully");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
(function () {
    emailjs.init("ZZ_-MfJc0Mk5YI8xG");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector("button");

    button.innerHTML = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "service_ubcaear",
        "template_527h3ch",
        this
    )

    .then(() => {

       Swal.fire({
    icon: "success",
    title: "Message Sent!",
    text: "Thank you for contacting me. I'll get back to you soon.",
    confirmButtonColor: "#39ff14",
    background: "#111",
    color: "#fff"
});

        form.reset();

        button.innerHTML = "Send Message";

        button.disabled = false;

    })

    .catch((error) => {

      Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Something went wrong. Please try again.",
    confirmButtonColor: "#ff3b3b",
    background: "#111",
    color: "#fff"
});

        console.log(error);

        button.innerHTML = "Send Message";

        button.disabled = false;

    });

});