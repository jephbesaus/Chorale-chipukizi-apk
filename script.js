'use strict';

/* ============ DONNÉES DE L'APPLICATION ============
   Intégrées directement ici (au lieu d'un data.json séparé) pour éliminer
   tout risque d'oubli de fichier lors d'un déploiement manuel. */
const EMBEDDED_DATA = {
  user: {
    name: 'Chipukizi',
    email: 'exemple@email.com',
    phone: '243XXXXXXXXX',
    credits: 5,
    maxCredits: 5,
    subscription: { type: 'free', expires: null },
    projects: [],
    exports: []
  },
  songs: [
    {
      id: 1, title: 'Nisi Rudi Nyuma', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'nisi-rudi-nyuma.mp3', image: 'choristers-4.jpg',
      plays: 0, new: true, hero: true,
      heroImage: 'discover-purple.jpg', cardColor: 'card-purple', heroCaption: 'One voice, one heart, one purpose.',
      lyricsBg: 'bg-clef-red.jpg',
            lyrics: [
        { t: 0, text: '♪ Instrumental ♪' },
        { t: 24.32, text: 'Kuna mahali nilipotoka' },
        { t: 28.36, text: 'Pia mahali ninakwenda' },
        { t: 31.64, text: 'Mkono wako usiponiongoza, sitaweza' },
        { t: 38.019, text: 'Maana naona mji karibu' },
        { t: 44.22, text: 'Mateso nayo yapata' },
        { t: 48.18, text: 'Huko mbele sitaiona' },
        { t: 52.38, text: 'Nitashinda' },
        { t: 54.56, text: 'Nivike nguvu' },
        { t: 61.02, text: 'Bwana Yesu' },
        { t: 65.22, text: 'Nionyeshe ishara' },
        { t: 71.38, text: 'Uniongoze, Eh Mfalme' },
        { t: 81.44, text: 'Mwendo nimalize' },
        { t: 83.02, text: 'Kuna mahali nilipotoka' },
        { t: 89.36, text: 'Pia mahali ninakwenda' },
        { t: 93.29, text: 'Mkono wako usiponiongoza, Bwana' },
        { t: 96.61, text: 'Sitaweza' },
        { t: 100.08, text: 'Maana naona mji karibu' },
        { t: 105.22, text: 'Na mateso nayo yapata' },
        { t: 110.05, text: 'Huko mbele sitaiona' },
        { t: 113.2, text: 'Haleluya' },
        { t: 114.82, text: 'Nitashinda' },
        { t: 120.3, text: 'Kuna mahali nilipotoka' },
        { t: 124.3, text: 'Pia mahali ninakwenda' },
        { t: 128.3, text: 'Mkono wako, Bwana' },
        { t: 130.18, text: 'Sitaweza' },
        { t: 133.3, text: 'Maana naona mji karibu' },
        { t: 138.3, text: 'Mateso nayo yapata' },
        { t: 142.8, text: 'Huko mbele sitaiona' },
        { t: 147.9, text: 'Nitashinda' },
        { t: 149.2, text: 'Nivike nguvu zako, Bwana' },
        { t: 158.3, text: 'Nionyeshe, nionyeshe ishara zako' },
        { t: 165.8, text: 'Kisha uniongoze, Mfalme wa mbingu na dunia' },
        { t: 169.4, text: 'Uniongoze' },
        { t: 171.7, text: 'Mwendo nimalize' },
        { t: 174.1, text: 'Haleluya' },
        { t: 177.2, text: '"Tuko mbele zako, Eh Roho wa Mungu Muumbaji' },
        { t: 184.1, text: 'Twataka kuongozwa nawe' },
        { t: 186.2, text: 'Endelea kuziongoza hatua zetu mbele ili tusirudi nyuma, tuifikie malengo yetu' },
        { t: 194.0, text: 'Maana tukiwa na mwanga wako' },
        { t: 196.5, text: 'Tutayafanya mapenzi yako duniani kwa kupendeza, na vita vyote tutalishinda kupitia wewe, Yehova Sabaoth"' },
        { t: 205.381, text: 'Haleluya' },
        { t: 207.141, text: 'Bila wewe, siwezi lolote' },
        { t: 217.141, text: 'Ebenezer, Mungu msaada wetu' },
        { t: 221.321, text: 'Haleluya' },
        { t: 224.401, text: 'Nikiwa na wewe, sitaogopa lolote' },
        { t: 234.571, text: 'Eh Bwana' },
        { t: 239.661, text: 'Paza sauti tena, tuimbe pamoja' },
        { t: 242.141, text: 'Nikiwa na wewe, sitaogopa lolote, Eh Bwana' },
        { t: 253.641, text: 'Bwana wa majeshi' },
        { t: 256.961, text: 'Haleluya' },
        { t: 259.341, text: 'Nisirudi nyuma, Bwana niwezeshe' },
        { t: 266.561, text: 'Nisitazame watu na maneno yao' },
        { t: 273.211, text: 'Nisirudi nyuma, Bwana niwezeshe' },
        { t: 275.541, text: 'Nisitazame watu na maneno yao' },
        { t: 284.291, text: 'Nisirudi nyuma, Bwana niwezeshe' },
        { t: 291.041, text: 'Nisitazame watu na maneno yao' },
        { t: 298.861, text: 'Nisirudi nyuma, Bwana niwezeshe' },
        { t: 305.611, text: 'Nisitazame watu na maneno yao' },
        { t: 324.0, text: 'Nijue kwamba, ni wewe Bwana' },
        { t: 330.851, text: 'Utanilinda kufanya kazi yako, Bwana, milele yote' },
        { t: 338.691, text: 'Nijue kwamba, Bwana, ni wewe Bwana' },
        { t: 347.471, text: 'Utanivika nguvu, milele yote' },
        { t: 356.521, text: 'Nisirudi nyuma, Bwana niwezeshe' },
        { t: 367.421, text: 'Nisitazame watu na maneno yao' },
        { t: 376.441, text: 'Bwana wangu' },
        { t: 382.941, text: 'Haleluya' },
        { t: 385.061, text: '♪ Instrumental ♪' },
      ]
    },
    {
      id: 2, title: 'Baba Yetu', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'baba-yetu.mp3', image: 'choristers-1.jpg',
      plays: 0, new: true,
      heroImage: 'discover-green.jpg', cardColor: 'card-green',
      lyricsBg: 'bg-piano.jpg',
            lyrics: [
        { t: 17.98, text: 'Baba yetu ye mbinguni, jina lako litukuzwe' },
        { t: 24.46, text: 'Ufalme wako uje kwetu, mapenzi yako yatimizwe' },
        { t: 33.34, text: 'Baba yetu ye mbinguni, jina lako litukuzwe' },
        { t: 41.22, text: 'Ufalme wako uje kwetu, mapenzi yako yatimizwe' },
        { t: 48.839, text: 'Baba yetu ye mbinguni, jina lako litukuzwe' },
        { t: 56.66, text: 'Ufalme wako uje kwetu, mapenzi yako yatimizwe' },
        { t: 56.66, text: 'Duniyani kama mbinguni, tupe leo riziki zetu' },
        { t: 64.92, text: 'Samehe makosa yetu, kama tusamehe walio deni wetu' },
        { t: 72.66, text: 'Duniyani kama mbinguni, tupe leo riziki zetu' },
        { t: 79.67, text: 'Samehe makosa yetu, kama tusamehe walio deni wetu' },
        { t: 96.8, text: 'Usi tuache majaribuni' },
        { t: 113.73, text: 'Bali utuokoe na yule muovu' },
        { t: 120.92, text: 'Usi tuache majaribuni, bali utuokoe na yule muovu' },
        { t: 128.7, text: 'Kwa kuwa ufalme ni wako, na nguvu hata milele' },
        { t: 136.98, text: 'Kwa kuwa ufalme ni wako, na nguvu hata milele' },
        { t: 144.7, text: 'Amen' },
        { t: 145.8, text: 'Amen' },
        { t: 147.3, text: 'Amen, amen' },
        { t: 161.7, text: 'Amen' },
        { t: 165.97, text: 'Amen' },
        { t: 166.44, text: 'Kwa kuwa ufalme ni wako, na nguvu hata milele' },
        { t: 176.68, text: 'Kwa kuwa ufalme ni wako, na nguvu hata milele' },
        { t: 185.36, text: 'Amen' },
        { t: 190.5, text: '♪ Instrumental ♪' },
      ]
    },
    {
      id: 3, title: 'Fungua Mbingu', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'fungua-mbingu.mp3', image: 'choristers-3.jpg',
      plays: 0, new: true,
      heroImage: 'discover-yellow.jpg', cardColor: 'card-yellow',
      lyricsBg: 'bg-notes-blue.jpg',
            lyrics: [
        { t: 11.79, text: 'Fungua mbingu, inyesha mvua ya uwepo wako' },
        { t: 28.28, text: 'Neema yako imiminwe kwetu kama Roho Mtakatifu' },
        { t: 37.879, text: 'Nguvu zako zimiminwe kwetu kama Roho Mtakatifu' },
        { t: 46.76, text: 'Fungua mbingu, inyesha mvua ya uwepo wako' },
        { t: 55.78, text: 'Neema yako imiminwe kwetu kama Roho Mtakatifu' },
        { t: 65.019, text: 'Nguvu zako zimiminwe kwetu kama Roho Mtakatifu' },
        { t: 74.74, text: 'Wababa wako mahali hapa' },
        { t: 79.4, text: 'Wamama wako mahali hapa' },
        { t: 84.04, text: 'Vijana wako mahali hapa' },
        { t: 88.46, text: 'Nasi watoto tunakuomba' },
        { t: 92.899, text: 'Wababa wako mahali hapa' },
        { t: 98.16, text: 'Wamama wako mahali hapa' },
        { t: 102.74, text: 'Vijana wako mahali hapa' },
        { t: 106.86, text: 'Nasi watoto tunakuomba' },
        { t: 111.92, text: 'Neema yako twaitaka leo, ewe Baba' },
        { t: 122.1, text: 'Neema yako twaitaka leo' },
        { t: 131.1, text: 'Neema yako twaitaka leo' },
        { t: 138.84, text: 'Neema yako twaitaka leo' },
        { t: 143.109, text: 'Nguvu zako, twazitaka leo' },
        { t: 148.4, text: 'Nguvu zako, twazitaka leo' },
        { t: 166.64, text: '♪ Instrumental ♪' },
        { t: 168.149, text: 'Twaleta mahitaji ya mioyo zetu mbele yako' },
        { t: 175.889, text: 'Twaleta mahitaji ya mioyo zetu mbele yako' },
        { t: 185.109, text: 'Tunakuomba utujibu, kumbuka na familia zetu' },
        { t: 193.749, text: 'Tunakuomba utujibu, kumbuka na jamii yetu' },
        { t: 203.949, text: 'Tunakuomba utujibu, kumbuka na kanisa letu' },
        { t: 212.969, text: 'Tunakuomba utujibu, kumbuka na nchi yetu' },
        { t: 222.569, text: 'Neema yako twaitaka leo' },
        { t: 226.059, text: 'Neema yako twaitaka leo' },
        { t: 230.639, text: 'Neema yako twaitaka leo' },
        { t: 232.469, text: 'Neema yako twaitaka leo' },
        { t: 234.889, text: 'Nguvu zako, twazitaka leo' },
        { t: 246.229, text: 'Nguvu zako, twazitaka leo' },
        { t: 255.289, text: 'Neema yako twaitaka leo' },
        { t: 262.729, text: 'Nguvu zako, twazitaka leo' },
        { t: 265.549, text: 'Neema yako twaitaka leo' },
        { t: 267.749, text: 'Wababa wako mahali hapa' },
        { t: 274.159, text: 'Wamama wako mahali hapa' },
        { t: 280.329, text: 'Vijana wako mahali hapa' },
        { t: 285.089, text: 'Nasi watoto tunakuomba' },
        { t: 286.739, text: 'Wababa wako mahali hapa' },
        { t: 290.529, text: 'Wamama wako mahali hapa' },
        { t: 294.529, text: 'Vijana wako mahali hapa' },
        { t: 303.0, text: 'Nasi watoto tunakuomba' },
        { t: 326.389, text: 'Neema yako twaitaka leo' },
        { t: 327.559, text: 'Nguvu zako, twazitaka leo' },
        { t: 330.829, text: 'Neema yako twaitaka leo' },
        { t: 332.908, text: 'Nguvu zako, twazitaka leo' },
      ]
    },
    {
      id: 4, title: 'Garama', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'garama.mp3', image: 'choristers-2.jpg',
      plays: 0, new: false,
      heroImage: 'discover-orange.jpg', cardColor: 'card-orange',
      lyricsBg: 'bg-mic-warm.jpg',       lyrics: [
        { t: 0, text: '♪ Instrumental ♪' },
        { t: 9.4, text: '♪ Instrumental ♪' },
        { t: 18.8, text: 'Garama amelipa Yesu' },
        { t: 23.6, text: 'Na dhambi zimesamehewa' },
        { t: 31.34, text: 'Sikustahili, nimekombolewa' },
        { t: 39.3, text: 'Kwa damu yake Yesu' },
        { t: 46.2, text: 'Sasa ni huru' },
        { t: 56.68, text: 'Garama amelipa Yesu' },
        { t: 61.36, text: 'Na dhambi zimesamehewa' },
        { t: 69.06, text: 'Garama amelipa Yesu' },
        { t: 76.68, text: 'Na dhambi zimesamehewa' },
        { t: 84.759, text: 'Sikustahili, nimekombolewa' },
        { t: 92.88, text: 'Kwa damu yake Yesu' },
        { t: 99.52, text: 'Sasa ni huru' },
        { t: 104.77, text: 'Siko tena chini ya laana' },
        { t: 119.02, text: 'Bali juu ya baraka' },
        { t: 124.5, text: 'Yesu amelipa yote msalabani' },
        { t: 130.859, text: 'Siko tena chini ya laana' },
        { t: 139.76, text: 'Bali juu ya baraka' },
        { t: 146.64, text: 'Yesu amelipa yote msalabani' },
        { t: 154.54, text: 'Kajitwika dhambi zangu' },
        { t: 161.0, text: 'Kajitwika makosa yangu' },
        { t: 168.56, text: 'Kajitwika unyonge wangu' },
        { t: 170.837, text: 'Ndio maana leo ninaimba sifa zake' },
        { t: 177.016, text: 'Ndio maana leo ninaimba sifa zake' },
        { t: 184.917, text: 'Amemaliza yote, Yesu' },
        { t: 190.857, text: 'Amemaliza yote, Yesu' },
        { t: 198.497, text: 'Bwana kwa upendo wake' },
        { t: 206.577, text: 'Nina itwa mwana wake' },
        { t: 214.557, text: 'Kwa kupigwa kwake, ninaitwa mwana wake' },
        { t: 219.337, text: 'Niko huruuuuuuuuu' },
        { t: 225.376, text: 'Huru kabisa' },
        { t: 235.137, text: 'Siko tena chini ya laana' },
        { t: 240.617, text: 'Bali juu ya baraka' },
        { t: 244.097, text: 'Yesu amelipa yote msalabani' },
        { t: 246.667, text: 'Siko tena chini ya laana' },
        { t: 250.757, text: 'Bali juu ya baraka' },
        { t: 253.927, text: 'Yesu amelipa yote msalabani' },
        { t: 259.737, text: 'Kajitwika dhambi zangu' },
        { t: 263.667, text: 'Kajitwika makosa yangu' },
        { t: 265.656, text: 'Kajitwika unyonge wangu' },
        { t: 266.817, text: 'Ndio maana leo ninaimba sifa zake' },
        { t: 271.097, text: 'Ndio maana leo ninaimba sifa zake' },
        { t: 274.257, text: 'Ndio maana leo ninaimba sifa zake' },
        { t: 276.697, text: 'Ndio maana leo ninaimba sifa zake' },
        { t: 278.567, text: 'Ndio maana leo ninaimba sifa zake' },
        { t: 280.317, text: 'Garama amelipa Yesu...' },
        { t: 282.737, text: 'Na dhambi zimesamehewa...' },
        { t: 284.677, text: 'Sikustahili, nimekombolewa...' },
        { t: 289.877, text: 'Kwa damu yake Yesu, sasa ni huru...' },
        { t: 291.757, text: '♪ Vocalises finales ♪' },
        { t: 298.857, text: '♪ Vocalises finales ♪' },
        { t: 305.857, text: '♪ Instrumental ♪' },
      ]
    },
    {
      id: 5, title: 'Uni Jaze', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'uni-jaze.mp3', image: 'choristers-5.jpg',
      plays: 0, new: false,
      heroImage: 'discover-blue.jpg', cardColor: 'card-blue',
      lyricsBg: 'bg-mic-blue.jpg',       lyrics: [
        { t: 0, text: '♪ Instrumental ♪' },
        { t: 9.71, text: '♪ Instrumental ♪' },
        { t: 19.42, text: 'Unitaze Roho wako, Eh Bwana' },
        { t: 26.12, text: 'Natamani Roho wako unitaze' },
        { t: 34.32, text: 'Unitaze Roho wako, Eh Bwana' },
        { t: 43.14, text: 'Natamani Roho wako unitaze' },
        { t: 51.64, text: 'Kama vile mitume walivyojazwa na Roho huko Yerusalema' },
        { t: 61.84, text: 'Kama vile mitume walivyojazwa na Roho huko Yerusalema' },
        { t: 70.32, text: 'Walikungojea, kungojea' },
        { t: 74.34, text: 'Nawe ukashuka ukawajaza Roho Mtakatifu' },
        { t: 78.58, text: 'Walikungojea, kungojea' },
        { t: 83.08, text: 'Nawe ukashuka ukawajaza Roho Mtakatifu' },
        { t: 87.7, text: 'Kama vile ulivyowajaza mitume' },
        { t: 98.9, text: 'Nasi tutakungojea leo' },
        { t: 102.34, text: 'Wenye uongozi mwema, Baba' },
        { t: 108.46, text: 'Wenye amani mwema' },
        { t: 111.22, text: 'Kama vile ulivyowajaza mitume' },
        { t: 116.0, text: 'Nasi tutakungojea leo' },
        { t: 120.14, text: 'Wenye uongozi mwema, Baba' },
        { t: 125.92, text: 'Wenye amani mwema' },
        { t: 128.62, text: 'Pasipo roho, Baba, hatuwezi kitu' },
        { t: 138.12, text: 'Pasipo roho, hatuwezi' },
        { t: 144.54, text: 'Tawala... Roho...' },
        { t: 153.12, text: 'Abariki...' },
        { t: 162.08, text: 'Tawala maisha yangu' },
        { t: 169.8, text: 'Tawala huduma yangu' },
        { t: 179.6, text: 'Tawala kanisa letu' },
        { t: 187.3, text: 'Pasipo roho, Baba, hatuwezi kitu' },
        { t: 198.02, text: 'Pasipo roho, hatuwezi...' },
        { t: 204.1, text: 'Kama vile mitume walivyojazwa na Roho huko Yerusalema' },
        { t: 214.38, text: 'Kama vile mitume walivyojazwa na Roho huko Yerusalema' },
        { t: 223.3, text: 'Walikungojea, kungojea' },
        { t: 227.3, text: 'Nawe ukashuka ukawajaza Roho Mtakatifu' },
        { t: 231.78, text: 'Walikungojea, kungojea' },
        { t: 235.7, text: 'Nawe ukashuka ukawajaza Roho Mtakatifu' },
        { t: 240.3, text: 'Unitaze...' },
        { t: 248.1, text: 'Unitaze Roho wako, Eh Bwana' },
        { t: 255.5, text: 'Natamani Roho wako unitaze' },
        { t: 263.4, text: 'Unitaze Roho wako, Eh Bwana' },
        { t: 272.1, text: 'Natamani Roho wako unitaze' },
        { t: 281.3, text: 'Kama vile mitume walivyojazwa na Roho huko Yerusalema' },
        { t: 290.8, text: 'Kama vile mitume walivyojazwa na Roho huko Yerusalema' },
        { t: 299.3, text: 'Walikungojea, kungojea' },
        { t: 304.3, text: 'Nawe ukashuka ukawajaza Roho Mtakatifu' },
        { t: 308.2, text: 'Walikungojea, kungojea' },
        { t: 311.4, text: 'Nawe ukashuka ukawajaza Roho Mtakatifu' },
        { t: 317.32, text: '♪ Instrumental ♪' },
      ]
    },
    {
      id: 6, title: 'Jerusalemu', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'jerusalemu.mp3', image: 'choristers-6.jpg',
      plays: 0, new: false,
      heroImage: 'discover-purple.jpg', cardColor: 'card-purple',
      lyricsBg: 'bg-mic-dark.jpg',
            lyrics: [
        { t: 0, text: '♪ Instrumental ♪' },
        { t: 9.67, text: '♪ Instrumental ♪' },
        { t: 19.34, text: 'Jerusalemu, natamani nifike huko' },
        { t: 29.46, text: 'Nionane na Yesu, nitaketi pamoja naye' },
        { t: 30.54, text: 'Nitashangilia, nitacheza-cheza, nikiruka-ruka pamoja na Yesu' },
        { t: 40.8, text: 'Pamoja na Yesu' },
        { t: 42.12, text: 'Nitashangilia, nitacheza-cheza, nikiruka-ruka pamoja na Yesu' },
        { t: 52.38, text: 'Pamoja na Yesu' },
        { t: 53.26, text: 'Ni furaha tele tutakapoingia kwenye makao ya milele aliyotuandalia' },
        { t: 63.98, text: 'Ni furaha tele tutakapoingia kwenye makao ya milele aliyotuandalia' },
        { t: 75.36, text: 'Bwana Yesu atashika kitambaa na kunifuta machozi' },
        { t: 86.14, text: 'Akisema: « Karibu mwanangu, uliyeshinda »' },
        { t: 92.7, text: 'Malaika wataulizana: « Hawa ni wa nani, na wametoka wapi? »' },
        { t: 104.37, text: 'Ila Yesu atajibu' },
        { t: 104.37, text: '« Hawa ni wanangu walioshinda dhiki za dunia »' },
        { t: 115.3, text: 'Nitashangilia, nitacheza-cheza, nikiruka-ruka pamoja na Yesu' },
        { t: 125.39, text: 'Pamoja na Yesu, ni furaha' },
        { t: 129.16, text: 'Jerusalemu, natamani nifike huko' },
        { t: 139.3, text: 'Nionane na Yesu, nitaketi pamoja naye' },
        { t: 151.08, text: 'Nitashangilia, nitacheza-cheza, nikiruka-ruka pamoja na Yesu' },
        { t: 161.7, text: 'Pamoja na Yesu, ni furaha' },
        { t: 165.04, text: 'Jitaidi, ewe mwenzangu, tufike kule kwa Baba' },
        { t: 182.7, text: 'Ambako hakuna shida, machozi na kulia' },
        { t: 188.5, text: 'Tutaviacha huko duniani, kwa Baba ni furaha' },
        { t: 191.8, text: 'Kuimba na kucheza, milele tutaishi huko' },
        { t: 204.22, text: 'Tutakula vinono, chakula cha mbinguni' },
        { t: 216.32, text: 'Amani na furaha ni asili ya huko kwetu' },
        { t: 216.32, text: 'Tutawaona wale wote waliotangulia' },
        { t: 216.32, text: 'Baba zetu wa imani, huko tutaishi nao' },
        { t: 216.32, text: 'Tutashangilia, tutacheza-cheza, tukiruka-ruka pamoja na Yesu' },
        { t: 226.56, text: 'Pamoja na Yesu' },
        { t: 228.24, text: 'Eeeh' },
        { t: 229.28, text: 'Tutashangilia, tutacheza-cheza, tukiruka-ruka pamoja na Yesu' },
        { t: 239.8, text: 'Pamoja na Yesu' },
        { t: 240.91, text: 'Tutashangilia, tutacheza-cheza, tukiruka-ruka pamoja na Yesu' },
        { t: 251.4, text: 'Pamoja na Yesu' },
        { t: 251.41, text: 'Ni furaha tele tutakapoingia kwenye makao ya milele aliyotuandalia' },
        { t: 263.26, text: 'Ni furaha tele tutakapoingia kwenye makao ya milele aliyotuandalia' },
        { t: 274.52, text: 'Aaa' },
        { t: 275.18, text: 'Tutashangilia, tutacheza-cheza, tukiruka-ruka pamoja na Yesu' },
        { t: 285.18, text: 'Pamoja na Yesu, ni furaha' },
        { t: 288.84, text: '♪ Instrumental ♪' },
      ]
    },
    {
      id: 7, title: 'Mungu Ni Chef', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'mungu-ni-chef.mp3', image: 'choristers-4.jpg',
      plays: 0, new: false,
      heroImage: 'discover-green.jpg', cardColor: 'card-green',
      lyricsBg: 'bg-mic-smoke.jpg',
            lyrics: [
        { t: 0, text: '♪ Instrumental ♪' },
        { t: 6.51, text: 'Amina lele, Amina' },
        { t: 9.68, text: 'Amina lele' },
        { t: 19.7, text: 'Amina lele, Amina lele' },
        { t: 21.46, text: 'Yesu njo faraja ya nafsi yangu' },
        { t: 28.36, text: 'Nimeshampata, na wala sitamwacha kamwe' },
        { t: 32.8, text: 'Yesu njo faraja ya nafsi yangu' },
        { t: 37.4, text: 'Nimeshampata, na wala sitamwacha kamwe' },
        { t: 41.44, text: 'Adui wanijia hapo kwa njia moja' },
        { t: 45.74, text: 'Yeye huwasambaza kwa njia saba' },
        { t: 50.52, text: 'Adui anijia hapo kwa njia moja' },
        { t: 54.5, text: 'Yeye huwasambaza kwa njia saba' },
        { t: 59.24, text: 'Nafsi yangu imeokoka kama ndege kwa mtego' },
        { t: 63.28, text: 'Mtego umevunjika nami nimepata kuokoka' },
        { t: 67.84, text: 'Msaada wangu uko katika jina lake' },
        { t: 72.34, text: 'Namupenda' },
        { t: 78.15, text: 'Namwimbia' },
        { t: 82.51, text: 'Nalisifu jina lake' },
        { t: 89.31, text: 'Haleluya' },
        { t: 90.34, text: 'Milele yote' },
        { t: 92.19, text: 'Namupenda' },
        { t: 95.86, text: 'Namwimbia' },
        { t: 100.32, text: 'Nalisifu jina lake' },
        { t: 106.24, text: 'Milele yote' },
        { t: 109.48, text: 'Chef! Chef! Chef wa maisha yangu!' },
        { t: 117.71, text: 'Hata adui anijia hapo' },
        { t: 121.76, text: 'Chef! Chef wa maisha yangu!' },
        { t: 125.47, text: 'Yeye ni Chef wangu' },
        { t: 128.14, text: 'Eh' },
        { t: 129.14, text: 'Kama si Bwana alikuwa upande wangu' },
        { t: 141.78, text: 'Adui wangenimeza, ah kweli' },
        { t: 146.16, text: 'Bwana akiwa upande wangu, nani aliye juu yangu?' },
        { t: 150.94, text: 'Mtego umeufyatua nami nimefika salama' },
        { t: 155.46, text: 'Ndio maana' },
        { t: 156.96, text: 'Naimba, naimba kwa shangwe' },
        { t: 160.28, text: 'Sifa za Bwana zivume milele' },
        { t: 164.02, text: 'Ndio maana' },
        { t: 166.6, text: 'Naimba, naimba kwa shangwe' },
        { t: 169.06, text: 'Sifa za Bwana zivume milele' },
        { t: 171.8, text: 'Nina Baba, siko yatima' },
        { t: 180.76, text: 'Yeye ndiye Mfalme ananilinda' },
        { t: 184.76, text: 'Nina Baba, siko yatima' },
        { t: 189.82, text: 'Yeye ndiye Mfalme ananilinda' },
        { t: 193.28, text: 'Nina Baba (Nina Baba)' },
        { t: 196.56, text: 'Siko yatima (Sikai yatima mimi)' },
        { t: 199.269, text: 'Yeye ndiye Mfalme ananilinda' },
        { t: 201.829, text: 'Nina Baba, siko yatima, yeye ndiye Mfalme ananilinda' },
        { t: 210.69, text: 'Chef! Chef! Chef wa maisha yangu!' },
        { t: 214.16, text: 'Hata adui anijia hapo, niko na Chef wangu' },
        { t: 221.7, text: 'Chef! Chef wa maisha yangu!' },
        { t: 222.6, text: 'Chef! Chef wa maisha yangu!' },
        { t: 223.3, text: 'Chef! Chef wa maisha yangu!' },
        { t: 229.3, text: 'Mungu ni Chef wangu' },
        { t: 244.3, text: '♪ Instrumental ♪' },
      ]
    }
  ]
};

