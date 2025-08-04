from PIL import Image

def replace_color_with_transparency(image_path, output_path, target_color, tolerance=30):
    """
    将图片中某个颜色替换为透明
    :param image_path: 输入图片的路径
    :param output_path: 输出图片的路径
    :param target_color: 需要替换为透明的目标颜色 (R, G, B)
    :param tolerance: 容差范围，用于匹配相近的颜色，默认为 30
    """
    # 打开图片
    image = Image.open(image_path)
    
    # 确保图片是 RGBA 模式（支持透明通道）
    if image.mode != 'RGBA':
        image = image.convert('RGBA')
    
    # 获取图片的像素数据
    pixels = image.load()
    
    # 遍历图片中的每个像素
    for x in range(image.width):
        for y in range(image.height):
            # 获取当前像素的颜色
            r, g, b, a = pixels[x, y]
            
            # 检查当前像素是否在目标颜色的容差范围内
            if (abs(r - target_color[0]) <= tolerance and
                abs(g - target_color[1]) <= tolerance and
                abs(b - target_color[2]) <= tolerance):
                # 将该像素的透明度设置为 0
                pixels[x, y] = (r, g, b, 0)
    
    # 保存修改后的图片
    image.save(output_path)

# 示例用法
if __name__ == "__main__":
    input_image_path = "dw.png"  # 输入图片路径
    output_image_path = "dww.png"  # 输出图片路径
    target_color = (249,249,250)  # 目标颜色（红色）rgba(249,249,250,255)
    tolerance = 5  # 容差范围

    replace_color_with_transparency(input_image_path, output_image_path, target_color, tolerance)
    print(f"图片已处理并保存到 {output_image_path}")