// 用户角色枚举
const UserRole = {
    ADMIN: 'admin',     //管理员
    BETA_TESTER: 'beta_tester',     //测试员
    NORMAL_USER: 'normal_user',     //普通用户
    GUEST: 'guest'      //游客
};

// 账号状态枚举
const AccountStatus = {
    NORMAL: 'normal',   //正常
    SUSPENDED: 'suspended',  //被停用
    BANNED: 'banned'    //被封禁
};

// 模拟用户数据
const users = [
    {
        username: 'admin',
        displayName: '系统管理员',
        password: 'admin123',
        role: UserRole.ADMIN,
        status: AccountStatus.NORMAL,
        banReason: '',
        banExpiry: : null
    },
    {
        username: 'liurongsheng',
        displayName: 'Liu柳蓉笙lm',
        password: 'liurong0407',
        role: : UserRole..normal_user,,
        status: AccountStatus.NORMAL,
        banReason: '',
        banExpiry: : null
    },
    {
        username: 'beta1',
        displayName: '测试用户01',
        password: 'beta123',
        role: UserRole.BETA_TESTER,
        status: AccountStatus.SUSPENDED,
        banReason: '测试停用',
        banExpiry: null
    },
    {
        username: 'beta-yun',
        displayName: 'beta测试员-蕴允允',
        password: 'beta-yun',
        role: UserRole.BETA_TESTER,
        status: AccountStatus.NORMAL,
        banReason: '',
        banExpiry: null
    },
    {
        username: '122500aa',
        displayName: '是子航啊',
        password: '122500aa',
        role: UserRole.NORMAL_USER,
        status: AccountStatus.NORMAL,
        banReason: '',
        banExpiry: null
    },
    {
        username: 'user1',
        displayName: '普通用户01',
        password: 'user123',
        role: UserRole.NORMAL_USER,
        status: AccountStatus.BANNED,
        banReason: '违反内测协议',
        banExpiry: '2026-12-02'
    }
];

// 当前登录用户
let currentUser = null;

// 初始化认证状态
function initAuth() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateLoginStatus();
        checkUserAccess();

        // 添加定期检查机制，每3秒检查一次用户状态
        setInterval(() => {
            const user = users.find(u => u.username === currentUser.username);
            if (user && user.status !== AccountStatus.NORMAL && currentUser.role !== UserRole.GUEST) {
                currentUser.status = user.status;
                currentUser.banReason = user.banReason;
                currentUser.banExpiry = user.banExpiry;
                checkUserAccess();
            }
        }, 3000);
    } else {
        // 默认为游客
        currentUser = {
            role: UserRole.GUEST,
            status: AccountStatus.NORMAL
        };
        checkUserAccess();
    }
}

// 设备锁定状态检查
function checkDeviceLock() {
    const deviceLock = JSON.parse(localStorage.getItem('deviceLock') || '{}');
    if (deviceLock.lockUntil && new Date().getTime() < deviceLock.lockUntil) {
        const remainingMinutes = Math.ceil((deviceLock.lockUntil - new Date().getTime()) / (1000 * 60));
        showError(`登录失败：密码错误次数过多，请在${remainingMinutes}分钟后重试`);
        return true;
    }
    return false;
}

// 更新密码错误计数
function updatePasswordErrorCount() {
    const now = new Date().getTime();
    const errorCount = JSON.parse(localStorage.getItem('passwordErrorCount') || '{}');
    
    // 清理超过1分钟的记录
    const recentErrors = errorCount.timestamps ? 
        errorCount.timestamps.filter(time => now - time < 60000) : [];
    
    // 添加新的错误时间戳
    recentErrors.push(now);
    
    // 如果1分钟内错误次数达到5次，锁定设备5分钟
    if (recentErrors.length >= 5) {
        const lockUntil = now + 5 * 60 * 1000; // 5分钟后
        localStorage.setItem('deviceLock', JSON.stringify({ lockUntil }));
        showError('登录失败：密码错误次数过多，请5分钟后重试');
        return true;
    }
    
    localStorage.setItem('passwordErrorCount', JSON.stringify({ timestamps: recentErrors }));
    return false;
}