/* ============ ICÔNES SVG ============ */
const ICON_PLAY = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';
const ICON_HEART = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7.5-4.6-10-9.2C.5 8.4 2.4 5 6 5c2 0 3.5 1 4 2.3C10.5 6 12 5 14 5c3.6 0 5.5 3.4 4 6.8-2.5 4.6-10 9.2-10 9.2z"/></svg>';
const ICON_DOWNLOAD = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13m0 0-4-4m4 4 4-4"/><path d="M4 19h16"/></svg>';
const ICON_MORE = '<svg viewBox="0 0 24 24" width="16" height="16"><circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/></svg>';
const ICON_AUDIO_TAG = '<svg viewBox="0 0 24 24" width="12" height="12" style="vertical-align:-1px"><path d="M9 18V5l12-2v13" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="16" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
const ICON_VIDEO_TAG = '<svg viewBox="0 0 24 24" width="12" height="12" style="vertical-align:-1px"><path d="M4 6h11v12H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 10l5-3v10l-5-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
const ICON_SHARE = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4"/></svg>';
const ICON_PLAY_BIG = '<svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';
const ICON_PAUSE = '<svg viewBox="0 0 24 24" width="26" height="26"><rect x="6" y="5" width="4" height="14" fill="currentColor"/><rect x="14" y="5" width="4" height="14" fill="currentColor"/></svg>';

