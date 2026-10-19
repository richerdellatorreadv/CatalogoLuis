import urllib.request
import os
import sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

DEST_DIR = r"assets\img\cars"
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Referer': 'https://www.renault.com.br/'
}

CDN_BASE = "https://www.renault.com.br/agg/vn/unique/ONE_DACIA_PP_XLARGE_DENSITY2/r_brandSite_carPicker_1.png?uri="

VERSION_URLS = {
    # Kwid Lineup
    "kwid-evolution": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-ENS_0MDL2P1SERIELIM1_-OKNU",
    "kwid-techno": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-ENS_0MDL2P1SERIELIM2_-OKNU",
    "kwid-outsider": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-OKNU",
    "kwid-front": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FBB1%2Fkwid%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-OKNU",

    # Kardian Lineup
    "kardian-vibe": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FHM1%2Fkardian%2Fc%2FA-ENS_0MDL2P1SERIELIM2_-TERQH",
    "kardian-evolution": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FHM1%2Fkardian%2Fc%2FA-ENS_0MDL2P1SERIELIM2_-TERQH",
    "kardian-techno": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FHM1%2Fkardian%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TERQH",
    "kardian-iconic": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FHM1%2Fkardian%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-TERQH",
    "kardian-front": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FHM1%2Fkardian%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-TERQH",

    # Duster Lineup (now complete with all official versions!)
    "duster-intense-man": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FJM1%2Fduster%2Fc%2FA-ENS_0MDL2P1SERIELIM1_-TEKNG",
    "duster-intense-cvt": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FJM1%2Fduster%2Fc%2FA-ENS_0MDL2P1SERIELIM2_-TEKNG",
    "duster-iconic-16": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FJM1%2Fduster%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TEKNG",
    "duster-iconic-turbo": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FJM1%2Fduster%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-TEKNG",
    "duster-front": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FJM1%2Fduster%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-TEKNG",

    # Boreal Lineup (100% standardized!)
    "boreal-evolution": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FRM1%2Fboreal%2Fc%2FA-ENS_0MDL2P1SERIELIM2_-TERRM",
    "boreal-techno": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FRM1%2Fboreal%2Fc%2FA-ENS_0MDL2P1SERIELIM2_-TERRM",
    "boreal-iconic": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FRM1%2Fboreal%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TERRM",
    "boreal-front": f"{CDN_BASE}https%3A%2F%2Fbr.co.rplug.renault.com%2Fproduct%2Fmodel%2FRM1%2Fboreal%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TERRM",
}

def download_all():
    print(f"Downloading {len(VERSION_URLS)} version packshots from Renault Brasil...")
    for key, url in VERSION_URLS.items():
        png_path = os.path.join(DEST_DIR, f"{key}.png")
        webp_path = os.path.join(DEST_DIR, f"{key}.webp")
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
                with open(png_path, "wb") as f:
                    f.write(data)
                with Image.open(png_path) as img:
                    img.save(webp_path, "WEBP", quality=92, method=6)
                print(f"✓ {key}: PNG={len(data)}B, WebP={os.path.getsize(webp_path)}B")
        except Exception as e:
            print(f"✗ Error {key}: {e}")

if __name__ == '__main__':
    download_all()