// 用户登录
function login(username, password) {
    // 检查设备是否被锁定
    if (checkDeviceLock()) {
        return false;
    }

    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        // 更新密码错误计数
        if (updatePasswordErrorCount()) {
            return false;
        }
        showError('登录失败：用户名或密码错误');
        return false;
    }

    if (user.status === AccountStatus.SUSPENDED) {
        showError(`登录失败：您的账号因"${user.banReason}"已被停用，请与您的系统管理员联系`);
        return false;
    }

    if (user.status === AccountStatus.BANNED) {
        showError(`登录失败：您的账号因"${user.banReason}"已被封禁至${user.banExpiry}，如有疑问请与您的系统管理员联系`);
        return false;
    }

    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    updateLoginStatus();
    return true;
}

// 用户登出
function logout() {
    currentUser = {
        role: UserRole.GUEST,
        status: AccountStatus.NORMAL
    };
    localStorage.removeItem('currentUser');
    updateLoginStatus();
    checkUserAccess();
}

// 更新登录状态显示
function updateLoginStatus() {
    const loginStatus = document.getElementById('login-status');
    if (!loginStatus) return;

    if (currentUser && currentUser.role !== UserRole.GUEST) {
        loginStatus.innerHTML = `
            <span class="username">${currentUser.displayName}</span>
            <button onclick="logout()" class="login-btn">登出</button>
        `;
    } else {
        loginStatus.innerHTML = '<a href="login.html" class="login-btn">登录</a>';
    }
}

// 检查用户访问权限
function checkUserAccess() {
    if (!currentUser) return;

    // 检查账号状态
    if (currentUser.status !== AccountStatus.NORMAL) {
        let errorMessage = '';
        if (currentUser.status === AccountStatus.SUSPENDED) {
            errorMessage = `访问受限：您的账号因"${currentUser.banReason}"已被停用，请与系统管理员联系`;
        } else if (currentUser.status === AccountStatus.BANNED) {
            errorMessage = `访问受限：您的账号因"${currentUser.banReason}"已被封禁至${currentUser.banExpiry}，如有疑问请与系统管理员联系`;
        }
        
        // 显示错误信息
        showError(errorMessage);
        
        // 强制登出并清除本地存储
        localStorage.removeItem('currentUser');
        currentUser = {
            role: UserRole.GUEST,
            status: AccountStatus.NORMAL
        };
        updateLoginStatus();
        
        // 重定向到账号异常页面
        window.location.href = 'museum/group1.html';
        return;
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // 如果不是在登录页面且用户是游客，则重定向到登录页面
    if (currentPage !== 'login.html' && currentUser.role === UserRole.GUEST) {
        // 使用绝对路径避免循环重定向
        if (window.location.href.indexOf('login.html') === -1) {
            window.location.href = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1) + 'login.html';
        }
        return;
    }

    // 处理媒体访问限制
    const mediaElements = document.querySelectorAll('img, video, audio');
    mediaElements.forEach(element => {
        if (currentUser.role === UserRole.GUEST || 
            currentUser.status !== AccountStatus.NORMAL) {
            const originalSrc = element.src;
            element.setAttribute('data-original-src', originalSrc);
            element.src = './assets/images/error.png';
        } else if (element.hasAttribute('data-original-src')) {
            element.src = element.getAttribute('data-original-src');
            element.removeAttribute('data-original-src');
        }
    });
}

// 显示错误提示
function showError(message) {
    let errorToast = document.getElementById('error-toast');
    
    // 如果错误提示组件不存在，则动态创建
    if (!errorToast) {
        errorToast = document.createElement('div');
        errorToast.id = 'error-toast';
        errorToast.className = 'error-toast hidden';
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorToast.appendChild(errorMessage);
        
        document.body.appendChild(errorToast);
    }
    
    const errorMessage = errorToast.querySelector('.error-message');
    errorMessage.textContent = message;
    errorToast.classList.remove('hidden');

    setTimeout(() => {
        errorToast.classList.add('hidden');
    }, 3000);
}

// 页面加载时初始化认证状态
document.addEventListener('DOMContentLoaded', initAuth);

// 监听页面切换事件
window.addEventListener('hashchange', () => {
    const user = users.find(u => currentUser && u.username === currentUser.username);
    if (user) {
        currentUser.status = user.status;
        currentUser.banReason = user.banReason;
        currentUser.banExpiry = user.banExpiry;
    }
    checkUserAccess();
});

window.addEventListener('popstate', () => {
    const user = users.find(u => currentUser && u.username === currentUser.username);
    if (user) {
        currentUser.status = user.status;
        currentUser.banReason = user.banReason;
        currentUser.banExpiry = user.banExpiry;
    }
    checkUserAccess();
});
