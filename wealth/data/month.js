month_data = [
	['2018/1/31', 84639.92, 88690.68999999999, 83720.68999999999, 89609.92],
	['2018/2/28', 88690.69, 91019.23, 87769.23, 91940.69],
	['2018/3/31', 91019.23, 100663.18000000002, 91019.23, 100663.18000000002],
	['2018/4/30', 100663.18, 104463.33999999998, 99763.33999999998, 105363.18],
	['2018/5/31', 104463.34, 106547.65000000002, 102007.65000000002, 109003.34],
	['2018/6/30', 106547.65, 110635.13, 106547.65, 110635.13],
	['2018/7/31', 110635.13, 100209.96, 97749.96, 113095.13],
	['2018/8/31', 100209.96, 101431.3, 99831.3, 101809.96],
	['2018/9/30', 101431.3, 106818.83999999994, 100427.83999999994, 107822.3],
	['2018/10/31', 106818.84, 106521.81999999995, 101221.81999999995, 112118.84],
	['2018/11/30', 106521.82, 106553.00000000003, 102753.00000000003, 110321.82],
	['2018/12/31', 106553.0, 114449.57, 100111.17, 120891.4],
	['2019/1/31', 114449.57, 128018.75999999998, 104516.28999999998, 137952.04],
	['2019/2/28', 128018.76, 130391.00999999998, 115903.79999999999, 142505.97],
	['2019/3/31', 130391.01, 143301.14, 128409.31000000001, 145282.84],
	['2019/4/30', 143301.14, 158512.20999999996, 132599.42999999996, 169213.92],
	['2019/5/31', 158512.21, 170387.68999999994, 155133.8, 173766.09999999998],
	['2019/6/30', 170387.69, 185200.2, 170387.69, 185200.2],
	['2019/7/31', 185200.2, 191886.36000000016, 177854.22000000015, 199232.34000000003],
	['2019/8/31', 191886.36, 203606.44000000003, 190417.47000000003, 205075.33 ],
	['2019/9/30', 203606.44, 214435.01000000004, 198745.18000000005, 219296.27 ],
	['2019/10/31', 214435.01, 236767.21000000002, 205834.08000000002, 245368.14 ],
	['2019/11/30', 236767.21, 247476.39999999997, 234543.26999999996, 249700.34 ],
	['2019/12/31', 247476.4, 255877.24000000002, 242965.79, 260387.85 ],
	['2020/1/31', 255877.24, 261785.155, 236208.545, 281453.85 ],
	['2020/2/29', 261785.15, 281088.69851299986, 261785.15, 281088.69851299986 ],
	['2020/3/31', 281088.7, 294167.208513, 278525.518513, 296730.39 ],
	['2020/4/30', 294167.21, 300093.42851299996, 278304.198513, 315956.44 ],
	['2020/5/31', 300093.43, 313013.0185129999, 297702.7985129999, 315403.64999999997 ],
	['2020/6/30', 313013.02, 323909.428513, 309671.298513, 327251.15 ],
	['2020/7/31', 323909.43, 360421.1185130002, 323909.43, 360421.1185130002 ],
	['2020/8/31', 360421.12, 362284.65851300023, 351267.92851300025, 371437.852 ],
	['2020/9/30', 362284.66, 452806.7285130002, 362284.66, 452806.7285130002 ],
	['2020/10/31', 452806.73, 461753.17851300014, 449311.30851300014, 464948.6 ],
	['2020/11/30', 461753.18, 439076.758513, 428884.888513, 471945.05 ],
	['2020/12/31', 439076.76, 387318.918513, 376793.148513, 449602.53 ],
	['2021/1/31', 387318.92, 294242.09851300006, 269946.43851300003, 411614.57999999996 ],
	['2021/2/28', 294242.1, 269185.43851299997, 258514.30851299996, 309913.23 ],
	['2021/3/31', 269185.43851299997, 263256.51, 252493.26851300004, 279948.68 ],
	['2021/4/30', 263256.51, 277536.5228129999, 261746.7528129999, 279046.28 ],
	['2021/5/31', 277536.52, 254282.23851300008, 242777.91851300007, 289040.84 ],
	['2021/6/30', 254282.24, 262435.378513, 251554.048513, 265163.57 ],
	['2021/7/31', 262435.378513, 259044.09351300003, 248851.103513, 269237.08 ],
	['2021/8/31', 259044.09, 258732.66351299998, 245974.11351299996, 271802.64 ],
	['2021/9/30', 258732.66, 271020.613513, 258732.66, 271020.613513 ],
	['2021/10/31', 271020.61, 293540.58951300004, 271020.61, 293540.58951300004 ],
	['2021/11/30', 293540.59, 303236.49351300014, 292504.86351300013, 304272.22000000003 ],
	['2021/12/31', 303236.49, 311393.4235130002, 299761.7935130002, 314868.12 ],
	['2022/1/31', 311393.42, 371410.249513, 311393.42, 371410.249513 ],
	['2022/2/28', 371410.25, 396208.381513, 371410.25, 396208.381513 ],
	['2022/3/31', 396208.38, 392774.8965129999, 381638.4565129999, 407344.82 ],
	['2022/4/30', 392774.9, 397374.75351300015, 380418.31351300015, 409731.34 ],
	['2022/5/31', 397374.75, 403267.36651300004, 393255.24651300005, 407386.87 ],
	['2022/6/30', 403267.37, 402757.5805130001, 392591.1405130001, 413433.81 ],
	['2022/7/31', 402757.58, 419644.31551299995, 402757.58, 419644.31551299995 ],
	['2022/8/31', 419644.32, 424485.29351299995, 413422.85351299995, 430706.76 ],
	['2022/9/30', 424485.29, 414243.45851300017, 401547.94851300016, 437180.8 ],
	['2022/10/31', 414243.46, 424245.5885129999, 413440.06851299986, 425048.98000000004 ],
	['2022/11/30', 424245.59, 388019.5335130001, 369114.0235130001, 443151.10000000003 ],
	['2022/12/31', 388019.53, 399872.87421000004, 388019.53, 399872.87421000004 ],
	['2023/1/31', 399872.87, 417028.379448, 383056.409448, 433844.83999999997 ],
	['2023/2/28', 417028.38, 426518.6143650001, 415181.4743650001, 428365.52 ],
	['2023/3/31', 426518.61, 437467.7909700001, 426210.7409700001, 437775.66 ],
	['2023/4/30', 437467.79, 430329.17234700004, 408899.24234700005, 458897.72 ],
	['2023/5/31', 430329.17, 402355.05231299996, 391098.002313, 441586.22 ],
	['2023/6/30', 402355.05, 408285.9564780001, 397313.86647800007, 413327.14 ],
	['2023/7/31', 408285.96, 444327.4967929999, 408285.96, 444327.4967929999 ],
	['2023/8/31', 444327.5, 439322.97579800006, 428490.17579800007, 455160.3 ],
	['2023/9/30', 439322.98, 441735.50260000007, 430902.7026000001, 450155.77999999997 ],
	['2023/10/31', 444322.98, 439400.35785600013, 420467.55785600014, 463255.77999999997 ],
	['2023/11/30', 439400.36, 442809.43448799994, 431976.63448799995, 450233.16 ],
	//open, close, lowest, highest
]
profit_data = [
	['2018/1/31', 0.0, -919.23, -919.23, -919.23],
	['2018/2/28', 0.0, -921.46, -921.46, -921.46],
	['2018/3/31', 0.0, 5000.0, 5000.0, 5000.0],
	['2018/4/30', 0.0, -899.84, -899.84, -899.84],
	['2018/5/31', 0.0, -2455.69, -2455.69, -2455.69],
	['2018/6/30', 0.0, 0.0, 0.0, 0.0],
	['2018/7/31', 0.0, -12885.1, -12885.1, -12885.1],
	['2018/8/31', 0.0, -378.66, -378.66, -378.66],
	['2018/9/30', 0.0, -1003.46, -1003.46, -1003.46],
	['2018/10/31', 0.0, -5597.02, -5597.02, -5597.02],
	['2018/11/30', 0.0, -3768.82, -3768.82, -3768.82],
	['2018/12/31', 0.0, -6441.83, -6441.83, -6441.83],
	['2019/1/31', 0.0, -9933.28, -9933.28, -9933.28],
	['2019/2/28', 0.0, -12114.96, -12114.96, -12114.96],
	['2019/3/31', 0.0, -1981.7, -1981.7, -1981.7],
	['2019/4/30', 0.0, -10701.71, -10701.71, -10701.71],
	['2019/5/31', 0.0, -3378.41, -3378.41, -3378.41],
	['2019/6/30', 0.0, 5.0, 5.0, 5.0],
	['2019/7/31', 0.0, -7345.98, -7345.98, -7345.98],
	['2019/8/31', 0.0, -1468.89, -1468.89, -1468.89],
	['2019/9/30', 0.0, -4861.26, -4861.26, -4861.26],
	['2019/10/31', 0.0, -8600.93, -8600.93, -8600.93],
	['2019/11/30', 0.0, -2223.94, -2223.94, -2223.94],
	['2019/12/31', 0.0, -4510.61, -4510.61, -4510.61],
	['2020/1/31', 0.0, -19668.7, -19668.7, -19668.7],
	['2020/2/29', 0.0, 5210.99, 5210.99, 5210.99],
	['2020/3/31', 0.0, -2563.18, -2563.18, -2563.18],
	['2020/4/30', 0.0, -15863.01, -15863.01, -15863.01],
	['2020/5/31', 0.0, -2390.63, -2390.63, -2390.63],
	['2020/6/30', 0.0, -3341.72, -3341.72, -3341.72],
	['2020/7/31', 0.0, 23353.56, 23353.56, 23353.56],
	['2020/7/31', 0.0, -9153.19, -9153.19, -9153.19],
	['2020/9/30', 0.0, 74547.69, 74547.69, 74547.69],
	['2020/10/31', 0.0, -2595.42, -2595.42, -2595.42],
	['2020/11/30', 0.0, -32868.29, -32868.29, -32868.29],
	['2020/12/31', 0.0, -62283.61, -62283.61, -62283.61],
	['2021/1/31', 0.0, -117372.48, -117372.48, -117372.48],
	['2021/2/28', 0.0, -35727.79, -35727.79, -35727.79],
	['2021/3/31', 0.0, -16692.17, -16692.179, -16692.17],
	['2021/4/30', 0.0, -1509.76, -1509.76, -1509.76],
	['2021/5/31', 0.0, -34758.60, -34758.60, -34758.60],
	['2021/6/30', 0.0, -2728.19, -2728.19, -2728.19],
	['2021/7/31', 0.0, -13584.28, -13584.28, -13584.28],
	['2021/8/31', 0.0, -13069.98, -13069.98, -13069.98],
	['2021/9/30', 0.0, 1556.32, 1556.32, 1556.32],
	['2021/10/31', 0.0, 7288.31, 7288.31, 7288.31],
	['2021/11/30', 0.0, -1035.73, -1035.73, -1035.73],
	['2021/12/31', 0.0, -3474.70, -3474.70, -3474.70],
	['2022/1/31', 0.0, 30841.50, 30841.50, 30841.50],
	['2022/2/28', 0.0, 13561.58, 13561.58, 13561.58],
	['2022/3/31', 0.0, -14569.92, -14569.92, -14569.92],
	['2022/4/30', 0.0, -12356.59, -12356.59, -12356.59],
	['2022/5/31', 0.0, -4119.50, -4119.50, -4119.50],
	['2022/6/30', 0.0, -10676.23, -10676.23, -10676.23],
	['2022/7/31', 0.0, 744.43, 744.43, 744.43],
	['2022/8/31', 0.0, -6221.47, -6221.47, -6221.47],
	['2022/9/30', 0.0, -22937.34, -22937.34, -22937.34],
	['2022/10/31', 0.0, -803.39, -803.39, -803.39],
	['2022/11/30', 0.0, -55131.57, -55131.57, -55131.57],
	['2022/12/31', 0.0, 1047.83, 1047.83, 1047.83],
	['2023/1/31', 0.0, -16816.46, -16816.46, -16816.46],
	['2023/2/28', 0.0, -1846.91, -1846.91, -1846.91],
	['2023/3/31', 0.0, -307.87, -307.87, -307.87],
	['2023/4/30', 0.0, -28568.55, -28568.55, -28568.55],
	['2023/5/31', 0.0, -39231.17, -39231.17, -39231.17],
	['2023/6/30', 0.0, -5041.18, -5041.18, -5041.18],
	['2023/7/31', 0.0, 15516.03, 15516.03, 15516.03],
	['2023/8/31', 0.0, -15837.32, -15837.32, -15837.32],
	['2023/9/30', 0.0, -8420.28, -8420.28, -8420.28],
	['2023/10/31', 0.0, -23855.42, -23855.42, -23855.42],
	['2023/11/30', 0.0, -7423.73, -7423.73, -7423.73],
]

