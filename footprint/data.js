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
                        id: "cn-bj-bjdwy", name: "北京动物园", type: "spot", lng: 116.343376, lat: 39.947735, date: "2025-10-07", description: "2020-09-18",
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
                    {
                        id: "cn-bj-jddrd", name: "京东大溶洞", type: "spot", lng: 117.260978, lat: 40.218263, date: "2021-05-04", description: "",
                    },
                    {
                        id: "cn-bj-sjsyly", name: "北京石景山游乐园", type: "spot", lng: 116.215275, lat: 39.917691, date: "2021-07-30", description: "",
                    },
                    {
                        id: "cn-bj-jdslxjq", name: "京东石林峡景区", type: "spot", lng: 117.248016, lat: 40.269328, date: "2016-10-02", description: "",
                    },
                    {
                        id: "cn-bj-wjysk", name: "王家园水库", type: "spot", lng: 116.008135, lat: 40.208825, date: "2018-03-24", description: "2018-08-04",
                    },
                    {
                        id: "cn-bj-hhyfjq", name: "北京后花园(白虎涧)风景区", type: "spot", lng: 116.085593, lat: 40.144211, date: "2022-05-03", description: "",
                    },
                    {
                        id: "cn-bj-798", name: "北京798艺术中心", type: "spot", lng: 116.501502, lat: 39.991171, date: "2020-09-12", description: "",
                    },
                    {
                        id: "cn-bj-zgshhyzx", name: "北京中国石化会议中心", type: "spot", lng: 116.270746, lat: 40.249710, date: "2021-03-28", description: "",
                    },
                ]
            },
            {
                id: "cn-tj", name: "天津", type: "city", lng: 117.208091, lat: 39.091103, zoom: 10,
                children: [
                    {
                        id: "cn-tj-jdhygy",name: "天津极地海洋公园", type: "spot", lng: 117.668083, lat: 39.014923, date: "2024-10-20", description: "",
                    },
                    {
                        id: "cn-tj-tjz",name: "天津站", type: "spot", lng: 117.216350, lat: 39.142462, date: "2021-06-13", description: "",
                    },
                    {
                        id: "cn-tj-bllrms",name: "天津巴黎恋人民宿", type: "spot", lng: 117.208441, lat: 39.135241, date: "2021-06-13", description: "",
                    },
                    {
                        id: "cn-tj-wddwhlyq",name: "天津五大道文化旅游区", type: "spot", lng: 117.209997, lat: 39.116392, date: "2021-06-14", description: "",
                    },
                    {
                        id: "cn-tj-ysfqq",name: "天津意式风情区", type: "spot", lng: 117.206506, lat: 39.141533, date: "2021-06-14", description: "",
                    },
                    {
                        id: "cn-tj-tjzymtl",name: "天津之眼摩天轮", type: "spot", lng: 117.193353, lat: 39.160090, date: "2021-06-14", description: "",
                    },
                ]
            },
            {
                id: "cn-zjk", name: "张家口", type: "city", lng: 115.289553, lat: 40.980479, zoom: 10,
                children: [
                    {
                        id: "cn-zjk-twdjxz", name: "太舞度假小镇", type: "spot", lng: 115.449800, lat: 40.895801, date: "2025-08-22", description: "",
                    },
                    {
                        id: "cn-zjk-flsjxz", name: "富龙四季小镇", type: "spot", lng: 115.312742, lat: 40.986203, date: "2025-08-23", description: "",
                    },
                ]
            },
            {
                id: "cn-bd", name: "保定", type: "city", lng: 115.995490, lat: 38.954348, zoom: 10,
                children: [
                    {
                        id: "cn-bd-bydjq", name: "白洋淀景区", type: "spot", lng: 115.995490, lat: 38.954348, date: "2019-07-20", description: "",
                    },
                ]
            },
            {
                id: "cn-qhd", name: "秦皇岛", type: "city", lng: 119.525971, lat: 39.894727, zoom: 10,
                children: [
                    {
                        id: "cn-qhd-wlha", name: "蔚蓝海岸", type: "spot", lng: 119.405878, lat: 39.781538, date: "2025-05-22", description: "",
                    },
                ]
            },
            {
                id: "cn-sh", name: "上海", type: "city", lng: 121.4737, lat: 31.2304, zoom: 10,
                children: [
                    {
                        id: "cn-sh-hqz", name: "上海虹桥站", type: "spot", lng: 121.326809, lat: 31.200530, date: "2016-10-27", description: "2016-10-31",
                    },
                    {
                        id: "cn-sh-jtdxmh", name: "上海交通大学(闵行校区)", type: "spot", lng: 121.443136, lat: 31.032019, date: "2016-10-28", description: "",
                    },
                    {
                        id: "cn-sh-lys", name: "龙音寺", type: "spot", lng: 121.437278, lat: 31.009170, date: "2016-10-30", description: "",
                    },
                ]
            },
            {
                id: "cn-xa", name: "西安", type: "city", lng: 108.9398, lat: 34.3416, zoom: 10,
                children: [
                    {
                        id: "cn-xa-dyt", name: "大雁塔", type: "spot", lng: 108.9636,  lat: 34.2209, date: "2018-02-19", description: "",
                    },
                    {
                        id: "cn-xa-hqgjq", name: "华清宫景区", type: "spot", lng: 109.221499, lat: 34.365099, date: "2018-02-19", description: "",
                    },
                    {
                        id: "cn-xa-bmy", name: "兵马俑", type: "spot", lng: 109.288855, lat: 34.391664, date: "2018-02-20", description: "",
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
                        id: "cn-hz-hzdz", name: "杭州东站", type: "spot", lng: 120.219494, lat: 30.296771, date: "2019-06-25", description: "",
                    },
                    {
                        id: "cn-hz-xhdxyx", name: "西湖大学(云栖校区)", type: "spot", lng: 120.086835, lat: 30.140566, date: "2019-06-25", description: "",
                    },
                ]
            }
        ]
    },
    {
        id: "jp", name: "日本", type: "country", lng: 139.6503, lat: 35.6762, zoom: 5,
        children: [
            {
                id: "jp-tokyo", name: "东京", type: "city", lng: 139.6503, lat: 35.6762, zoom: 11,
                children: [
                    {
                        id: "jp-tokyo-ytgjjc", name: "东京羽田国际机场", type: "spot", lng: 139.783513, lat: 35.548527, date: "2020-01-09", description: "2020-01-15",
                    },
                    {
                        id: "jp-tokyo-dsjpjd", name: "MYSTAYS大森精品酒店", type: "spot", lng: 139.732530, lat: 35.590468, date: "2020-01-09", description: "",
                    },
                    {
                        id: "jp-tokyo-djt", name: "东京塔", type: "spot", lng: 139.7454, lat: 35.6586, date: "2020-01-09", description: "",
                    },
                    {
                        id: "jp-tokyo-gwjt", name: "歌舞伎町一番街", type: "spot", lng: 139.701031, lat: 35.693874, date: "2020-01-10", description: "",
                    },
                    {
                        id: "jp-tokyo-dt", name: "东京都厅", type: "spot", lng: 139.692101, lat: 35.689634, date: "2020-01-10", description: "",
                    },
                    {
                        id: "jp-tokyo-xgljjc",  name: "新国立竞技场", type: "spot", lng: 139.714935, lat: 35.678086, date: "2020-01-10", description: "",
                    },
                    {
                        id: "jp-tokyo-ddmgy", name: "代代木公园", type: "spot", lng: 139.696944, lat: 35.671705, date: "2020-01-10", description: "",
                    },
                    {
                        id: "jp-tokyo-sgszlk", name: "涩谷十字路口", type: "spot", lng: 139.7004, lat: 35.6595, date: "2020-01-10", description: "",
                    },
                    {
                        id: "jp-tokyo-djz", name: "东京站", type: "spot", lng: 139.768342, lat: 35.679533, date: "2020-01-12", description: "",
                    },
                    {
                        id: "jp-tokyo-hj", name: "皇居", type: "spot", lng: 139.752791, lat: 35.685179, date: "2020-01-12", description: "",
                    },
                    {
                        id: "jp-tokyo-tcgy", name: "台场公园", type: "spot", lng: 139.77203, lat: 35.633594, date: "2020-01-12", description: "",
                    },
                    {
                        id: "jp-tokyo-djhwqwy", name: "大江户温泉物语", type: "spot", lng: 139.777504, lat: 35.615488, date: "2020-01-12", description: "",
                    },
                    {
                        id: "jp-tokyo-yz", name: "银座", type: "spot", lng: 139.766486, lat: 35.671223, date: "2020-01-12", description: "",
                    },
                    {
                        id: "jp-tokyo-qcs", name: "浅草寺", type: "spot", lng: 139.7967, lat: 35.7148, date: "2020-01-13", description: "",
                    },
                    {
                        id: "jp-tokyo-djdx", name: "东京大学", type: "spot", lng: 139.761990, lat: 35.71266, date: "2020-01-13", description: "",
                    },
                    {
                        id: "jp-tokyo-djjd", name: "东京巨蛋", type: "spot", lng: 139.751895, lat: 35.705643, date: "2020-01-13", description: "",
                    },
                    {
                        id: "jp-tokyo-qyy", name: "秋叶原", type: "spot", lng: 139.774146, lat: 35.702205, date: "2020-01-13", description: "",
                    },
                    {
                        id: "jp-tokyo-zdsc", name: "筑地市场", type: "spot", lng: 139.766878, lat: 35.664880, date: "2020-01-14", description: "",
                    },
                ]
            },
            {
                id: "jp-kamakura", name: "镰仓", type: "city", lng: 139.500464, lat: 35.306690, zoom: 11,
                children: [
                    {
                        id: "jp-kamakura-jzd", name: "江之岛", type: "spot", lng: 139.480671, lat: 35.299557, date: "2020-01-11", description: "",
                    },
                    {
                        id: "jp-kamakura-lcgxqz", name: "镰仓高校前站", type: "spot", lng: 139.500464, lat: 35.306690, date: "2020-01-11", description: "",
                    },
                    {
                        id: "jp-kamakura-lcdf", name: "镰仓大佛", type: "spot", lng: 139.535754, lat: 35.316842, date: "2020-01-11", description: "",
                    },
                ]
            }
        ]
    },
    {
        id: "kr", name: "韩国", type: "country", lng: 127.852815, lat: 36.240332, zoom: 5,
        children: [
            {
                id: "kr-seoul", name: "首尔", type: "city", lng: 126.962058, lat: 37.593683, zoom: 11,
                children: [
                    {
                        id: "kr-seoul-jfgjjc", name: "金浦国际机场", type: "spot", lng: 126.801518, lat: 37.557968, date: "2024-07-04", description: "",
                    },
                    {
                        id: "kr-seoul-mdjd", name: "明洞MIDO酒店", type: "spot", lng: 126.980586, lat: 37.558496, date: "2024-07-04", description: "",
                    },
                    {
                        id: "kr-seoul-md", name: "明洞", type: "spot", lng: 126.986000, lat: 37.560000, date: "2024-07-04", description: "",
                    },
                    {
                        id: "kr-seoul-sez", name: "首尔站", type: "spot", lng: 126.971038, lat: 37.554527, date: "2024-07-05", description: "",
                    },
                ]
            },
            {
                id: "kr-busan", name: "釜山", type: "city", lng: 129.075642, lat: 35.179554, zoom: 11,
                children: [
                    {
                        id: "kr-busan-fsz", name: "釜山站", type: "spot", lng: 129.042000, lat: 35.115280, date: "2024-07-05", description: "",
                    },
                    {
                        id: "kr-busan-rmh", name: "Residence Mumum Hotel", type: "spot", lng: 129.061946, lat: 35.158847, date: "2024-07-05", description: "",
                    },
                    {
                        id: "kr-busan-hyt", name: "海云台", type: "spot", lng: 129.163661, lat: 35.163178, date: "2024-07-05", description: "",
                    },
                    {
                        id: "kr-busan-jhgjjc", name: "金海国际机场", type: "spot", lng: 128.946456, lat: 35.173220, date: "2024-07-07", description: "",
                    },
                ]
            },
            {
                id: "kr-ulsan", name: "蔚山", type: "city", lng: 129.311360, lat: 35.538377, zoom: 11,
                children: [
                    {
                        id: "kr-ulsan-wsz", name: "蔚山站", type: "spot", lng: 129.13859, lat: 35.551922, date: "2024-07-06", description: "",
                    },
                ]
            },
            {
                id: "kr-gyeongsangnam", name: "庆尚南道", type: "city", lng: 129.068842, lat: 35.493469, zoom: 11,
                children: [
                    {
                        id: "kr-gyeongsangnam-pssf", name: "平山书房", type: "spot", lng: 129.068842, lat: 35.493469, date: "2024-07-06", description: "",
                    },
                    {
                        id: "kr-gyeongsangnam-nd", name: "濃度", type: "spot", lng: 129.087089,lat: 35.555910, date: "2024-07-06", description: "",
                    },
                ]
            }
        ]
    },
];
