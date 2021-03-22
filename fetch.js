module.exports = function () {
    const fetch = require('node-fetch')
    const websites = [`https://gamy-mercury-sound.glitch.me/`]
    websites.forEach(function (el) {
        let call = 0
        setInt()

        function setInt() {
            console.log(`Fetching started for ${el}`)
            let int = setInterval(() => {
                fetch(el)
                    .then(res => res.text())
                    .catch(() => {
                        clearInterval(int);
                        Resout();
                    })
            }, 180000); //3min interval
        }

        function Resout() {
            call++;
            if (call <= 10) {
                console.log(`Error has occured in ${el}. Restarting`)
                setTimeout(() => {
                    setInt()
                }, 2000);
            } else {
                console.log(`Maximum call time existed. Fetching stopped.`)
            }

        }
    })
}