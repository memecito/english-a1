#!/usr/bin/env python3
"""Genera words.js a partir de data/translations.txt (formato: ingles|es1,es2,...).

Las palabras en inglés salen de documents/vocabulary-list.pdf (Cambridge A2 Key);
la lista original solo trae inglés, las traducciones son de data/translations.txt.
Palabras puramente gramaticales o ambiguas se excluyen (SKIP).
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SKIP = {"would", "shall", "might", "could", "of", "to", "the", "it", "its", "itself",
        "a.m.", "p.m.", "per", "as", "such", "than", "off", "yet", "else", "ms", "at", "out of", "over"}
ORDER = {"lots / a lot": ["a lot", "lots"]}  # variantes con orden a medida

words, seen = [], set()
for line in (ROOT / "data/translations.txt").read_text(encoding="utf8").splitlines():
    if "|" not in line:
        continue
    raw, es = line.split("|", 1)
    key = raw.strip().lower()
    if key in SKIP or key in seen:
        continue
    seen.add(key)
    en = ORDER.get(key) or [v.strip() for v in raw.split("/") if v.strip()]
    words.append({"en": en, "es": [v.strip() for v in es.split(",") if v.strip()]})

words.sort(key=lambda w: w["en"][0].lower())
out = ROOT / "words.js"
out.write_text("// Generado por tools/build_words.py — no editar a mano\nconst WORDS = "
               + json.dumps(words, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf8")
print(len(words), "palabras ->", out)
