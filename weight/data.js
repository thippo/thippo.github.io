var weight_data = [
        ['2019/9/2', 129, 129, 129, 129],
        ['2019/9/6', 129, 130.2, 130.2, 130.2],
        ['2019/9/9', 130.2, 128.4, 128.4, 128.4],
        ['2019/9/12', 128.4, 129.6, 129.6, 129.6],
        ['2019/9/16', 129.6, 129.8, 129.8, 129.8],
        ['2019/9/20', 129.8, 130, 130, 130],
        ['2019/9/23', 130, 130, 130, 130],
        ['2019/9/27', 130, 128.2, 128.2, 128.2],
        ['2019/9/30', 128.2, 129, 129, 129],
        ['2019/10/6', 129, 127.6, 127.6, 127.6],
        ['2019/10/8', 127.6, 128.2, 128.2, 128.2],
        ['2019/10/12', 128.2, 128.6, 128.6, 128.6],
        ['2019/10/14', 128.6, 129.4, 129.4, 129.4],
        ['2019/10/18', 129.4, 128.6, 128.6, 128.6],
        ['2019/10/21', 128.6, 127.6, 127.6, 127.6],
        ['2019/10/25', 127.6, 129.6, 129.6, 129.6],
        ['2019/10/28', 129.6, 128.4, 128.4, 128.4],
        ['2019/11/1', 128.4, 129, 129, 129],
        ['2019/11/4', 129, 128.4, 128.4, 128.4],
        ['2019/11/11', 128.6, 127, 127, 127],
        ['2019/11/15', 127, 127.4, 127.4, 127.4],
        ['2019/11/18', 127.4, 128, 128, 128],
        ['2019/11/25', 128, 127.4, 127.4, 127.4],
        ['2019/11/29', 127.4, 127.6, 127.6, 127.6],
        ['2019/12/2', 127.6, 128.8, 128.8, 128.8],
        ['2019/12/6', 128.8, 128.8, 128.8, 128.8],
        ['2019/12/9', 128.8, 128.2, 128.2, 128.2],
        ['2019/12/13', 128.2, 128.8, 128.8, 128.8],
        ['2019/12/20', 128.8, 128.2, 128.2, 128.2],
        ['2019/12/24', 128.2, 127.8, 127.8, 127.8],
        ['2019/12/27', 127.8, 128.2, 128.2, 128.2],
        ['2020/1/1', 128.2, 128.4, 128.4, 128.4],
        ['2020/1/8', 128.4, 128.4, 128.4, 128.4],
        ['2020/1/17', 128.4, 126.6, 126.6, 126.6],
        ['2020/1/23', 126.6, 126.2, 126.2, 126.2],
        ['2020/2/18', 126.2, 122.8, 122.8, 122.8],
        ['2020/2/27', 122.8, 124, 124, 124],
        ['2020/3/6', 124, 123.2, 123.2, 123.2],
        ['2020/3/11', 123.2, 124, 124, 124],
        ['2020/3/19', 124, 123, 123, 123],
        ['2020/3/31', 123, 123.6, 123.6, 123.6],
        ['2020/4/8', 123.6, 123.4, 123.4, 123.4],
        ['2020/4/14', 123.4, 124, 124, 124],
        ['2020/4/22', 124, 123.8, 123.8, 123.8],
        ['2020/4/29', 123.8, 124.6, 124.6, 124.6],
        ['2020/5/6', 124.6, 123.8, 123.8, 123.8],
        ['2020/5/12', 123.8, 124.6, 124.6, 124.6],
        ['2020/5/18', 124.6, 125.2, 125.2, 125.2],
        ['2020/5/25', 125.2, 124.2, 124.2, 124.2],
        ['2020/5/29', 124.2, 124.2, 124.2, 124.2],
        ['2020/6/2', 124.2, 125.2, 125.2, 125.2],
        ['2020/6/9', 125.2, 124.2, 124.2, 124.2],
        ['2020/6/16', 124.2, 124, 124, 124],
        ['2020/6/19', 124, 126.6, 126.6, 126.6],
        ['2020/6/23', 126.6, 124, 124, 124],
        ['2020/7/14', 124, 126.9, 126.9, 126.9],
        ['2020/7/20', 126.9, 125.7, 125.7, 125.7],
        ['2020/7/24', 125.7, 126.3, 126.3, 126.3],
        ['2020/7/27', 126.3, 126.5, 126.5, 126.5],
        ['2020/7/31', 126.5, 124.4, 124.4, 124.4],
        ['2020/8/3', 124.4, 125.6, 125.6, 125.6],
        ['2020/8/7', 125.6, 126.7, 126.7, 126.7],
        ['2020/8/10', 126.7, 126.2, 126.2, 126.2],
        ['2020/8/14', 126.2, 125.3, 125.3, 125.3],
        ['2020/8/17', 125.3, 125.5, 125.5, 125.5],
        ['2020/8/21', 125.5, 126.6, 126.6, 126.6],
        ['2020/8/24', 126.6, 126.2, 126.2, 126.2],
        ['2020/8/28', 126.2, 126.9, 126.9, 126.9],
        ['2020/8/31', 126.9, 126.2, 126.2, 126.2],
        ['2020/9/4', 126.2, 126.6, 126.6, 126.6],
        ['2020/9/7', 126.6, 125.6, 125.6, 125.6],
        ['2020/9/11', 125.6, 126, 126, 126],
        ['2020/9/14', 126, 127.1, 127.1, 127.1],
        ['2020/9/17', 127.1, 127.3, 127.3, 127.3],
        ['2020/9/21', 127.3, 125.6, 125.6, 125.6],
        ['2020/9/25', 125.6, 127, 127, 127],
        ['2020/9/28', 127, 125.8, 125.8, 125.8],
        ['2020/9/28', 125.8, 126.5, 126.5, 126.5],
        ['2020/10/9', 126.5, 128.9, 128.9, 128.9],
        ['2020/10/13', 128.9, 128, 128, 128],
        ['2020/10/16', 128, 127.5, 127.5, 127.5],
        ['2020/10/19', 127.5, 126.6, 126.6, 126.6],
        ['2020/10/19', 126.6, 127.8, 127.8, 127.8],
        ['2020/10/19', 127.8, 125.6, 125.6, 125.6],
        ['2020/11/6', 125.6, 126.7, 126.7, 126.7],
        ['2020/11/9', 126.7, 126.9, 126.9, 126.9],
        ['2020/11/20', 126.9, 128, 128, 128],
        ['2020/11/24', 128, 128, 128, 128],
        ['2020/11/27', 128, 128.5, 128.5, 128.5],
        ['2020/12/11', 128.5, 129, 129, 129],
        ['2020/12/21', 129, 128.8, 128.8, 128.8],
        ['2020/12/29', 128.8, 129.3, 129.3, 129.3],
        ['2021/1/4', 129.3, 127, 127, 127],
        ['2021/1/15', 127, 128, 128, 128],
        ['2021/1/22', 128, 128.6, 128.6, 128.6],
        ['2021/1/28', 128.6, 128.3, 128.3, 128.3],
        ['2021/2/5', 128.3, 128.6, 128.6, 128.6],
        ['2021/2/26', 128.6, 130.5, 130.5, 130.5],
        ['2021/3/5', 130.5, 130.6, 130.6, 130.6],
        ['2021/3/12', 130.6, 130.8, 130.8, 130.8],
        ['2021/3/19', 130.8, 133.2, 133.2, 133.2],
        ['2021/3/29', 133.2, 132.2, 132.2, 132.2],
        ['2021/4/6', 132.2, 133, 133, 133],
        ['2021/4/9', 133, 134.1, 134.1, 134.1],
        ['2021/4/16', 134.1, 132.9, 132.9, 132.9],
        ['2021/4/23', 132.9, 134.2, 134.2, 134.2],
        ['2021/4/30', 134.2, 134.2, 134.2, 134.2],
        ['2021/5/8', 134.2, 135.1, 135.1, 135.1],
        ['2021/5/14', 135.1, 134.1, 134.1, 134.1],
        ['2021/5/21', 134.1, 133.8, 133.8, 133.8],
        ['2021/5/28', 133.8, 133.6, 133.6, 133.6],
        ['2021/6/4', 133.6, 134.3, 134.3, 134.3],
        ['2021/6/11', 134.3, 134.3, 134.3, 134.3],
        ['2021/6/18', 134.3, 133.9, 133.9, 133.9],
        ['2021/6/24', 133.9, 134.2, 134.2, 134.2],
        ['2021/7/9', 134.2, 133.1, 133.1, 133.1],
        ['2021/7/23', 133.1, 132.6, 132.6, 132.6],
        ['2021/7/30', 132.6, 134.9, 134.9, 134.9],
        ['2021/8/13', 134.9, 134.5, 134.5, 134.5],
        ['2021/8/20', 134.5, 131.8, 131.8, 131.8],
        ['2021/8/27', 131.8, 131.8, 131.8, 131.8],
        ['2021/9/3', 131.8, 132.8, 132.8, 132.8],
        ['2021/9/10', 132.8, 132.6, 132.6, 132.6],
        ['2021/9/17', 132.6, 132.0, 132.0, 132.0],
        ['2021/9/24', 132.0, 131.8, 131.8, 131.8],
        ['2021/10/1', 131.8, 131.1, 131.1, 131.1],
        ['2021/10/9', 131.1, 130.8, 130.8, 130.8],
        ['2021/10/15', 130.8, 129.9, 129.9, 129.9],
        ['2021/10/22', 129.9, 130.1, 130.1, 130.1],
        ['2021/10/30', 130.1, 130.0, 130.0, 130.0],
        ['2021/11/5', 130.0, 129.4, 129.4, 129.4],
        ['2021/11/19', 129.4, 130.2, 130.2, 130.2],
        ['2021/11/26', 130.2, 129.7, 129.7, 129.7],
        ['2021/12/3', 129.7, 128.5, 128.5, 128.5],
        ['2021/12/10', 128.5, 129.0, 129.0, 129.0],
        ['2021/12/17', 129.0, 132.2, 132.2, 132.2],
        ['2021/12/24', 132.2, 130.3, 130.3, 130.3],
        ['2021/12/31', 130.3, 129.2, 129.2, 129.2],
        ['2022/1/7', 129.2, 128.8, 128.8, 128.8],
        ['2022/1/14', 128.8, 129.3, 129.3, 129.3],
        ['2022/1/21', 129.3, 129.1, 129.1, 129.1],
        ['2022/1/28', 129.1, 128.6, 128.6, 128.6],
        ['2022/2/4', 128.6, 128.1, 128.1, 128.1],
        ['2022/2/11', 128.1, 128.0, 128.0, 128.0],
        ['2022/2/18', 128.0, 130.3, 130.3, 130.3],
        ['2022/2/25', 130.3, 128.9, 128.9, 128.9],
        ['2022/3/11', 128.9, 128.8, 128.8, 128.8],
        ['2022/3/18', 128.8, 128.1, 128.1, 128.1],
        ['2022/3/25', 128.1, 129.3, 129.3, 129.3],
        ['2022/4/1', 129.3, 128.7, 128.7, 128.7],
        ['2022/4/8', 128.7, 129.6, 129.6, 129.6],
        ['2022/4/18', 129.6, 127.1, 127.1, 127.1],
        ['2022/4/29', 127.1, 127.5, 127.5, 127.5],
        ['2022/5/6', 127.5, 128.0, 128.0, 128.0],
        ['2022/5/14', 128.0, 125.4, 125.4, 125.4],
        ['2022/5/22', 125.4, 125.7, 125.7, 125.7],
        ['2022/5/29', 125.7, 126.4, 126.4, 126.4],
        ['2022/6/6', 126.4, 126.4, 126.4, 126.4],
        ['2022/6/9', 126.4, 126.0, 126.0, 126.0],
        ['2022/6/17', 126.0, 126.6, 126.6, 126.6],
        ['2022/6/23', 126.6, 125.4, 125.4, 125.4],
        ['2022/7/3', 125.4, 127.0, 127.0, 127.0],
        ['2022/7/11', 127.0, 127.4, 127.4, 127.4],
        ['2022/7/15', 127.4, 128.0, 128.0, 128.0],
        ['2022/7/22', 128.0, 127.7, 127.7, 127.7],
        ['2022/7/29', 127.7, 127.1, 127.1, 127.1],
        ['2022/8/5', 127.1, 128.6, 128.6, 128.6],
        ['2022/8/12', 128.6, 127.7, 127.7, 127.7],
        ['2022/8/19', 127.7, 127.0, 127.0, 127.0],
        ['2022/8/26', 127.0, 126.6, 126.6, 126.6],
        ['2022/9/2', 126.6, 126.1, 126.1, 126.1],
        ['2022/9/12', 126.1, 124.4, 124.4, 124.4],
        ['2022/9/16', 124.4, 126.0, 126.0, 126.0],
        ['2022/9/25', 126.0, 125.2, 125.2, 125.2],
        ['2022/9/30', 125.2, 126.4, 126.4, 126.4],
        ['2022/10/7', 126.4, 126.2, 126.2, 126.2],
        ['2022/10/14', 126.2, 126.0, 126.0, 126.0],
        ['2022/10/21', 126.0, 127.0, 127.0, 127.0],
        ['2022/10/28', 127.0, 127.3, 127.3, 127.3],
        ['2022/11/4', 127.3, 125.0, 125.0, 125.0],
        ['2022/11/11', 125.0, 125.2, 125.2, 125.2],
        ['2022/11/18', 125.2, 125.2, 125.2, 125.2],
        ['2022/12/2', 125.2, 123.9, 123.9, 123.9],
        ['2022/12/11', 123.9, 123.5, 123.5, 123.5],
        ['2022/12/16', 123.5, 122.3, 122.3, 122.3],
        ['2022/12/23', 122.3, 124.6, 124.6, 124.6],
        ['2022/12/31', 124.6, 125.0, 125.0, 125.0],
        ['2023/1/6', 125.0, 124.9, 124.9, 124.9],
        ['2023/1/13', 124.9, 125.2, 125.2, 125.2],
        ['2023/1/21', 125.2, 126.5, 126.5, 126.5],
        ['2023/1/28', 126.5, 126.8, 126.8, 126.8],
        ['2023/2/3', 126.8, 126.7, 126.7, 126.7],
        ['2023/2/11', 126.7, 127.0, 127.0, 127.0],
        ['2023/2/17', 127.0, 126.2, 126.2, 126.2],
        ['2023/2/24', 126.2, 126.7, 126.7, 126.7],
        ['2023/3/3', 126.7, 126.6, 126.6, 126.6],
        ['2023/3/14', 126.6, 126.6, 126.6, 126.6],
        ['2023/3/21', 126.6, 126.0, 126.0, 126.0],
        ['2023/3/31', 126.0, 125.3, 125.3, 125.3],
        ['2023/4/7', 125.3, 126.2, 126.2, 126.2],
        ['2023/4/14', 126.2, 127.1, 127.1, 127.1],
        ['2023/4/21', 127.1, 125.7, 125.7, 125.7],
        ['2023/4/28', 125.7, 126.1, 126.1, 126.1],
        ['2023/5/5', 126.1, 126.8, 126.8, 126.8],
        ['2023/5/12', 126.8, 126.8, 126.8, 126.8],
        ['2023/6/2', 126.8, 124.7, 124.7, 124.7],
        ['2023/6/9', 124.7, 124.1, 124.1, 124.1],
        ['2023/6/17', 124.1, 124.0, 124.0, 124.0],
        ['2023/6/25', 124.0, 126.0, 126.0, 126.0],
        ['2023/6/30', 126.0, 126.0, 126.0, 126.0],
        ['2023/7/7', 126.0, 125.2, 125.2, 125.2],
        ['2023/7/14', 125.2, 125.4, 125.4, 125.4],
        ['2023/7/21', 125.4, 125.6, 125.6, 125.6],
        ['2023/7/28', 125.6, 125.1, 125.1, 125.1],
        ['2023/8/4', 125.1, 125.5, 125.5, 125.5],
        ['2023/8/11', 125.5, 126.0, 126.0, 126.0],
        ['2023/8/18', 126.0, 124.6, 124.6, 124.6],
        ['2023/8/25', 124.6, 125.2, 125.2, 125.2],
        ['2023/9/1', 125.2, 126.3, 126.3, 126.3],
        ['2023/9/8', 126.3, 126.6, 126.6, 126.6],
        ['2023/9/17', 126.6, 125.2, 125.2, 125.2],
        ['2023/9/22', 125.2, 125.5, 125.5, 125.5],
        ['2023/10/7', 125.5, 125.6, 125.6, 125.6],
        ['2023/10/14', 125.6, 127.2, 127.2, 127.2],
        ['2023/10/21', 127.2, 126.5, 126.5, 126.5],
        ['2023/10/27', 126.5, 126.6, 126.6, 126.6],
        ['2023/11/3', 126.6, 126.2, 126.2, 126.2],
        ['2023/11/10', 126.2, 126.8, 126.8, 126.8],
        ['2023/11/19', 126.8, 126.3, 126.3, 126.3],
        ['2023/11/25', 126.3, 126.6, 126.6, 126.6],
        ['2023/12/2', 126.6, 127.2, 127.2, 127.2],
        ['2023/12/8', 127.2, 128.0, 128.0, 128.0],
        ['2023/12/15', 128.0, 127.9, 127.9, 127.9],
        ['2023/12/24', 127.9, 127.2, 127.2, 127.2],
        ['2023/12/29', 127.2, 129.3, 129.3, 129.3],
        ['2024/1/5', 129.3, 128.1, 128.1, 128.1],
        ['2024/1/12', 128.1, 128, 128, 128],
        ['2024/1/21', 128, 126.7, 126.7, 126.7],
        ['2024/2/9', 126.7, 128.5, 128.5, 128.5],
        ['2024/2/18', 128.5, 128.1, 128.1, 128.1],
        ['2024/2/23', 128.1, 127.4, 127.4, 127.4],
        ['2024/3/1', 127.4, 128.4, 128.4, 128.4],
        ['2024/3/9', 128.4, 129.2, 129.2, 129.2],
        ['2024/3/15', 129.2, 128.7, 128.7, 128.7],
        ['2024/3/30', 128.7, 128.7, 128.7, 128.7],
        ['2024/4/7', 128.7, 128.4, 128.4, 128.4],
        ['2024/4/12', 128.4, 129.2, 129.2, 129.2],
        ['2024/4/20', 129.2, 127.2, 127.2, 127.2],
        ['2024/4/26', 127.2, 129.4, 129.4, 129.4],
        ['2024/5/3', 129.4, 128.3, 128.3, 128.3],
        ['2024/5/10', 128.3, 129.6, 129.6, 129.6],
        ['2024/5/17', 129.6, 128.9, 128.9, 128.9],
        ['2024/6/4', 128.9, 128.1, 128.1, 128.1],
        ['2024/6/17', 128.1, 127.1, 127.1, 127.1],
        ['2024/6/24', 127.1, 127.6, 127.6, 127.6],
        ['2024/7/2', 127.6, 129.9, 129.9, 129.9],
        ['2024/7/9', 129.9, 130.3, 130.3, 130.3],
        ['2024/7/14', 130.3, 130.4, 130.4, 130.4],
        ['2024/7/21', 130.4, 130.0, 130.0, 130.0],
        ['2024/8/13', 130.0, 131.0, 131.0, 131.0],
        ['2024/8/20', 131.0, 131.2, 131.2, 131.2],
        ['2024/9/24', 131.2, 129.4, 129.4, 129.4],
        ['2024/10/3', 129.4, 129.2, 129.2, 129.2],
		
]