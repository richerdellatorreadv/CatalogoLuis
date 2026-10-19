import urllib.request
import os
from PIL import Image

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Referer': 'https://www.renault.com.br/'
}

MODELS = {
    'kwid': 'https://www.renault.com.br/agg/vn/unique/ONE_DACIA_PP_XLARGE_DENSITY2/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-OKNU',
    'kardian': 'https://www.renault.com.br/agg/vn/unique/ONE_DACIA_PP_XLARGE_DENSITY2/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FHM1%2Fkardian%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-TERQH',
    'duster': 'https://www.renault.com.br/agg/vn/unique/ONE_DACIA_PP_XLARGE_DENSITY2/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FJM1%2Fduster%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-TEKNG',
    'boreal': 'https://www.renault.com.br/agg/vn/unique/ONE_DACIA_PP_XLARGE_DENSITY2/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FRM1%2Fboreal%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TERRM',
}

DEST_DIR = r"assets\img\cars"

def download_and_process():
    for name, url in MODELS.items():
        png_path = os.path.join(DEST_DIR, f"{name}-front.png")
        webp_path = os.path.join(DEST_DIR, f"{name}-front.webp")
        print(f"Downloading official {name} from Renault Brasil...")
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
                with open(png_path, "wb") as f:
                    f.write(data)
                print(f"Saved {png_path} ({len(data)} bytes)")

                # Process with PIL to ensure clean WebP
                with Image.open(png_path) as img:
                    img.save(webp_path, "WEBP", quality=92, method=6)
                    print(f"Generated {webp_path} ({os.path.getsize(webp_path)} bytes)")
        except Exception as e:
            print(f"Error with {name}: {e}")

if __name__ == '__main__':
    download_and_process()
