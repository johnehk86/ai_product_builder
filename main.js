// ===== Menu Data =====
const menus = {
    korean: [
        { name: '김치찌개', emoji: '🍲', desc: '돼지고기와 김치가 어우러진 얼큰한 찌개' },
        { name: '된장찌개', emoji: '🫕', desc: '구수한 된장에 두부와 채소를 넣은 찌개' },
        { name: '불고기', emoji: '🥩', desc: '달콤한 양념에 재운 소고기 구이' },
        { name: '비빔밥', emoji: '🍚', desc: '각종 나물과 고추장을 비벼 먹는 밥' },
        { name: '삼겹살', emoji: '🥓', desc: '두툼한 삼겹살을 구워 쌈에 싸먹기' },
        { name: '잡채', emoji: '🍜', desc: '당면과 채소를 볶아낸 잔치 음식' },
        { name: '제육볶음', emoji: '🌶️', desc: '매콤달콤 양념 돼지고기 볶음' },
        { name: '순두부찌개', emoji: '🍲', desc: '부드러운 순두부에 해물을 넣은 얼큰한 찌개' },
    ],
    chinese: [
        { name: '짜장면', emoji: '🍝', desc: '달콤한 춘장 소스에 면을 비벼 먹는 요리' },
        { name: '짬뽕', emoji: '🍜', desc: '해물과 채소가 들어간 매운 국물 면' },
        { name: '탕수육', emoji: '🍖', desc: '바삭한 튀김옷에 새콤달콤한 소스' },
        { name: '마파두부', emoji: '🫕', desc: '두부와 다진 고기를 매콤하게 볶은 요리' },
        { name: '볶음밥', emoji: '🍳', desc: '각종 재료와 밥을 센 불에 볶아낸 요리' },
        { name: '깐풍기', emoji: '🍗', desc: '바삭하게 튀긴 닭에 매콤한 소스를 입힌 요리' },
    ],
    japanese: [
        { name: '초밥', emoji: '🍣', desc: '신선한 생선을 올린 한입 크기의 밥' },
        { name: '라멘', emoji: '🍜', desc: '진한 육수에 면과 토핑을 올린 일본식 면요리' },
        { name: '돈카츠', emoji: '🥩', desc: '두툼한 돼지고기를 바삭하게 튀긴 커틀릿' },
        { name: '우동', emoji: '🍲', desc: '쫄깃한 굵은 면에 따뜻한 육수' },
        { name: '카레라이스', emoji: '🍛', desc: '일본식 카레 소스를 밥에 곁들인 요리' },
        { name: '규동', emoji: '🥘', desc: '달콤짭짤한 소고기를 밥 위에 올린 덮밥' },
    ],
    western: [
        { name: '파스타', emoji: '🍝', desc: '다양한 소스와 면의 이탈리안 요리' },
        { name: '스테이크', emoji: '🥩', desc: '두툼한 소고기를 원하는 굽기로 구운 요리' },
        { name: '피자', emoji: '🍕', desc: '바삭한 도우 위에 치즈와 토핑을 올린 요리' },
        { name: '햄버거', emoji: '🍔', desc: '패티와 채소를 번 사이에 넣은 샌드위치' },
        { name: '리조또', emoji: '🍚', desc: '크리미한 치즈와 육수로 지은 이탈리안 밥' },
        { name: '샐러드', emoji: '🥗', desc: '신선한 채소와 드레싱의 건강한 한 끼' },
    ],
    snack: [
        { name: '떡볶이', emoji: '🌶️', desc: '매콤달콤한 고추장 소스에 졸인 떡' },
        { name: '김밥', emoji: '🍙', desc: '밥과 각종 재료를 김에 말아낸 요리' },
        { name: '라면', emoji: '🍜', desc: '간편하지만 최고의 야식 메뉴' },
        { name: '순대', emoji: '🌭', desc: '당면과 채소를 넣어 만든 한국식 소시지' },
        { name: '튀김', emoji: '🍤', desc: '각종 재료를 바삭하게 튀겨낸 간식' },
        { name: '오므라이스', emoji: '🍳', desc: '볶음밥을 계란으로 감싼 요리' },
    ],
};

const categoryNames = {
    korean: '한식',
    chinese: '중식',
    japanese: '일식',
    western: '양식',
    snack: '분식',
};

// ===== DOM Elements =====
const themeToggleBtn = document.getElementById('theme-toggle');
const generatorBtn = document.getElementById('generator-btn');
const menuDisplay = document.getElementById('menu-display');
const menuEmoji = document.getElementById('menu-emoji');
const menuName = document.getElementById('menu-name');
const menuCategory = document.getElementById('menu-category');
const menuDesc = document.getElementById('menu-desc');
const menuCard = document.getElementById('menu-card');
const historySection = document.getElementById('history');
const historyList = document.getElementById('history-list');
const categoryBtns = document.querySelectorAll('.category-btn');
const body = document.body;

let selectedCategory = 'all';
let history = [];

// ===== Theme =====
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});

// ===== Category Selection =====
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCategory = btn.dataset.category;
    });
});

// ===== Menu Recommendation =====
function getRandomMenu() {
    let pool = [];

    if (selectedCategory === 'all') {
        for (const category in menus) {
            pool = pool.concat(menus[category].map(item => ({ ...item, category })));
        }
    } else {
        pool = menus[selectedCategory].map(item => ({ ...item, category: selectedCategory }));
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
}

function showMenu(menu) {
    menuCard.classList.add('spinning');
    setTimeout(() => {
        menuCard.classList.remove('spinning');
    }, 500);

    menuEmoji.textContent = menu.emoji;
    menuName.textContent = menu.name;
    menuCategory.textContent = categoryNames[menu.category];
    menuDesc.textContent = menu.desc;
    menuDisplay.classList.add('show');

    // Add to history
    history.unshift(`${menu.emoji} ${menu.name} (${categoryNames[menu.category]})`);
    if (history.length > 5) history.pop();
    updateHistory();
}

function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
    if (history.length > 0) {
        historySection.classList.add('show');
    }
}

generatorBtn.addEventListener('click', () => {
    const menu = getRandomMenu();
    showMenu(menu);
});
