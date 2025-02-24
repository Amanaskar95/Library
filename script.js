document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Add Ebook Section
    const ebookSection = document.createElement("section");
    ebookSection.id = "ebook";
    ebookSection.innerHTML = `
        <h2>Ebook</h2>
        <p>Explore a vast collection of eBooks at <a href='https://ndl.iitkgp.ac.in/'>Indian Women's Library (Digital)
</a>.</p>
        <button id='clickMeButton'>Click Me</button>
    `;
    
    const aboutSection = document.getElementById("about");
    aboutSection.insertAdjacentElement("afterend", ebookSection);

    // Add Button Click Event to Open Digital Library in Same Tab
    document.getElementById("clickMeButton").addEventListener("click", function() {
        window.location.href = "https://ndl.iitkgp.ac.in/";
    });
});