import os
from PIL import Image

CARS_DIR = r"assets\img\cars"

def optimize_images():
    for f in os.listdir(CARS_DIR):
        if not f.endswith(('.png', '.jpg', '.jpeg')):
            continue
        filepath = os.path.join(CARS_DIR, f)
        base_name, ext = os.path.splitext(f)
        try:
            with Image.open(filepath) as img:
                # Resize if wider than 1400
                orig_w, orig_h = img.size
                if orig_w > 1400:
                    new_h = int((1400 / orig_w) * orig_h)
                    img = img.resize((1400, new_h), Image.Resampling.LANCZOS)
                
                # Save optimized WebP
                webp_path = os.path.join(CARS_DIR, f"{base_name}.webp")
                img.save(webp_path, "WEBP", quality=90, method=6)
                
                # If PNG, also save optimized PNG
                if ext.lower() == '.png':
                    img.save(filepath, "PNG", optimize=True)
                    
                print(f"Optimized {f}: original {orig_w}x{orig_h} -> {img.size[0]}x{img.size[1]}, WebP size: {os.path.getsize(webp_path)} bytes")
        except Exception as e:
            print(f"Error processing {f}: {e}")

if __name__ == '__main__':
    optimize_images()
