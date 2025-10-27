// Переводы
const translations = {
    ru: {
        mainTitle: "🎭 Помощник ведущего мафии (Enhanced)",
        setupTab: "Настройка",
        gameTab: "Игра",
        logTab: "Лог",
        rolesSetupTitle: "Настройка ролей",
        createRoleTitle: "➕ Создание новой роли",
        roleNameLabel: "Название роли:",
        roleDescLabel: "Описание роли:",
        roleTypeLabel: "Тип роли:",
        townOption: "Мирная",
        mafiaOption: "Мафия",
        neutralOption: "Нейтральная",
        nightActionsLabel: "Ночные действия:",
        canKillLabel: "Может убивать",
        canHealLabel: "Может лечить",
        canSearchLabel: "Может проверять",
        canBlockLabel: "Может блокировать",
        passiveAbilityLabel: "Пассивная способность",
        specialActionLabel: "Особое действие",
        customActionDescLabel: "Описание особого действия:",
        specialPropsLabel: "Особые свойства:",
        immortalLabel: "Неуязвимая ночью",
        suicideLabel: "Умирает при использовании способности",
        detectiveLabel: "Видна проверяющим как мафия",
        innocentLabel: "Всегда видна как мирная",
        saveRoleBtn: "✅ Сохранить роль",
        cancelRoleBtn: "❌ Отмена",
        createRoleBtn: "➕ Создать роль",
        resetRolesBtn: "🔄 Сбросить к стандартным",
        gameSetupTitle: "Настройка игры",
        playerCountLabel: "Количество игроков: ",
        createPlayersBtn: "Создать игроков",
        roleDistributionTitle: "Распределение ролей",
        startGameBtn: "🎮 Начать игру",
        rolesListTitle: "📋 Список ролей",
        playersTitle: "Игроки",
        dayPhaseTitle: "Дневная фаза",
        dayTimerTitle: "⏱️ Таймер дневной фазы",
        nominationTitle: "Номинация игроков",
        selectPlayerNomination: "Выберите игрока для номинации",
        nominateBtn: "📋 Номинировать",
        clearNominationsBtn: "🗑️ Очистить номинации",
        votingTitle: "Голосование",
        resetVotesBtn: "🔄 Сбросить голоса",
        votingResultsTitle: "📊 Результаты голосования",
        eliminationTitle: "❌ Исключение игрока",
        eliminationDesc: "После подведения итогов голосования, исключите игрока из игры:",
        selectPlayerElimination: "Выберите игрока для исключения",
        eliminateBtn: "❌ Исключить из игры",
        startNightBtn: "🌙 Начать ночь",
        nightPhaseTitle: "Ночная фаза",
        processNightBtn: "🌅 Обработать ночь",
        gameLogTitle: "Лог игры",
        clearLogBtn: "🗑️ Очистить лог",
        errorCorrectionTitle: "⚠️ Исправление ошибок:",
        revivePlayerOption: "Воскресить игрока",
        reviveBtn: "♻️ Воскресить",
        changeRolePlayerOption: "Сменить роль игрока",
        newRoleOption: "Новая роль",
        changeRoleBtn: "🔄 Сменить",
        // Роли
        donMafia: "Дон Мафии",
        mafia: "Мафия",
        sheriff: "Шериф",
        doctor: "Врач",
        serialKiller: "Серийный убийца",
        granny: "Бабушка",
        townspeople: "Мирный житель",
        // Описания ролей
        donMafiaDesc: "Ищет шерифа, выбирает жертву",
        mafiaDesc: "Выбирает жертву",
        sheriffDesc: "Ищет мафию",
        doctorDesc: "Лечит игрока",
        serialKillerDesc: "Может убить или пропустить ход",
        grannyDesc: "Убивает всех, кто к ней приходит",
        townspeopleDesc: "Не имеет ночных действий",
        // Игровые сообщения
        gameStarted: "🎮 Игра началась!",
        nightFalls: "🌙 Наступила ночь",
        nightResults: "🌙 Результаты ночи:",
        peacefulNight: "😴 Спокойная ночь - никто не пострадал",
        townWins: "🎉 ПОБЕДА МИРНЫХ ЖИТЕЛЕЙ!",
        mafiaWins: "🎉 ПОБЕДА МАФИИ!",
        neutralWins: "🎉 ПОБЕДА НЕЙТРАЛЬНЫХ!",
        player: "Игрок",
        alive: "✅ Жив",
        dead: "💀 Мертв",
        votes: "голосов",
        maxVotes: "макс.",
        votingCompleted: "✅ ГОЛОСОВАНИЕ ЗАВЕРШЕНО",
        voted: "Проголосовало:",
        of: "из",
        players: "игроков",
        votingOnlyNominated: "🗳️ Голосование только за номинированных игроков",
        firstNominateMessage: "Сначала номинируйте игроков для голосования",
        noNominatedPlayers: "Нет номинированных игроков",
        nominatedPlayers: "Номинированные игроки:",
        checkPlayer: "🔍 Проверить игрока:",
        selectPlayer: "Выберите игрока",
        killPlayer: "⚔️ Убить игрока:",
        selectTarget: "Выберите цель или пропустите",
        healPlayer: "💊 Лечить игрока:",
        selectPatient: "Выберите пациента",
        blockPlayer: "🚫 Заблокировать игрока:",
        selectTargetToBlock: "Выберите цель",
        passiveAbility: "🏠 Пассивная способность:",
        specialAction: "⚡ Особое действие:",
        selectTargetIfNeeded: "Выберите цель (если нужна)",
        describeAction: "Опишите конкретное действие или результат...",
        lastNightHealed: "Прошлой ночью лечили:",
        noOneHealedLastNight: "Никого не лечили прошлой ночью",
        availableForHealing: "Доступно для лечения:",
        waitingForGuests: "ждет посетителей...",
        result: "Результат:",
        yes: "Да",
        no: "Нет",
        hint: "💡 Подсказка:",
        yesMafia: "ДА - это мафия!",
        notMafia: "НЕТ - не мафия",
        yesSheriff: "ДА - это шериф!",
        notSheriff: "НЕТ - не шериф",
        determineResultYourself: "Определите результат самостоятельно",
        addTimeLabel: "Добавить время:",
        soundLabel: "🔔 Звуковой сигнал",
        timerRunning: "Идёт",
        timerPaused: "Пауза",
        timerFinished: "Время вышло",
        timerReady: "Готов"
    },
    en: {
        mainTitle: "🎭 Mafia Game Master Assistant (Enhanced)",
        setupTab: "Setup",
        gameTab: "Game",
        logTab: "Log",
        rolesSetupTitle: "Role Setup",
        createRoleTitle: "➕ Create New Role",
        roleNameLabel: "Role Name:",
        roleDescLabel: "Role Description:",
        roleTypeLabel: "Role Type:",
        townOption: "Town",
        mafiaOption: "Mafia",
        neutralOption: "Neutral",
        nightActionsLabel: "Night Actions:",
        canKillLabel: "Can Kill",
        canHealLabel: "Can Heal",
        canSearchLabel: "Can Search",
        canBlockLabel: "Can Block",
        passiveAbilityLabel: "Passive Ability",
        specialActionLabel: "Special Action",
        customActionDescLabel: "Special Action Description:",
        specialPropsLabel: "Special Properties:",
        immortalLabel: "Immortal at Night",
        suicideLabel: "Dies When Using Ability",
        detectiveLabel: "Shows as Mafia to Investigators",
        innocentLabel: "Always Shows as Town",
        saveRoleBtn: "✅ Save Role",
        cancelRoleBtn: "❌ Cancel",
        createRoleBtn: "➕ Create Role",
        resetRolesBtn: "🔄 Reset to Default",
        gameSetupTitle: "Game Setup",
        playerCountLabel: "Number of Players: ",
        createPlayersBtn: "Create Players",
        roleDistributionTitle: "Role Distribution",
        startGameBtn: "🎮 Start Game",
        rolesListTitle: "📋 Role List",
        playersTitle: "Players",
        dayPhaseTitle: "Day Phase",
        dayTimerTitle: "⏱️ Day Phase Timer",
        nominationTitle: "Player Nomination",
        selectPlayerNomination: "Select player for nomination",
        nominateBtn: "📋 Nominate",
        clearNominationsBtn: "🗑️ Clear Nominations",
        votingTitle: "Voting",
        resetVotesBtn: "🔄 Reset Votes",
        votingResultsTitle: "📊 Voting Results",
        eliminationTitle: "❌ Player Elimination",
        eliminationDesc: "After voting results, eliminate player from game:",
        selectPlayerElimination: "Select player for elimination",
        eliminateBtn: "❌ Eliminate from Game",
        startNightBtn: "🌙 Start Night",
        nightPhaseTitle: "Night Phase",
        processNightBtn: "🌅 Process Night",
        gameLogTitle: "Game Log",
        clearLogBtn: "🗑️ Clear Log",
        errorCorrectionTitle: "⚠️ Error Correction:",
        revivePlayerOption: "Revive player",
        reviveBtn: "♻️ Revive",
        changeRolePlayerOption: "Change player role",
        newRoleOption: "New role",
        changeRoleBtn: "🔄 Change",
        // Roles
        donMafia: "Mafia Boss",
        mafia: "Mafia",
        sheriff: "Sheriff",
        doctor: "Doctor",
        serialKiller: "Serial Killer",
        granny: "Granny",
        townspeople: "Townspeople",
        // Role descriptions
        donMafiaDesc: "Searches for Sheriff, chooses victim",
        mafiaDesc: "Chooses victim",
        sheriffDesc: "Searches for mafia",
        doctorDesc: "Heals player",
        serialKillerDesc: "Can kill or skip turn",
        grannyDesc: "Kills everyone who visits her",
        townspeopleDesc: "No night actions",
        // Game messages
        gameStarted: "🎮 Game started!",
        nightFalls: "🌙 Night falls",
        nightResults: "🌙 Night results:",
        peacefulNight: "😴 Peaceful night - no one was hurt",
        townWins: "🎉 TOWN WINS!",
        mafiaWins: "🎉 MAFIA WINS!",
        neutralWins: "🎉 NEUTRAL WINS!",
        player: "Player",
        alive: "✅ Alive",
        dead: "💀 Dead",
        votes: "votes",
        maxVotes: "max.",
        votingCompleted: "✅ VOTING COMPLETED",
        voted: "Voted:",
        of: "of",
        players: "players",
        votingOnlyNominated: "🗳️ Voting only for nominated players",
        firstNominateMessage: "First nominate players for voting",
        noNominatedPlayers: "No nominated players",
        nominatedPlayers: "Nominated players:",
        checkPlayer: "🔍 Check player:",
        selectPlayer: "Select player",
        killPlayer: "⚔️ Kill player:",
        selectTarget: "Select target or skip",
        healPlayer: "💊 Heal player:",
        selectPatient: "Select patient",
        blockPlayer: "🚫 Block player:",
        selectTargetToBlock: "Select target",
        passiveAbility: "🏠 Passive ability:",
        specialAction: "⚡ Special action:",
        selectTargetIfNeeded: "Select target (if needed)",
        describeAction: "Describe specific action or result...",
        lastNightHealed: "Last night healed:",
        noOneHealedLastNight: "No one healed last night",
        availableForHealing: "Available for healing:",
        waitingForGuests: "waiting for guests...",
        result: "Result:",
        yes: "Yes",
        no: "No",
        hint: "💡 Hint:",
        yesMafia: "YES - this is mafia!",
        notMafia: "NO - not mafia",
        yesSheriff: "YES - this is sheriff!",
        notSheriff: "NO - not sheriff",
        determineResultYourself: "Determine result yourself",
        addTimeLabel: "Add time:",
        soundLabel: "🔔 Sound alert",
        timerRunning: "Running",
        timerPaused: "Paused",
        timerFinished: "Time's up",
        timerReady: "Ready"
    }
};