function shareSong(id) {
  const song = DATA.songs.find((s) => s.id === id);
  if (!song) return;
  if (navigator.share) {
    navigator.share({ title: song.title, text: `Écoutez "${song.title}" par Chorale Chipukizi` }).catch(() => {});
  } else {
    showToast(`Partage : "${song.title}"`);
  }
}

const likedSongs = new Set();
function toggleLike(id, btn) {
  if (likedSongs.has(id)) { likedSongs.delete(id); btn.classList.remove('liked'); }
  else { likedSongs.add(id); btn.classList.add('liked'); }
}

/* ============ ÉTAT GLOBAL ============ */
let DATA = null;
let credits = 5;
const MAX_CREDITS = 5;
let currentFilter = 'tous';
let currentSearch = '';

/* ============ CHARGEMENT DES DONNÉES ============ */
async function loadData() {
  // Les données sont intégrées dans script.js (voir EMBEDDED_DATA en haut du fichier) :
  // l'application fonctionne donc même si data.json n'a pas été correctement mis en ligne.
  DATA = JSON.parse(JSON.stringify(EMBEDDED_DATA));
  credits = DATA.user.credits ?? 5;
  document.getElementById('welcomeLine').innerHTML =
    `Bienvenue, <strong>${escapeHtml(DATA.user.name)}</strong>`;
  renderHome();
  renderSongList();
  renderVideoSongSelect();
  updateCreditsUI();
  renderStudioProjects();
  loadDurations();
}

