const geoData = [
    {
        id: "cn", name: "中国", type: "country", lng: 104.1954, lat: 35.8617, zoom: 5,
        children: [
            {
                id: "cn-bj", name: "北京", type: "city", lng: 116.4074, lat: 39.9042, zoom: 10,
                children: [
                    {
                        id: "cn-bj-bdlcc", name: "八达岭长城", type: "spot", lng: 116.024067, lat: 40.362639, date: "2018-01-01", description: "",
                    },
                    {
                        id: "cn-bj-gbsz", name: "古北水镇", type: "spot", lng: 117.284044, lat: 40.659823, date: "2021-08-24", description: "2023-01-24",
                    },
                    {
                        id: "cn-bj-jzhslgy", name: "北京静之湖森林公园",type: "spot", lng: 116.437880, lat: 40.262200, date: "2025-08-19", description: "",
                    },
                    {
                        id: "cn-bj-sjhhdgy", name: "世界花卉大观园", type: "spot", lng: 116.358283, lat: 39.840573, date: "2026-01-01", description: "",
                    },
                    {
                        id: "cn-bj-bjdwy", name: "北京动物园", type: "spot", lng: 116.343376, lat: 39.947735, date: "2025-10-07", description: "",
                    },
                    {
                        id: "cn-bj-wzzwly", name: "五洲植物乐园", type: "spot", lng: 116.160730, lat: 39.801749, date: "2025-07-06", description: "",
                    },
                    {
                        id: "cn-bj-gjzwy", name: "国家植物园", type: "spot", lng: 116.220313, lat: 39.999316, date: "2023-04-05", description: "",
                    },
                    {
                        id: "cn-bj-bhgy", name: "北海公园", type: "spot", lng: 116.395154, lat: 39.934571, date: "2023-10-04", description: "",
                    },
                    {
                        id: "cn-bj-lhsyysg", name: "罗红摄影艺术馆", type: "spot", lng: 116.580200, lat: 40.048213, date: "2023-09-23", description: "",
                    },
                    {
                        id: "cn-bj-slfxsly", name: "水立方嬉水乐园", type: "spot", lng: 116.396753, lat: 39.999311, date: "2023-07-16", description: "",
                    },
                ]
            },
            {
                id: "cn-tj", name: "天津", type: "city", lng: 117.208091, lat: 39.091103, zoom: 10,
                children: [
                    {
                        id: "cn-tj-jdhygy",name: "天津极地海洋公园", type: "spot", lng: 117.668083, lat: 39.014923, date: "2024-10-20", description: "",
                    },
                ]
            },
            {
                id: "cn-zjk", name: "张家口", type: "city", lng: 115.289553, lat: 40.980479, zoom: 10,
                children: [
                    {
                        id: "cn-zjk-twdjxz", name: "太舞度假小镇", type: "spot", lng: 115.449800, lat: 40.895801, date: "2025-08-22", description: "1",
                    },
                    {
                        id: "cn-zjk-flsjxz", name: "富龙四季小镇", type: "spot", lng: 115.312742, lat: 40.986203, date: "2025-08-23", description: "",
                    },
                ]
            },
            {
                id: "cn-qhd",
                name: "秦皇岛",
                type: "city",
                lat: 39.894727,
                lng: 119.525971,
                zoom: 10,
                children: [
                    {
                        name: "蔚蓝海岸",
                        type: "spot",
                        lat: 39.781538,
                        lng: 119.405878,
                        date: "2025-05-22",
                        description: "1",
                    },
                ]
            },
            {
                id: "cn-sh",
                name: "上海",
                type: "city",
                lat: 31.2304,
                lng: 121.4737,
                zoom: 10,
                children: [
                    {
                        name: "上海虹桥站",
                        type: "spot",
                        lat: 31.200530,
                        lng: 121.326809,
                        date: "2016-10-27",
                        description: "2016-10-31",
                    },
                    {
                        name: "上海交通大学(闵行校区)",
                        type: "spot",
                        lat: 31.032019,
                        lng: 121.443136,
                        date: "2016-10-28",
                        description: "",
                    },
                    {
                        name: "龙音寺",
                        type: "spot",
                        lat: 31.009170,
                        lng: 121.437278,
                        date: "2016-10-30",
                        description: "",
                    },
                ]
            },
            {
                id: "cn-xa",
                name: "西安",
                type: "city",
                lat: 34.3416,
                lng: 108.9398,
                zoom: 10,
                children: [
                    {
                        name: "大雁塔",
                        type: "spot",
                        lat: 34.2209,
                        lng: 108.9636,
                        date: "2018-02-19",
                        description: "",
                    },
                    {
                        name: "华清宫景区",
                        type: "spot",
                        lat: 34.365099,
                        lng: 109.221499,
                        date: "2018-02-19",
                        description: "",
                    },
                    {
                        name: "兵马俑",
                        type: "spot",
                        lat: 34.391664,
                        lng: 109.288855,
                        date: "2018-02-20",
                        description: "",
                    },
                ]
            },
            {
                id: "cn-hz",
                name: "杭州",
                type: "city",
                lat: 30.253082,
                lng: 120.215510,
                zoom: 10,
                children: [
                    {
                        name: "杭州东站",
                        type: "spot",
                        lat: 30.296771,
                        lng: 120.219494,
                        date: "2019-06-25",
                        description: "",
                    },
                    {
                        name: "西湖大学(云栖校区)",
                        type: "spot",
                        lat: 30.140566,
                        lng: 120.086835,
                        date: "2019-06-25",
                        description: "",
                    },
                ]
            }
        ]
    },
    {
        id: "jp",
        name: "日本",
        type: "country",
        lat: 35.6762,
        lng: 139.6503,
        zoom: 5,
        children: [
            {
                id: "jp-tokyo",
                name: "东京",
                type: "city",
                lat: 35.6762,
                lng: 139.6503,
                zoom: 11,
                children: [
                    {
                        name: "东京羽田国际机场",
                        type: "spot",
                        lat: 35.548527,
                        lng: 139.783513,
                        date: "2020-01-09",
                        description: "2020-01-15",
                    },
                    {
                        name: "MYSTAYS大森精品酒店",
                        type: "spot",
                        lat: 35.590468,
                        lng: 139.732530,
                        date: "2020-01-09",
                        description: "",
                    },
                    {
                        name: "东京塔",
                        type: "spot",
                        lat: 35.6586,
                        lng: 139.7454,
                        date: "2020-01-09",
                        description: "",
                    },
                    {
                        name: "歌舞伎町一番街",
                        type: "spot",
                        lat: 35.693874,
                        lng: 139.701031,
                        date: "2020-01-10",
                        description: "",
                    },
                    {
                        name: "东京都厅",
                        type: "spot",
                        lat: 35.689634,
                        lng: 139.692101,
                        date: "2020-01-10",
                        description: "",
                    },
                    {
                        id: "j",
                        name: "新国立竞技场",
                        type: "spot",
                        lat: 35.678086,
                        lng: 139.714935,
                        date: "2020-01-10",
                        description: "",
                    },
                    {
                        name: "代代木公园",
                        type: "spot",
                        lat: 35.671705,
                        lng: 139.696944,
                        date: "2020-01-10",
                        description: "",
                    },
                    {
                        name: "涩谷十字路口",
                        type: "spot",
                        lat: 35.6595,
                        lng: 139.7004,
                        date: "2020-01-10",
                        description: "",
                    },
                    {
                        name: "东京站",
                        type: "spot",
                        lat: 35.679533,
                        lng: 139.768342,
                        date: "2020-01-12",
                        description: "",
                    },
                    {
                        name: "皇居",
                        type: "spot",
                        lat: 35.685179,
                        lng: 139.752791,
                        date: "2020-01-12",
                        description: "",
                    },
                    {
                        name: "台场公园",
                        type: "spot",
                        lat: 35.633594,
                        lng: 139.77203,
                        date: "2020-01-12",
                        description: "",
                    },
                    {
                        name: "台场公园",
                        type: "spot",
                        lat: 35.633594,
                        lng: 139.77203,
                        date: "2020-01-12",
                        description: "",
                    },
                    {
                        name: "大江户温泉物语",
                        type: "spot",
                        lat: 35.615488,
                        lng: 139.777504,
                        date: "2020-01-12",
                        description: "",
                    },
                    {
                        name: "银座",
                        type: "spot",
                        lat: 35.671223,
                        lng: 139.766486,
                        date: "2020-01-12",
                        description: "",
                    },
                    {
                        name: "浅草寺",
                        type: "spot",
                        lat: 35.7148,
                        lng: 139.7967,
                        date: "2020-01-13",
                        description: "",
                    },
                    {
                        name: "东京大学",
                        type: "spot",
                        lat: 35.71266,
                        lng: 139.761990,
                        date: "2020-01-13",
                        description: "",
                    },
                    {
                        name: "东京巨蛋",
                        type: "spot",
                        lat: 35.705643,
                        lng: 139.751895,
                        date: "2020-01-13",
                        description: "",
                    },
                    {
                        name: "秋叶原",
                        type: "spot",
                        lat: 35.702205,
                        lng: 139.774146,
                        date: "2020-01-13",
                        description: "",
                    },
                    {
                        name: "筑地市场",
                        type: "spot",
                        lat: 35.664880,
                        lng: 139.766878,
                        date: "2020-01-14",
                        description: "",
                    },
                ]
            },
            {
                id: "jp-kamakura",
                name: "镰仓",
                type: "city",
                lat: 35.306690,
                lng: 139.500464,
                zoom: 11,
                children: [
                    {
                        id: "jp-kamakura-kamakura",
                        name: "江之岛",
                        type: "spot",
                        lat: 35.299557,
                        lng: 139.480671,
                        date: "2020-01-11",
                        description: "",
                    },
                    {
                        id: "jp-kamakura-kamakura",
                        name: "镰仓高校前站",
                        type: "spot",
                        lat: 35.306690,
                        lng: 139.500464,
                        date: "2020-01-11",
                        description: "",
                    },
                    {
                        id: "jp-kamakura-kamakura",
                        name: "镰仓大佛",
                        type: "spot",
                        lat: 35.316842,
                        lng: 139.535754,
                        date: "2020-01-11",
                        description: "",
                    },
                ]
            }
        ]
    },
    {
        id: "kr",
        name: "韩国",
        type: "country",
        lat: 36.240332,
        lng: 127.852815,
        zoom: 5,
        children: [
            {
                id: "kr-seoul",
                name: "首尔",
                type: "city",
                lat: 37.593683,
                lng: 126.962058,
                zoom: 11,
                children: [
                    {
                        name: "金浦国际机场",
                        type: "spot",
                        lat: 37.557968,
                        lng: 126.801518,
                        date: "2024-07-04",
                        description: "",
                    },
                    {
                        name: "明洞MIDO酒店",
                        type: "spot",
                        lat: 37.558496,
                        lng: 126.980586,
                        date: "2024-07-04",
                        description: "",
                    },
                    {
                        name: "明洞",
                        type: "spot",
                        lat: 37.560000,
                        lng: 126.986000,
                        date: "2024-07-04",
                        description: "",
                    },
                    {
                        name: "首尔站",
                        type: "spot",
                        lat: 37.554527,
                        lng: 126.971038,
                        date: "2024-07-05",
                        description: "",
                    },
                ]
            },
            {
                id: "kr-busan",
                name: "釜山",
                type: "city",
                lat: 35.179554,
                lng: 129.075642,
                zoom: 11,
                children: [
                    {
                        name: "釜山站",
                        type: "spot",
                        lat: 35.115280,
                        lng: 129.042000,
                        date: "2024-07-05",
                        description: "",
                    },
                    {
                        name: "Residence Mumum Hotel",
                        type: "spot",
                        lat: 35.158847,
                        lng: 129.061946,
                        date: "2024-07-05",
                        description: "",
                    },
                    {
                        name: "海云台",
                        type: "spot",
                        lat: 35.163178,
                        lng: 129.163661,
                        date: "2024-07-05",
                        description: "",
                    },
                    {
                        name: "金海国际机场",
                        type: "spot",
                        lat: 35.173220,
                        lng: 128.946456,
                        date: "2024-07-07",
                        description: "",
                    },
                ]
            },
            {
                id: "kr-ulsan",
                name: "蔚山",
                type: "city",
                lat: 35.538377,
                lng: 129.311360,
                zoom: 11,
                children: [
                    {
                        name: "蔚山站",
                        type: "spot",
                        lat: 35.551922,
                        lng: 129.13859,
                        date: "2024-07-06",
                        description: "",
                    },
                ]
            },
            {
                id: "kr-gyeongsangnam",
                name: "庆尚南道",
                type: "city",
                lat: 35.493469,
                lng: 129.068842,
                zoom: 11,
                children: [
                    {
                        name: "平山书房",
                        type: "spot",
                        lat: 35.493469,
                        lng: 129.068842,
                        date: "2024-07-06",
                        description: "",
                    },
                    {
                        name: "濃度",
                        type: "spot",
                        lat: 35.555910,
                        lng: 129.087089,
                        date: "2024-07-06",
                        description: "",
                    },
                ]
            }
        ]
    },
];
