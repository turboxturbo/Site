document.addEventListener("DOMContentLoaded", () => {
    const konamiCode = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowRight', 'ArrowLeft'
    ];
    let konamiIndex = 0;
    let isdone = false;

    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        const expectedKey = konamiCode[konamiIndex].toLowerCase();

        if (key === expectedKey && !isdone) {
            konamiIndex++;

            if (konamiIndex === konamiCode.length) {
                isdone = true; // теперь блокируем повторный запуск только ПОСЛЕ полного ввода
                notme();
                konamiIndex = 0; // сбрасываем на случай если isdone когда-то станет false
            }
        } else {
            konamiIndex = 0;
        }
    });

    async function notme() {
        const oldaboutme = document.getElementById("aboutme");
        const newaboutme = 'N0t me';

        const newsocialnetworks = 'Soc10l ne1wor0';
        const oldsocialnetworks = document.getElementById("socialnetworks");

        const newcopyright = 'C01yNOTr1ght © 1001 M0L1ASHI';
        const oldcopyright = document.getElementById("copyright");

        const newaboutme_desc = "Oh oh, it's a glitch - that wasn't supposed to happen! Maybe you can fix it? In the meantime, let me tell you a story: \"208 177 208 190 208 179 208 184 32 209 129 208 188 208 181 209 128 209 130 208 184 32 208 187 209 142 208 177 209 143 209 130 32 209 143 208 177 208 187 208 190 208 186 208 184...\" Beep beep. Oops, it seems my transmitter is acting up. I think it's time for me to go. You're on your own from here. Bye!";
        const oldaboutme_desc = document.getElementById("aboutme_desc");

        const oldascii = document.getElementById("ascii-output");
        const newascii = await image_to_ascii("assets/images/test2.png");

        oldascii.textContent = newascii;
        oldaboutme.textContent = newaboutme;
        oldsocialnetworks.textContent = newsocialnetworks;
        oldcopyright.textContent = newcopyright;
        oldaboutme_desc.textContent = newaboutme_desc;
        document.getElementById("logo").textContent = '1HSABLEM'
    }
});