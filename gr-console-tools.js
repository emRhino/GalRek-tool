const oldPosts = [
    'la_candela_unica',
    'justyna.rysuje',
    'fanray_handmade',
    'wellegance.art',
    'mellymuse',
    'roedeer_art',
    'ovca.luxury.hand.made',
    '_happydeco_',
    'pedzelki.rysiki',
    'resin_decor.bymonika',
    'handmaderkaaa',
    'bizu_by_kesia_',
    'fringy.bizuteria',
    'zrecznie.tworzone',
    'anbobhandmade',
    'niechtoszlak1',
    'kolorowoistylowo',
    'milima.store',
    'pookatoys',
    'owca__art',
    'km.tourmaline',
    'mojeakwarele',
    'burzaartdecou',
    'kamyk_i_spolka',
    'weaving_fancy',
    'paprotka_rekodzielo',
    'mlubinka',
    'remain_jewellery',
    'dobrze_poplatane',
    'wilcza_nora',
    'dancewiththeshadows',
    'ayodele.pl',
    'mgbukowska',
    'malkaw.art',
    'bea_and_luis',
    'czerwony_guzik',
    'naturalniewyplatane',
    'itumipl',
    'its.my.card',
    'melani_k',
    'u_zaborowska',
    'suszkiii',
    'nitkaani',
    'kruca.ink',
    'mojeszydelkowanie',
    'o.swiec',
    '_lighttoday',
    'splotsea',
    'epoxyresinpassion',
    'achaart.sztuka',
    'scrapbyann',
    'sznurkowy_wrobelek',
    'na_ma_dusze',
    'strefa_recznego_tworzenia',
    'rencymakate',
    'artysia.studio',
    'decoupage_we_dwoje',
    'olidzielo',
    'karolinabags',
    'plomien_relaksu',
    'michalina.rozbicka',
    'j.s.ceramika',
    'c.k.stolarnia',
    'pmwmanufaktura',
    'crochet.impressions',
    'wygodadesign',
    'tortowe.ozdoby.niezw.urody',
    'moni_hand_made',
    'raccoonstudio.mp',
    'malinowa_laka',
    'loona.hand_made',
    'agadziabarka',
    'soldemayo_macrame',
    'makramy_od_kamy',
    'resinha.pracownia',
    'matyldziak_design',
    '_szydelkowa_pasja_',
    'wiswish.swiece',
    'sznurki_i_rosliny',
    'pracownia_pasjaart',
    'drewienka_art',
    'creativesoulspace',
    'papendekle_photoalbums',
    'sposoby.na.sznurek',
    'wazne.rzeczy',
    'peprojektuje',
    'slowform_',
    'made.by.ewa',
    'tfutfu.art',
    'art.zouzeau',
    'chobotz_shoes',
    'makramy_plote',
    'kasia_priebe_bizuteria',
    'erinaco.pl',
    'handmadebyelizawenzel',
    'papierija',
    'overthemoon_jwlr',
    'cosladnegocosdobrego',
    'w.moim.domku',
    'silky__bloom',
    'scraperkii',
    'fingers.in.paint',
    'misia__gumisia',
    'wianki.jaskolki',
    'the_house_of_beads',
    'halko_tu_glina_ceramika',
    'san.decoart',
    'zzamilowaniado',
    'woodido',
    '_elcandle_',
    'boho_splotki',
    'maami_jewellery',
    'mammakrame',
    'lifeisastrategy',
    'linka.handmade',
    'folkowa_skrzynia',
    'atram_martasiebert',
    'blossomframe',
    'chyzosc_store',
    'karolina.slusarczyk.art',
    'wypalove',
    'lirio.stones',
    'fabryka_rzeczy_ladnych',
    'przytulia_',
    'betty_mojeniezapominajki',
    'plecione_z_sercem',
    'kusnierzhandmade',
    'almabella.pl',
    'ablaart',
    'scentsofhomee',
    'agi_made',
    'agrestowoszydelkowo',
    'magda_bookmarks',
    '__lady_craft__',
    'kamienie_i_jedwab',
    'wyplecione_z_pasji',
    'velimea.jewelry',
    'fifnamama',
    'desoo_project',
    'handmade.kama',
    'arletta_niemiro',
    'materialove.pl',
    'makrameemoni',
    'mamooo.handmade',
    'rys_ceramika',
    'klinika_piernika',
    'pedzlemilapa',
    'bizuteria.katrina.rossa',
    'motyleibadyle',
    'betoninki',
    'makrama_ania',
    'happyarthandmade',
    'szydelkowe_oczka',
    'koronkarka',
    'handmade_by_szaa',
    'say_something_in_artistic',
    'madlenkova',
    'lekka.jak.pioorko',
    'boshko_pracownia',
    'la_polka_candle',
    'ceramika_badura_karolina',
    'silktea.pl',
    'na_zielonoo',
    'hukers.handmade',
    'kamykownia',
    'handmade_by_marcino',
    'miszmaszbyann',
    'ew.ko_handmade',
    'pani_puff_',
    'szydelkowankianki',
    'madzia_bogusz_rekodzielo',
    'picoartpl',
    'zaplatane.na.kiju',
    'sznurek_w_akcji',
    'caltha_jewelry',
    'madaartvision',
    'zarysolka',
    'homelinessartdecor',
    'koralmanija',
];