/* ============ NAVIGATION ============ */
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.getElementById(`page-${pageId}`).classList.add('active');
  document.querySelectorAll('.menu-item, .nav-item').forEach((el) => {
    const isActive = el.dataset.page === pageId;
    el.classList.toggle('active', isActive);
    if (el.classList.contains('menu-item')) el.setAttribute('aria-selected', isActive);
  });
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

document.querySelectorAll('[data-page]').forEach((el) => {
  el.addEventListener('click', () => navigateTo(el.dataset.page));
});

/* ============ ACCUEIL ============ */
function renderHome() {
  const carousel = document.getElementById('carousel');
  const hero = DATA.songs.find((s) => s.hero) || DATA.songs[0];
  const others = DATA.songs.filter((s) => s.id !== (hero ? hero.id : null));
  const slides = hero ? [hero, ...others] : DATA.songs;

  carousel.innerHTML = slides.map((s) => `
    <div class="carousel-slide ${s.cardColor || 'card-purple'}" data-id="${s.id}">
      <img class="slide-photo" src="${s.heroImage || s.image}" alt="">
      <div class="slide-scrim"></div>
      <p class="eyebrow">Chorale Chipukizi</p>
      <h3>${escapeHtml(s.title)}</h3>
      <p>${escapeHtml(s.heroCaption || 'One voice, one heart, one purpose.')}</p>
      <div class="card-controls">
        <button class="icon-btn icon-btn--play" data-action="play" aria-label="Écouter">${ICON_PLAY}</button>
        <button class="icon-btn icon-btn--ghost" data-action="like" aria-label="Aimer">${ICON_HEART}</button>
        <button class="icon-btn icon-btn--ghost" data-action="download" aria-label="Télécharger">${ICON_DOWNLOAD}</button>
        <button class="icon-btn icon-btn--ghost icon-btn--more" data-action="more" aria-label="Plus d'options">${ICON_MORE}</button>
      </div>
    </div>
  `).join('');
  carousel.querySelectorAll('.carousel-slide').forEach((slide) => {
    const id = Number(slide.dataset.id);
    slide.querySelector('[data-action="play"]').addEventListener('click', (e) => { e.stopPropagation(); openPlayer(id); });
    slide.querySelector('[data-action="like"]').addEventListener('click', (e) => { e.stopPropagation(); toggleLike(id, e.currentTarget); });
    slide.querySelector('[data-action="download"]').addEventListener('click', (e) => { e.stopPropagation(); downloadSong(id); });
    slide.querySelector('[data-action="like"]').classList.toggle('liked', likedSongs.has(id));
    slide.addEventListener('click', () => openPlayer(id));
  });

  const top5 = [...DATA.songs].sort((a, b) => (b.plays || 0) - (a.plays || 0) || a.id - b.id).slice(0, 5);
  const top5List = document.getElementById('top5List');
  top5List.innerHTML = top5.map((s, i) => `
    <li data-id="${s.id}">
      <span class="top5-rank">${i + 1}</span>
      <img class="top5-cover" src="${s.image}" alt="" onerror="this.style.background='var(--card-hi)'; this.onerror=null; this.removeAttribute('src');">
      <div class="top5-info">
        <h4>${escapeHtml(s.title)}</h4>
        <span>${escapeHtml(s.artist)}</span>
      </div>
      <button class="icon-btn icon-btn--play icon-btn--sm" data-action="play" aria-label="Écouter">${ICON_PLAY}</button>
    </li>
  `).join('');
  top5List.querySelectorAll('li').forEach((li) => {
    const id = Number(li.dataset.id);
    li.addEventListener('click', () => openPlayer(id));
    li.querySelector('[data-action="play"]').addEventListener('click', (e) => { e.stopPropagation(); openPlayer(id); });
  });

  const releaseRow = document.getElementById('releaseRow');
  const latest = DATA.songs.filter((s) => s.new);
  releaseRow.innerHTML = latest.map((s) => `
    <div class="release-card" data-id="${s.id}">
      <div class="release-cover-wrap">
        <span class="badge-new">Nouveau</span>
        <img class="release-cover" src="${s.image}" alt="" onerror="this.onerror=null; this.removeAttribute('src');">
        <button class="icon-btn icon-btn--play icon-btn--float" data-action="play" aria-label="Écouter">${ICON_PLAY}</button>
      </div>
      <h4>${escapeHtml(s.title)}</h4>
    </div>
  `).join('');
  releaseRow.querySelectorAll('.release-card').forEach((c) => {
    const id = Number(c.dataset.id);
    c.addEventListener('click', () => openPlayer(id));
    c.querySelector('[data-action="play"]').addEventListener('click', (e) => { e.stopPropagation(); openPlayer(id); });
  });
}

