// 图片组数据结构
const galleryGroups = [
    {
        date: '2023年12月2日',
        title: '我的节日，我们的节日',
        description: '这天是我们相识100天纪念日，同时也是你陪我度过的第一个生日，我很开心，也很幸福，可能就是那天，让我们对彼此有了更高的好感，为后来彼此的相爱打下了基础。我永远记得那天，我永远记得你，我永远爱你。',
        images: [
            {
                src: './assets/images/2023年12月/2023年12月2日/20231202-1.png',
                caption: '美好时刻 1'
            },
            {
                src: './assets/images/2023年12月/2023年12月2日/20231202-2.png',
                caption: '美好时刻 2'
            },
            {
                src: './assets/images/2023年12月/2023年12月2日/20231202-3.png',
                caption: '美好时刻 3'
            },
            {
                src: './assets/images/2023年12月/2023年12月2日/20231202-4.png',
                caption: '美好时刻 4'
            }
        ]
    },
    {
        date: '2024年1月24日',
        title: '游戏时光，有你便好',
        description: '我们在跑酷途中，停在一个热气球前，一起欣赏着日落；在树屋前欣赏花海；在路牌前拍下了照片，记录下我们的美好瞬间；还乘着马车，走在繁华的街上，我多希望时间能慢一点，再慢一点',
        images: [
            {
                src: './assets/images/2024年1月/2024年1月24日/20240124-1.png',
                caption: '云顶漫步'
            },
            {
                src: './assets/images/2024年1月/2024年1月24日/20240124-2.png',
                caption: '花海街拍'
            },
            {
                src: './assets/images/2024年1月/2024年1月24日/20240124-3.png',
                caption: '花海街拍'
            },
            {
                src: './assets/images/2024年1月/2024年1月24日/20240124-4.png',
                caption: '花海街拍'
            },
            {
                src: './assets/images/2024年1月/2024年1月24日/20240124-5.png',
                caption: '隔桥相望'
            },
            {
                src: './assets/images/2024年1月/2024年1月24日/20240124-6.png',
                caption: '落日对望'
            },
            {
                src: './assets/images/2024年1月/2024年1月24日/20240124-7.png',
                caption: '月初闪耀'
            }
        ]
    },
    {
        date: '2024年2月3日',
        title: '双人乐趣',
        description: '我们一起游玩我的地图，我触发了一个规则，导致我变成了你的样子，我们一起游玩了更深层的内容，特别开心',
        images: [
            {
                src: './assets/images/2024年2月/2024年2月3日/20240203-1.png',
                caption: '新春装饰'
            },
        ]
    },
    {
        date: '2024年2月21日',
        title: '共同巡查，双生双栖',
        description: '我们一起在地图里巡查，一起探索未知的世界。每一次相遇，都是我们共同成长的机会，每一次对话，都使得我们的感情更进一步。',
        images: [
            {
                src: './assets/images/2024年2月/2024年2月21日/20240221-1.jpg',
                caption: '双柳抱日'
            },
            {
                src: './assets/images/2024年2月/2024年2月21日/20240221-2.png',
                caption: '仙君共赴'
            },
            {
                src: './assets/images/2024年2月/2024年2月21日/20240221-3.jpg',
                caption: '双生双栖'
            },
        ]
    },
    {
        date: '2024年2月25日',
        title: '纯真的爱',
        description: '在这个阳光明媚的日子，我们来到风景如画的地方，记录下最美的瞬间。每一帧都定格了我们的幸福笑容。',
        images: [
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225-1.png',
                caption: '生存共房'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-1.png',
                caption:'花棚01'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-2.png',
                caption:'花棚02'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-3.png',
                caption:'花棚03'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-4.png',
                caption:'花棚04'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-5.png',
                caption:'阳台美景'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-6.png',
                caption:'房顶夜色近景'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-7.png',
                caption:'房顶夜色远景'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-8.png',
                caption:'房顶夜色远景侧方'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-9.png',
                caption:'房顶夜色远景后方'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-10.png',
                caption:'房顶夜色远景右侧方'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-11.png',
                caption:'房顶夜色近景侧方'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-12.png',
                caption:'阳台夜景'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-13.png',
                caption:'阳台白天近景'
            },
            {
                src: './assets/images/2024年2月/2024年2月25日/20240225（景色）-14.png',
                caption:'屋顶白天远景'
            },
        ]
    },
    {
        date: '2024年3月2日',
        title: '落日的美景',
        description: '三月的春风带来了温暖，我们漫步在平原，感受着大自然的生机。每一朵绽放的花都是对美好生活的赞美。；我们摆着动作，记录下我们幸福的一天',
        images: [
            {
                src: './assets/images/2024年3月/2024年3月2日/20240302-1.png',
                caption: '左前'
            },
            {
                src: './assets/images/2024年3月/2024年3月2日/20240302-2.png',
                caption: '正前'
            },
            {
                src: './assets/images/2024年3月/2024年3月2日/20240302-3.png',
                caption: '左前'
            },
            {
                src: './assets/images/2024年3月/2024年3月2日/20240302-4.png',
                caption: '正前'
            }
        ]
    },
    {
        date: '2024年3月9日',
        title: '跑酷的快乐',
        description: '我们跑跳在游戏中，感受着彼此的温度。每一次跳跃，都是我们互相鼓励的机会，每一次碰撞，都让我们更加亲密。',
        images: [
            {
                src: './assets/images/2024年3月/2024年3月9日/20240309-1.png',
                caption: '春日漫步'
            },
            {
                src: './assets/images/2024年3月/2024年3月9日/20240309-2.png',
                caption: '春日漫步'
            }
        ]
    },
    {
        date: '2024年3月29日',
        title: '空岛比心',
        description: '在这个特殊的日子，我们在一个空岛上，享受着彼此的靠近带来的独特感觉。',
        images: [
            {
                src: './assets/images/2024年3月/2024年3月29日/20240329-1.png',
                caption: '甜蜜约会'
            }
        ]
    },
    {
        date: '2024年3月30日',
        title: '浪漫的邂逅',
        description: '我们在一个浪漫的跑酷，一起伴随彼此前行，地图里有那么多的美景，可在我眼中，它们都不及你一丝一毫，我的眼中只有你',
        images: [
            {
                src: './assets/images/2024年3月/2024年3月30日/20240330-1.png',
                caption: '浪漫邂逅'
            },
            {
                src: './assets/images/2024年3月/2024年3月30日/20240330-2.png',
                caption: '浪漫邂逅'
            },
            {
                src: './assets/images/2024年3月/2024年3月30日/20240330-3.png',
                caption: '浪漫邂逅'
            },
            {
                src: './assets/images/2024年3月/2024年3月30日/20240330-4.png',
                caption: '浪漫邂逅'
            }
        ]
        },
    {
        date: '2024年4月7日',
        title: '你的节日，我们的节日',
        description: '这天是你的生日，我们一起游戏，度过了一个难忘的节日',
        images: [
            {
                src: './assets/images/2024年4月/2024年4月7日/20240407-1.png',
                caption: '浪漫邂逅'
            },
        ]
    },
    {
        date: '2024年4月12日',
        title: '日落展翅',
        description: '我们在日落图中，展开了属于我们的翅膀，有了属于我们的自由，无需在意他人的眼光，共同分享属于我们的快乐',
        images: [
            {
                src: './assets/images/2024年4月/2024年4月12日/20240412-1.png',
                caption: '春日漫步'
            },
            {
                src: './assets/images/2024年4月/2024年4月12日/20240412-2.png',
                caption: '野趣时光'
            }
        ]
    },
    {
        date: '2024年6月10日',
        title: '完美的默契度',
        description: '这一天，我们的挚友默契度达到了5200，这个数字对我们来说意义重大',
        images: [
            {
                src: './assets/images/2024年6月/2024年6月10日/20240610-1.png',
                caption:' 默契度截图'
            },
        ]
    },
    {
        date: '2024年7月1日',
        title: '花海漫步',
        description: '在这个盛夏，我们一起漫步在花海中，每一朵花都见证着我们的甜蜜时光。',
        images: [
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-1.jpg',
                caption: '花海合影'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-2.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-3.jpg',
                caption: '幸福瞬间'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-4.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-5.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-6.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-7.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-8.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-9.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-10.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/柳儿视角/20240701-花海-柳-11.jpg',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-1.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-2.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-3.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-4.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-5.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-6.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-7.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-8.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-9.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-10.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-11.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-12.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-13.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-14.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-15.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-16.png',
                caption: '浪漫时刻'
            },
            {
                src: './assets/images/2024年7月/2024年7月1日-花海景色合照合集/自视角/20240701-花海-我-17.png',
                caption: '浪漫时刻'
            },
        ]
    },
    {
        date: '2024年7月6日',
        title: '浪漫的邂逅',
        description: '我们在极寒冰地里，看着天上的极光，仿佛在等待我们的到来。',
        images: [
            {
                src: './assets/images/2024年7月/2024年7月6日/20240706-1.png',
                caption: '浪漫邂逅'
            },
        ]
    },
    {
        date: '2024年7月16日',
        title:"我们的家",
        description: '那天我们一起拍摄了这张图片，仿佛我们真的成为了一家人，我多希望这一切能成真哇',
        images: [
            {
                src: './assets/images/2024年7月/2024年7月16日/20240716-1.png',
                caption: '浪漫邂逅'
            },
        ]
    },
    {
        date: '2024年7月27日',
        title: '天使的出现',
        description: '我收到了你送的安琪儿，我们一起在那张跑酷图中拍下了这张照片，它仿佛有无尽的救赎感，深入了我的内心',
        images: [
            {
                src: './assets/images/2024年7月/2024年7月27日/20240727-1.png',
                caption: '浪漫邂逅'
            },
            {
                src: './assets/images/2024年7月/2024年7月27日/20240727-2.png',
                caption: '浪漫邂逅'
            },
        ]
    },
    {
        date: '2024年8月24日',
        title: '甜蜜之恋',
        description: '那天我们在一起玩了把人拉过来这个地图，最初的时候我们在互相打闹，而后来我们则是做了许多暧昧的动作；后来我们去玩了小镇，虽然异常的卡顿，但是我们玩的还很开心，我抱着你去了我的房子，有许多的人在围观',
        images: [
            {
                src: './assets/images/2024年8月/2024年8月24日/20240824-1.png',
                caption: '浪漫晚餐'
            },
            {
                src: './assets/images/2024年8月/2024年8月24日/20240824-2.png',
                caption: '甜蜜时光'
            },
            {
                src: './assets/images/2024年8月/2024年8月24日/20240824-3.png',
                caption: '幸福合影'
            },
            {
                src: './assets/images/2024年8月/2024年8月24日/20240824-4.png',
                caption: '甜蜜时刻'
            },
            {
                src: './assets/images/2024年8月/2024年8月24日/20240824-5.png',
                caption: '甜蜜时刻'
            },
            {
                src: './assets/images/2024年8月/2024年8月24日/20240824-6.png',
                caption: '甜蜜时刻'
            },
            {
                src: './assets/images/2024年8月/2024年8月24日/20240824-7.png',
                caption: '甜蜜时刻'
            },
        ]
    },
    {
        date: '2024年8月10日',
        title: '七夕邂逅',
        description: '在这个特殊的日子，我们在我的日落中，享受着彼此的靠近带来的独特感觉。',
        images: [
            {
                src: './assets/images/2024年8月/2024七夕/2024七夕-1.png',
                caption: '甜蜜约会'
            },
            {
                src: './assets/images/2024年8月/2024七夕/2024七夕-2.png',
                caption: '甜蜜约会'
            },
            {
                src: './assets/images/2024年8月/2024七夕/2024七夕-3.png',
                caption: '甜蜜约会'
            },
            {
                src: './assets/images/2024年8月/2024七夕/2024七夕-4.png',
                caption: '甜蜜约会'
            },
            {
                src: './assets/images/2024年8月/2024七夕/2024七夕-5.png',
                caption: '甜蜜约会'
            },
        ]
    },
    {
        date: '2024年9月21日',
        title: '美丽风景，因你而有色彩',
        description: '秋高气爽的日子，我们来到郊外欣赏秋日风光。金黄的落叶、清爽的微风，还有你的笑容，构成了最美的秋日画卷。',
        images: [
            {
                src: './assets/images/2024年9月/2024年9月21日-景色/20240921-1.png',
                caption: '秋日风景'
            },
            {
                src: './assets/images/2024年9月/2024年9月21日-景色/20240921-2.png',
                caption: '秋色如画'
            },
            {
                src: './assets/images/2024年9月/2024年9月21日-景色/20240921-3.png',
                caption: '温馨时刻'
            },
            {
                src: './assets/images/2024年9月/2024年9月21日-景色/20240921-4.png',
                caption: '温馨时刻'
            },
            {
                src: './assets/images/2024年9月/2024年9月21日-景色/20240921-5.png',
                caption: '温馨时刻'
            },
            {
                src: './assets/images/2024年9月/2024年9月21日-景色/20240921-6.png',
                caption: '温馨时刻'
            },
            {
                src: './assets/images/2024年9月/2024年9月21日-景色/20240921-7.png',
                caption: '温馨时刻'
            },
        ]
    },
    {
        date: '2024年10月4日',
        title: '我们的一家',
        description: '那天我们在小镇，一个人扮演父亲，另一个人扮演母亲，我们三个人像是一家人，那么温馨，那么美好',
        images: [
            {
                src: './assets/images/2024年10月/2024年10月4日/20241004-1.png',
                caption: '温馨时刻'
            },
        ]
        },
    {
        date: '2024年11月29日',
        title: '心与心的链接',
        description: '我们一起在心链空间拍下了这张照，我多希望我的心能和你的心连在一起，替你承担所有的痛苦与磨难，让你能健康快乐的长大',
        images: [
            {
                src:'./assets/images/2024年11月/2024年11月29日/20241129-1.png',
                caption: '温馨时刻'
            },
            {
                src:'./assets/images/2024年11月/2024年11月29日/20241129-2.png',
                caption: '温馨时刻'
            },
        ]
    },
    {
        date: '2024年12月21日',
        title: '愉快的玩耍',
        description: '我们一起完成了这张跑酷地图，在很多地方停留，只为找到合适的拍照地方',
        images: [
            {
                src: './assets/images/2024年12月/2024年12月21日/20241221-1.png',
                caption: '温馨时刻'
            },
            {
                src: './assets/images/2024年12月/2024年12月21日/20241221-2.png',
                caption: '温馨时刻'
            },
            {
                src: './assets/images/2024年12月/2024年12月21日/20241221-3.png',
                caption: '温馨时刻'
            },
            {
                src: './assets/images/2024年12月/2024年12月21日/20241221-4.png',
                caption: '温馨时刻'
            },
            {
                src: './assets/images/2024年12月/2024年12月21日/20241221-5.png',
                caption: '温馨时刻'
            },
        ]
    },
    {
        date: '2025年1月1日',
        title: '跨年之夜',
        description: '那天我本不能陪你，但我还是来了，尽管是感冒请假吧；那天晚上，我们并没有玩太多的东西，但是我很开心，很幸福，因为有你陪我跨年，陪我度过这个难忘的夜晚',
        images: [
            {
                src: './assets/images/2025年1月/2025年1月1日-跨年夜/20250101-1.jpg',
                caption: '跨年时刻'
            },
            {
                src: './assets/images/2025年1月/2025年1月1日-跨年夜/20250101-2.jpg',
                caption: '新年愿望'
            },
            {
                src: './assets/images/2025年1月/2025年1月1日-跨年夜/20250101-3.jpg',
                caption: '幸福合影'
            },
            {
                src: './assets/images/2025年1月/2025年1月1日-跨年夜/20250101-4.jpg',
                caption: '跨年时刻'
            },
            {
                src: './assets/images/2025年1月/2025年1月1日-跨年夜/20250101-5.jpg',
                caption: '跨年时刻'
            },
            {
                src: './assets/images/2025年1月/2025年1月1日-跨年夜/20250101-6.jpg',
                caption: '跨年时刻'
            },
            {
                src: './assets/images/2025年1月/2025年1月1日-跨年夜/20250101-7.jpg',
                caption: '跨年时刻'
            },
            {
                src: './assets/images/2025年1月/2025年1月1日-跨年夜/20250101-8.jpg',
                caption: '跨年时刻'
            }
        ]
    }
];

