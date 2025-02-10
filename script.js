//your JS code here. If required.
 // Select Elements
        const openModalBtn = document.getElementById("openModal");
        const modal = document.getElementById("modal");
        const closeModalBtn = document.querySelector(".close-modal");

        // Open Modal
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        // Close Modal when clicking the close button
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close Modal when clicking outside the modal content
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });