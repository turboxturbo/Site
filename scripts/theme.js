document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const themeToggle = document.getElementById("theme-toggle");
    const themeToggleText = themeToggle.querySelector("p");

    // Проверяем сохранённую тему, иначе тёмная по умолчанию
    const savedTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", savedTheme);
    updateLabel(savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateLabel(newTheme);
    });

    function updateLabel(theme) {
        themeToggleText.textContent = theme === "dark" ? "1" : "0";
    }
});