// Текущий язык
let currentLanguage = 'ru';

// Переменные таймера
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let timerPaused = false;
let soundEnabled = true;
let selectedPreset = null;

// Настройки внешнего вида
let customSettings = {
    logo: null,
    background: null,
    backgroundOpacity: 100,
    primaryColor: '#1e3c72',
    secondaryColor: '#2a5298',
    accentColor: '#ffd700'
};

// Данные игры
let gameData = {
    roles: [
        {
            name: 'Дон Мафии',
            action: 'search',
            description: 'Ищет шерифа, выбирает жертву',
            type: 'mafia',
            isCustom: false,
            actions: ['kill', 'search'],
            properties: []
        },
        {
            name: 'Мафия',
            action: 'kill',
            description: 'Выбирает жертву',
            type: 'mafia',
            isCustom: false,
            actions: ['kill'],
            properties: []
        },
        {
            name: 'Шериф',
            action: 'search',
            description: 'Ищет мафию',
            type: 'town',
            isCustom: false,
            actions: ['search'],
            properties: []
        },
        {
            name: 'Врач',
            action: 'heal',
            description: 'Лечит игрока',
            type: 'town',
            isCustom: false,
            actions: ['heal'],
            properties: []
        },
        {
            name: 'Серийный убийца',
            action: 'kill',
            description: 'Может убить или пропустить ход',
            type: 'neutral',
            isCustom: false,
            actions: ['kill'],
            properties: []
        },
        {
            name: 'Бабушка',
            action: 'passive',
            description: 'Убивает всех, кто к ней приходит',
            type: 'town',
            isCustom: false,
            actions: ['passive'],
            properties: ['immortal']
        },
        {
            name: 'Мирный житель',
            action: 'none',
            description: 'Не имеет ночных действий',
            type: 'town',
            isCustom: false,
            actions: [],
            properties: []
        }
    ],
    players: [],
    currentPhase: 'setup',
    nightActions: {},
    gameLog: [],
    lastHealed: null,
    nominatedPlayers: [],
    customActions: {}
};

// Функции настроек
function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('open');
}

function uploadLogo(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            customSettings.logo = e.target.result;
            applyLogo();
            saveCustomSettings();
        };
        reader.readAsDataURL(file);
    }
}

function applyLogo() {
    const logoImg = document.getElementById('logoImage');
    const mainTitle = document.getElementById('mainTitle');

    if (customSettings.logo) {
        logoImg.src = customSettings.logo;
        logoImg.classList.remove('hidden');
        mainTitle.innerHTML = mainTitle.innerHTML.replace('🎭 ', '');
    } else {
        logoImg.classList.add('hidden');
        if (!mainTitle.innerHTML.includes('🎭')) {
            mainTitle.innerHTML = '🎭 ' + mainTitle.innerHTML;
        }
    }
}

function clearLogo() {
    customSettings.logo = null;
    applyLogo();
    saveCustomSettings();
}

function uploadBackground(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            customSettings.background = e.target.result;
            applyBackground();
            saveCustomSettings();
        };
        reader.readAsDataURL(file);
    }
}

function applyBackground() {
    const body = document.body;
    const opacity = customSettings.backgroundOpacity / 100;

    if (customSettings.background) {
        body.style.background = `
            linear-gradient(135deg,
                ${customSettings.primaryColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%,
                ${customSettings.secondaryColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 100%),
            url(${customSettings.background})
        `;
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundAttachment = 'fixed';
    } else {
        body.style.background = `linear-gradient(135deg, ${customSettings.primaryColor} 0%, ${customSettings.secondaryColor} 100%)`;
        body.style.backgroundSize = 'auto';
        body.style.backgroundPosition = 'initial';
        body.style.backgroundAttachment = 'scroll';
    }
}

function clearBackground() {
    customSettings.background = null;
    applyBackground();
    saveCustomSettings();
}

function updateBackgroundOpacity(value) {
    customSettings.backgroundOpacity = parseInt(value);
    document.getElementById('opacityValue').textContent = value + '%';
    applyBackground();
    saveCustomSettings();
}

function updateColors() {
    customSettings.primaryColor = document.getElementById('primaryColor').value;
    customSettings.secondaryColor = document.getElementById('secondaryColor').value;
    customSettings.accentColor = document.getElementById('accentColor').value;

    applyColors();
    updateColorPreview();
    saveCustomSettings();
}

function applyColors() {
    const root = document.documentElement;

    root.style.setProperty('--primary-color', customSettings.primaryColor);
    root.style.setProperty('--secondary-color', customSettings.secondaryColor);
    root.style.setProperty('--accent-color', customSettings.accentColor);

    applyBackground();

    const accentElements = document.querySelectorAll('.section h2, .timer-section h3, .role-type-badge, .nominated-player, .search-hint');
    accentElements.forEach(el => {
        if (el.classList.contains('section') && el.tagName === 'H2') {
            el.style.color = customSettings.accentColor;
        }
    });
}

function updateColorPreview() {
    const preview = document.getElementById('colorPreview');
    preview.style.background = `linear-gradient(135deg, ${customSettings.primaryColor} 0%, ${customSettings.secondaryColor} 100%)`;
    preview.style.borderColor = customSettings.accentColor;
}

function applyColorPreset(primary, secondary, accent) {
    customSettings.primaryColor = primary;
    customSettings.secondaryColor = secondary;
    customSettings.accentColor = accent;

    document.getElementById('primaryColor').value = primary;
    document.getElementById('secondaryColor').value = secondary;
    document.getElementById('accentColor').value = accent;

    applyColors();
    updateColorPreview();
    saveCustomSettings();

    document.querySelectorAll('.color-preset').forEach(preset => {
        preset.classList.remove('active');
    });
    event.target.classList.add('active');
}

function resetSettings() {
    if (confirm(currentLanguage === 'ru' ? 'Сбросить все настройки к умолчанию?' : 'Reset all settings to default?')) {
        customSettings = {
            logo: null,
            background: null,
            backgroundOpacity: 100,
            primaryColor: '#1e3c72',
            secondaryColor: '#2a5298',
            accentColor: '#ffd700'
        };

        document.getElementById('primaryColor').value = '#1e3c72';
        document.getElementById('secondaryColor').value = '#2a5298';
        document.getElementById('accentColor').value = '#ffd700';
        document.getElementById('backgroundOpacity').value = 100;
        document.getElementById('opacityValue').textContent = '100%';

        applyLogo();
        applyBackground();
        applyColors();
        updateColorPreview();
        saveCustomSettings();
    }
}

function exportSettings() {
    const settings = {
        customSettings: customSettings,
        gameData: gameData,
        language: currentLanguage
    };

    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'mafia_settings.json';
    link.click();

    URL.revokeObjectURL(url);
}

function importSettings(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const settings = JSON.parse(e.target.result);

                if (settings.customSettings) {
                    customSettings = settings.customSettings;

                    document.getElementById('primaryColor').value = customSettings.primaryColor;
                    document.getElementById('secondaryColor').value = customSettings.secondaryColor;
                    document.getElementById('accentColor').value = customSettings.accentColor;
                    document.getElementById('backgroundOpacity').value = customSettings.backgroundOpacity;
                    document.getElementById('opacityValue').textContent = customSettings.backgroundOpacity + '%';

                    applyLogo();
                    applyBackground();
                    applyColors();
                    updateColorPreview();
                }

                if (settings.gameData) {
                    gameData = settings.gameData;
                    updateRolesList();
                }

                if (settings.language) {
                    currentLanguage = settings.language;
                    document.getElementById('languageSelector').value = settings.language;
                    changeLanguage(settings.language);
                }

                saveCustomSettings();
                alert(currentLanguage === 'ru' ? 'Настройки успешно импортированы!' : 'Settings imported successfully!');
            } catch (error) {
                alert(currentLanguage === 'ru' ? 'Ошибка при импорте настроек!' : 'Error importing settings!');
            }
        };
        reader.readAsText(file);
    }
}