// 字符限制配置
const TITLE_MAX_LENGTH = 20;
const DESCRIPTION_MAX_LENGTH = 100;

// 当前状态
let currentGroupIndex = 0;
let currentImageIndex = 0;
let currentScale = 1;
let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;
let lastTouchDistance = 0;

// DOM 元素
const galleryGrid = document.getElementById('galleryGrid');
const detailModal = document.getElementById('detailModal');
const imageModal = document.getElementById('imageModal');
const detailImage = document.getElementById('detailImage');
const modalImage = document.getElementById('modalImage');
const imageWrapper = document.getElementById('imageWrapper');
const detailTitle = document.getElementById('detailTitle');
const detailDate = document.getElementById('detailDate');
const detailDescription = document.getElementById('detailDescription');
const detailImageCounter = document.getElementById('detailImageCounter');
const imageCounter = document.getElementById('imageCounter');

// 工具函数
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
}

// 图片加载错误处理
const defaultErrorImage = './assets/images/error/error.jpg';

function handleImageError(img) {
    img.src = defaultErrorImage;
}

// 初始化图片组网格
function initializeGallery() {
    const photoGroupGrid = document.createElement('div');
    photoGroupGrid.className = 'photo-group-grid';
    
    galleryGroups.forEach((group, groupIndex) => {
        const photoGroup = document.createElement('div');
        photoGroup.className = 'photo-group';
        
        const previewContainer = document.createElement('div');
        previewContainer.className = 'photo-preview';
        
        const img = document.createElement('img');
        img.src = group.images[0].src;
        img.alt = group.title;
        img.onerror = () => handleImageError(img);
        
        const info = document.createElement('div');
        info.className = 'photo-info';
        
        const title = document.createElement('div');
        title.className = 'photo-title';
        title.textContent = truncateText(group.title, TITLE_MAX_LENGTH);
        
        const date = document.createElement('div');
        date.className = 'photo-date';
        date.textContent = group.date;
        
        const description = document.createElement('div');
        description.className = 'photo-description';
        description.textContent = truncateText(group.description, DESCRIPTION_MAX_LENGTH);
        
        previewContainer.appendChild(img);
        info.appendChild(title);
        info.appendChild(date);
        info.appendChild(description);
        
        photoGroup.appendChild(previewContainer);
        photoGroup.appendChild(info);
        
        photoGroup.addEventListener('click', () => openDetailModal(groupIndex));
        
        photoGroupGrid.appendChild(photoGroup);
    });
    
    galleryGrid.innerHTML = '';
    galleryGrid.appendChild(photoGroupGrid);
}

