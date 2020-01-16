class RestrictJS {
    constructor() {
        this.elements = null;
        this.keyCodes = {
            "0": [48, 96],
            "1": [49, 97],
            "2": [50, 98],
            "3": [51, 99],
            "4": [52, 100],
            "5": [53, 101],
            "6": [54, 102],
            "7": [55, 103],
            "8": [56, 104],
            "9": [57, 105],
            "a": 65,
            "b": 66,
            "c": 67,
            "d": 68,
            "e": 69,
            "f": 70,
            "g": 71,
            "h": 72,
            "i": 73,
            "j": 74,
            "k": 75,
            "l": 76,
            "m": 77,
            "n": 78,
            "o": 79,
            "p": 80,
            "q": 81,
            "r": 82,
            "s": 83,
            "t": 84,
            "u": 85,
            "v": 86,
            "w": 87,
            "x": 88,
            "y": 89,
            "z": 90,
            "`": 192,
            "=": 187,
            "\\": 220,
            "]": 221,
            "[": 219,
            "'": 222,
            ";": [186,59],
            "/": [191, 111],
            ".": [190, 110],
            ",": 188,
            "*": 106,
            "-": [109, 173, 189],
            "+": [107, 61],
            " ": 32
        };

        this.shiftKeyCodes = {
            "~": 192,
            "!": 49,
            "@": 50,
            "#": 51,
            "$": 52,
            "%": 53,
            "^": 54,
            "&": 55,
            "*": 56,
            "(": 57,
            ")": 48,
            "_": [189, 173],
            "+": [187, 61],
            "{": 221,
            "}": 219,
            "\"": 222,
            ":": [186, 59],
            "?": 191,
            ">": 190,
            "<": 188,
        };

        this.grabElements();
    }

    /**
     * Grab all elements contain 'data-restrict-js' attribute.
     */
    grabElements() {
        var pastedText = '';

        let elements = document.querySelectorAll('[data-restrict-js]');

        [].forEach.call(elements, (element) => {
            let rules = element.getAttribute('data-restrict-js').trim();

            // Skip if rules is empty.
            if (rules.length <= 0) {
                return;
            }

            // Handle copy and paste event.
            element.addEventListener('paste', function (event) {
                // console.log(!event.clipboardData);
                let clipboard = !event.clipboardData ? window.clipboardData : event.clipboardData;
                // console.log(window.clipboardData.getData('Text'));

                // let data = clipboard.getData('Text');
                // console.log(this.getAttribute('data-restrict-js'));
                return false
            });

            element.addEventListener('keydown', (event) => {
                let keyCode = this.grabKeyCode(event);

                if (this.isSpecialKeyCode(keyCode)) {
                    return true;
                }

                let splitRules = rules.split('|');

                let characterAllow = false;

                let usingShift = event.shiftKey;

                splitRules.forEach((rule) => {
                    console.log(event.shiftKey, keyCode, this.keyCodes[rule], rule );
                    this.allowAlphaOnly(rule, keyCode, usingShift) ? characterAllow = true : '';

                    this.allowNumericOnly(rule, keyCode, usingShift) ? characterAllow = true : '';

                    this.allowAlphaNumericOnly(rule, keyCode, usingShift) ? characterAllow = true : '';

                    this.allowAlphaDashOnly(rule, keyCode, usingShift) ? characterAllow = true : '';

                    this.allowAlphaSpaceOnly(rule, keyCode, usingShift) ? characterAllow = true : '';

                    this.allowNumericDashOnly(rule, keyCode, usingShift) ? characterAllow = true : '';

                    if (!event.shiftKey && this.keyCodes[rule] !== undefined) {
                        if (Array.isArray(this.keyCodes[rule]) && this.keyCodes[rule].indexOf(keyCode) >= 0) {
                            characterAllow = true;
                        } else {
                            if (this.keyCodes[rule] == keyCode) {
                                characterAllow = true;
                            }
                        }
                    }

                    if (event.shiftKey && this.shiftKeyCodes[rule] !== undefined ) {
                        if (Array.isArray(this.shiftKeyCodes[rule]) && this.shiftKeyCodes[rule].indexOf(keyCode) >= 0) {
                            characterAllow = true;
                        } else {
                            if (this.shiftKeyCodes[rule] == keyCode) {
                                characterAllow = true;
                            }
                        }
                    }
                });

                if (!characterAllow) {
                    event.preventDefault();
                }
            });

        });
    }

    /**
     * Rule to allow letter only. a-z and A-Z
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */
    allowAlphaOnly(rule, keyCode, usingShift) {
        if (usingShift) {
            return false;
        }

        return rule == 'alpha' && (keyCode >= 65 && keyCode <= 90);
    }

    /**
     * Rule to allow numeric only. 0-9
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */
    allowNumericOnly(rule, keyCode, usingShift) {
        if (usingShift) {
            return false;
        }

        return rule == 'numeric' && ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105));
    }

    /**
     * Rule to allow alpha numeric only. A-Z,a-z,0-9
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */
    allowAlphaNumericOnly(rule, keyCode, usingShift) {
        if (usingShift) {
            return false;
        }

        return rule == 'alphanumeric' && ((keyCode >= 48 && keyCode <= 90) || (keyCode >= 96 && keyCode <= 105));
    }

    /**
     * Rule to allow alpha space only. A-Z,a-z and space.
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */
    allowAlphaSpaceOnly(rule, keyCode, usingShift) {
        if (usingShift) {
            return false;
        }

        return rule == 'alphaspace' && ((keyCode >= 48 && keyCode <= 90) || keyCode == 32);
    }

    /**
     * Rule to allow alpha dash only. A-Z,a-z,-
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */
    allowAlphaDashOnly(rule, keyCode, usingShift) {
        if (usingShift) {
            return false;
        }

        return rule == 'alphadash' && ((keyCode >= 65 && keyCode <= 90) || keyCode == 189 || keyCode == 173);
    }

    /**
     * Rule to allow numeric dash only. 0-9,-
     *
     * @param rule
     * @param keyCode
     * @param usingShift
     * @returns {boolean}
     */
    allowNumericDashOnly(rule, keyCode, usingShift) {
        if (usingShift) {
            return false;
        }

        return rule == 'numericdash' && ((keyCode >= 48 && keyCode <= 57) || keyCode == 189);
    }

    /**
     * By default allow key code like enter,backspace,delete and arrow button.
     *
     * @param keyCode
     * @returns {boolean}
     */
    isSpecialKeyCode(keyCode) {
        return (keyCode == 46 || keyCode == 13 || keyCode == 8 || keyCode == 16) || (keyCode >= 37 && keyCode <= 40);
    }

    /**
     * Grab keyboard code.
     *
     * @param event
     * @returns {number|*}
     */
    grabKeyCode(event) {
        //console.log(event.which, event.keyCode);

        if (event.which !== undefined) {
            return event.which;
        } if (event.keyIdentifier !== undefined) {
            return event.keyIdentifier;
        } else if (event.keyCode !== undefined) {
            return event.keyCode;
        }
    }
}

module.exports = RestrictJS;

window.RestrictJS = new RestrictJS();