const presentation = {
    'styles': '<style>.comments-wrapper {position: fixed;z-index: 99999;left: 0;top: 0;background: white;height: 100vh;width: 100vw;display: flex;justify-content: center;padding: 50px;overflow: auto;flex-direction: row;}.order:hover { background: red; }.order { padding-right: 22px; }.comments-list {position: absolute;padding: 0 20px;z-index: 11;}.image img {max-width: 60px;border-radius: 50%;}.counter, .image, .name { font-weight: 600; }.counter, .image, .name, .comment { padding: 10px; }table, th, td { border: 1px solid lightgrey; }.prev-scroll { overflow: hidden; }.lds-dual-ring {display: inline-block;width: 80px;height: 80px;}.lds-dual-ring:after {content: " ";display: block;width: 64px;height: 64px;margin: 8px;border-radius: 50%;border: 6px solid #fff;border-color: #fff transparent #fff transparent;animation: lds-dual-ring 1.2s linear infinite;}@keyframes lds-dual-ring {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}.spinner {position: fixed;z-index: 9999;background: radial-gradient(circle, rgba(0,0,0,0.65) 5%, rgba(0,0,0,0.35) 100%);width:100vw;height: 100vh;left: 0;top: 0;display: flex;justify-content: center;align-items: center;}.prev-scroll .spinner {display: none !important;}</style>',
    'spinner': '<div class="spinner"><div class="lds-dual-ring"></div></div>',
}

const config = {
    'commentsByDateLimit': 5,
    'commentsByRandLimit': 5,
    'body': document.querySelector('body'),
    'parser': new DOMParser(),
}

const anchors = {
    'allComments': '.Mr508',
    'moreButton': '.XQXOT > li > div > button.wpO6b',
    'commentName': 'a.sqdOP.yWX7d._8A5w5.ZIAjV',
    'commentText': '.MOdxS > span',
    'commentLink': '.sqdOP',
    'commentTime': '.FH9sR',
    'commentImage': '._6q-tv',
}

const appendHTMLElement = (html, DOMtarget) => {
    htmlDom = config.parser.parseFromString(html, "text/html");
    DOMtarget.appendChild(htmlDom.documentElement);
}

const showLoader = () => {
    appendHTMLElement(presentation.styles, config.body);
    appendHTMLElement(presentation.spinner, config.body);
};

const getMoreButton = () => {
    const moreButton = document.querySelector(anchors.moreButton);

    if (!moreButton) {
        processData();
        return false;
    }

    moreButton.click();
    setTimeout(() => { return getMoreButton(); }, 5000)
};

const sortBy = (() => {
    const toString = Object.prototype.toString,
        parse = function (x) { return x },
        getItem = function (x) {
            const isObject = x != null && typeof x === 'object'
            const isProp = isObject && this.prop in x
            return this.parser(isProp ? x[this.prop] : x)
        }
    return function sortby(array, cfg) {
        if (!(array instanceof Array && array.length)) return []
        if (toString.call(cfg) !== '[object Object]') cfg = {}
        if (typeof cfg.parser !== 'function') cfg.parser = parse
        cfg.desc = !!cfg.desc ? -1 : 1
        return array.sort((a, b) => {
            a = getItem.call(cfg, a)
            b = getItem.call(cfg, b)
            return cfg.desc * (a < b ? -1 : +(a > b))
        })
    }
})();


const fillWithRandomComments = (comments) => {
    const randNums = new Set();
    let commentsObject = [];

    while (randNums.size !== config.commentsByRandLimit) {
        randNums.add(Math.floor(Math.random() * (comments.length - config.commentsByRandLimit)) + config.commentsByRandLimit);
    }

    randNums.forEach(num => {
        commentsObject.push({
            name: comments[num].name,
            link: comments[num].link,
            comment: comments[num].comment,
        })
    })

    return [...comments.slice(0, config.commentsByDateLimit), ...commentsObject];
}

const getCommentsNode = () => {
    const commentsNode = Array.from(document.querySelectorAll('.Mr508'));
    const uniqueComments = commentsNode.filter(function(x) { return !oldPosts.includes(x.querySelector(anchors.commentName).textContent) })

    return uniqueComments;
}

const constructCommentObject = (comments) => {
    let commentsObject = [];

    comments.forEach(comment => {
        commentsObject.push({
            name: comment.querySelector(anchors.commentName).textContent,
            link: comment.querySelector(anchors.commentLink).getAttribute('href'),
            comment: comment.querySelector(anchors.commentText).textContent,
            time: new Date(comment.querySelector(anchors.commentTime).getAttribute('datetime')),
        })
    })
    return sortBy(commentsObject, { prop: 'time' });
}

const buildOutputHTML = (comments) => {
    const tableStart = '<div class="comments-wrapper"><table>';
    const tableEnd = '</table></div>';
    let tableContent = '';

    comments.forEach((comment, index) => {
        tableContent += `
        <tr class="commentator">
            <td class="counter">${index+1}</td>
            <td class="name"><a class="anchor" target="_blank" href="https://www.instagram.com${ comment.link }">${ comment.name }</a></td>
            <td class="image">&nbsp;</td>
            <td class="comment">${ comment.comment }</td>
        </tr>`;
    })

    return tableStart + tableContent + tableEnd;
}

const printCommentLayer = (element) => {
    config.body.classList.add('prev-scroll');
    appendHTMLElement(element, config.body);
}

const processData = () => printCommentLayer(buildOutputHTML(fillWithRandomComments(constructCommentObject(getCommentsNode()))));
const runApp = () => getMoreButton(showLoader());

runApp();