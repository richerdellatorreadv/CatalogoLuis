import urllib.request
import urllib.parse
import json
import os

def search_commons(query, limit=10):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size|mime&format=json&gsrlimit={limit}"
    req = urllib.request.Request(url, headers={'User-Agent': 'RenaultCatalog/1.0 (contact@example.com)'})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for pid, p in pages.items():
                if 'imageinfo' in p:
                    ii = p['imageinfo'][0]
                    results.append({
                        'title': p.get('title'),
                        'url': ii.get('url'),
                        'mime': ii.get('mime'),
                        'width': ii.get('width'),
                        'height': ii.get('height')
                    })
            return results
    except Exception as e:
        print(f"Error searching {query}: {e}")
        return []

if __name__ == '__main__':
    queries = [
        "Renault Kwid png",
        "Renault Duster png",
        "Dacia Duster png",
        "Renault Austral png",
        "Renault Symbioz png",
        "Renault Rafale png",
        "Renault logo png"
    ]
    for q in queries:
        print(f"=== {q} ===")
        res = search_commons(q, 5)
        for r in res:
            print(f"- {r['title']} ({r['mime']}, {r['width']}x{r['height']}): {r['url']}")
