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
]
