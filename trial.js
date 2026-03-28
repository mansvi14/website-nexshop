document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const avatarBody = document.getElementById("avatarBody");
    const avatarLeftLeg = document.getElementById("avatarLeftLeg");
    const avatarRightLeg = document.getElementById("avatarRightLeg");
    const clothingItems = document.querySelectorAll(".clothing-item");
    const resetBtn = document.getElementById("resetBtn");
    const saveBtn = document.getElementById("saveBtn");

    // State
    const defaultBodyColor = "#e2e8f0";
    const defaultLegColor = "#e2e8f0";

    // Application Logic
    clothingItems.forEach(item => {
        item.addEventListener("click", () => {
            const type = item.getAttribute("data-type");
            const color = item.getAttribute("data-color");
            const style = item.getAttribute("data-style");

            // Apply clothing based on type
            if (type === "top") {
                // Apply Top
                avatarBody.style.backgroundColor = color;
                // If wearing a dress previously, reset legs
                if(avatarBody.style.height === "350px") {
                    avatarBody.style.height = "250px"; 
                    avatarBody.style.borderRadius = "30px 30px 10px 10px";
                }
            } else if (type === "bottom") {
                // Apply Bottom
                avatarLeftLeg.style.backgroundColor = color;
                avatarRightLeg.style.backgroundColor = color;
                // Reset dress if on
                if(avatarBody.style.height === "350px") {
                    avatarBody.style.height = "250px";
                    avatarBody.style.borderRadius = "30px 30px 10px 10px";
                    avatarBody.style.backgroundColor = defaultBodyColor;
                }
            } else if (type === "full") {
                // Apply Full Dress
                avatarBody.style.backgroundColor = color;
                // Extend body down to cover legs
                avatarBody.style.height = "350px";
                avatarBody.style.borderRadius = "40px 40px 20px 20px";
                // Color legs to dark if needed or leave them
                avatarLeftLeg.style.backgroundColor = defaultLegColor;
                avatarRightLeg.style.backgroundColor = defaultLegColor;
            }

            // Simple visual feedback on button click inside wardrobe
            item.style.transform = "scale(0.95)";
            setTimeout(() => {
                item.style.transform = "translateY(-5px)";
            }, 150);
        });
    });

    // Reset Logic
    resetBtn.addEventListener("click", () => {
        avatarBody.style.backgroundColor = defaultBodyColor;
        avatarBody.style.height = "250px";
        avatarBody.style.borderRadius = "30px 30px 10px 10px";
        
        avatarLeftLeg.style.backgroundColor = defaultLegColor;
        avatarRightLeg.style.backgroundColor = defaultLegColor;
    });

    // Save Logic (Mockup)
    saveBtn.addEventListener("click", () => {
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = "<i class='bx bx-check'></i> Saved to Gallery";
        saveBtn.style.backgroundColor = "#10b981"; // Green
        
        setTimeout(() => {
            saveBtn.innerHTML = originalText;
            saveBtn.style.backgroundColor = "var(--primary-color)";
        }, 2000);
    });

    // Upload Logic
    const photoUpload = document.getElementById("photoUpload");
    const mannequin = document.getElementById("mannequin");
    const mannequinHead = document.querySelector(".mannequin-head");

    photoUpload.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                // Set the uploaded image as the background of the mannequin container
                mannequin.style.backgroundImage = 'url(' + event.target.result + ')';
                // Hide the default grey head so the user's face is visible
                mannequinHead.style.backgroundColor = 'transparent';
                mannequinHead.style.boxShadow = 'none';
            };
            reader.readAsDataURL(file);
        }
    });
});