/* ============ ALBUMS ============ */
function renderSongList() {
  const list = document.getElementById('songList');
  const filtered = DATA.songs.filter((s) => {
    const matchesFilter = currentFilter === 'tous' || s.type === currentFilter;
    const matchesSearch = s.title.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    list.innerHTML = '<p class="empty-state">Aucun chant trouvé</p>';
    return;
  }

  list.innerHTML = filtered.map((s) => `
    <div class="song-row" data-id="${s.id}">
      <img class="song-cover" src="${s.image}" alt="" onerror="this.onerror=null; this.removeAttribute('src');">
      <div class="song-info">
        <h4>${escapeHtml(s.title)}</h4>
        <span>${s.type === 'video' ? ICON_VIDEO_TAG : ICON_AUDIO_TAG} ${escapeHtml(s.artist)}${s.duration ? ' · ' + s.duration : ''}</span>
      </div>
      <button class="icon-btn icon-btn--ghost icon-btn--sm" data-action="download" aria-label="Télécharger">${ICON_DOWNLOAD}</button>
      <button class="icon-btn icon-btn--play icon-btn--sm" data-action="play" aria-label="Écouter">${ICON_PLAY}</button>
    </div>
  `).join('');

  list.querySelectorAll('.song-row').forEach((row) => {
    const id = Number(row.dataset.id);
    row.addEventListener('click', (e) => {
      if (e.target.closest('[data-action]')) return;
      openPlayer(id);
    });
    row.querySelector('[data-action="download"]').addEventListener('click', (e) => { e.stopPropagation(); downloadSong(id); });
    row.querySelector('[data-action="play"]').addEventListener('click', (e) => { e.stopPropagation(); openPlayer(id); });
  });
}

document.getElementById('albumSearch').addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderSongList();
});
document.querySelectorAll('#albumFilterRow .filter-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#albumFilterRow .filter-chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    renderSongList();
  });
});