// 打开详情模态框
function openDetailModal(groupIndex) {
    currentGroupIndex = groupIndex;
    currentImageIndex = 0;
    updateDetailContent();
    detailModal.style.display = 'flex';
    detailModal.style.opacity = '1';
    document.body.style.overflow = 'hidden';
}

// 更新详情内容
function updateDetailContent() {
    const group = galleryGroups[currentGroupIndex];
    const image = group.images[currentImageIndex];
    
    detailImage.src = '';
    detailImage.src = image.src;
    detailImage.onerror = () => handleImageError(detailImage);
    detailTitle.textContent = group.title;
    detailDate.textContent = group.date;
    detailDescription.textContent = group.description;
    detailImageCounter.textContent = `${currentImageIndex + 1}/${group.images.length}`;
}

// 打开单图模态框
function openImageModal() {
    resetZoom();
    const image = galleryGroups[currentGroupIndex].images[currentImageIndex];
    modalImage.src = image.src;
    modalImage.onerror = () => handleImageError(modalImage);
    imageCounter.textContent = `${currentImageIndex + 1}/${galleryGroups[currentGroupIndex].images.length}`;
    imageModal.style.display = 'block';
    imageModal.style.opacity = '1';
    document.body.style.overflow = 'hidden';
}

// 图片导航
function navigateImage(direction) {
    const group = galleryGroups[currentGroupIndex];
    currentImageIndex = (currentImageIndex + direction + group.images.length) % group.images.length;
    updateDetailContent();
    if (imageModal.style.display === 'block') {
        resetZoom();
        modalImage.src = group.images[currentImageIndex].src;
        imageCounter.textContent = `${currentImageIndex + 1}/${group.images.length}`;
    }
}

