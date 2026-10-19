import re
import urllib.parse
import os

filepath = r"C:\Users\Richer.DESKTOP-9F3B6VA\.gemini\antigravity\brain\70db187f-5ff3-45ef-a52d-f1fd666faa85\.system_generated\steps\223\content.md"

with open(filepath, "r", encoding="utf-8") as f:
    text = f.read()

# Match each model block
matches = re.findall(r'VehicleModelCard__modelName_price">([^<]+).*?<img src="([^"]+)"', text, re.DOTALL)
print(f"Total matches found: {len(matches)}")
for name, url in matches:
    clean_name = name.strip()
    full_url = "https://www.renault.com.br" + url if url.startswith("/") else url
    print(f"Model: {clean_name}")
    print(f"URL: {full_url}\n")