/* --- Icônes / filtres de la page d'accueil --- */
document.getElementById('homeSearchBtn').addEventListener('click', () => {
  navigateTo('albums');
  document.getElementById('albumSearch').focus();
});
document.getElementById('homeLikedBtn').addEventListener('click', () => {
  if (likedSongs.size === 0) { showToast('Aucune chanson aimée pour le moment'); return; }
  navigateTo('albums');
  currentSearch = '';
  document.getElementById('albumSearch').value = '';
  const list = document.getElementById('songList');
  const liked = DATA.songs.filter((s) => likedSongs.has(s.id));
  list.innerHTML = liked.map((s) => `
    <div class="song-row" data-id="${s.id}">
      <img class="song-cover" src="${s.image}" alt="">
      <div class="song-info">
        <h4>${escapeHtml(s.title)}</h4>
        <span>${s.type === 'video' ? ICON_VIDEO_TAG : ICON_AUDIO_TAG} ${escapeHtml(s.artist)}${s.duration ? ' · ' + s.duration : ''}</span>
      </div>
      <button class="icon-btn icon-btn--play icon-btn--sm" data-action="play" aria-label="Écouter">${ICON_PLAY}</button>
    </div>
  `).join('');
  list.querySelectorAll('.song-row').forEach((row) => {
    const id = Number(row.dataset.id);
    row.addEventListener('click', () => openPlayer(id));
  });
});
document.querySelectorAll('#homeFilterRow .filter-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#homeFilterRow .filter-chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    const targetId = chip.dataset.filter === 'nouveautes' ? 'sectionNouveautes'
      : chip.dataset.filter === 'top' || chip.dataset.filter === 'tendance' ? 'sectionTop'
      : null;
    if (targetId) document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

function downloadSong(id) {
  const song = DATA.songs.find((s) => s.id === id);
  if (!song) return;
  const a = document.createElement('a');
  a.href = song.file;
  a.download = `${song.title}.mp3`;
  a.click();
  showToast(`Téléchargement de "${song.title}"`);
}

/* ============ LECTEUR — PAGE VIDÉO LYRICS ============ */
function openPlayer(id) {
  const song = DATA.songs.find((s) => s.id === id);
  if (!song) return;

  document.getElementById('lvTitle').textContent = song.title;
  document.getElementById('lvArtist').textContent = song.artist;
  document.getElementById('lyricsVideoBg').style.backgroundImage = `url('${song.lyricsBg || song.image}')`;

  const audio = document.getElementById('lvAudio');
  audio.src = song.file;
  audio.onerror = () => showToast(`Fichier audio introuvable : ${song.file} — vérifiez qu'il a bien été mis en ligne`);
  audio.play().catch(() => {});
  updatePlayIcon(true);

  renderLvLyrics(song, audio);
  lvLastActive = -1;

  const dlBtn = document.getElementById('lvDownloadBtn');
  dlBtn.innerHTML = ICON_DOWNLOAD;
  dlBtn.onclick = () => downloadSong(id);

  const likeBtn = document.getElementById('lvLikeBtn');
  likeBtn.innerHTML = ICON_HEART;
  likeBtn.classList.toggle('liked', likedSongs.has(id));
  likeBtn.onclick = () => toggleLike(id, likeBtn);

  document.getElementById('lvShareBtn').innerHTML = ICON_SHARE;
  document.getElementById('lvShareBtn').onclick = () => shareSong(id);

  const playBtn = document.getElementById('lvPlayBtn');
  playBtn.onclick = () => {
    if (audio.paused) { audio.play().catch(() => {}); } else { audio.pause(); }
  };
  audio.onplay = () => updatePlayIcon(true);
  audio.onpause = () => updatePlayIcon(false);

  const seek = document.getElementById('lvSeek');
  audio.onloadedmetadata = () => {
    seek.max = audio.duration || 0;
    document.getElementById('lvTimeTotal').textContent = formatTime(audio.duration) || '0:00';
  };
  seek.oninput = () => { audio.currentTime = Number(seek.value); };
  audio.ontimeupdate = () => {
    seek.value = audio.currentTime;
    document.getElementById('lvTimeCurrent').textContent = formatTime(audio.currentTime) || '0:00';
    updateLvActiveLine(song, audio);
  };

  document.getElementById('lyricsVideo').classList.add('open');
  document.getElementById('lyricsVideo').setAttribute('aria-hidden', 'false');
}

function updatePlayIcon(playing) {
  document.getElementById('lvPlayBtn').innerHTML = playing ? ICON_PAUSE : ICON_PLAY_BIG;
}

function renderLvLyrics(song, audio) {
  const box = document.getElementById('lvLyrics');
  if (!song.lyrics || song.lyrics.length === 0) {
    box.innerHTML = '<p class="lv-line lv-empty">Paroles bientôt disponibles.</p>';
    return;
  }
  box.innerHTML = song.lyrics.map((line, i) => `<p class="lv-line" data-i="${i}">${escapeHtml(line.text)}</p>`).join('');
}

let lvLastActive = -1;
function updateLvActiveLine(song, audio) {
  if (!song.lyrics || song.lyrics.length === 0) return;
  const box = document.getElementById('lvLyrics');
  const t = audio.currentTime;
  let active = 0;
  song.lyrics.forEach((line, i) => { if (t >= line.t) active = i; });
  if (active === lvLastActive) return;
  lvLastActive = active;
  box.querySelectorAll('.lv-line').forEach((el, i) => el.classList.toggle('active', i === active));
  const activeEl = box.querySelector('.lv-line.active');
  if (activeEl) activeEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

document.getElementById('lvCloseBtn').addEventListener('click', closePlayer);
function closePlayer() {
  const audio = document.getElementById('lvAudio');
  audio.pause();
  document.getElementById('lyricsVideo').classList.remove('open');
  document.getElementById('lyricsVideo').setAttribute('aria-hidden', 'true');
}

/* ============ CRÉDITS ============ */
function updateCreditsUI() {
  document.getElementById('creditsValue').textContent = credits;
  document.getElementById('creditsMax').textContent = MAX_CREDITS;
  document.getElementById('studioCredits').textContent = `${credits}/${MAX_CREDITS}`;
  const exportBtn = document.getElementById('exportStudioBtn');
  const genBtn = document.getElementById('generateVidBtn');
  [exportBtn, genBtn].forEach((b) => { if (b) b.disabled = credits <= 0; });
}

function useCredit() {
  if (credits > 0) {
    credits--;
    updateCreditsUI();
    if (credits === 0) {
      setTimeout(openPaymentModal, 400);
    }
    return true;
  }
  openPaymentModal();
  return false;
}

document.getElementById('creditsPill').addEventListener('click', openPaymentModal);
function openPaymentModal() {
  document.getElementById('paymentModal').classList.add('open');
  document.getElementById('paymentModal').setAttribute('aria-hidden', 'false');
}
document.getElementById('paymentClose').addEventListener('click', () => {
  document.getElementById('paymentModal').classList.remove('open');
  document.getElementById('paymentModal').setAttribute('aria-hidden', 'true');
});
document.querySelectorAll('.plan-card').forEach((card) => {
  card.addEventListener('click', () => {
    // Point d'intégration CinetPay — voir initCinetPay()
    showToast('Redirection vers le paiement CinetPay...');
    document.getElementById('paymentModal').classList.remove('open');
  });
});

/* Point d'intégration CinetPay (clés à fournir côté serveur) */
function initCinetPay(packageInfo) {
  // À implémenter avec un backend qui détient les clés API CinetPay.
  // Ce frontend ne doit jamais contenir la clé API en clair.
  console.log('initCinetPay appelé pour', packageInfo);
}

/* ============ STUDIO ============ */
let studioAudioCtx = null;
function getAudioCtx() {
  if (!studioAudioCtx) studioAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return studioAudioCtx;
}

/* --- Écran d'entrée --- */
document.getElementById('chooseDirect').addEventListener('click', () => enterWorkspace('record'));
document.getElementById('chooseIA').addEventListener('click', () => enterWorkspace('ai'));
document.getElementById('studioBackBtn').addEventListener('click', () => {
  document.getElementById('studioWorkspace').classList.remove('active');
  document.getElementById('studioIntro').classList.add('active');
});
function enterWorkspace(tab) {
  document.getElementById('studioIntro').classList.remove('active');
  document.getElementById('studioWorkspace').classList.add('active');
  switchStudioTab(tab);
}

/* --- Sous-navigation --- */
document.querySelectorAll('.subnav-item').forEach((btn) => {
  btn.addEventListener('click', () => switchStudioTab(btn.dataset.tab));
});
function switchStudioTab(tab) {
  document.querySelectorAll('.subnav-item').forEach((b) => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.studio-tab').forEach((t) => t.classList.toggle('active', t.dataset.tab === tab));
}

/* --- Enregistrement direct --- */
let mediaRecorder = null;
let recordedChunks = [];
let recStream = null;
let recTimerInterval = null;
let recSeconds = 0;
let levelAnalyser = null;
let levelRAF = null;
let lastTakeBlob = null;
let studioTracks = [];

const levelMeter = document.getElementById('levelMeter');
for (let i = 0; i < 20; i++) levelMeter.appendChild(document.createElement('span'));

document.getElementById('recBtn').addEventListener('click', async () => {
  const btn = document.getElementById('recBtn');
  if (!mediaRecorder || mediaRecorder.state === 'inactive') {
    try {
      recStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      showToast('Micro inaccessible — vérifiez les autorisations');
      return;
    }
    mediaRecorder = new MediaRecorder(recStream);
    recordedChunks = [];
    mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.push(e.data); };
    mediaRecorder.onstop = () => {
      lastTakeBlob = new Blob(recordedChunks, { type: 'audio/webm' });
      showTakeResult(lastTakeBlob);
      recStream.getTracks().forEach((t) => t.stop());
      stopLevelMeter();
    };
    mediaRecorder.start();
    startLevelMeter(recStream);
    btn.classList.add('recording');
    document.getElementById('micVisual').classList.add('active');
    document.getElementById('recPauseBtn').disabled = false;
    document.getElementById('recStatus').textContent = 'Enregistrement en cours...';
    document.getElementById('recResult').hidden = true;
    recSeconds = 0;
    recTimerInterval = setInterval(() => {
      recSeconds++;
      const m = String(Math.floor(recSeconds / 60)).padStart(2, '0');
      const s = String(recSeconds % 60).padStart(2, '0');
      document.getElementById('recTimer').textContent = `${m}:${s}`;
    }, 1000);
  } else {
    mediaRecorder.stop();
    btn.classList.remove('recording');
    document.getElementById('micVisual').classList.remove('active');
    document.getElementById('recPauseBtn').disabled = true;
    clearInterval(recTimerInterval);
    document.getElementById('recStatus').textContent = 'Enregistrement terminé';
  }
});

document.getElementById('recPauseBtn').addEventListener('click', () => {
  if (!mediaRecorder) return;
  const btn = document.getElementById('recPauseBtn');
  if (mediaRecorder.state === 'recording') {
    mediaRecorder.pause();
    clearInterval(recTimerInterval);
    document.getElementById('micVisual').classList.remove('active');
    document.getElementById('recStatus').textContent = 'En pause';
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';
  } else if (mediaRecorder.state === 'paused') {
    mediaRecorder.resume();
    document.getElementById('micVisual').classList.add('active');
    document.getElementById('recStatus').textContent = 'Enregistrement en cours...';
    recTimerInterval = setInterval(() => {
      recSeconds++;
      const m = String(Math.floor(recSeconds / 60)).padStart(2, '0');
      const s = String(recSeconds % 60).padStart(2, '0');
      document.getElementById('recTimer').textContent = `${m}:${s}`;
    }, 1000);
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18"><rect x="6" y="5" width="4" height="14" fill="currentColor"/><rect x="14" y="5" width="4" height="14" fill="currentColor"/></svg>';
  }
});

document.getElementById('recRedoBtn').addEventListener('click', resetRecording);
document.getElementById('recRetryBtn').addEventListener('click', resetRecording);
function resetRecording() {
  document.getElementById('recResult').hidden = true;
  document.getElementById('recTimer').textContent = '00:00';
  document.getElementById('recStatus').textContent = 'Prêt à enregistrer';
  document.getElementById('recRedoBtn').disabled = true;
}

function showTakeResult(blob) {
  const url = URL.createObjectURL(blob);
  document.getElementById('recResultAudio').src = url;
  document.getElementById('recResult').hidden = false;
  document.getElementById('recRedoBtn').disabled = false;
}

document.getElementById('recVolume').addEventListener('input', (e) => {
  document.getElementById('recResultAudio').volume = e.target.value / 100;
});

document.getElementById('recSaveBtn').addEventListener('click', () => {
  if (!lastTakeBlob) return;
  studioTracks.push({ id: `track_${Date.now()}`, blob: lastTakeBlob, duration: recSeconds });
  showToast('Prise enregistrée dans le projet ✔');
  loadIntoEditor(lastTakeBlob);
  switchStudioTab('editor');
});

function startLevelMeter(stream) {
  const ctx = getAudioCtx();
  const source = ctx.createMediaStreamSource(stream);
  levelAnalyser = ctx.createAnalyser();
  levelAnalyser.fftSize = 64;
  source.connect(levelAnalyser);
  const data = new Uint8Array(levelAnalyser.frequencyBinCount);
  const bars = levelMeter.querySelectorAll('span');
  const tick = () => {
    levelAnalyser.getByteFrequencyData(data);
    bars.forEach((bar, i) => {
      const v = data[i % data.length] || 0;
      bar.style.height = `${4 + (v / 255) * 30}px`;
    });
    levelRAF = requestAnimationFrame(tick);
  };
  tick();
}
function stopLevelMeter() {
  if (levelRAF) cancelAnimationFrame(levelRAF);
  levelMeter.querySelectorAll('span').forEach((bar) => { bar.style.height = '4px'; });
}

/* --- Éditeur audio --- */
let editorBlob = null;
let editorAudioBuffer = null;

function loadIntoEditor(blob) {
  editorBlob = blob;
  const url = URL.createObjectURL(blob);
  document.getElementById('editorAudio').src = url;
  document.getElementById('editorHint').textContent = 'Sélectionnez un outil ci-dessous pour modifier votre piste.';
  drawWaveformFromBlob(blob);
}

async function drawWaveformFromBlob(blob) {
  try {
    const arrayBuf = await blob.arrayBuffer();
    const ctx = getAudioCtx();
    editorAudioBuffer = await ctx.decodeAudioData(arrayBuf.slice(0));
    const canvas = document.getElementById('waveformCanvas');
    canvas.width = canvas.clientWidth * 2;
    canvas.height = 90 * 2;
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, canvas.width, canvas.height);
    const raw = editorAudioBuffer.getChannelData(0);
    const step = Math.ceil(raw.length / canvas.width);
    const mid = canvas.height / 2;
    c.strokeStyle = '#f7971e';
    c.lineWidth = 2;
    c.beginPath();
    for (let i = 0; i < canvas.width; i++) {
      let min = 1, max = -1;
      for (let j = 0; j < step; j++) {
        const v = raw[i * step + j] || 0;
        if (v < min) min = v;
        if (v > max) max = v;
      }
      c.moveTo(i, mid + min * mid * 0.9);
      c.lineTo(i, mid + max * mid * 0.9);
    }
    c.stroke();
  } catch (e) {
    // Décodage impossible (format non supporté par le navigateur) — on garde juste le lecteur audio.
  }
}

document.querySelectorAll('.editor-tool').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!editorBlob) { showToast('Chargez ou enregistrez une piste d\'abord'); return; }
    const labels = { split: 'Piste divisée à la position de lecture', delete: 'Sélection supprimée', cut: 'Extrait découpé' };
    showToast(`${labels[btn.dataset.tool]} (aperçu — édition fine à brancher sur un moteur audio serveur)`);
  });
});

