// 设置目标日期（4月7日）
function getNextBirthday() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthday = new Date(currentYear, 3, 7); // 月份从0开始，所以4月是3

    // 如果今年的生日已经过了，就计算明年的生日
    if (today > birthday) {
        birthday.setFullYear(currentYear + 1);
    }

    return birthday;
}

// 计算剩余时间
function calculateTimeLeft() {
    const now = new Date();
    const birthday = getNextBirthday();
    const difference = birthday - now;

    // 计算天数、小时、分钟和秒数
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

// 更新倒计时显示
function updateCountdown() {
    const timeLeft = calculateTimeLeft();

    // 更新DOM元素
    document.getElementById('days').textContent = String(timeLeft.days).padStart(2, '0');
    document.getElementById('hours').textContent = String(timeLeft.hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(timeLeft.minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(timeLeft.seconds).padStart(2, '0');
}

// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);

// 页面加载时立即更新一次
document.addEventListener('DOMContentLoaded', updateCountdown);