expense_data = [
	['2018/1/31', "-"],
	['2018/2/28', "-"],
	['2018/3/31', "-"],
	['2018/4/30', "-"],
	['2018/5/31', "-"],
	['2018/6/30', "-"],
	['2018/7/31', "-"],
	['2018/8/31', "-"],
	['2018/9/30', "-"],
	['2018/10/31', "-"],
	['2018/11/30', "-"],
	['2018/12/31', "-"],
	['2019/1/31', "-"],
	['2019/2/28', "-"],
	['2019/3/31', "-"],
	['2019/4/30', "-"],
	['2019/5/31', "-"],
	['2019/6/30', "-"],
	['2019/7/31', "-"],
	['2019/8/31', "-"],
	['2019/9/30', "-"],
	['2019/10/31', "-"],
	['2019/11/30', "-"],
	['2019/12/31', "-"],
	['2020/1/31', "-"],
	['2020/2/29', "-"],
	['2020/3/31', "-"],
	['2020/4/30', "-"],
	['2020/5/31', "-"],
	['2020/6/30', "-"],
	['2020/7/31', "-"],
	['2020/7/31', "-"],
	['2020/9/30', "-"],
	['2020/10/31', "-"],
	['2020/11/30', "-"],
	['2020/12/31', "-"],
	['2021/1/31', "-"],
	['2021/2/28', "-"],
	['2021/3/31', "-"],
	['2021/4/30', "-"],
	['2021/5/31', "-"],
	['2021/6/30', "-"],
	['2021/7/31', -2405.67],
	['2021/8/31', -5116.71],
	['2021/9/30', -3984.73],
	['2021/10/31', -4134.67],
	['2021/12/30', -6313.65],
	['2021/12/31', -3541.54],
	['2022/1/31', -13419.7],
	['2022/2/28', -3562.49],
	['2022/3/31', -5062.77],
	['2022/4/30', -14186.61],
	['2022/5/31', -11814.33],
	['2022/6/30', -9562.16],
	['2022/7/31', -7687.18],
	['2022/8/31', -12702.52],
	['2022/9/30', -6502.77],
	['2022/10/31', -6237.66],
	['2022/11/30', -61537.6],
	['2022/12/31', -4596.59],
	['2023/1/31', -16826.73],
	['2023/2/28', -6249.14],
	['2023/3/31', -3884.49],
	['2023/4/30', -14889.48],
	['2023/5/31', -9127.00],
	['2023/6/30', -9139.61],
	['2023/7/31', -8259.37],
	['2023/8/31', -6165.78],
	['2023/9/30', -15258.45],
	['2023/10/31', -12634.45],
	['2023/11/30', -9336.96],
]
