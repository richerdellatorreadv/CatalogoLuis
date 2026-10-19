import urllib.request
import re

urls = [
    'https://www.renault.com.br/veiculos-de-passeio/kwid.html',
    'https://www.renault.com.br/veiculos-de-passeio/kardian.html',
    'https://www.renault.com.br/veiculos-de-passeio/duster.html'
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}

for u in urls:
    print(f"=== {u} ===")
    try:
        req = urllib.request.Request(u, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8')
            packshots = set(re.findall(r'https?://[^\s"\'<>]+\.(?:png|webp|jpg)[^\s"\'<>]*', html))
            for p in packshots:
                if any(k in p.lower() for k in ['carpicker', 'packshot', 'cutout', 'render', 'outside', 'angle']):
                    print("Found:", p[:130])
    except Exception as e:
        print(f"Error {u}: {e}")
