#!/bin/zsh
# ============================================================
# Pohon Ilmu Human Capital — peluncur aplikasi
# Cukup double-click file ini. Ia menjalankan server lokal kecil
# lalu membuka aplikasinya di browser secara otomatis.
# ============================================================
cd "$(dirname "$0")"

PORT=8571
# cari port kosong bila 8571 sedang dipakai
while lsof -i :$PORT >/dev/null 2>&1; do PORT=$((PORT+1)); done

echo ""
echo "  🌳 Pohon Ilmu Human Capital"
echo "  Server berjalan di http://localhost:$PORT"
echo "  Tutup jendela Terminal ini untuk menghentikan aplikasi."
echo ""

( sleep 1 && open "http://localhost:$PORT" ) &
exec python3 -m http.server $PORT
