// 言語ごとのテキスト
const translations = {
    jp: {
        description: "四角形に愛想をつかした男。",
        favorites: "好きなものは、鳥と映画",
        respect: "尊敬する人: Tobyfox, Orteil",
    },
    en: {
        description: "A man who lost interest in rectangles.",
        favorites: "Favorite things: Birds and movies",
        respect: "People I respect: Tobyfox, Orteil",
    },
};

// 言語を切り替える関数
function switchLanguage(lang) {
    document.getElementById("description").textContent = translations[lang].description;
    document.getElementById("favorites").textContent = translations[lang].favorites;
    document.getElementById("respect").textContent = translations[lang].respect;
}

// 現在の年をフッターに表示する関数
function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
}

// 時計を表示する関数
function displayDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
    const hours = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const seconds = ("0" + now.getSeconds()).slice(-2);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekday = daysOfWeek[now.getDay()];

    const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds} (${weekday})`;

    document.getElementById("datetime").textContent = formattedDate;
}

// 初期化処理
window.onload = function () {
    // 初期設定: 日本語を表示
    switchLanguage("jp");
    displayCurrentYear();
    displayDateTime();

    // 1秒ごとに時計を更新
    setInterval(displayDateTime, 1000);

    // 言語選択メニューのイベントリスナーを設定
    document.getElementById("language").addEventListener("change", function () {
        switchLanguage(this.value);
    });
};