function exportRoles() {
    const rolesData = {
        roles: gameData.roles,
        exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(rolesData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `mafia_roles_${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
    addToLog('💾 Роли экспортированы');
}

function importRoles(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const rolesData = JSON.parse(e.target.result);

                if (rolesData.roles && Array.isArray(rolesData.roles)) {
                    if (confirm('Импортировать роли? Это заменит текущий набор ролей.')) {
                        gameData.roles = rolesData.roles;
                        updateRolesList();
                        saveData();
                        addToLog('📂 Роли импортированы');
                        alert('Роли загружены!');
                    }
                } else {
                    alert('Неверный формат файла!');
                }
            } catch (error) {
                alert('Ошибка при импорте ролей!');
            }
        };
        reader.readAsText(file);
    }
}

function exportLog() {
    if (gameData.gameLog.length === 0) {
        alert('Лог пуст!');
        return;
    }

    const logText = gameData.gameLog.join('\n');
    const logBlob = new Blob([logText], {type: 'text/plain'});
    const url = URL.createObjectURL(logBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `mafia_log_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();

    URL.revokeObjectURL(url);
}

function emailLog() {
    if (gameData.gameLog.length === 0) {
        alert('Лог пуст!');
        return;
    }

    const subject = encodeURIComponent('Mafia Game Log');
    const body = encodeURIComponent(gameData.gameLog.join('\n'));
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function saveCustomSettings() {
    try {
        localStorage.setItem('mafia-custom-settings', JSON.stringify(customSettings));
    } catch (error) {
        console.log('Ошибка сохранения настроек:', error);
    }
}

function loadCustomSettings() {
    try {
        const saved = localStorage.getItem('mafia-custom-settings');
        if (saved) {
            customSettings = JSON.parse(saved);

            document.getElementById('primaryColor').value = customSettings.primaryColor;
            document.getElementById('secondaryColor').value = customSettings.secondaryColor;
            document.getElementById('accentColor').value = customSettings.accentColor;
            document.getElementById('backgroundOpacity').value = customSettings.backgroundOpacity;
            document.getElementById('opacityValue').textContent = customSettings.backgroundOpacity + '%';

            applyLogo();
            applyBackground();
            applyColors();
            updateColorPreview();
        }
    } catch (error) {
        console.log('Ошибка загрузки настроек:', error);
    }
}

// Функция смены языка
function changeLanguage(lang) {
    currentLanguage = lang;

    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    updateRoleTranslations();

    if (gameData.currentPhase !== 'setup') {
        updateGameInterface();
    }
}

function updateRoleTranslations() {
    if (currentLanguage === 'ru') {
        const standardRoles = gameData.roles.filter(role => !role.isCustom);
        standardRoles.forEach(role => {
            switch (role.name) {
                case 'Mafia Boss':
                case 'Дон Мафии':
                    role.name = 'Дон Мафии';
                    role.description = 'Ищет шерифа, выбирает жертву';
                    break;
                case 'Mafia':
                case 'Мафия':
                    role.name = 'Мафия';
                    role.description = 'Выбирает жертву';
                    break;
                case 'Sheriff':
                case 'Шериф':
                    role.name = 'Шериф';
                    role.description = 'Ищет мафию';
                    break;
                case 'Doctor':
                case 'Врач':
                    role.name = 'Врач';
                    role.description = 'Лечит игрока';
                    break;
                case 'Serial Killer':
                case 'Серийный убийца':
                    role.name = 'Серийный убийца';
                    role.description = 'Может убить или пропустить ход';
                    break;
                case 'Granny':
                case 'Бабушка':
                    role.name = 'Бабушка';
                    role.description = 'Убивает всех, кто к ней приходит';
                    break;
                case 'Townspeople':
                case 'Мирный житель':
                    role.name = 'Мирный житель';
                    role.description = 'Не имеет ночных действий';
                    break;
            }
        });
    } else {
        const standardRoles = gameData.roles.filter(role => !role.isCustom);
        standardRoles.forEach(role => {
            switch (role.name) {
                case 'Дон Мафии':
                case 'Mafia Boss':
                    role.name = 'Mafia Boss';
                    role.description = 'Searches for Sheriff, chooses victim';
                    break;
                case 'Мафия':
                case 'Mafia':
                    role.name = 'Mafia';
                    role.description = 'Chooses victim';
                    break;
                case 'Шериф':
                case 'Sheriff':
                    role.name = 'Sheriff';
                    role.description = 'Searches for mafia';
                    break;
                case 'Врач':
                case 'Doctor':
                    role.name = 'Doctor';
                    role.description = 'Heals player';
                    break;
                case 'Серийный убийца':
                case 'Serial Killer':
                    role.name = 'Serial Killer';
                    role.description = 'Can kill or skip turn';
                    break;
                case 'Бабушка':
                case 'Granny':
                    role.name = 'Granny';
                    role.description = 'Kills everyone who visits her';
                    break;
                case 'Мирный житель':
                case 'Townspeople':
                    role.name = 'Townspeople';
                    role.description = 'No night actions';
                    break;
            }
        });
    }

    updateRolesList();
}

function t(key) {
    return translations[currentLanguage][key] || key;
}

// Загрузка данных
function loadData() {
    loadCustomSettings();

    try {
        const saved = localStorage.getItem('mafia-game-state');
        if (saved) {
            const parsed = JSON.parse(saved);

            // Восстанавливаем только если есть активная игра
            if (parsed.currentPhase !== 'setup' && parsed.players && parsed.players.length > 0) {
                if (confirm(currentLanguage === 'ru' ?
                    '🎮 Найдена сохранённая игра! Восстановить?' :
                    '🎮 Saved game found! Restore?')) {
                    gameData = parsed;

                    if (gameData.currentPhase !== 'setup') {
                        showTab('game');
                        updateGameInterface();
                    }

                    updateLogDisplay();
                    addToLog('🔄 ' + (currentLanguage === 'ru' ? 'Игра восстановлена' : 'Game restored'));
                }
            } else {
                // Восстанавливаем только кастомные роли
                if (parsed.roles) {
                    const customRoles = parsed.roles.filter(r => r.isCustom);
                    customRoles.forEach(customRole => {
                        if (!gameData.roles.some(r => r.name === customRole.name)) {
                            gameData.roles.push(customRole);
                        }
                    });
                }
            }
        }

        updateRolesList();
    } catch (error) {
        console.log('Ошибка загрузки игры:', error);
        updateRolesList();
    }
}

function saveData() {
    try {
        localStorage.setItem('mafia-game-state', JSON.stringify(gameData));
        localStorage.setItem('mafia-language', currentLanguage);
    } catch (error) {
        console.log('Ошибка сохранения игры:', error);
    }
}

// Управление вкладками
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(tabName + '-tab');
    if (targetTab) {
        targetTab.classList.remove('hidden');
    }

    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Кастомные роли
function showCustomRoleForm() {
    document.getElementById('custom-role-form').classList.remove('hidden');

    document.getElementById('new-role-name').placeholder = currentLanguage === 'ru' ? 'Введите название роли' : 'Enter role name';
    document.getElementById('new-role-description').placeholder = currentLanguage === 'ru' ? 'Опишите роль и её способности' : 'Describe role and its abilities';
    document.getElementById('custom-action-description').placeholder = currentLanguage === 'ru' ? 'Опишите, что именно делает роль ночью и как это должно обрабатываться' : 'Describe what the role does at night and how it should be handled';
}

function cancelCustomRole() {
    document.getElementById('custom-role-form').classList.add('hidden');
    clearCustomRoleForm();
}

function clearCustomRoleForm() {
    document.getElementById('new-role-name').value = '';
    document.getElementById('new-role-description').value = '';
    document.getElementById('new-role-type').value = 'town';
    document.getElementById('custom-action-description').value = '';

    document.querySelectorAll('#custom-role-form input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('custom-action-details').style.display = 'none';
}

function saveCustomRole() {
    const name = document.getElementById('new-role-name').value.trim();
    const description = document.getElementById('new-role-description').value.trim();
    const type = document.getElementById('new-role-type').value;

    if (!name) {
        alert(currentLanguage === 'ru' ? 'Введите название роли!' : 'Enter role name!');
        return;
    }

    if (gameData.roles.some(role => role.name.toLowerCase() === name.toLowerCase())) {
        alert(currentLanguage === 'ru' ? 'Роль с таким названием уже существует!' : 'Role with this name already exists!');
        return;
    }

    const actions = [];
    if (document.getElementById('action-kill').checked) actions.push('kill');
    if (document.getElementById('action-heal').checked) actions.push('heal');
    if (document.getElementById('action-search').checked) actions.push('search');
    if (document.getElementById('action-block').checked) actions.push('block');
    if (document.getElementById('action-passive').checked) actions.push('passive');
    if (document.getElementById('action-custom').checked) actions.push('custom');

    const properties = [];
    if (document.getElementById('property-immortal').checked) properties.push('immortal');
    if (document.getElementById('property-suicide').checked) properties.push('suicide');
    if (document.getElementById('property-detective').checked) properties.push('detective');
    if (document.getElementById('property-innocent').checked) properties.push('innocent');

    let primaryAction = 'none';
    if (actions.includes('kill')) primaryAction = 'kill';
    else if (actions.includes('heal')) primaryAction = 'heal';
    else if (actions.includes('search')) primaryAction = 'search';
    else if (actions.includes('block')) primaryAction = 'block';
    else if (actions.includes('passive')) primaryAction = 'passive';
    else if (actions.includes('custom')) primaryAction = 'custom';

    const customActionDesc = document.getElementById('custom-action-description').value.trim();

    const newRole = {
        name: name,
        description: description || (currentLanguage === 'ru' ? 'Кастомная роль' : 'Custom role'),
        action: primaryAction,
        type: type,
        isCustom: true,
        actions: actions,
        properties: properties,
        customActionDescription: customActionDesc
    };

    gameData.roles.push(newRole);
    updateRolesList();
    saveData();
    cancelCustomRole();

    addToLog(`➕ ${currentLanguage === 'ru' ? 'Создана новая роль:' : 'New role created:'} ${name}`);
}

// Управление ролями
function updateRolesList() {
    const container = document.getElementById('roles-list');
    if (!container) return;

    container.innerHTML = '';

    gameData.roles.forEach((role, index) => {
        const roleDiv = document.createElement('div');
        roleDiv.className = 'role-item';

        const actionsText = role.actions && role.actions.length > 0 ?
            role.actions.map(action => {
                const actionTranslations = {
                    'kill': currentLanguage === 'ru' ? 'Убийство' : 'Kill',
                    'heal': currentLanguage === 'ru' ? 'Лечение' : 'Heal',
                    'search': currentLanguage === 'ru' ? 'Проверка' : 'Search',
                    'block': currentLanguage === 'ru' ? 'Блокировка' : 'Block',
                    'passive': currentLanguage === 'ru' ? 'Пассивная' : 'Passive',
                    'custom': currentLanguage === 'ru' ? 'Особая' : 'Custom'
                };
                return actionTranslations[action] || action;
            }).join(', ') : (currentLanguage === 'ru' ? 'Нет действий' : 'No actions');

        const typeColor = role.type === 'mafia' ? '#ff4757' :
                        role.type === 'neutral' ? '#ffa726' : '#2ed573';

        const typeNames = {
            'mafia': currentLanguage === 'ru' ? 'Мафия' : 'Mafia',
            'neutral': currentLanguage === 'ru' ? 'Нейтрал' : 'Neutral',
            'town': currentLanguage === 'ru' ? 'Мирная' : 'Town'
        };

        const typeName = typeNames[role.type] || role.type;

        roleDiv.innerHTML = `
            <div class="role-details">
                <div class="role-header">
                    <input type="text" class="role-name-input" value="${role.name}"
                           onchange="updateRoleName(${index}, this.value)"
                           ${!role.isCustom ? 'readonly style="background: rgba(255,255,255,0.05);"' : ''}>
                    <div class="role-type-badge" style="border-color: ${typeColor}; color: ${typeColor};">
                        ${typeName}
                    </div>
                    ${role.isCustom ? `<div class="role-type-badge" style="border-color: #ff6b6b; color: #ff6b6b;">${currentLanguage === 'ru' ? 'Кастом' : 'Custom'}</div>` : ''}
                </div>
                <div class="role-description">${role.description}</div>
                <div style="font-size: 12px; color: #aaa;">
                    ${currentLanguage === 'ru' ? 'Действия:' : 'Actions:'} ${actionsText}
                    ${role.customActionDescription ? `<br>${currentLanguage === 'ru' ? 'Особое:' : 'Special:'} ` + role.customActionDescription : ''}
                </div>
            </div>
            <div class="role-actions">
                ${role.isCustom ? `<button class="warning" onclick="editCustomRole(${index})">✏️</button>` : ''}
                ${role.isCustom ? `<button class="danger" onclick="removeRole(${index})">❌</button>` : ''}
            </div>
        `;
        container.appendChild(roleDiv);
    });
}

function editCustomRole(index) {
    const role = gameData.roles[index];
    if (!role.isCustom) return;

    document.getElementById('new-role-name').value = role.name;
    document.getElementById('new-role-description').value = role.description;
    document.getElementById('new-role-type').value = role.type;
    document.getElementById('custom-action-description').value = role.customActionDescription || '';

    document.getElementById('action-kill').checked = role.actions.includes('kill');
    document.getElementById('action-heal').checked = role.actions.includes('heal');
    document.getElementById('action-search').checked = role.actions.includes('search');
    document.getElementById('action-block').checked = role.actions.includes('block');
    document.getElementById('action-passive').checked = role.actions.includes('passive');
    document.getElementById('action-custom').checked = role.actions.includes('custom');

    document.getElementById('property-immortal').checked = role.properties.includes('immortal');
    document.getElementById('property-suicide').checked = role.properties.includes('suicide');
    document.getElementById('property-detective').checked = role.properties.includes('detective');
    document.getElementById('property-innocent').checked = role.properties.includes('innocent');

    document.getElementById('custom-action-details').style.display =
        role.actions.includes('custom') ? 'block' : 'none';

    gameData.roles.splice(index, 1);
    updateRolesList();
    showCustomRoleForm();
}

function updateRoleName(index, newName) {
    if (gameData.roles[index].isCustom) {
        gameData.roles[index].name = newName;
        saveData();
    }
}

function removeRole(index) {
    if (gameData.roles[index].isCustom && confirm(currentLanguage === 'ru' ? 'Удалить кастомную роль?' : 'Delete custom role?')) {
        const roleName = gameData.roles[index].name;
        gameData.roles.splice(index, 1);
        updateRolesList();
        saveData();
        addToLog(`❌ ${currentLanguage === 'ru' ? 'Удалена роль:' : 'Role deleted:'} ${roleName}`);
    }
}

function resetRoles() {
    if (confirm(currentLanguage === 'ru' ? 'Сбросить роли к стандартным? Все кастомные роли будут удалены!' : 'Reset roles to default? All custom roles will be deleted!')) {
        if (currentLanguage === 'ru') {
            gameData.roles = [
                { name: 'Дон Мафии', action: 'search', description: 'Ищет шерифа, выбирает жертву', type: 'mafia', isCustom: false, actions: ['kill', 'search'], properties: [] },
                { name: 'Мафия', action: 'kill', description: 'Выбирает жертву', type: 'mafia', isCustom: false, actions: ['kill'], properties: [] },
                { name: 'Шериф', action: 'search', description: 'Ищет мафию', type: 'town', isCustom: false, actions: ['search'], properties: [] },
                { name: 'Врач', action: 'heal', description: 'Лечит игрока', type: 'town', isCustom: false, actions: ['heal'], properties: [] },
                { name: 'Серийный убийца', action: 'kill', description: 'Может убить или пропустить ход', type: 'neutral', isCustom: false, actions: ['kill'], properties: [] },
                { name: 'Бабушка', action: 'passive', description: 'Убивает всех, кто к ней приходит', type: 'town', isCustom: false, actions: ['passive'], properties: ['immortal'] },
                { name: 'Мирный житель', action: 'none', description: 'Не имеет ночных действий', type: 'town', isCustom: false, actions: [], properties: [] }
            ];
        } else {
            gameData.roles = [
                { name: 'Mafia Boss', action: 'search', description: 'Searches for Sheriff, chooses victim', type: 'mafia', isCustom: false, actions: ['kill', 'search'], properties: [] },
                { name: 'Mafia', action: 'kill', description: 'Chooses victim', type: 'mafia', isCustom: false, actions: ['kill'], properties: [] },
                { name: 'Sheriff', action: 'search', description: 'Searches for mafia', type: 'town', isCustom: false, actions: ['search'], properties: [] },
                { name: 'Doctor', action: 'heal', description: 'Heals player', type: 'town', isCustom: false, actions: ['heal'], properties: [] },
                { name: 'Serial Killer', action: 'kill', description: 'Can kill or skip turn', type: 'neutral', isCustom: false, actions: ['kill'], properties: [] },
                { name: 'Granny', action: 'passive', description: 'Kills everyone who visits her', type: 'town', isCustom: false, actions: ['passive'], properties: ['immortal'] },
                { name: 'Townspeople', action: 'none', description: 'No night actions', type: 'town', isCustom: false, actions: [], properties: [] }
            ];
        }
        updateRolesList();
        saveData();
        addToLog(`🔄 ${currentLanguage === 'ru' ? 'Роли сброшены к стандартным' : 'Roles reset to default'}`);
    }
}

// Настройка игроков
function setupPlayers() {
    const count = parseInt(document.getElementById('playerCount').value);
    gameData.players = [];

    const defaultRole = currentLanguage === 'ru' ? 'Мирный житель' : 'Townspeople';

    for (let i = 1; i <= count; i++) {
        gameData.players.push({
            number: i,
            role: defaultRole,
            alive: true,
            votes: 0
        });
    }

    updatePlayersSetup();
    document.getElementById('players-setup').classList.remove('hidden');
}

function updatePlayersSetup() {
    const container = document.getElementById('players-grid');
    if (!container) return;

    container.innerHTML = '';

    gameData.players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player-card';
        playerDiv.innerHTML = `
            <div>${t('player')} ${player.number}</div>
            <select onchange="updatePlayerRole(${index}, this.value)">
                ${gameData.roles.map(role =>
                    `<option value="${role.name}" ${player.role === role.name ? 'selected' : ''}>${role.name}</option>`
                ).join('')}
            </select>
        `;
        container.appendChild(playerDiv);
    });
}

function updatePlayerRole(index, role) {
    gameData.players[index].role = role;
    saveData();
}

// Начало игры
function startGame() {
    gameData.currentPhase = 'day';
    gameData.nightActions = {};
    gameData.nominatedPlayers = [];
    gameData.lastHealed = null;
    gameData.customActions = {};
    updateGameInterface();
    showTab('game');
    addToLog(t('gameStarted'));
}

function updateGameInterface() {
    updateGamePlayers();
    updateVotingSection();
    updateEliminateSelect();
    updateNominateSelect();
    updateRolesReference();
    updateErrorCorrectionSelects();
}

function updateRolesReference() {
    const container = document.getElementById('roles-reference');
    if (!container) return;

    container.innerHTML = '';

    gameData.players.forEach(player => {
        const role = gameData.roles.find(r => r.name === player.role);
        const roleDiv = document.createElement('div');
        roleDiv.className = `role-reference-item ${player.alive ? '' : 'dead'} ${role?.isCustom ? 'custom' : ''}`;
        roleDiv.innerHTML = `
            <div class="role-number">${t('player')} ${player.number}</div>
            <div class="role-name">${player.role}${role?.isCustom ? ` (${currentLanguage === 'ru' ? 'кастом' : 'custom'})` : ''}</div>
        `;
        container.appendChild(roleDiv);
    });
}

function updateGamePlayers() {
    const container = document.getElementById('game-players');
    if (!container) return;

    container.innerHTML = '';

    gameData.players.forEach(player => {
        const role = gameData.roles.find(r => r.name === player.role);
        const playerDiv = document.createElement('div');
        playerDiv.className = `player-card ${player.alive ? 'alive' : 'dead'}`;
        playerDiv.innerHTML = `
            <div>${t('player')} ${player.number}</div>
            <div>${player.role}${role?.isCustom ? ' 🔧' : ''}</div>
            <div>${player.alive ? t('alive') : t('dead')}</div>
        `;
        container.appendChild(playerDiv);
    });
}

function updateErrorCorrectionSelects() {
    const reviveSelect = document.getElementById('revivePlayer');
    reviveSelect.innerHTML = `<option value="">${currentLanguage === 'ru' ? 'Воскресить игрока' : 'Revive player'}</option>`;
    gameData.players.filter(p => !p.alive).forEach(player => {
        const option = document.createElement('option');
        option.value = player.number;
        option.textContent = `${t('player')} ${player.number} (${player.role})`;
        reviveSelect.appendChild(option);
    });

    const changeRoleSelect = document.getElementById('changeRolePlayer');
    changeRoleSelect.innerHTML = `<option value="">${currentLanguage === 'ru' ? 'Сменить роль игрока' : 'Change player role'}</option>`;
    gameData.players.forEach(player => {
        const option = document.createElement('option');
        option.value = player.number;
        option.textContent = `${t('player')} ${player.number} (${player.role}) ${player.alive ? '✅' : '💀'}`;
        changeRoleSelect.appendChild(option);
    });

    const newRoleSelect = document.getElementById('newRoleForPlayer');
    newRoleSelect.innerHTML = `<option value="">${currentLanguage === 'ru' ? 'Новая роль' : 'New role'}</option>`;
    gameData.roles.forEach(role => {
        const option = document.createElement('option');
        option.value = role.name;
        option.textContent = role.name;
        newRoleSelect.appendChild(option);
    });
}

function revivePlayer() {
    const playerNumber = parseInt(document.getElementById('revivePlayer').value);
    if (playerNumber) {
        const player = gameData.players.find(p => p.number === playerNumber);
        if (player) {
            player.alive = true;
            addToLog(`♻️ ${t('player')} ${playerNumber} (${player.role}) ${currentLanguage === 'ru' ? 'воскрешён (исправление)' : 'revived (correction)'}`);
            updateGameInterface();
            saveData();
        }
    }
}

function changePlayerRole() {
    const playerNumber = parseInt(document.getElementById('changeRolePlayer').value);
    const newRole = document.getElementById('newRoleForPlayer').value;

    if (playerNumber && newRole) {
        const player = gameData.players.find(p => p.number === playerNumber);
        if (player) {
            const oldRole = player.role;
            player.role = newRole;
            addToLog(`🔄 ${t('player')} ${playerNumber}: "${oldRole}" → "${newRole}"`);
            updateGameInterface();
            saveData();
        }
    }
}

function updateNominateSelect() {
    const select = document.getElementById('nominatePlayer');
    if (!select) return;

    select.innerHTML = `<option value="">${t('selectPlayerNomination')}</option>`;

    gameData.players.filter(p => p.alive && !gameData.nominatedPlayers.includes(p.number)).forEach(player => {
        const option = document.createElement('option');
        option.value = player.number;
        option.textContent = `${t('player')} ${player.number} (${player.role})`;
        select.appendChild(option);
    });
}

function nominatePlayer() {
    const playerNumber = parseInt(document.getElementById('nominatePlayer').value);
    if (playerNumber && !gameData.nominatedPlayers.includes(playerNumber)) {
        gameData.nominatedPlayers.push(playerNumber);
        updateNominatedPlayersDisplay();
        updateNominateSelect();
        updateVotingSection();
        addToLog(`📋 ${t('player')} ${playerNumber} ${currentLanguage === 'ru' ? 'номинирован на голосование' : 'nominated for voting'}`);
        saveData();
    }
}

function updateNominatedPlayersDisplay() {
    const container = document.getElementById('nominated-players');
    if (!container) return;

    if (gameData.nominatedPlayers.length === 0) {
        container.innerHTML = `<div style="color: #ccc; font-style: italic;">${t('noNominatedPlayers')}</div>`;
        return;
    }

    container.innerHTML = `<div style="margin-bottom: 10px;"><strong>${t('nominatedPlayers')}</strong></div>`;
    gameData.nominatedPlayers.forEach(playerNumber => {
        const player = gameData.players.find(p => p.number === playerNumber);
        if (player && player.alive) {
            const nominatedDiv = document.createElement('div');
            nominatedDiv.className = 'nominated-player';
            nominatedDiv.innerHTML = `
                ${t('player')} ${playerNumber}
                <button class="remove-nomination" onclick="removeNomination(${playerNumber})">×</button>
            `;
            container.appendChild(nominatedDiv);
        }
    });
}

function removeNomination(playerNumber) {
    gameData.nominatedPlayers = gameData.nominatedPlayers.filter(num => num !== playerNumber);
    updateNominatedPlayersDisplay();
    updateNominateSelect();
    updateVotingSection();
    hideVotingResults();
    hideEliminationSection();
    addToLog(`📋 ${t('player')} ${playerNumber} ${currentLanguage === 'ru' ? 'исключен из номинации' : 'removed from nomination'}`);
    saveData();
}

function clearNominations() {
    if (confirm(currentLanguage === 'ru' ? 'Очистить все номинации?' : 'Clear all nominations?')) {
        gameData.nominatedPlayers = [];
        updateNominatedPlayersDisplay();
        updateNominateSelect();
        updateVotingSection();
        hideVotingResults();
        hideEliminationSection();
        addToLog(`🗑️ ${currentLanguage === 'ru' ? 'Все номинации очищены' : 'All nominations cleared'}`);
        saveData();
    }
}

function updateVotingSection() {
    const container = document.getElementById('voting-section');
    if (!container) return;

    if (gameData.nominatedPlayers.length === 0) {
        container.innerHTML = `<div style="color: #ccc; font-style: italic;">${t('firstNominateMessage')}</div>`;
        return;
    }

    const alivePlayers = gameData.players.filter(p => p.alive).length;
    const totalVotes = gameData.nominatedPlayers.reduce((sum, playerNumber) => {
        const player = gameData.players.find(p => p.number === playerNumber);
        return sum + (player ? (player.votes || 0) : 0);
    }, 0);

    container.innerHTML = `
        <div class="voting-only-nominated">
            <h4>${t('votingOnlyNominated')}</h4>
            <div style="text-align: center; margin: 10px 0; color: #ffd700;">
                ${t('voted')} ${totalVotes} ${t('of')} ${alivePlayers} ${t('players')}
                ${totalVotes >= alivePlayers ? ` ✅ ${t('votingCompleted')}` : ''}
            </div>
        </div>
    `;

    gameData.nominatedPlayers.forEach(playerNumber => {
        const player = gameData.players.find(p => p.number === playerNumber);
        if (player && player.alive) {
            const voteDiv = document.createElement('div');
            voteDiv.className = 'vote-counter';
            voteDiv.innerHTML = `
                <span style="min-width: 80px;">${t('player')} ${player.number}:</span>
                <div class="vote-buttons">
                    <button class="vote-btn minus" onclick="changeVotes(${player.number}, -1)">−</button>
                    <input type="number" value="${player.votes}" min="0" max="${alivePlayers}"
                           onchange="updateVotes(${player.number}, this.value)"
                           style="width: 50px;">
                    <button class="vote-btn" onclick="changeVotes(${player.number}, 1)">+</button>
                </div>
                <span>${t('votes')} (${t('maxVotes')} ${alivePlayers})</span>
            `;
            container.appendChild(voteDiv);
        }
    });

    if (totalVotes >= alivePlayers) {
        const completedDiv = document.createElement('div');
        completedDiv.innerHTML = `
            <div style="background: rgba(46, 213, 115, 0.2); border: 2px solid #2ed573;
                        border-radius: 10px; padding: 15px; margin: 15px 0; text-align: center;">
                <strong>✅ ${currentLanguage === 'ru' ? 'Голосование завершено! Результаты подсчитаны автоматически.' : 'Voting completed! Results calculated automatically.'}</strong>
            </div>
        `;
        container.appendChild(completedDiv);
    }
}

function changeVotes(playerNumber, change) {
    const player = gameData.players.find(p => p.number === playerNumber);
    if (player) {
        const alivePlayers = gameData.players.filter(p => p.alive).length;
        const newVotes = Math.max(0, (player.votes || 0) + change);
        player.votes = Math.min(newVotes, alivePlayers);
        updateVotingSection();
        checkVotingComplete();
        saveData();
    }
}

function updateVotes(playerNumber, votes) {
    const player = gameData.players.find(p => p.number === playerNumber);
    if (player) {
        const alivePlayers = gameData.players.filter(p => p.alive).length;
        player.votes = Math.min(Math.max(0, parseInt(votes) || 0), alivePlayers);
        updateVotingSection();
        checkVotingComplete();
        saveData();
    }
}

function checkVotingComplete() {
    const alivePlayers = gameData.players.filter(p => p.alive).length;
    const totalVotes = gameData.nominatedPlayers.reduce((sum, playerNumber) => {
        const player = gameData.players.find(p => p.number === playerNumber);
        return sum + (player ? (player.votes || 0) : 0);
    }, 0);

    if (totalVotes >= alivePlayers) {
        setTimeout(() => {
            calculateVotingResults();
            showEliminationSection();
        }, 500);
    }
}

function calculateVotingResults() {
    const results = gameData.nominatedPlayers.map(playerNumber => {
        const player = gameData.players.find(p => p.number === playerNumber);
        return {
            number: playerNumber,
            votes: player ? (player.votes || 0) : 0,
            role: player ? player.role : 'Unknown'
        };
    }).sort((a, b) => b.votes - a.votes);

    if (results.length === 0) return;

    const maxVotes = results[0].votes;
    const winners = results.filter(r => r.votes === maxVotes);

    let resultMessage = `📊 ${currentLanguage === 'ru' ? 'Результаты голосования:' : 'Voting results:'}\n`;
    results.forEach(result => {
        resultMessage += `${t('player')} ${result.number}: ${result.votes} ${t('votes')}\n`;
    });

    if (winners.length === 1) {
        resultMessage += `\n🏆 ${currentLanguage === 'ru' ? 'Больше всего голосов:' : 'Most votes:'} ${t('player')} ${winners[0].number} (${winners[0].votes} ${t('votes')})`;
        if (winners[0].votes > 0) {
            resultMessage += `\n⚠️ ${currentLanguage === 'ru' ? 'Рекомендуется исключить' : 'Recommend eliminating'} ${t('player')} ${winners[0].number}`;
        }
    } else if (winners.length > 1) {
        const winnerNumbers = winners.map(w => w.number).join(', ');
        resultMessage += `\n🤝 ${currentLanguage === 'ru' ? 'Ничья между игроками:' : 'Tie between players:'} ${winnerNumbers} (${currentLanguage === 'ru' ? 'по' : 'each'} ${maxVotes} ${t('votes')})`;
    }

    addToLog(resultMessage);
    showVotingResults(results, winners);
}

function showVotingResults(results, winners) {
    const container = document.getElementById('voting-results-content');
    const section = document.getElementById('voting-results-section');

    if (!container || !section) return;

    let content = '<div style="margin-bottom: 15px;">';
    results.forEach(result => {
        const isWinner = winners.some(w => w.number === result.number);
        content += `<div style="margin: 5px 0; ${isWinner ? 'color: #ffd700; font-weight: bold;' : ''}">
            ${t('player')} ${result.number}: ${result.votes} ${t('votes')} ${isWinner && result.votes > 0 ? '🏆' : ''}
        </div>`;
    });
    content += '</div>';

    if (winners.length === 1 && winners[0].votes > 0) {
        content += `<div style="background: rgba(255, 215, 0, 0.2); border-radius: 8px; padding: 10px; text-align: center;">
            <strong>🏆 ${t('player')} ${winners[0].number} ${currentLanguage === 'ru' ? 'получил больше всего голосов' : 'received the most votes'} (${winners[0].votes})</strong>
        </div>`;
    } else if (winners.length > 1) {
        const winnerNumbers = winners.map(w => w.number).join(', ');
        content += `<div style="background: rgba(255, 165, 0, 0.2); border-radius: 8px; padding: 10px; text-align: center;">
            <strong>🤝 ${currentLanguage === 'ru' ? 'Ничья между игроками:' : 'Tie between players:'} ${winnerNumbers}</strong>
        </div>`;
    } else {
        content += `<div style="background: rgba(128, 128, 128, 0.2); border-radius: 8px; padding: 10px; text-align: center;">
            <strong>😴 ${currentLanguage === 'ru' ? 'Никто не получил голосов' : 'No one received votes'}</strong>
        </div>`;
    }

    container.innerHTML = content;
    section.classList.remove('hidden');
}

function hideVotingResults() {
    document.getElementById('voting-results-section').classList.add('hidden');
}

function showEliminationSection() {
    updateEliminateSelect();
    document.getElementById('elimination-section').classList.remove('hidden');
}

function hideEliminationSection() {
    document.getElementById('elimination-section').classList.add('hidden');
}

function resetVotes() {
    gameData.nominatedPlayers.forEach(playerNumber => {
        const player = gameData.players.find(p => p.number === playerNumber);
        if (player) player.votes = 0;
    });
    updateVotingSection();
    hideVotingResults();
    hideEliminationSection();
    addToLog(`🔄 ${currentLanguage === 'ru' ? 'Голоса сброшены' : 'Votes reset'}`);
    saveData();
}

function updateEliminateSelect() {
    const select = document.getElementById('eliminatePlayer');
    if (!select) return;

    select.innerHTML = `<option value="">${t('selectPlayerElimination')}</option>`;

    gameData.players.filter(p => p.alive).forEach(player => {
        const option = document.createElement('option');
        option.value = player.number;
        option.textContent = `${t('player')} ${player.number} (${player.role})`;
        select.appendChild(option);
    });
}

function eliminatePlayer() {
    const playerNumber = parseInt(document.getElementById('eliminatePlayer').value);
    if (playerNumber) {
        const player = gameData.players.find(p => p.number === playerNumber);
        if (player) {
            player.alive = false;
            addToLog(`❌ ${t('player')} ${playerNumber} (${player.role}) ${currentLanguage === 'ru' ? 'исключен из игры' : 'eliminated from game'}`);

            hideVotingResults();
            hideEliminationSection();

            gameData.nominatedPlayers = [];
            gameData.players.forEach(p => p.votes = 0);

            updateGameInterface();
            checkGameEnd();
        }
    }
}

// Ночная фаза
function startNight() {
    gameData.currentPhase = 'night';
    gameData.nightActions = {};
    gameData.customActions = {};

    hideVotingResults();
    hideEliminationSection();
    gameData.nominatedPlayers = [];
    gameData.players.forEach(p => p.votes = 0);

    updateNightActions();
    document.getElementById('night-section').classList.remove('hidden');
    addToLog(t('nightFalls'));
}

function updateNightActions() {
    const container = document.getElementById('night-actions');
    if (!container) return;

    container.innerHTML = '';

    const defaultRole = currentLanguage === 'ru' ? 'Мирный житель' : 'Townspeople';
    const activeRoles = gameData.players.filter(p => p.alive && p.role !== defaultRole);

    activeRoles.forEach(player => {
        const role = gameData.roles.find(r => r.name === player.role);
        if (role && role.actions && role.actions.length > 0) {
            const actionDiv = document.createElement('div');
            actionDiv.className = `role-action ${role.isCustom ? 'custom-action' : ''}`;

            let actionHTML = `<h3>${t('player')} ${player.number} (${player.role})${role.isCustom ? ' 🔧' : ''}</h3>`;

            role.actions.forEach(action => {
                if (action === 'search') {
                    actionHTML += `
                        <div style="margin: 10px 0;">
                            <strong>${t('checkPlayer')}</strong><br>
                            <select id="search-${player.number}" onchange="showSearchHint(${player.number}, this.value)">
                                <option value="">${t('selectPlayer')}</option>
                                ${gameData.players.filter(p => p.alive && p.number !== player.number)
                                    .map(p => `<option value="${p.number}">${t('player')} ${p.number}</option>`).join('')}
                            </select>
                            <div id="search-hint-${player.number}" class="search-hint hidden"></div>
                            <div>${t('result')}:
                                <button onclick="setSearchResult(${player.number}, 'yes')">${t('yes')}</button>
                                <button onclick="setSearchResult(${player.number}, 'no')">${t('no')}</button>
                            </div>
                            <div id="search-result-${player.number}"></div>
                        </div>
                    `;
                } else if (action === 'kill') {
                    actionHTML += `
                        <div style="margin: 10px 0;">
                            <strong>${t('killPlayer')}</strong><br>
                            <select id="kill-${player.number}">
                                <option value="">${t('selectTarget')}</option>
                                ${gameData.players.filter(p => p.alive && p.number !== player.number)
                                    .map(p => `<option value="${p.number}">${t('player')} ${p.number}</option>`).join('')}
                            </select>
                        </div>
                    `;
                } else if (action === 'heal') {
                    const availablePlayers = gameData.players.filter(p => p.alive &&
                        (gameData.lastHealed !== p.number || p.number === player.number));

                    actionHTML += `
                        <div style="margin: 10px 0;">
                            <strong>${t('healPlayer')}</strong><br>
                            <select id="heal-${player.number}">
                                <option value="">${t('selectPatient')}</option>
                                ${availablePlayers.map(p =>
                                    `<option value="${p.number}">${t('player')} ${p.number} (${p.role})</option>`
                                ).join('')}
                            </select>
                            <div style="font-size: 0.9em; color: #ffd700; margin-top: 5px;">
                                ${gameData.lastHealed ? `${t('lastNightHealed')} ${t('player')} ${gameData.lastHealed}` : t('noOneHealedLastNight')}
                                <br>${t('availableForHealing')}: ${availablePlayers.map(p => p.number).join(', ')}
                            </div>
                        </div>
                    `;
                } else if (action === 'block') {
                    actionHTML += `
                        <div style="margin: 10px 0;">
                            <strong>${t('blockPlayer')}</strong><br>
                            <select id="block-${player.number}">
                                <option value="">${t('selectTargetToBlock')}</option>
                                ${gameData.players.filter(p => p.alive && p.number !== player.number)
                                    .map(p => `<option value="${p.number}">${t('player')} ${p.number}</option>`).join('')}
                            </select>
                        </div>
                    `;
                } else if (action === 'passive') {
                    actionHTML += `
                        <div style="margin: 10px 0;">
                            <strong>${t('passiveAbility')}</strong><br>
                            <span style="color: #ccc;">${role.name} ${t('waitingForGuests')}</span>
                        </div>
                    `;
                } else if (action === 'custom') {
                    actionHTML += `
                        <div style="margin: 10px 0;">
                            <strong>${t('specialAction')}</strong><br>
                            <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 5px; margin: 5px 0;">
                                ${role.customActionDescription || (currentLanguage === 'ru' ? 'Кастомное действие' : 'Custom action')}
                            </div>
                            <select id="custom-target-${player.number}">
                                <option value="">${t('selectTargetIfNeeded')}</option>
                                ${gameData.players.filter(p => p.alive && p.number !== player.number)
                                    .map(p => `<option value="${p.number}">${t('player')} ${p.number}</option>`).join('')}
                            </select>
                            <textarea id="custom-action-${player.number}" class="custom-action-input"
                                      placeholder="${t('describeAction')}"></textarea>
                        </div>
                    `;
                }
            });

            actionDiv.innerHTML = actionHTML;
            container.appendChild(actionDiv);
        }
    });
}

function showSearchHint(searcherNumber, targetNumber) {
    if (!targetNumber) {
        const hintDiv = document.getElementById(`search-hint-${searcherNumber}`);
        if (hintDiv) hintDiv.classList.add('hidden');
        return;
    }

    const searcher = gameData.players.find(p => p.number === searcherNumber);
    const target = gameData.players.find(p => p.number === parseInt(targetNumber));

    if (!searcher || !target) return;

    const hintDiv = document.getElementById(`search-hint-${searcherNumber}`);
    if (!hintDiv) return;

    let answer = '';
    let answerClass = '';

    const searcherRole = gameData.roles.find(r => r.name === searcher.role);
    const targetRole = gameData.roles.find(r => r.name === target.role);

    const sheriffNames = currentLanguage === 'ru' ? ['Шериф'] : ['Sheriff'];
    const mafiaNames = currentLanguage === 'ru' ? ['Мафия', 'Дон Мафии'] : ['Mafia', 'Mafia Boss'];
    const donNames = currentLanguage === 'ru' ? ['Дон Мафии'] : ['Mafia Boss'];

    if (sheriffNames.includes(searcher.role)) {
        const isMafia = targetRole?.type === 'mafia' || mafiaNames.includes(target.role);
        const showsInnocent = targetRole?.properties?.includes('innocent');

        if (isMafia && !showsInnocent) {
            answer = t('yesMafia');
            answerClass = 'yes';
        } else {
            answer = t('notMafia');
            answerClass = 'no';
        }
    } else if (donNames.includes(searcher.role)) {
        if (sheriffNames.includes(target.role)) {
            answer = t('yesSheriff');
            answerClass = 'yes';
        } else {
            answer = t('notSheriff');
            answerClass = 'no';
        }
    } else if (searcherRole?.isCustom && searcherRole.actions.includes('search')) {
        answer = t('determineResultYourself');
        answerClass = '';
    }

    hintDiv.innerHTML = `${t('hint')} ${answer}`;
    hintDiv.className = `search-hint ${answerClass}`;
    hintDiv.classList.remove('hidden');
}

function setSearchResult(playerNumber, result) {
    const resultDiv = document.getElementById(`search-result-${playerNumber}`);
    if (resultDiv) {
        resultDiv.innerHTML = `<strong>${t('result')}: ${result === 'yes' ? t('yes') : t('no')}</strong>`;
    }

    if (!gameData.nightActions[playerNumber]) {
        gameData.nightActions[playerNumber] = {};
    }
    gameData.nightActions[playerNumber].searchResult = result;
}

function processNight() {
    const kills = [];
    const heals = [];
    const searches = [];
    const blocks = [];
    const customActions = [];
    let grannyVisitors = [];

    gameData.players.filter(p => p.alive).forEach(player => {
        const role = gameData.roles.find(r => r.name === player.role);
        if (!role || !role.actions || role.actions.length === 0) return;

        role.actions.forEach(action => {
            if (action === 'kill') {
                const targetElement = document.getElementById(`kill-${player.number}`);
                const target = targetElement ? targetElement.value : null;
                if (target) {
                    kills.push({ killer: player.number, target: parseInt(target), role: player.role });
                }
            } else if (action === 'heal') {
                const targetElement = document.getElementById(`heal-${player.number}`);
                const target = targetElement ? targetElement.value : null;
                if (target) {
                    heals.push({ healer: player.number, target: parseInt(target) });
                }
            } else if (action === 'search') {
                const targetElement = document.getElementById(`search-${player.number}`);
                const target = targetElement ? targetElement.value : null;
                if (target) {
                    searches.push({ searcher: player.number, target: parseInt(target), role: player.role });
                }
            } else if (action === 'block') {
                const targetElement = document.getElementById(`block-${player.number}`);
                const target = targetElement ? targetElement.value : null;
                if (target) {
                    blocks.push({ blocker: player.number, target: parseInt(target), role: player.role });
                }
            } else if (action === 'custom') {
                const targetElement = document.getElementById(`custom-target-${player.number}`);
                const actionElement = document.getElementById(`custom-action-${player.number}`);
                const target = targetElement ? targetElement.value : null;
                const actionDesc = actionElement ? actionElement.value : '';

                if (target || actionDesc) {
                    customActions.push({
                        actor: player.number,
                        target: target ? parseInt(target) : null,
                        description: actionDesc,
                        role: player.role
                    });
                }
            }
        });
    });

    const grannyNames = currentLanguage === 'ru' ? ['Бабушка'] : ['Granny'];
    const granny = gameData.players.find(p => p.alive && grannyNames.includes(p.role));
    if (granny) {
        kills.forEach(kill => {
            if (kill.target === granny.number) {
                grannyVisitors.push({ visitor: kill.killer, reason: 'kill' });
            }
        });
        heals.forEach(heal => {
            if (heal.target === granny.number) {
                grannyVisitors.push({ visitor: heal.healer, reason: 'heal' });
            }
        });
        searches.forEach(search => {
            if (search.target === granny.number) {
                grannyVisitors.push({ visitor: search.searcher, reason: 'search' });
            }
        });
        blocks.forEach(block => {
            if (block.target === granny.number) {
                grannyVisitors.push({ visitor: block.blocker, reason: 'block' });
            }
        });
        customActions.forEach(custom => {
            if (custom.target === granny.number) {
                grannyVisitors.push({ visitor: custom.actor, reason: 'custom' });
            }
        });
    }

    let nightLog = `${t('nightResults')}\n`;

    const playerEffects = {};

    gameData.players.forEach(player => {
        if (player.alive) {
            playerEffects[player.number] = {
                damage: 0,
                healing: 0,
                killers: [],
                healers: [],
                blocked: false,
                customEffects: []
            };
        }
    });

    blocks.forEach(block => {
        if (playerEffects[block.target]) {
            playerEffects[block.target].blocked = true;
            nightLog += `🚫 ${t('player')} ${block.target} ${currentLanguage === 'ru' ? 'заблокирован игроком' : 'blocked by player'} ${block.blocker} (${block.role})\n`;
        }
    });

    kills.forEach(kill => {
        if (playerEffects[kill.target] && !playerEffects[kill.killer]?.blocked) {
            playerEffects[kill.target].damage += 1;
            playerEffects[kill.target].killers.push(kill.role);
        }
    });

    grannyVisitors.forEach(visit => {
        if (playerEffects[visit.visitor]) {
            playerEffects[visit.visitor].damage += 1;
            playerEffects[visit.visitor].killers.push(currentLanguage === 'ru' ? 'Бабушка' : 'Granny');
        }
    });

    heals.forEach(heal => {
        const target = gameData.players.find(p => p.number === heal.target);
        const healer = gameData.players.find(p => p.number === heal.healer);

        if (playerEffects[heal.target] && !grannyNames.includes(target?.role) && !playerEffects[heal.healer]?.blocked) {
            playerEffects[heal.target].healing += 1;
            playerEffects[heal.target].healers.push(healer ? healer.role : (currentLanguage === 'ru' ? 'Врач' : 'Doctor'));
        }
    });

    if (heals.length > 0 && !playerEffects[heals[0].healer]?.blocked) {
        gameData.lastHealed = heals[0].target;
    }

    customActions.forEach(custom => {
        if (!playerEffects[custom.actor]?.blocked) {
            if (custom.target && playerEffects[custom.target]) {
                playerEffects[custom.target].customEffects.push({
                    from: custom.actor,
                    role: custom.role,
                    description: custom.description
                });
            }
            nightLog += `⚡ ${t('player')} ${custom.actor} (${custom.role}) ${currentLanguage === 'ru' ? 'выполнил особое действие' : 'performed special action'}`;
            if (custom.target) nightLog += ` ${currentLanguage === 'ru' ? 'на игрока' : 'on player'} ${custom.target}`;
            if (custom.description) nightLog += `: ${custom.description}`;
            nightLog += '\n';
        }
    });

    Object.keys(playerEffects).forEach(playerNumber => {
        const num = parseInt(playerNumber);
        const player = gameData.players.find(p => p.number === num);
        const effects = playerEffects[num];
        const role = gameData.roles.find(r => r.name === player?.role);

        if (!player || !player.alive) return;

        const isImmortal = role?.properties?.includes('immortal');
        if (isImmortal) return;

        const netDamage = effects.damage - effects.healing;

        if (netDamage > 0) {
            player.alive = false;
            const killersText = effects.killers.join(', ');
            nightLog += `💀 ${t('player')} ${num} (${player.role}) ${currentLanguage === 'ru' ? 'убит' : 'killed'} (${killersText})\n`;

            effects.killers.forEach(killerRole => {
                const killerPlayer = gameData.players.find(p => p.alive && p.role === killerRole);
                const killerRoleData = gameData.roles.find(r => r.name === killerRole);
                if (killerPlayer && killerRoleData?.properties?.includes('suicide')) {
                    killerPlayer.alive = false;
                    nightLog += `💀 ${t('player')} ${killerPlayer.number} (${killerRole}) ${currentLanguage === 'ru' ? 'умирает после использования способности' : 'dies after using ability'}\n`;
                }
            });
        } else if (effects.damage > 0 && effects.healing > 0) {
            const healersText = effects.healers.join(', ');
            nightLog += `💊 ${t('player')} ${num} ${currentLanguage === 'ru' ? 'вылечен' : 'healed by'} ${healersText}\n`;
        } else if (effects.healing > 0 && effects.damage === 0) {
            const healersText = effects.healers.join(', ');
            nightLog += `💊 ${t('player')} ${num} ${currentLanguage === 'ru' ? 'вылечен' : 'healed by'} ${healersText} (${currentLanguage === 'ru' ? 'профилактически' : 'preventively'})\n`;
        }

        if (effects.customEffects.length > 0) {
            effects.customEffects.forEach(effect => {
                nightLog += `⚡ ${currentLanguage === 'ru' ? 'На игрока' : 'On player'} ${num} ${currentLanguage === 'ru' ? 'подействовало особое действие от игрока' : 'was affected by special action from player'} ${effect.from} (${effect.role})\n`;
            });
        }
    });

    const grannyPlayer = gameData.players.find(p => p.alive && grannyNames.includes(p.role));
    if (grannyPlayer && grannyVisitors.length > 0) {
        nightLog += `🏠 ${currentLanguage === 'ru' ? 'К Бабушке' : 'To Granny'} (${t('player')} ${grannyPlayer.number}) ${currentLanguage === 'ru' ? 'приходили гости, но она неуязвима ночью' : 'came visitors, but she is immortal at night'}\n`;
    }

    searches.forEach(search => {
        if (!playerEffects[search.searcher]?.blocked) {
            const result = gameData.nightActions[search.searcher]?.searchResult || (currentLanguage === 'ru' ? 'неизвестно' : 'unknown');
            nightLog += `🔍 ${t('player')} ${search.searcher} (${search.role}) ${currentLanguage === 'ru' ? 'проверил игрока' : 'checked player'} ${search.target}: ${result}\n`;
        }
    });

    const anyDeaths = Object.values(playerEffects).some(effect => {
        const playerNum = Object.keys(playerEffects).find(key => playerEffects[key] === effect);
        const player = gameData.players.find(p => p.number === parseInt(playerNum));
        const role = gameData.roles.find(r => r.name === player?.role);
        const isImmortal = role?.properties?.includes('immortal');
        return player && !isImmortal && (effect.damage - effect.healing) > 0;
    });

    if (!anyDeaths && customActions.length === 0 && blocks.length === 0) {
        nightLog += `${t('peacefulNight')}\n`;
    }

    addToLog(nightLog);

    gameData.currentPhase = 'day';
    gameData.nominatedPlayers = [];
    gameData.players.forEach(p => p.votes = 0);
    document.getElementById('night-section').classList.add('hidden');
    updateGameInterface();
    checkGameEnd();
}

function checkGameEnd() {
    const alivePlayers = gameData.players.filter(p => p.alive);
    const mafiaNames = currentLanguage === 'ru' ? ['Мафия', 'Дон Мафии'] : ['Mafia', 'Mafia Boss'];
    const townNames = currentLanguage === 'ru' ? ['Мирный житель', 'Шериф', 'Врач', 'Бабушка'] : ['Townspeople', 'Sheriff', 'Doctor', 'Granny'];

    const mafiaPlayers = alivePlayers.filter(p => {
        const role = gameData.roles.find(r => r.name === p.role);
        return role?.type === 'mafia' || mafiaNames.includes(p.role);
    });
    const townPlayers = alivePlayers.filter(p => {
        const role = gameData.roles.find(r => r.name === p.role);
        return role?.type === 'town' || townNames.includes(p.role);
    });
    const neutralPlayers = alivePlayers.filter(p => {
        const role = gameData.roles.find(r => r.name === p.role);
        return role?.type === 'neutral';
    });

    if (mafiaPlayers.length === 0) {
        addToLog(t('townWins'));
        alert(currentLanguage === 'ru' ? 'Игра окончена! Победили мирные жители!' : 'Game over! Town wins!');
    } else if (mafiaPlayers.length >= townPlayers.length) {
        addToLog(t('mafiaWins'));
        alert(currentLanguage === 'ru' ? 'Игра окончена! Победила мафия!' : 'Game over! Mafia wins!');
    } else if (neutralPlayers.length > 0 && mafiaPlayers.length === 0 && townPlayers.length <= neutralPlayers.length) {
        addToLog(t('neutralWins'));
        alert(currentLanguage === 'ru' ? 'Игра окончена! Победили нейтральные роли!' : 'Game over! Neutral roles win!');
    }
}

// Функции таймера
function initializeTimer() {
    updateTimerDisplay();
    updateTimerButtons();
}

function setTimer(seconds) {
    if (timerRunning) return;

    document.querySelectorAll('.timer-preset').forEach(btn => btn.classList.remove('active'));

    timerSeconds = seconds;
    selectedPreset = seconds;
    updateTimerDisplay();
    updateTimerButtons();

    const presetBtn = document.querySelector(`[onclick="setTimer(${seconds})"]`);
    if (presetBtn) presetBtn.classList.add('active');

    addToLog(`⏱️ ${currentLanguage === 'ru' ? 'Установлен таймер на' : 'Timer set to'} ${formatTime(seconds)}`);
}

function startTimer() {
    if (timerSeconds <= 0) return;

    timerRunning = true;
    timerPaused = false;
    updateTimerButtons();
    updateTimerStatus();

    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        updateTimerStatus();

        if (timerSeconds <= 0) {
            finishTimer();
        }
    }, 1000);

    addToLog(`▶️ ${currentLanguage === 'ru' ? 'Таймер запущен' : 'Timer started'}`);
}