document.getElementById('cleanNoiseBtn').addEventListener('click', () => {
  if (!editorBlob) { showToast('Chargez ou enregistrez une piste d\'abord'); return; }
  showToast('Nettoyage IA en cours...');
  setTimeout(() => showToast('Bruit de fond réduit ✔ (nécessite un service IA audio côté serveur)'), 1200);
});

document.getElementById('editorVolume').addEventListener('input', (e) => {
  document.getElementById('editorAudio').volume = e.target.value / 100;
});

/* --- Rythmes --- */
const RHYTHMS = [
  { id: 'afrobeat', label: 'Afrobeat', emoji: '🥁', bpm: 100 },
  { id: 'gospel', label: 'Gospel', emoji: '🎶', bpm: 90 },
  { id: 'hiphop', label: 'Hip-hop', emoji: '🎤', bpm: 85 },
  { id: 'rnb', label: 'R&B', emoji: '🎷', bpm: 80 },
  { id: 'pop', label: 'Pop', emoji: '✨', bpm: 110 },
  { id: 'trap', label: 'Trap', emoji: '🔥', bpm: 140 },
  { id: 'dance', label: 'Dance', emoji: '💃', bpm: 124 },
];
let selectedRhythm = null;
let rhythmInterval = null;

function renderRhythmGrid() {
  const grid = document.getElementById('rhythmGrid');
  grid.innerHTML = RHYTHMS.map((r) => `
    <button class="chip-tile" data-id="${r.id}">
      <span class="chip-emoji">${r.emoji}</span>${r.label}
    </button>
  `).join('');
  grid.querySelectorAll('.chip-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const rhythm = RHYTHMS.find((r) => r.id === tile.dataset.id);
      grid.querySelectorAll('.chip-tile').forEach((t) => t.classList.remove('selected'));
      tile.classList.add('selected');
      selectedRhythm = rhythm;
      playRhythmPreview(rhythm);
      showToast(`Rythme "${rhythm.label}" ajouté au projet`);
    });
  });
}
renderRhythmGrid();

function playRhythmPreview(rhythm) {
  clearInterval(rhythmInterval);
  const ctx = getAudioCtx();
  const beatMs = 60000 / rhythm.bpm;
  let beat = 0;
  const playClick = (accent) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = accent ? 1400 : 800;
    osc.connect(gain); gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(); osc.stop(ctx.currentTime + 0.08);
  };
  playClick(true);
  rhythmInterval = setInterval(() => { playClick(beat % 4 === 0); beat++; }, beatMs);
  setTimeout(() => clearInterval(rhythmInterval), beatMs * 8);
}

document.getElementById('aiSuggestRhythmBtn').addEventListener('click', () => {
  const suggestion = RHYTHMS[Math.floor(Math.random() * RHYTHMS.length)];
  document.getElementById('rhythmSuggestion').textContent = `✨ L'IA recommande : ${suggestion.label} (${suggestion.bpm} BPM) — d'après le style vocal détecté`;
});

/* --- Instruments --- */
const INSTRUMENTS = [
  { id: 'drums', label: 'Drums', emoji: '🥁', freq: 90, type: 'drum' },
  { id: 'piano', label: 'Piano', emoji: '🎹', freq: 523, type: 'tone' },
  { id: 'guitare', label: 'Guitare', emoji: '🎸', freq: 330, type: 'tone' },
  { id: 'flute', label: 'Flûte', emoji: '🪈', freq: 880, type: 'tone' },
  { id: 'bass', label: 'Bass', emoji: '🎵', freq: 110, type: 'tone' },
  { id: 'clavier', label: 'Clavier', emoji: '🎹', freq: 660, type: 'tone' },
  { id: 'percussions', label: 'Percussions', emoji: '🥁', freq: 200, type: 'drum' },
  { id: 'autres', label: 'Autres', emoji: '🎺', freq: 440, type: 'tone' },
];
const addedInstruments = new Set();

function renderInstrumentGrid() {
  const grid = document.getElementById('instrumentGrid');
  grid.innerHTML = INSTRUMENTS.map((i) => `
    <button class="chip-tile" data-id="${i.id}">
      <span class="chip-emoji">${i.emoji}</span>${i.label}
    </button>
  `).join('');
  grid.querySelectorAll('.chip-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const inst = INSTRUMENTS.find((i) => i.id === tile.dataset.id);
      playInstrumentPreview(inst);
      tile.classList.toggle('selected');
      if (addedInstruments.has(inst.id)) addedInstruments.delete(inst.id);
      else addedInstruments.add(inst.id);
      renderAddedInstruments();
    });
  });
}
renderInstrumentGrid();

function playInstrumentPreview(inst) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = inst.type === 'drum' ? 'square' : 'sine';
  osc.frequency.value = inst.freq;
  osc.connect(gain); gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (inst.type === 'drum' ? 0.15 : 0.5));
  osc.start(); osc.stop(ctx.currentTime + (inst.type === 'drum' ? 0.15 : 0.5));
}

function renderAddedInstruments() {
  const box = document.getElementById('addedInstruments');
  if (addedInstruments.size === 0) { box.innerHTML = '<span class="empty-state">aucun</span>'; return; }
  box.innerHTML = [...addedInstruments].map((id) => {
    const inst = INSTRUMENTS.find((i) => i.id === id);
    return `<span class="pill-tag">${inst.emoji} ${inst.label}</span>`;
  }).join('');
}

/* --- Assistant IA (projet en cours) --- */
document.getElementById('aiAnalyzeBtn').addEventListener('click', () => {
  if (!editorBlob && studioTracks.length === 0) {
    showToast('Enregistrez d\'abord une prise pour que l\'IA puisse l\'analyser');
    return;
  }
  runAiAnalysis('aiResult', document.getElementById('aiAnalyzeBtn'));
});

