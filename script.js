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
 // ============================================================
  //  INTRO INSTRUMENTALE  (0:00 → 0:24)  → UN SEUL BLOC
  // ============================================================
  { t: 0, text: '♪ Instrumental ♪' },

  // ============================================================
  //  COUPLET 1 – 1ère partie  (0:24 → 0:40)
  // ============================================================
  {
    t: 24.0,
    text: `Kuna mahali nimetoka,
Pia mahali ninakwenda,
Mkono wako siponiongoza,
Sitaweza.

Maana naona mji karibu,
Mateso nayo yapata,
Huko mbele sitaiona,
Nitashinda.`
  },

  // ============================================================
  //  COUPLET 1 – 2ème partie  (0:40 → 0:56)
  // ============================================================
  {
    t: 40.0,
    text: `Nivike nguvu,
Bwana Yesu, nionyeshe ishara,
Uniongoze. Eh Mfalme,
Mwendo nimalize.`
  },

  // ============================================================
  //  GRAND REFRAIN  (0:57 → 1:26)  → "Suit la logique"
  // ============================================================
  {
    t: 57.0,
    text: `Kuna mahali nilipotoka,
Pia mahali ninakwenda,
Mkono wako siponiongoza Bwana,
Sitaweza.

Maana naona mji karibu,
Na mateso yote nayo yapata,
Huko mbele,
Nitashinda.

Kuna mahali nilipotoka,
Pia mahali ninakwenda,
Mkono wako Bwana,
Sitaweza.

Maana naona mji karibu,
Mateso nayo yapata,
Huko mbele sitaiona,
Nitashinda.

Nivike nguvu zako Bwana,
Nionyeshe, nionyeshe ishara,
Kisha uniongoze Mfalme wa mbingu na dunia,
Uniongoze,
Mwendo nimalize.`
  },

  // ============================================================
  //  SPOKEN WORD / PRIÈRE  (2:50 → 4:26)
  // ============================================================
  {
    t: 170.1,
    text: `Tuko mbele zako Eh Roho wa Mungu Muumbaji,
Twataka kuongozwa nawe.
Endelea kuziongoza hatua zetu mbele ili tusirudi nyuma, tuifikie malengo yetu.
Maana tukiwa na mwanga wako, tutayafanya mapenzi yako duniani kwa kupendeza,
Na vita vyote tutalishinda kupitia wewe Jehova Sabaoth. Haleluya!`
  },

  // ============================================================
  //  PONT  (4:26 → 4:38)
  // ============================================================
  {
    t: 232.5,
    text: `Bila wewe, siwezi lolote.
Ebenezer Mungu msaada wetu, Haleluya.
Ebenezer Mungu wangu,
Nikiwa na wewe, sitaogopa lolote, Bwana.
Paza sauti tena tuimbe pamoja :
Nikiwa na wewe, sitaogopa lolote, eh Bwana. Haleluya !`
  },

  // ============================================================
  //  REFRAIN FINAL — « NISIRUDI NYUMA »  (4:38 → 5:27)
  // ============================================================
  {
    t: 277.8,
    text: `Nisirudi nyuma,
Bwana niwezeshe,
Nisitazame tu na maneno yao.

Nisirudi nyuma,
Bwana niwezeshe,
Nisitazame watu na maneno yao.

Nisirudi nyuma,
Bwana niwezeshe,
Nisitazame watu na maneno yao.

Nisirudi nyuma,
Bwana niwezeshe Bwana,
Nisitazame watu na maneno yao.`
  },

  // ============================================================
  //  DÉCLARATION FINALE  (5:33 → 6:05)
  // ============================================================
  {
    t: 333.6,
    text: `Nijue kwamba, Ni wewe Bwana,
Utanilinda kufanya kazi yako Bwana,
Milele yote, milele yote.

Nijue yakwamba Bwana, Ni wewe Bwana,
Ni wewe uliye niita,
Utaniweka nguvu, Milele yote.`
  },

  // ============================================================
  //  OUTRO  (6:11 → 6:15)
  // ============================================================
  {
    t: 371.8,
    text: `Nisirudi nyuma...`
  },

  // ============================================================
  //  PRIÈRE PARLÉE DE FIN  (6:15 → 6:33)
  // ============================================================
  {
    t: 375.6,
    text: `Eh Mungu mwenye haki, peke yetu hatuwezi...`
  }
      ]
    },
    {
      id: 2, title: 'Baba Yetu', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'baba-yetu.mp3', image: 'choristers-1.jpg',
      plays: 0, new: true,
      heroImage: 'discover-green.jpg', cardColor: 'card-green',
      lyricsBg: 'bg-piano.jpg',
      lyrics: [
        { t: 0, text: 'Baba yetu uliye mbinguni' },
        { t: 3.5, text: 'Jina lako litukuzwe' },
        { t: 7, text: 'Ufalme wako uje kwetu' },
        { t: 10.5, text: 'Mapenzi yako yatimizwe' },
        { t: 14, text: 'Baba yetu uliye mbinguni' },
        { t: 17.5, text: 'Jina lako litukuzwe' },
        { t: 21, text: 'Ufalme wako uje kwetu' },
        { t: 22, text: 'Duniyani kama mbinguni' },
        { t: 25.5, text: 'Tupe leo riziki zetu' },
        { t: 29, text: 'Samehe makosa yetu' },
        { t: 32.5, text: 'Kama tu samevyo wa deni wetu' },
        { t: 36, text: 'Duniyani kama mbinguni' },
        { t: 39.5, text: 'Tupe leo riziki zetu' },
        { t: 43, text: 'Samehe makosa yetu' },
        { t: 44, text: 'Baba yetu uliye mbinguni' },
        { t: 47.5, text: 'Jina lako litukuzwe' },
        { t: 51, text: 'Ufalme wako uje kwetu' },
        { t: 54.5, text: 'Mapenzi yako yatimizwe' },
        { t: 58, text: 'Baba yetu uliye mbinguni' },
        { t: 61.5, text: 'Jina lako litukuzwe' },
        { t: 62, text: '♪ Instrumental ♪' },
        { t: 72, text: '♪ Instrumental ♪' },
        { t: 82, text: '♪ Instrumental ♪' },
        { t: 92, text: '♪ Instrumental ♪' },
        { t: 102, text: '♪ Instrumental ♪' },
        { t: 112, text: '♪ Instrumental ♪' },
        { t: 122, text: '♪ Instrumental ♪' },
        { t: 132, text: '♪ Instrumental ♪' },
        { t: 142, text: '♪ Instrumental ♪' },
        { t: 152, text: 'Usi tu ache majaribuni' },
        { t: 155.5, text: 'Bali utu okowe na yule muovu' },
        { t: 159, text: 'Usi tu ache majaribuni' },
        { t: 162.5, text: 'Bali utu okowe na yule muovu yeee' },
        { t: 166, text: 'Usi tu ache majaribuni' },
        { t: 169.5, text: 'Bali utu okowe na yule muovu' },
        { t: 173, text: 'Yeee...' },
        { t: 174, text: 'Baba yetu uliye mbinguni' },
        { t: 177.5, text: 'Jina lako litukuzwe' },
        { t: 181, text: 'Ufalme wako uje kwetu' },
        { t: 184.5, text: 'Mapenzi yako yatimizwe' },
        { t: 188, text: 'Baba yetu uliye mbinguni' },
        { t: 191.5, text: 'Jina lako litukuzwe' },
        { t: 195, text: 'Ufalme wako uje kwetu' },
        { t: 196, text: 'Kwa kuwa ufalme ni wako' },
        { t: 199, text: 'Na nguvu hata milele' },
        { t: 202, text: 'Kwa kuwa ufalme ni wako' },
        { t: 205, text: 'Na nguvu hata milele' },
        { t: 208, text: 'Ameeeen... Amen...' },
        { t: 211, text: '♪ Amen... ♪' }
      ]
    },
    {
      id: 3, title: 'Fungua Mbingu', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'fungua-mbingu.mp3', image: 'choristers-3.jpg',
      plays: 0, new: true,
      heroImage: 'discover-yellow.jpg', cardColor: 'card-yellow',
      lyricsBg: 'bg-notes-blue.jpg',
      lyrics: [
        { t: 0, text: 'Fungua mbingu, fungua mbingu' },
        { t: 4, text: 'Tumwone Mfalme wa utukufu' },
        { t: 8, text: 'Fungua mbingu, fungua mbingu' },
        { t: 12, text: 'Tumwone Mfalme wa utukufu' },
        { t: 16, text: 'Fungua mbingu, fungua mbingu' },
        { t: 20, text: 'Tumwone Mfalme wa utukufu' },
        { t: 24, text: 'Fungua mbingu, fungua mbingu' },
        { t: 28, text: 'Tumwone Mfalme wa utukufu' },
        { t: 35, text: 'Bwana wetu ni mkuu sana' },
        { t: 39, text: 'Anastahili sifa na heshima' },
        { t: 43, text: 'Kwa nguvu zake aliumba mbingu' },
        { t: 47, text: 'Na kwa neema yake alituokoa' },
        { t: 51, text: 'Bwana wetu ni mkuu sana' },
        { t: 55, text: 'Anastahili sifa na heshima' },
        { t: 59, text: 'Kwa nguvu zake aliumba mbingu' },
        { t: 63, text: 'Na kwa neema yake alituokoa' },
        { t: 70, text: 'Fungua mbingu, fungua mbingu' },
        { t: 74, text: 'Tumwone Mfalme wa utukufu' },
        { t: 78, text: 'Fungua mbingu, fungua mbingu' },
        { t: 82, text: 'Tumwone Mfalme wa utukufu' },
        { t: 86, text: 'Fungua mbingu, fungua mbingu' },
        { t: 90, text: 'Tumwone Mfalme wa utukufu' },
        { t: 94, text: 'Fungua mbingu, fungua mbingu' },
        { t: 98, text: 'Tumwone Mfalme wa utukufu' },
        { t: 100, text: 'Mbinguni kuna furaha tele' },
        { t: 104, text: 'Malaika wanaimba tenzi' },
        { t: 108, text: 'Wanamwabudu Mungu wetu' },
        { t: 112, text: 'Mwenye enzi na utukufu' },
        { t: 116, text: 'Mbinguni kuna furaha tele' },
        { t: 120, text: 'Malaika wanaimba tenzi' },
        { t: 124, text: 'Wanamwabudu Mungu wetu' },
        { t: 128, text: 'Mwenye enzi na utukufu' },
        { t: 135, text: '♪ Instrumental ♪' },
        { t: 141, text: '♪ Instrumental ♪' },
        { t: 147, text: '♪ Instrumental ♪' },
        { t: 153, text: '♪ Instrumental ♪' },
        { t: 159, text: '♪ Instrumental ♪' },
        { t: 165, text: 'Fungua, fungua, fungua mbingu' },
        { t: 169, text: 'Tumwone, tumwone Mfalme wetu' },
        { t: 173, text: 'Fungua, fungua, fungua mbingu' },
        { t: 177, text: 'Tumwone, tumwone Mfalme wetu' },
        { t: 181, text: 'Fungua, fungua, fungua mbingu' },
        { t: 185, text: 'Tumwone, tumwone Mfalme wetu' },
        { t: 189, text: 'Fungua, fungua, fungua mbingu' },
        { t: 193, text: 'Tumwone, tumwone Mfalme wetu' },
        { t: 200, text: 'Fungua mbingu, fungua mbingu' },
        { t: 204, text: 'Tumwone Mfalme wa utukufu' },
        { t: 208, text: 'Fungua mbingu, fungua mbingu' },
        { t: 212, text: 'Tumwone Mfalme wa utukufu' },
        { t: 216, text: 'Fungua mbingu, fungua mbingu' },
        { t: 220, text: 'Tumwone Mfalme wa utukufu' },
        { t: 224, text: 'Fungua mbingu, fungua mbingu' },
        { t: 228, text: 'Tumwone Mfalme wa utukufu' },
        { t: 230, text: 'Tumwone Mfalme wetu' },
        { t: 234, text: 'Mfalme wa utukufu' },
        { t: 238, text: 'Tumwone Mfalme wetu' },
        { t: 242, text: 'Mfalme wa utukufu' },
        { t: 246, text: 'Tumwone Mfalme wetu' },
        { t: 250, text: 'Mfalme wa utukufu' },
        { t: 254, text: 'Tumwone Mfalme wetu' },
        { t: 258, text: 'Mfalme wa utukufu' },
        { t: 262, text: 'Fungua mbingu, fungua mbingu' },
        { t: 266, text: 'Tumwone Mfalme wa utukufu' }
      ]
    },
    {
      id: 4, title: 'Garama', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'garama.mp3', image: 'choristers-2.jpg',
      plays: 0, new: false,
      heroImage: 'discover-orange.jpg', cardColor: 'card-orange',
      lyricsBg: 'bg-mic-warm.jpg', lyrics: []
    },
    {
      id: 5, title: 'Uni Jaze', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'uni-jaze.mp3', image: 'choristers-5.jpg',
      plays: 0, new: false,
      heroImage: 'discover-blue.jpg', cardColor: 'card-blue',
      lyricsBg: 'bg-mic-blue.jpg', lyrics: []
    },
    {
      id: 6, title: 'Jerusalemu', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'jerusalemu.mp3', image: 'choristers-6.jpg',
      plays: 0, new: false,
      heroImage: 'discover-purple.jpg', cardColor: 'card-purple',
      lyricsBg: 'bg-mic-dark.jpg',
      lyrics: [
        { t: 0, text: 'Jerusalemu, natamani nifike huko' },
        { t: 4, text: 'Nionane na Yesu, nitaketi pamoja naye' },
        { t: 8, text: 'Nitashangilia, nitacheza-cheza' },
        { t: 12, text: 'Nikiruka-ruka pamoja na Yesu, pamoja na Yesu' },
        { t: 16, text: 'Nitashangilia, nitacheza-cheza' },
        { t: 20, text: 'Nikiruka-ruka pamoja na Yesu, pamoja na Yesu' },
        { t: 24, text: 'Ni furaha tele tutakapoingia' },
        { t: 28, text: 'Kwenye makao ya milele aliyotuaandalia' },
        { t: 32, text: 'Ni furaha tele tutakapoingia' },
        { t: 36, text: 'Kwenye makao ya milele aliyotuaandalia' },
        { t: 40, text: '♪ Instrumental ♪' },
        { t: 46, text: '♪ Instrumental ♪' },
        { t: 52, text: '♪ Instrumental ♪' },
        { t: 58, text: '♪ Instrumental ♪' },
        { t: 64, text: '♪ Instrumental ♪' },
        { t: 70, text: 'Bwana Yesu atashika kitambaa' },
        { t: 74, text: 'Na kunifuta machozi akisema:' },
        { t: 78, text: 'Karibu mwanangu, uliye shinda' },
        { t: 82, text: 'Malaika wataulizana:' },
        { t: 86, text: 'Hawa ni wa nani, na wametoka wapi?' },
        { t: 90, text: 'Ila Yesu atajibu:' },
        { t: 94, text: 'Hawa ni wanangu walioshinda dhiki za dunia.' },
        { t: 98, text: 'Nitashangilia, nitacheza-cheza' },
        { t: 102, text: 'Nikiruka-ruka pamoja na Yesu, pamoja na Yesu,' },
        { t: 106, text: 'Ni furaha!' },
        { t: 110, text: 'Jerusalemu, natamani nifike huko' },
        { t: 114, text: 'Nionane na Yesu, nitaketi pamoja naye' },
        { t: 118, text: 'Nitashangilia, nitacheza-cheza' },
        { t: 122, text: 'Nikiruka-ruka pamoja na Yesu, pamoja na Yesu' },
        { t: 126, text: 'Nitashangilia, nitacheza-cheza' },
        { t: 130, text: 'Nikiruka-ruka pamoja na Yesu, pamoja na Yesu,' },
        { t: 134, text: 'Ni furaha!' },
        { t: 145, text: 'Jitaidi, ewe mwenzangu, tufike kule' },
        { t: 149, text: 'Kwa baba ambapo hakuna shida, machozi na kulia' },
        { t: 153, text: 'Tuta vi acha huko duniani, kwa baba ni furaha' },
        { t: 157, text: 'Kuuimba na kucheza, milele tutaishi huko' },
        { t: 161, text: 'Tuta kula vinono, chakula ya mbinguni' },
        { t: 165, text: 'Amani na furaha ni asili ya huko kwetu' },
        { t: 169, text: 'Tuta waona wale wote waliotangulia' },
        { t: 173, text: 'Baba zetu wa imani, huko tutaishi nao' },
        { t: 185, text: 'Jerusalemu, natamani nifike huko' },
        { t: 189, text: 'Nionane na Yesu, nitaketi pamoja naye' },
        { t: 193, text: 'Nitashangilia, nitacheza-cheza' },
        { t: 197, text: 'Nikiruka-ruka pamoja na Yesu, pamoja na Yesu' },
        { t: 201, text: 'Nitashangilia, nitacheza-cheza' },
        { t: 205, text: 'Nikiruka-ruka pamoja na Yesu, pamoja na Yesu,' },
        { t: 209, text: 'Ni furaha!' },
        { t: 215, text: 'Tutashangilia, tuta cheza-cheza' },
        { t: 219, text: 'Tuki ruka-ruka pamoja na Yesu, pamoja na Yesu... eeeh' },
        { t: 223, text: 'Tutashangilia, tutacheza-cheza' },
        { t: 227, text: 'Tuki ruka-ruka pamoja na Yesu, pamoja na Yesu...' },
        { t: 231, text: 'Tutashangilia, tutacheza-cheza' },
        { t: 235, text: 'Tuki ruka-ruka pamoja na Yesu, pamoja na Yesu...' },
        { t: 239, text: 'Ni furaha tele tutakapoingia' },
        { t: 243, text: 'Kwenye makao ya milele aliyotuaandalia...' },
        { t: 247, text: 'Ni furaha tele tutakapoingia' },
        { t: 251, text: 'Kwenye makao ya milele aliyotuaandalia...' },
        { t: 255, text: 'Tutashangilia, tutacheza-cheza' },
        { t: 259, text: 'Tutakiruka-ruka pamoja na Yesu, pamoja na Yesu,' },
        { t: 263, text: 'Ni furaha!' }
      ]
    },
    {
      id: 7, title: 'Mungu Ni Chef', artist: 'Chorale Chipukizi', duration: '', type: 'audio',
      file: 'mungu-ni-chef.mp3', image: 'choristers-4.jpg',
      plays: 0, new: false,
      heroImage: 'discover-green.jpg', cardColor: 'card-green',
      lyricsBg: 'bg-mic-smoke.jpg',
      lyrics: [
        { t: 0, text: 'Amina lele, Amina' },
        { t: 3, text: 'Amina lele,' },
        { t: 6, text: 'Amina lele, Amina lele' },
        { t: 9, text: 'Amina lele, Amina lele' },
        { t: 20, text: 'Yesu njo faraja ya nafsi yangu' },
        { t: 24, text: 'Nimeshampata, na wala sitamwacha kamwe' },
        { t: 28, text: 'Yesu njo faraja ya nafsi yangu' },
        { t: 32, text: 'Nimeshampata, na wala sitamwacha kamwe' },
        { t: 36, text: 'Adui wani jihapo kwa njia moja, yeye uwa sambaza kwa njia saba' },
        { t: 41, text: 'Adui ani jihapo kwa njia moja, yeye uwa sambaza kwa njia saba' },
        { t: 46, text: 'Nafsi yangu imeokoka kama ndege kwa mtego' },
        { t: 50, text: 'Mtego umevunjika nami nimepata kuokoka' },
        { t: 54, text: 'Msaada wangu u katika jina lake' },
        { t: 58, text: 'Nafsi yangu imeokoka kama ndege kwa mtego' },
        { t: 62, text: 'Mtego umevunjika nami nimepata kuokoka' },
        { t: 66, text: 'Msaada wangu u katika jina lake' },
        { t: 75, text: 'Namupenda' },
        { t: 78, text: 'Namwimbia aaaa' },
        { t: 81, text: 'Nalisifu jina lake' },
        { t: 84, text: 'Milele yote' },
        { t: 87, text: 'Namupenda' },
        { t: 90, text: 'Namwimbia' },
        { t: 93, text: 'Nalisifu jina lake' },
        { t: 96, text: 'Milele yote' },
        { t: 105, text: 'Chef! Chef! Chef wa maisha yangu!' },
        { t: 109, text: 'Chef! Chef chef wa maisha yangu!' },
        { t: 113, text: 'Chef! Chef chef wa maisha yangu!' },
        { t: 125, text: 'Kama si Bwana alikuwa upande wangu' },
        { t: 129, text: 'Maduui wangenimeza, ai kweli' },
        { t: 133, text: 'Bwana akiwa upande wangu, nani aliye juu yangu?' },
        { t: 137, text: 'Mtego umeufyatua nami nimefika salama' },
        { t: 141, text: 'Ndio maana...' },
        { t: 145, text: 'Naimba, naimba kwa shangwe' },
        { t: 149, text: 'Sifa za Bwana zivume milele' },
        { t: 153, text: 'Naimba, naimba kwa shangwe' },
        { t: 157, text: 'Sifa za Bwana zivume milele' },
        { t: 160, text: 'Nina Baba, siko yatima' },
        { t: 164, text: 'Ye njo Mfalme ananilindaga' },
        { t: 168, text: 'Nina Baba, siko yatima' },
        { t: 172, text: 'Ye njo Mfalme ananilindaga' },
        { t: 176, text: 'Nina Baba (Nina Baba)' },
        { t: 180, text: 'Siko yatima (Sikai yatima mimi)' },
        { t: 184, text: 'Ye njo Mfalme ananilindaga' },
        { t: 188, text: 'Nina baba siko yatima ye njo mufalme anani' },
        { t: 192, text: 'Lindaga' },
        { t: 195, text: 'Mungu ni chef wangu' },
        { t: 199, text: 'Chef! Chef! Chef wa maisha yangu!' },
        { t: 203, text: 'Hata madadui wani ji hapo... Niko na chef wangu' },
        { t: 207, text: 'Chef! Chef wa maisha yangu!' },
        { t: 211, text: 'Chef! Chef wa maisha yangu!' },
        { t: 215, text: 'Chef! Chef wa maisha yangu!' },
        { t: 219, text: 'Mungu ni chef wangu' },
        { t: 223, text: 'Chef! Chef wa maisha yangu!' }
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

function updateLvActiveLine(song, audio) {
  if (!song.lyrics || song.lyrics.length === 0) return;
  const box = document.getElementById('lvLyrics');
  const t = audio.currentTime;
  let active = 0;
  song.lyrics.forEach((line, i) => { if (t >= line.t) active = i; });
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