function pauseTimer() {
    if (!timerRunning) return;

    timerRunning = false;
    timerPaused = true;
    clearInterval(timerInterval);
    updateTimerButtons();
    updateTimerStatus();

    addToLog(`⏸️ ${currentLanguage === 'ru' ? 'Таймер приостановлен' : 'Timer paused'}`);
}

function stopTimer() {
    timerRunning = false;
    timerPaused = false;
    clearInterval(timerInterval);

    if (selectedPreset) {
        timerSeconds = selectedPreset;
    } else {
        timerSeconds = 0;
    }

    updateTimerDisplay();
    updateTimerButtons();
    updateTimerStatus();

    addToLog(`⏹️ ${currentLanguage === 'ru' ? 'Таймер остановлен' : 'Timer stopped'}`);
}

function addTime(seconds) {
    timerSeconds += seconds;
    updateTimerDisplay();

    addToLog(`➕ ${currentLanguage === 'ru' ? 'Добавлено времени:' : 'Time added:'} ${seconds}${currentLanguage === 'ru' ? 'с' : 's'}`);
}

function finishTimer() {
    timerRunning = false;
    timerPaused = false;
    clearInterval(timerInterval);
    timerSeconds = 0;

    updateTimerDisplay();
    updateTimerButtons();
    updateTimerStatus();

    if (soundEnabled) {
        playTimerSound();
    }

    document.querySelectorAll('.timer-preset').forEach(btn => btn.classList.remove('active'));
    selectedPreset = null;

    addToLog(`🔔 ${currentLanguage === 'ru' ? 'Время истекло!' : 'Time is up!'}`);
}