function runAiAnalysis(resultId, btn) {
  btn.disabled = true;
  btn.textContent = 'Analyse en cours...';
  const resultBox = document.getElementById(resultId);
  resultBox.hidden = true;
  setTimeout(() => {
    const tempo = 80 + Math.floor(Math.random() * 50);
    const keys = ['Do majeur', 'Sol majeur', 'Ré mineur', 'Fa majeur', 'La mineur'];
    const styles = ['Gospel', 'Afro Gospel', 'Louange contemporaine', 'Gospel/Pop'];
    const rhythm = RHYTHMS[Math.floor(Math.random() * RHYTHMS.length)];
    const key = keys[Math.floor(Math.random() * keys.length)];
    const style = styles[Math.floor(Math.random() * styles.length)];
    resultBox.innerHTML = `
      <div class="ai-result-row"><span>Tempo estimé</span><span>${tempo} BPM</span></div>
      <div class="ai-result-row"><span>Tonalité approximative</span><span>${key}</span></div>
      <div class="ai-result-row"><span>Style détecté</span><span>${style}</span></div>
      <div class="ai-result-row"><span>Rythme recommandé</span><span>${rhythm.label}</span></div>
      <div class="ai-result-row"><span>Instruments suggérés</span><span>Piano, Drums, Bass</span></div>
    `;
    resultBox.hidden = false;
    btn.disabled = false;
    btn.textContent = 'Analyser mon projet';
    showToast('Analyse IA terminée (résultats indicatifs — à connecter à un vrai service audio-IA)');
  }, 1500);
}

/* --- Studio IA (idée → chanson) --- */
let iaMediaRecorder = null;
let iaChunks = [];
let iaStream = null;
let iaTimerInterval = null;
let iaSeconds = 0;
let iaBlob = null;

document.getElementById('iaRecBtn').addEventListener('click', async () => {
  const btn = document.getElementById('iaRecBtn');
  if (!iaMediaRecorder || iaMediaRecorder.state === 'inactive') {
    try {
      iaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      showToast('Micro inaccessible — vérifiez les autorisations');
      return;
    }
    iaMediaRecorder = new MediaRecorder(iaStream);
    iaChunks = [];
    iaMediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) iaChunks.push(e.data); };
    iaMediaRecorder.onstop = () => {
      iaBlob = new Blob(iaChunks, { type: 'audio/webm' });
      const audioEl = document.getElementById('iaResultAudio');
      audioEl.src = URL.createObjectURL(iaBlob);
      audioEl.hidden = false;
      document.getElementById('iaAnalyzeBtn').disabled = false;
      iaStream.getTracks().forEach((t) => t.stop());
    };
    iaMediaRecorder.start();
    btn.classList.add('recording');
    iaSeconds = 0;
    iaTimerInterval = setInterval(() => {
      iaSeconds++;
      const m = String(Math.floor(iaSeconds / 60)).padStart(2, '0');
      const s = String(iaSeconds % 60).padStart(2, '0');
      document.getElementById('iaRecTimer').textContent = `${m}:${s}`;
    }, 1000);
  } else {
    iaMediaRecorder.stop();
    btn.classList.remove('recording');
    clearInterval(iaTimerInterval);
  }
});

document.getElementById('iaAnalyzeBtn').addEventListener('click', () => {
  runAiAnalysis('iaResult', document.getElementById('iaAnalyzeBtn'));
  document.getElementById('iaIntroMsg').textContent = 'Proposition de titre : "Espoir Nouveau" — modifiable ci-dessous.';
});

/* --- Export & Projets --- */
document.getElementById('exportStudioBtn').addEventListener('click', () => {
  if (!editorBlob && !iaBlob && studioTracks.length === 0) {
    showToast('Enregistrez au moins une prise avant d\'exporter');
    return;
  }
  if (!useCredit()) return;
  const title = `Mon chant ${(DATA.user.projects || []).length + 1}`;
  const proj = {
    id: `proj_${Date.now()}`,
    title,
    type: 'studio',
    date: new Date().toISOString().slice(0, 10),
    duration: formatTime(recSeconds || iaSeconds) || '--',
    instruments: [...addedInstruments],
    rhythm: selectedRhythm ? selectedRhythm.label : null,
  };
  DATA.user.projects = DATA.user.projects || [];
  DATA.user.projects.push(proj);
  renderStudioProjects();
  switchStudioTab('projects');
  showToast(`Projet "${title}" exporté ✔`);
});

function renderStudioProjects() {
  if (!DATA) return;
  const list = document.getElementById('studioProjectList');
  const projects = DATA.user.projects || [];
  if (projects.length === 0) { list.innerHTML = '<p class="empty-state">Aucun projet pour le moment</p>'; return; }
  list.innerHTML = projects.slice().reverse().map((p) => `
    <div class="project-card">
      <div>
        <h4>🎵 ${escapeHtml(p.title)}</h4>
        <span>${p.date} · ${p.duration || '--'}${p.rhythm ? ' · ' + escapeHtml(p.rhythm) : ''}</span>
      </div>
    </div>
  `).join('');
  list.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => showToast('Ouverture du projet — reprise du travail'));
  });
}

/* ============ VIDÉOS ============ */
function renderVideoSongSelect() {
  const select = document.getElementById('vidSongSelect');
  select.innerHTML = DATA.songs.map((s) => `<option value="${s.id}">${escapeHtml(s.title)}</option>`).join('');
}


let selectedPhotos = [];
document.getElementById('vidPhotos').addEventListener('change', (e) => {
  selectedPhotos = Array.from(e.target.files);
  const preview = document.getElementById('photoPreview');
  preview.innerHTML = '';
  selectedPhotos.forEach((file) => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  });
});

document.getElementById('generateVidBtn').addEventListener('click', async () => {
  const songId = Number(document.getElementById('vidSongSelect').value);
  const song = DATA.songs.find((s) => s.id === songId);
  const status = document.getElementById('genStatus');

  if (!song) return;
  if (selectedPhotos.length === 0) {
    status.textContent = 'Ajoutez au moins une photo pour générer la vidéo';
    return;
  }
  if (!useCredit()) return;

  status.textContent = 'Synchronisation des paroles avec l\'audio...';
  await generateLyricVideo(song, selectedPhotos, status);
});

async function generateLyricVideo(song, photos, statusEl) {
  // Génère un aperçu simple avec Canvas : photo + première ligne des paroles.
  // La synchronisation complète paroles/audio et l'export MediaRecorder
  // s'appuient sur les mêmes API et seront affinés avec les vrais fichiers audio.
  const canvas = document.createElement('canvas');
  canvas.width = 540; canvas.height = 960;
  const ctx = canvas.getContext('2d');

  const img = new Image();
  img.crossOrigin = 'anonymous';
  await new Promise((resolve) => {
    img.onload = resolve;
    img.onerror = resolve;
    img.src = URL.createObjectURL(photos[0]);
  });

  if (img.width) {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = '#12121a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(0, canvas.height - 220, canvas.width, 220);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 30px sans-serif';
  ctx.textAlign = 'center';
  const firstLine = (song.lyrics || '').split('\n')[0] || song.title;
  wrapText(ctx, firstLine, canvas.width / 2, canvas.height - 140, 460, 38);

  statusEl.textContent = 'Vidéo générée ✔';
  addVideoCard(canvas.toDataURL('image/jpeg', 0.85), song.title);

  DATA.user.exports = DATA.user.exports || [];
  DATA.user.exports.push({ id: `exp_${Date.now()}`, title: song.title, type: 'video', date: new Date().toISOString().slice(0, 10) });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let lines = [];
  words.forEach((w) => {
    const test = line + w + ' ';
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w + ' ';
    } else {
      line = test;
    }
  });
  lines.push(line);
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((l, i) => ctx.fillText(l.trim(), x, startY + i * lineHeight));
}

function addVideoCard(thumbDataUrl, title) {
  const grid = document.getElementById('videoGrid');
  const emptyState = grid.querySelector('.empty-state');
  if (emptyState) emptyState.remove();
  const card = document.createElement('div');
  card.className = 'video-card';
  card.innerHTML = `<img class="video-thumb" src="${thumbDataUrl}" alt=""><p>${escapeHtml(title)}</p>`;
  grid.prepend(card);
}

/* ============ RÉGLAGES ============ */
document.querySelectorAll('.settings-item').forEach((item) => {
  item.addEventListener('click', () => {
    showToast(`Section « ${item.textContent.trim()} » — à configurer`);
  });
});

/* ============ TOAST ============ */
let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ============ UTILS ============ */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

function formatTime(sec) {
  if (!isFinite(sec) || sec <= 0) return '';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

async function loadDurations() {
  await Promise.all(DATA.songs.map((s) => new Promise((resolve) => {
    const a = new Audio();
    a.preload = 'metadata';
    a.src = s.file;
    a.addEventListener('loadedmetadata', () => { s.duration = formatTime(a.duration); resolve(); });
    a.addEventListener('error', () => resolve());
  })));
  renderHome();
  renderSongList();
}

/* ============ SERVICE WORKER ============ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

/* ============ INIT ============ */
loadData();
