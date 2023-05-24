document.addEventListener("alpine:init", () => {
    Alpine.data("layout", () => ({
        profileOpen: false,
        asideOpen: true,
    }));
});