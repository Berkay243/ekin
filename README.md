# 📰 Gazete Bulmacası - Nilipek / Sandığım

Arkadaşınız için özel olarak hazırlanan **nostaljik gazete sözlük bulmacası** konseptli web uygulaması.

---

## 🗞️ Yeni Bulmaca Mantığı ve Akışı

Bulmaca artık **eski gazete bulmaca ekleri** havasında 2 aşamalı olarak çalışıyor:

### 1. Aşama: 8 Farklı Sözlük Tanımı & Kelime Haritası
Arkadaşınız sırasıyla 8 farklı kelimeyi gazetedeki sözlük tanımlarını okuyarak bulur:
1. **S**EVGİ *(5 harf)* - "İnsanı bir şeye veya bir kimseye karşı yakın ilgi ve bağlılık göstermeye yönelten yüce duygu; muhabbet."
2. **A**NLATI *(6 harf)* - "Bir olayın, durumun ya da duygunun söz veya yazıyla hikâye edilerek dile getirilmesi biçimi."
3. **N**OSTALJİ *(8 harf)* - "Geçmişte kalan güzel günlere, yaşantılara veya mekânlara karşı duyulan tatlı ve özlem dolu duygu."
4. **D**ÜŞÜNCELİ *(9 harf)* - "Başkalarının durumunu, ihtiyaçlarını gözeten, ince ruhlu ve nezaket sahibi (kimse); zarif, hassas."
5. **I**ŞILTI *(6 harf)* - "Göz alıcı, pırıl pırıl parıldayan ışık dalgası; etrafa saçılan canlı parlaklık."
6. **Ğ** *(1 harf - Özel Harf Adımı)* - "Eski dilde ve gramerde 'Yumuşak Ge' adıyla anılan; hiçbir Türkçe sözcüğün başında yer almayan gizemli harf."
7. **I**LIK *(4 harf)* - "Ne sıcak ne de soğuk olan, ikisinin ortasında, insana tatlı bir ferahlık ve dinginlik veren (hava veya su)."
8. **M**ELODİ *(6 harf)* - "Belli bir duygu ve ahenk uyandıracak biçimde düzenlenmiş sesler dizisi; ezgi, nağme."

Yukarıdaki **Kelime Haritası (Word Map)** üzerinde çözülen kelimeler yeşil olarak listelenir.

---

### 2. Aşama: Baş Harfleri Birleştirme (SANDIĞIM)
- 8 kelime tamamlandığında özel bir ekran açılır.
- "Bütün kelimeleri çözdün! Şimdi çözdüğün 8 kelimenin baş harflerini sırasıyla aşağıya yaz ve gizli şarkıyı ortaya çıkar!" denir.
- Ekranda 8 kelime ve vurgulanmış baş harfleri (`[S]EVGİ`, `[A]NLATI`, `[N]OSTALJİ`...) listelenir.
- Arkadaşınız kutuya **SANDIĞIM** yazıp *"Şarkıyı Çal & Onayla 💖"* butonuna bastığında:
  - 🎉 Konfeti yağmuru başlar.
  - 💿 Nostaljik plak dönmeye başlar.
  - 🎵 **Nilipek - Sandığım** şarkısı arka planda çalmaya başlar!

---

## 🔊 Kesintisiz Ses Oynatma Garantisi (Tarayıcı / Mobil)
- **İlk Giriş Kilidi Açma:** İlk ekrandaki *"Bulmacayı Çözmeye Başla"* butonuna tıklandığı an `AudioContext` ve ses kanalı sessizce uyandırılır.
- **Onay Anında Çalma:** Kullanıcı cevabı girip butona bastığı anda şarkı doğrudan kullanıcı tıklaması (`user gesture`) içinde başlatılır; iOS Safari, Chrome Mobil gibi sıkı autoplay kurallarına takılmaz.
- **Müzik Dosyası:** Nilipek'in **Sandığım** şarkısının MP3 dosyasını bu klasör içine **`sandigim.mp3`** adıyla atmanız yeterlidir.

---

## 🚀 Çalıştırma
- Bilgisayarınızda test etmek için doğrudan [index.html](file:///c:/Users/Berkocan/Desktop/ekin%20hediye/index.html) dosyasını çift tıklayarak tarayıcınızda açabilirsiniz.
