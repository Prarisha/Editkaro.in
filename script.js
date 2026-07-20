document.addEventListener("DOMContentLoaded", () => {
    // PASTE YOUR COPIED GOOGLE APPS SCRIPT WEB APP URL HERE:
    const webAppUrl = "https://script.google.com/macros/s/AKfycbzi5YMx-zWhV0LTObbFez5Xd-49sF-17uoUMUVTlRcno6sALtQhRzPQl8tCFtHDMam1/exec";

    const track = document.getElementById("streamTrack");
    const darkZone = document.getElementById("revolution");
    const gatewayGrid = document.getElementById("gatewayGrid");
    const renderStageVault = document.getElementById("renderStageVault");
    const stageGrid = document.getElementById("stageGrid");
    const stageHeading = document.getElementById("stageHeading");
    const backToGateway = document.getElementById("backToGateway");
    
    const lightbox = document.getElementById("videoLightbox");
    const lightboxVideo = document.getElementById("lightboxCoreVideo");
    const closeLightbox = document.querySelector(".lightbox-close-trigger");
    const onboardingForm = document.getElementById("projectContactForm");
    const emailCollectorForm = document.getElementById("homeEmailCollector");
    const metricNumbers = document.querySelectorAll(".metric-num");

    // All 9 Client Requested Project Video Segments Mapped Out
    const mediaDatabase = {
        "short-form": [
            { title: "SHORT FORM FORMAT V1", desc: "High-retention rapid edit cuts.", src: "assets/100176-video-720 (1).mp4" },
            { title: "SHORT FORM FORMAT V2", desc: "Algorithmic timing optimization block.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" }
        ],
        "long-form": [
            { title: "LONG FORM TIMELINE A", desc: "Pacing variations for educational series.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" },
            { title: "LONG FORM TIMELINE B", desc: "Multi-layered sound layout pacing.", src: "assets/100176-video-720 (1).mp4" }
        ],
        "gaming-videos": [
            { title: "FPS HIGHLIGHT CUT", desc: "Velocity curves and frame blending.", src: "assets/100176-video-720 (1).mp4" },
            { title: "STREAM WRAP SYNC", desc: "Audio cue threshold accentuation.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" }
        ],
        "football-edits": [
            { title: "MATCH DAY MOTION", desc: "Dynamic blur motion camera work.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" },
            { title: "STADIUM ENERGY CUT", desc: "Bass drops aligned with action frames.", src: "assets/100176-video-720(1).mp4" }
        ],
        "ecommerce-ads": [
            { title: "ECOM CONVERSION AD V1", desc: "First 3-seconds critical hook builder.", src: "assets/100176-video-720 (1).mp4" },
            { title: "PRODUCT DISRUPT AD V2", desc: "Direct response layout optimized for conversions.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" }
        ],
        "documentary-style": [
            { title: "CINEMATIC DOC ARCHIVE", desc: "Deep audio scoring and tone grading.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" },
            { title: "HISTORICAL STYLE TRACK", desc: "Advanced look-up table correction sets.", src: "assets/100176-video-720 (1).mp4" }
        ],
        "color-grading": [
            { title: "LOG TRANSFORMATION PROFILE", desc: "Cinematic color space transformations.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" },
            { title: "MOOD SHIFT GRADING CHANNELS", desc: "Custom node mapping configuration sets.", src: "assets/100176-video-720 (1).mp4" }
        ],
        "anime-videos": [
            { title: "AMV KINETIC GLITCH FX", desc: "Twixor frame velocity curves.", src: "assets/100176-video-720(1).mp4" },
            { title: "BEAT SYNC SHADER WAVE", desc: "Heavy render graphic displacement mapping.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" }
        ],
        "ads": [
            { title: "B2B BRAND PROMO AD", desc: "Corporate scaling marketing frameworks.", src: "assets/mixkit-waterfall-in-forest-2213-hd-ready.mp4" },
            { title: "CREATOR MERCH LAUNCH AD", desc: "High engagement pacing design templates.", src: "assets/100176-video-720 (1).mp4" }
        ]
    };
// Day to Night Inversion and Desktop Horizontal Translation Parallax System
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        const darkZoneTop = darkZone.offsetTop;
        const darkZoneHeight = darkZone.offsetHeight;
        const windowHeight = window.innerHeight;

        // Day/Night state toggle logic
        if (scrolled + windowHeight / 2 >= darkZoneTop && scrolled <= darkZoneTop + darkZoneHeight) {
            document.body.classList.add("dark-phase-active");
        } else {
            document.body.classList.remove("dark-phase-active");
        }

        // Horizontal shifting runs smoothly ONLY on wider viewports
        if (window.innerWidth > 768) {
            const scrollDeltaWithinZone = scrolled - darkZoneTop;
            const shiftX = scrollDeltaWithinZone * -0.4;
            track.style.transform = `translateX(${shiftX}px)`;
        } else {
            track.style.transform = "none";
        }
    });

    // Mobile Track Slide Button Control Pipeline Engine
    const trackViewport = document.querySelector(".stream-track-viewport");
    const prevBtn = document.getElementById("prevSlideBtn");
    const nextBtn = document.getElementById("nextSlideBtn");

    if (prevBtn && nextBtn && trackViewport) {
        const slideAmount = 290; // Sets shifting calculation width bounds

        nextBtn.addEventListener("click", () => {
            trackViewport.scrollBy({ left: slideAmount, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", () => {
            trackViewport.scrollBy({ left: -slideAmount, behavior: "smooth" });
        });
    }

    // Stat Counters Intersections Trigger Module
    const metricObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNum = entry.target;
                const endValue = parseInt(targetNum.getAttribute("data-val"));
                let startValue = 0;
                let duration = Math.floor(2000 / endValue);
                
                let counterInterval = setInterval(() => {
                    startValue += 1;
                    targetNum.innerText = startValue;
                    if (startValue === endValue) clearInterval(counterInterval);
                }, duration);
                observer.unobserve(targetNum);
            }
        });
    }, { threshold: 0.5 });
    metricNumbers.forEach(num => metricObserver.observe(num));

    // Dynamic Archive Slabs Engine Core Handler Loop
    document.querySelectorAll(".gateway-card").forEach(card => {
        card.addEventListener("click", () => {
            const targetCategory = card.getAttribute("data-target");
            const dataPool = mediaDatabase[targetCategory];

            if (!dataPool) return;

            stageHeading.innerText = targetCategory.replace("-", " ").toUpperCase();
            stageGrid.innerHTML = "";

            dataPool.forEach(item => {
                const cardTemplate = document.createElement("div");
                cardTemplate.className = "grid-item-card film-sprocket-frame";
                cardTemplate.innerHTML = `
                    <div class="video-container-box"><video loop muted playsinline src="${item.src}"></video></div>
                    <div class="card-meta-details"><h3>${item.title}</h3><p>${item.desc}</p></div>
                `;
                stageGrid.appendChild(cardTemplate);
            });

            bindDynamicVideoControls();
            renderStageVault.classList.remove("hidden");
            setTimeout(() => { renderStageVault.scrollIntoView({ behavior: "smooth", block: "start" }); }, 50);
        });
    });

    backToGateway.addEventListener("click", () => {
        renderStageVault.classList.add("hidden");
        gatewayGrid.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    function bindDynamicVideoControls() {
        document.querySelectorAll(".grid-item-card").forEach(card => {
            const video = card.querySelector("video");
            const box = card.querySelector(".video-container-box");
            box.addEventListener("mouseenter", () => { video.play().catch(() => {}); });
            box.addEventListener("mouseleave", () => { video.pause(); video.currentTime = 0; });
            box.addEventListener("click", () => { lightboxVideo.src = video.src; lightbox.style.display = "flex"; lightboxVideo.play(); });
        });
    }

    closeLightbox.addEventListener("click", () => { lightbox.style.display = "none"; lightboxVideo.pause(); lightboxVideo.src = ""; });

    // Upgraded Feature 1 (Home Page Email Collector Form Submission Engine)
        // Upgraded Feature 1 (Home Page Email Collector Form Submission Engine)
    emailCollectorForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("collectorEmail");
        const submitButton = emailCollectorForm.querySelector(".collector-submit-btn");
        
        emailInput.disabled = true;
        submitButton.disabled = true;
        submitButton.innerText = "SAVING...";

        fetch(webAppUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ formType: "subscription", email: emailInput.value })
        }).then(() => {
            const successMsg = document.createElement("p");
            successMsg.className = "collector-success-message";
            successMsg.innerText = "Thank you for subscribing! We will contact you ASAP.";
            emailCollectorForm.parentNode.appendChild(successMsg);

            submitButton.innerText = "SUBSCRIBED";
            submitButton.classList.add("deactivated-state");
            emailInput.classList.add("deactivated-state");
        }).catch(err => {
            console.error("Subscription Error:", err);
            emailInput.disabled = false;
            submitButton.disabled = false;
            submitButton.innerText = "SUBSCRIBE";
            alert("Network issue. Please try subscribing again.");
        });
    });

    // Feature 2 (Primary 6-Parameter Lead Qualification Form Submission Execution)
    onboardingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitButton = onboardingForm.querySelector(".submit-form-btn");
        submitButton.disabled = true;
        submitButton.innerText = "TRANSMITTING DATA SPEC...";

        const selectedBudget = document.querySelector('input[name="budget"]:checked').value;
        const selectedTimeline = document.querySelector('input[name="timeline"]:checked').value;

        const formDataPayload = {
            formType: "contact",
            name: document.getElementById("contactName").value,
            email: document.getElementById("contactEmail").value,
            phone: document.getElementById("contactPhone").value,
            budget: selectedBudget,
            timeline: selectedTimeline,
            message: document.getElementById("contactMessage").value
        };

        fetch(webAppUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataPayload)
        })
        .then(() => {
            alert("Specs Transmitted! Your dashboard lead file has been logged.");
            onboardingForm.reset();
        })
        .catch(err => {
            console.error("Network Error:", err);
            alert("Transmission interrupted. Check connection and retry.");
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.innerText = "SUBMIT REEL SPEC";
        });
    });
});

        
