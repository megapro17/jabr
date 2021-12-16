const matchCase = (patterStr, targetStr) => {
    let output = ''

    patterStr.split('').forEach((letter, index) => {
        if (letter === letter.toUpperCase()) {
            output += targetStr[index].toUpperCase()
        } else {
            output += targetStr[index].toLowerCase()
        }
    })

    return output
}

const replaceWords = () => {
    const html = document.querySelector('html');
    const walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);

    let node;
    while (node = walker.nextNode()) {
        let value = node.nodeValue
        const findHabrRu = value.match(/хабр/ig)
        const findHabrEn = value.match(/habr/ig)

        if (findHabrRu || findHabrEn) {
            findHabrRu && findHabrRu.forEach(match => {
                value = value.replace(new RegExp(match), matchCase(match, 'жабр'))
            })
            findHabrEn && findHabrEn.forEach(match => {
                value = value.replace(new RegExp(match), matchCase(match, 'jabr'))
            })

            node.nodeValue = value
        }
    }
}

window.addEventListener('load', () => {
    const currentLogo = document.querySelector('.tm-header__logo.tm-header__logo_ru')
    if (currentLogo){
        currentLogo.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="58" height="22" viewBox="0 0 58 22" xml:space="preserve"><script xmlns=""/>
                <desc>Created with Fabric.js 4.6.0</desc>
                <defs>
                </defs>
                <g transform="matrix(1 0 0 1 9.73 9.45)" id="FOYZORPFDBuv2-4MXVMff">
                <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #fff; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" transform=" translate(0, 0)" d="M 9.04105 7.744 L 4.54176 -0.15878000000000014 L 9.04105 -7.74399 L 5.424390000000001 -7.74399 L 1.5551000000000008 -1.1612800000000005 L 1.5551000000000008 -7.74399 L -1.5854999999999992 -7.74399 L -1.5854999999999992 -1.1612800000000005 L -5.406219999999999 -7.74399 L -9.04106 -7.74399 L -4.33966 -0.15878000000000014 L -9.04106 7.744 L -5.406219999999999 7.744 L -1.5854999999999992 0.7635199999999998 L -1.4657499999999992 7.744 L 1.5551000000000006 7.744 L 1.5551000000000006 0.7635199999999998 L 5.424390000000001 7.744 z" stroke-linecap="round"/>
                </g>
                <g transform="matrix(1 0 0 1 24.44 11.24)" id="0QHu5Qu5dyDgg7em2wZvK">
                <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #fff; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" transform=" translate(-21.09, -11.31)" d="M 21.3494 5.36211 C 18.3794 5.36211 16.6854 7.042000000000001 16.377399999999998 9 L 19.3694 9 C 19.545399999999997 8.406 20.1174 7.84811 21.217399999999998 7.84811 C 22.295399999999997 7.84811 23.0874 8.39811 23.0874 9.45411 L 23.0874 9.98211 L 20.601399999999998 9.98211 C 17.6974 9.98211 15.937399999999998 11.324100000000001 15.937399999999998 13.6561 C 15.937399999999998 15.9441 17.6974 17.2641 19.897399999999998 17.2641 C 21.371399999999998 17.2641 22.559399999999997 16.6921 23.263399999999997 15.768099999999999 L 23.263399999999997 17.0001 L 26.233399999999996 17.0001 L 26.233399999999996 9.56411 C 26.233399999999996 6.792109999999999 24.275399999999998 5.3621099999999995 21.349399999999996 5.3621099999999995 z M 20.7774 14.778100000000002 C 19.7874 14.778100000000002 19.1494 14.294100000000002 19.1494 13.502100000000002 C 19.1494 12.688100000000002 19.8534 12.204100000000002 20.8434 12.204100000000002 L 23.0874 12.204100000000002 L 23.0874 12.710100000000002 C 23.0874 14.030100000000003 22.0094 14.778100000000002 20.7774 14.778100000000002 z" stroke-linecap="round"/>
                </g>
                <g transform="matrix(1 0 0 1 37.64 8.86)" id="t_ZG25X0mQ4aXWb_xh5P-">
                <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #fff; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" transform=" translate(-34.28, -8.94)" d="M 35.1339 5.82411 C 33.549899999999994 5.82411 32.2519 6.39611 31.415899999999997 7.5621100000000006 C 31.635899999999996 5.42811 32.4939 4.372110000000001 34.649899999999995 4.042110000000001 L 38.99999999999999 3.404110000000001 L 38.99999999999999 0.6101070000000011 L 34.341899999999995 1.380110000000001 C 29.853899999999996 2.1281100000000013 28.467899999999997 5.120110000000001 28.467899999999997 10.1141 C 28.467899999999997 14.6021 30.645899999999997 17.2641 34.4959 17.2641 C 37.9499 17.2641 40.0839 14.624099999999999 40.0839 11.4561 C 40.0839 8.046109999999999 38.1039 5.824109999999999 35.1339 5.824109999999999 z M 34.341899999999995 14.580100000000002 C 32.6699 14.580100000000002 31.745899999999995 13.238100000000001 31.745899999999995 11.4341 C 31.745899999999995 9.696110000000001 32.713899999999995 8.442110000000001 34.363899999999994 8.442110000000001 C 35.969899999999996 8.442110000000001 36.8719 9.740110000000001 36.8719 11.456100000000001 C 36.8719 13.1721 35.991899999999994 14.580100000000002 34.341899999999995 14.580100000000002 z" stroke-linecap="round"/>
                </g>
                <g transform="matrix(1 0 0 1 51.27 13.11)" id="QIQFZ8V0Bk5Rdlp5ofcUZ">
                <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #fff; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" transform=" translate(-47.91, -13.18)" d="M 48.6512 5.36211 C 46.979200000000006 5.36211 45.9012 6.08811 45.3292 6.946110000000001 L 45.3292 5.626110000000001 L 42.2492 5.626110000000001 L 42.2492 21 L 45.461200000000005 21 L 45.461200000000005 15.9001 C 46.03320000000001 16.6921 47.111200000000004 17.2641 48.5632 17.2641 C 51.3572 17.2641 53.5792 15.0641 53.5792 11.324099999999998 C 53.5792 7.518109999999998 51.3572 5.362109999999998 48.6512 5.362109999999998 z M 47.8812 14.4921 C 46.3852 14.4921 45.3952 13.2821 45.3952 11.3681 L 45.3952 11.280100000000001 C 45.3952 9.36611 46.385200000000005 8.134110000000002 47.8812 8.134110000000002 C 49.377199999999995 8.134110000000002 50.3452 9.388110000000001 50.3452 11.324100000000001 C 50.3452 13.260100000000001 49.3772 14.4921 47.8812 14.4921 z" stroke-linecap="round"/>
                </g>
            </svg>
        `
    }

    replaceWords()

    // waiting for comments
    setTimeout(() => replaceWords(), 5000)
})

chrome.runtime.onMessage.addListener(() => {
    setTimeout(() => replaceWords(), 500)
})
