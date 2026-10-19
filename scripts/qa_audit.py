import os
import sys
import re
import json

# Ensure utf-8 encoding on Windows console
sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = r"c:\Users\Richer.DESKTOP-9F3B6VA\Downloads\Nova pasta (2)-20261019T154310Z-1-001"
INDEX_PATH = os.path.join(BASE_DIR, "index.html")
CSS_PATH = os.path.join(BASE_DIR, "assets", "css", "style.css")
JS_PATH = os.path.join(BASE_DIR, "assets", "js", "app.js")

def audit():
    errors = []
    warnings = []
    passed = []

    print("=== INICIANDO AUDITORIA DO REVISOR (QA AGENT) ===")

    # 1. Checar se index.html existe na raiz
    if os.path.exists(INDEX_PATH):
        passed.append("index.html está localizado na raiz (pronto para GitHub Pages)")
    else:
        errors.append("index.html NÃO encontrado na raiz")

    # 2. Checar caminhos absolutos no index.html, style.css e app.js
    for fpath in [INDEX_PATH, CSS_PATH, JS_PATH]:
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
            if re.search(r"[a-zA-Z]:\\", content) or re.search(r"file:///", content):
                errors.append(f"Caminho absoluto local detectado em: {os.path.basename(fpath)}")
            else:
                passed.append(f"Sem caminhos absolutos em {os.path.basename(fpath)}")

    # 3. Checar IDs do index.html necessários para o JS
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html_content = f.read()
        required_ids = [
            "catalogGrid", "resultsCount", "emptyState", 
            "searchInput", "searchClear", "sortSelect", 
            "vehicleModal", "modalBody",
            "timerHours", "timerMinutes", "timerSeconds"
        ]
        for req_id in required_ids:
            if f'id="{req_id}"' in html_content:
                passed.append(f"Elemento HTML #{req_id} presente")
            else:
                errors.append(f"Elemento HTML obrigatório #{req_id} ausente no index.html")

    # 4. Checar integridade dos arquivos de imagem referenciados no app.js
    with open(JS_PATH, "r", encoding="utf-8") as f:
        js_content = f.read()
        # Encontra todos os caminhos de assets/img/...
        img_matches = set(re.findall(r"assets/img/[\w\-/\.]+\.(?:webp|png|jpg|jpeg|svg)", js_content))
        for img_rel in img_matches:
            full_img_path = os.path.join(BASE_DIR, img_rel.replace("/", "\\"))
            if os.path.exists(full_img_path):
                size_kb = round(os.path.getsize(full_img_path) / 1024, 1)
                passed.append(f"Imagem encontrada: {img_rel} ({size_kb} KB)")
            else:
                errors.append(f"Imagem quebrada/inexistente referenciada em app.js: {img_rel}")

    # 5. Checar imagens referenciadas no index.html
    html_imgs = set(re.findall(r"src=[\"'](assets/img/[\w\-/\.]+\.(?:webp|png|jpg|jpeg|svg))[\"']", html_content))
    for img_rel in html_imgs:
        full_img_path = os.path.join(BASE_DIR, img_rel.replace("/", "\\"))
        if os.path.exists(full_img_path):
            passed.append(f"Imagem de header/consultor no HTML encontrada: {img_rel}")
        else:
            errors.append(f"Imagem quebrada no HTML: {img_rel}")

    # 6. Checar formato do WhatsApp
    wa_links = re.findall(r"wa\.me/(\d+)", html_content) + re.findall(r"phoneRaw:\s*\"(\d+)\"", js_content)
    for phone in wa_links:
        if phone == "5569984215933":
            passed.append(f"Número de WhatsApp verificado com DDI + DDD + Telefone: +{phone}")
        else:
            warnings.append(f"Número de WhatsApp inesperado: {phone}")

    print("\n--- RESULTADOS DA AUDITORIA ---")
    print(f"✅ Itens Aprovados: {len(passed)}")
    for p in passed:
        print(f"  [OK] {p}")

    if warnings:
        print(f"\n⚠️ Avisos: {len(warnings)}")
        for w in warnings:
            print(f"  [WARN] {w}")

    if errors:
        print(f"\n❌ ERROS CRÍTICOS: {len(errors)}")
        for e in errors:
            print(f"  [FAIL] {e}")
        return False
    else:
        print("\n🎉 AUDITORIA APROVADA: 100% de conformidade com os requisitos!")
        return True

if __name__ == '__main__':
    audit()