function updateTimerDisplay() {
    const display = document.getElementById('timer-display');
    if (display) {
        display.textContent = formatTime(timerSeconds);
    }

    const circle = document.querySelector('.timer-circle');
    if (circle) {
        circle.classList.remove('running', 'warning', 'danger');

        if (timerRunning) {
            if (timerSeconds <= 10) {
                circle.classList.add('danger');
            } else if (timerSeconds <= 30) {
                circle.classList.add('warning');
            } else {
                circle.classList.add('running');
            }
        }
    }
}

function updateTimerStatus() {
    const status = document.getElementById('timer-status');
    if (status) {
        if (timerRunning) {
            status.textContent = t('timerRunning');
        } else if (timerPaused) {
            status.textContent = t('timerPaused');
        } else if (timerSeconds === 0) {
            status.textContent = t('timerFinished');
        } else {
            status.textContent = t('timerReady');
        }
    }
}

function updateTimerButtons() {
    const startBtn = document.getElementById('startTimerBtn');
    const pauseBtn = document.getElementById('pauseTimerBtn');
    const stopBtn = document.getElementById('stopTimerBtn');
    const addBtns = document.querySelectorAll('.timer-add');
    const presetBtns = document.querySelectorAll('.timer-preset');

    if (startBtn) startBtn.disabled = timerRunning || timerSeconds <= 0;
    if (pauseBtn) pauseBtn.disabled = !timerRunning;
    if (stopBtn) stopBtn.disabled = !timerRunning && !timerPaused && timerSeconds === 0;

    addBtns.forEach(btn => btn.disabled = timerRunning && timerSeconds === 0);
    presetBtns.forEach(btn => btn.disabled = timerRunning);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function toggleSound() {
    soundEnabled = document.getElementById('soundEnabled').checked;
}

function playTimerSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Лог игры
function addToLog(message) {
    const timestamp = new Date().toLocaleTimeString();
    gameData.gameLog.push(`[${timestamp}] ${message}`);
    updateLogDisplay();
    saveData();
}

function updateLogDisplay() {
    const logDiv = document.getElementById('game-log');
    if (logDiv) {
        logDiv.innerHTML = gameData.gameLog.map(entry => `<div>${entry}</div>`).join('');
        logDiv.scrollTop = logDiv.scrollHeight;
    }
}

function clearLog() {
    if (confirm(currentLanguage === 'ru' ? 'Очистить лог игры?' : 'Clear game log?')) {
        gameData.gameLog = [];
        updateLogDisplay();
        saveData();
    }
}

// Инициализация
window.onload = function() {
    console.log('Приложение загружается...');
    loadData();
    initializeTimer();

    setTimeout(() => {
        applyLogo();
        applyBackground();
        applyColors();
        updateColorPreview();
    }, 100);
};

// Закрытие настроек при клике вне панели
document.addEventListener('click', function(event) {
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsToggle = document.querySelector('.settings-toggle');

    if (settingsPanel && settingsToggle &&
        !settingsPanel.contains(event.target) &&
        !settingsToggle.contains(event.target) &&
        settingsPanel.classList.contains('open')) {
        settingsPanel.classList.remove('open');
    }
});

// Обработка checkbox для кастомных действий
document.addEventListener('DOMContentLoaded', function() {
    const customActionCheckbox = document.getElementById('action-custom');
    if (customActionCheckbox) {
        customActionCheckbox.addEventListener('change', function() {
            const details = document.getElementById('custom-action-details');
            if (details) {
                details.style.display = this.checked ? 'block' : 'none';
            }
        });
    }
});

// Защита от случайного закрытия страницы
window.addEventListener('beforeunload', function(e) {
    if (gameData.currentPhase !== 'setup' && gameData.players.some(p => p.alive)) {
        e.preventDefault();
        e.returnValue = '';
        saveData(); // Сохраняем перед закрытием
        return '';
    }
});

// Автосохранение каждые 30 секунд
setInterval(function() {
    if (gameData.currentPhase !== 'setup') {
        saveData();
        console.log('Автосохранение выполнено');
    }
}, 30000);