// 缩放控制
function setZoom(scale) {
    currentScale = Math.min(Math.max(scale, 0.5), 3);
    modalImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    updateZoomPercentage();
}

function updateZoomPercentage() {
    const percentage = Math.round(currentScale * 100);
    const zoomScale = document.getElementById('zoomScale');
    if (zoomScale) {
        zoomScale.textContent = `${percentage}%`;
    }
}

function setZoomByPercentage(percentage) {
    setZoom(percentage / 100);
}

function resetZoom() {
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    modalImage.style.transform = 'translate(0, 0) scale(1)';
    updateZoomPercentage();
}

// 拖动控制
function startDrag(e) {
    if (e.type === 'mousedown' && currentScale > 1) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        modalImage.style.cursor = 'grabbing';
    } else if (e.type === 'touchstart' && e.touches.length === 1 && currentScale > 1) {
        isDragging = true;
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
    } else if (e.type === 'touchstart' && e.touches.length === 2) {
        // 双指缩放
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        lastTouchDistance = Math.hypot(
            touch2.clientX - touch1.clientX,
            touch2.clientY - touch1.clientY
        );
    }
}

function drag(e) {
    if (e.type === 'mousemove' && isDragging) {
        const newTranslateX = e.clientX - startX;
        const newTranslateY = e.clientY - startY;
        updateDragPosition(newTranslateX, newTranslateY);
    } else if (e.type === 'touchmove') {
        e.preventDefault(); // 防止页面滚动
        if (e.touches.length === 1 && isDragging) {
            const newTranslateX = e.touches[0].clientX - startX;
            const newTranslateY = e.touches[0].clientY - startY;
            updateDragPosition(newTranslateX, newTranslateY);
        } else if (e.touches.length === 2) {
            // 处理双指缩放
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const currentDistance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
            );
            const scale = currentDistance / lastTouchDistance;
            setZoom(currentScale * scale);
            lastTouchDistance = currentDistance;
        }
    }
}

