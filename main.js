setTimeout(() => {
    console.log('START SCRIPT');


    function bench(f) {
        var date = new Date();
        for (var i = 0; i < 300; i++) {
            f();
        };
        return new Date() - date;
    }

    // 60ms //300ms
    const getStr1 = () => {
        let str = '';
        dataTest.forEach((e, i) => {
            str += `<span>${e.company}</span>`;
        });
        return str;
    }

    // 50ms //240ms
    const getStr2 = () => {
        let str = '';
        for (var v of dataTest) {
            str += `<span>${v.company}</span>`;
        }
        return str;
    }

    // 60 //260
    const getStr3 = () => {
        let str = '';
        for (var v in dataTest) {
            str += `<span>${v.company}</span>`;
        }
        return str;
    }


    // 110 becouse two operation //540ms
    const getStr4 = () => {
        return dataTest.map(v => `<span>${v.company}</span>`).join('');
    }

    // 60 //300
    const getStr5 = () => dataTest.reduce((ac, v) => {
        return `${ac}<span>${v.company}</span>`;
    }, '');


    console.log(bench(getStr5));
}, 2000);
