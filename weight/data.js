var weight_data = [
    ['2019/9/2', 128.0, 128.0, 128.0, 128.0],
    ['2019/9/6', 128.0, 129.2, 129.2, 129.2],
    ['2019/9/9', 129.2, 127.4, 127.4, 127.4],
    ['2019/9/12', 127.4, 128.6, 128.6, 128.6],
    ['2019/9/16', 128.6, 128.8, 128.8, 128.8],
    ['2019/9/20', 128.8, 129.0, 129.0, 129.0],
    ['2019/9/23', 129.0, 129.0, 129.0, 129.0],
    ['2019/9/27', 129.0, 127.2, 127.2, 127.2],
    ['2019/9/30', 127.2, 128.0, 128.0, 128.0],
    ['2019/10/6', 128.0, 126.6, 126.6, 126.6],
    ['2019/10/8', 126.6, 127.2, 127.2, 127.2],
    ['2019/10/12', 127.2, 127.6, 127.6, 127.6],
    ['2019/10/14', 127.6, 128.4, 128.4, 128.4],
    ['2019/10/18', 128.4, 127.6, 127.6, 127.6],
    ['2019/10/21', 127.6, 126.6, 126.6, 126.6],
    ['2019/10/25', 126.6, 128.6, 128.6, 128.6],
    ['2019/10/28', 128.6, 127.4, 127.4, 127.4],
    ['2019/11/1', 127.4, 128.0, 128.0, 128.0],
    ['2019/11/4', 128.0, 127.4, 127.4, 127.4],
    ['2019/11/11', 127.6, 126.0, 126.0, 126.0],
    ['2019/11/15', 126.0, 126.4, 126.4, 126.4],
    ['2019/11/18', 126.4, 127.0, 127.0, 127.0],
    ['2019/11/25', 127.0, 126.4, 126.4, 126.4],
    ['2019/11/29', 126.4, 126.6, 126.6, 126.6],
    ['2019/12/2', 126.6, 127.8, 127.8, 127.8],
    ['2019/12/6', 127.8, 127.8, 127.8, 127.8],
    ['2019/12/9', 127.8, 127.2, 127.2, 127.2],
    ['2019/12/13', 127.2, 127.8, 127.8, 127.8],
    ['2019/12/20', 127.8, 127.2, 127.2, 127.2],
    ['2019/12/24', 127.2, 126.8, 126.8, 126.8],
    ['2019/12/27', 126.8, 127.2, 127.2, 127.2],
    ['2020/1/1', 127.2, 127.4, 127.4, 127.4],
    ['2020/1/8', 127.4, 127.4, 127.4, 127.4],
    ['2020/1/17', 127.4, 125.6, 125.6, 125.6],
    ['2020/1/23', 125.6, 125.2, 125.2, 125.2],
    ['2020/2/18', 125.2, 121.8, 121.8, 121.8],
    ['2020/2/27', 121.8, 123.0, 123.0, 123.0],
    ['2020/3/6', 123.0, 122.2, 122.2, 122.2],
    ['2020/3/11', 122.2, 123.0, 123.0, 123.0],
    ['2020/3/19', 123.0, 122.0, 122.0, 122.0],
    ['2020/3/31', 122.0, 122.6, 122.6, 122.6],
    ['2020/4/8', 122.6, 122.4, 122.4, 122.4],
    ['2020/4/14', 122.4, 123.0, 123.0, 123.0],
    ['2020/4/22', 123.0, 122.8, 122.8, 122.8],
    ['2020/4/29', 122.8, 123.6, 123.6, 123.6],
    ['2020/5/6', 123.6, 122.8, 122.8, 122.8],
    ['2020/5/12', 122.8, 123.6, 123.6, 123.6],
    ['2020/5/18', 123.6, 124.2, 124.2, 124.2],
    ['2020/5/25', 124.2, 123.2, 123.2, 123.2],
    ['2020/5/29', 123.2, 123.2, 123.2, 123.2],
    ['2020/6/2', 123.2, 124.2, 124.2, 124.2],
    ['2020/6/9', 124.2, 123.2, 123.2, 123.2],
    ['2020/6/16', 123.2, 123.0, 123.0, 123.0],
    ['2020/6/19', 123.0, 125.6, 125.6, 125.6],
    ['2020/6/23', 125.6, 123.0, 123.0, 123.0],
    ['2020/7/14', 123.0, 125.9, 125.9, 125.9],
    ['2020/7/20', 125.9, 124.7, 124.7, 124.7],
    ['2020/7/24', 124.7, 125.3, 125.3, 125.3],
    ['2020/7/27', 125.3, 125.5, 125.5, 125.5],
    ['2020/7/31', 125.5, 123.4, 123.4, 123.4],
    ['2020/8/3', 123.4, 124.6, 124.6, 124.6],
    ['2020/8/7', 124.6, 125.7, 125.7, 125.7],
    ['2020/8/10', 125.7, 125.2, 125.2, 125.2],
    ['2020/8/14', 125.2, 124.3, 124.3, 124.3],
    ['2020/8/17', 124.3, 124.5, 124.5, 124.5],
    ['2020/8/21', 124.5, 125.6, 125.6, 125.6],
    ['2020/8/24', 125.6, 125.2, 125.2, 125.2],
    ['2020/8/28', 125.2, 125.9, 125.9, 125.9],
    ['2020/8/31', 125.9, 125.2, 125.2, 125.2],
    ['2020/9/4', 125.2, 125.6, 125.6, 125.6],
    ['2020/9/7', 125.6, 124.6, 124.6, 124.6],
    ['2020/9/11', 124.6, 125.0, 125.0, 125.0],
    ['2020/9/14', 125.0, 126.1, 126.1, 126.1],
    ['2020/9/17', 126.1, 126.3, 126.3, 126.3],
    ['2020/9/21', 126.3, 124.6, 124.6, 124.6],
    ['2020/9/25', 124.6, 126.0, 126.0, 126.0],
    ['2020/9/28', 126.0, 124.8, 124.8, 124.8],
    ['2020/9/28', 124.8, 125.5, 125.5, 125.5],
    ['2020/10/9', 125.5, 127.9, 127.9, 127.9],
    ['2020/10/13', 127.9, 127.0, 127.0, 127.0],
    ['2020/10/16', 127.0, 126.5, 126.5, 126.5],
	]