function updateDragPosition(newTranslateX, newTranslateY) {
    // 限制拖动范围
    const maxTranslateX = (currentScale - 1) * modalImage.width / 2;
    const maxTranslateY = (currentScale - 1) * modalImage.height / 2;
    
    translateX = Math.min(Math.max(newTranslateX, -maxTranslateX), maxTranslateX);
    translateY = Math.min(Math.max(newTranslateY, -maxTranslateY), maxTranslateY);
    
    modalImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
}

function stopDrag() {
    isDragging = false;
    modalImage.style.cursor = 'grab';
}

// 事件监听器
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    
    // 详情模态框事件
    document.getElementById('detailPrevImage').addEventListener('click', () => navigateImage(-1));
    document.getElementById('detailNextImage').addEventListener('click', () => navigateImage(1));
    detailImage.addEventListener('click', openImageModal);
    
    // 单图模态框事件
    document.getElementById('prevImage').addEventListener('click', () => navigateImage(-1));
    document.getElementById('nextImage').addEventListener('click', () => navigateImage(1));
    document.getElementById('zoomIn').addEventListener('click', () => setZoom(currentScale + 0.2));
    document.getElementById('zoomOut').addEventListener('click', () => setZoom(currentScale - 0.2));
    document.getElementById('zoomReset').addEventListener('click', resetZoom);
    
    // 创建并添加缩放百分比按钮
    const zoomControls = document.querySelector('.zoom-controls');
    const zoomScale = document.getElementById('zoomScale');
    zoomScale.textContent = '100%';
    
    // 缩放菜单事件
    const zoomMenu = document.getElementById('zoomMenu');
    
    zoomScale.addEventListener('click', () => {
        zoomMenu.style.display = zoomMenu.style.display === 'none' ? 'block' : 'none';
    });
    
    zoomMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoom-option')) {
            const zoomValue = parseFloat(e.target.dataset.scale) * 100;
            setZoomByPercentage(zoomValue);
            zoomMenu.style.display = 'none';
        }
    });
    
    // 移除错误的代码行
    // zoomControls.insertBefore(zoomPercentage, document.getElementById('resetZoom'));
    zoomControls.appendChild(zoomMenu);
    
    // 拖动事件
    modalImage.addEventListener('mousedown', startDrag);
    modalImage.addEventListener('touchstart', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('touchmove', drag, { passive: false });
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);
    
    // 关闭模态框
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                if (modal === imageModal) {
                    resetZoom();
                    // 如果详情页面仍然打开，保持body的overflow为hidden
                    if (detailModal.style.display === 'block' || detailModal.style.display === 'flex') {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = 'auto';
                    }
                } else {
                    // 如果关闭的是详情页面，恢复body的滚动
                    document.body.style.overflow = 'auto';
                }
            }, 300);
        });
    });

    // 点击模态框背景关闭
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            detailModal.style.opacity = '0';
            setTimeout(() => {
                detailModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });

    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.opacity = '0';
            setTimeout(() => {
                imageModal.style.display = 'none';
                resetZoom();
                // 如果详情页面仍然打开，保持body的overflow为hidden
                if (detailModal.style.display === 'block' || detailModal.style.display === 'flex') {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            }, 300);
        }
    });

    // 键盘事件监听
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (imageModal.style.display === 'block') {
                imageModal.style.opacity = '0';
                setTimeout(() => {
                    imageModal.style.display = 'none';
                    resetZoom();
                    // 检查是否所有模态框都已关闭
                    if (!isAnyModalOpen()) {
                        document.body.style.overflow = 'auto';
                    }
                }, 300);
            } else if (detailModal.style.display === 'block') {
                detailModal.style.opacity = '0';
                setTimeout(() => {
                    detailModal.style.display = 'none';
                    // 检查是否所有模态框都已关闭
                    if (!isAnyModalOpen()) {
                        document.body.style.overflow = 'auto';
                    }
                }, 300);
            }
        } else if (detailModal.style.display === 'block' || imageModal.style.display === 'block') {
            switch(e.key) {
                case 'ArrowLeft':
                    navigateImage(-1);
                    break;
                case 'ArrowRight':
                    navigateImage(1);
                    break;
            }
        }
    });

    // 辅助函数：检查是否有任何模态框处于打开状态
    function isAnyModalOpen() {
        return detailModal.style.display === 'block' || detailModal.style.display === 'flex' || imageModal.style.display === 'block';
    }
});