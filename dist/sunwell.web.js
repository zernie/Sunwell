'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chars = require('chars');
var linebreakTs = require('linebreak-ts');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var chars__default = /*#__PURE__*/_interopDefaultLegacy(chars);

var WebPlatform = /** @class */ (function () {
    function WebPlatform() {
        this.name = "WEB";
        this.Image = Image;
        this.Canvas = HTMLCanvasElement;
        this.Promise = Promise;
        this.buffers = [];
    }
    WebPlatform.prototype.getBuffer = function (width, height, clear) {
        var cvs;
        if (this.buffers.length) {
            if (width) {
                for (var i = 0; i < this.buffers.length; i++) {
                    if (this.buffers[i].width === width && this.buffers[i].height === height) {
                        cvs = this.buffers.splice(i, 1)[0];
                        break;
                    }
                }
            }
            else {
                cvs = this.buffers.pop();
            }
            if (cvs) {
                if (clear) {
                    cvs.getContext("2d").clearRect(0, 0, cvs.width, cvs.height);
                }
                return cvs;
            }
        }
        cvs = document.createElement("canvas");
        if (width) {
            cvs.width = width;
            cvs.height = height;
        }
        return cvs;
    };
    WebPlatform.prototype.freeBuffer = function (buffer) {
        this.buffers.push(buffer);
    };
    WebPlatform.prototype.loadAsset = function (img, url, loaded, error) {
        img.crossOrigin = "Anonymous";
        img.addEventListener("load", loaded);
        img.addEventListener("error", error);
        img.src = url;
    };
    WebPlatform.prototype.requestAnimationFrame = function (cb) {
        window.requestAnimationFrame(cb);
    };
    return WebPlatform;
}());

var CardClass;
(function (CardClass) {
    CardClass[CardClass["INVALID"] = 0] = "INVALID";
    CardClass[CardClass["DEATHKNIGHT"] = 1] = "DEATHKNIGHT";
    CardClass[CardClass["DRUID"] = 2] = "DRUID";
    CardClass[CardClass["HUNTER"] = 3] = "HUNTER";
    CardClass[CardClass["MAGE"] = 4] = "MAGE";
    CardClass[CardClass["PALADIN"] = 5] = "PALADIN";
    CardClass[CardClass["PRIEST"] = 6] = "PRIEST";
    CardClass[CardClass["ROGUE"] = 7] = "ROGUE";
    CardClass[CardClass["SHAMAN"] = 8] = "SHAMAN";
    CardClass[CardClass["WARLOCK"] = 9] = "WARLOCK";
    CardClass[CardClass["WARRIOR"] = 10] = "WARRIOR";
    CardClass[CardClass["DREAM"] = 11] = "DREAM";
    CardClass[CardClass["NEUTRAL"] = 12] = "NEUTRAL";
    CardClass[CardClass["WHIZBANG"] = 13] = "WHIZBANG";
})(CardClass || (CardClass = {}));
var Race;
(function (Race) {
    Race[Race["INVALID"] = 0] = "INVALID";
    Race[Race["MURLOC"] = 14] = "MURLOC";
    Race[Race["DEMON"] = 15] = "DEMON";
    Race[Race["MECHANICAL"] = 17] = "MECHANICAL";
    Race[Race["ELEMENTAL"] = 18] = "ELEMENTAL";
    Race[Race["PET"] = 20] = "PET";
    Race[Race["BEAST"] = 20] = "BEAST";
    Race[Race["TOTEM"] = 21] = "TOTEM";
    Race[Race["PIRATE"] = 23] = "PIRATE";
    Race[Race["DRAGON"] = 24] = "DRAGON";
    Race[Race["ALL"] = 26] = "ALL";
})(Race || (Race = {}));
var Rarity;
(function (Rarity) {
    Rarity[Rarity["INVALID"] = 0] = "INVALID";
    Rarity[Rarity["COMMON"] = 1] = "COMMON";
    Rarity[Rarity["FREE"] = 2] = "FREE";
    Rarity[Rarity["RARE"] = 3] = "RARE";
    Rarity[Rarity["EPIC"] = 4] = "EPIC";
    Rarity[Rarity["LEGENDARY"] = 5] = "LEGENDARY";
})(Rarity || (Rarity = {}));
var MultiClassGroup;
(function (MultiClassGroup) {
    MultiClassGroup[MultiClassGroup["INVALID"] = 0] = "INVALID";
    MultiClassGroup[MultiClassGroup["GRIMY_GOONS"] = 1] = "GRIMY_GOONS";
    MultiClassGroup[MultiClassGroup["JADE_LOTUS"] = 2] = "JADE_LOTUS";
    MultiClassGroup[MultiClassGroup["KABAL"] = 3] = "KABAL";
})(MultiClassGroup || (MultiClassGroup = {}));
var CardSet;
(function (CardSet) {
    CardSet[CardSet["INVALID"] = 0] = "INVALID";
    CardSet[CardSet["CORE"] = 2] = "CORE";
    CardSet[CardSet["EXPERT1"] = 3] = "EXPERT1";
    CardSet[CardSet["HOF"] = 4] = "HOF";
    CardSet[CardSet["NAXX"] = 12] = "NAXX";
    CardSet[CardSet["GVG"] = 13] = "GVG";
    CardSet[CardSet["BRM"] = 14] = "BRM";
    CardSet[CardSet["TGT"] = 15] = "TGT";
    CardSet[CardSet["LOE"] = 20] = "LOE";
    CardSet[CardSet["KARA"] = 23] = "KARA";
    CardSet[CardSet["OG"] = 21] = "OG";
    CardSet[CardSet["GANGS"] = 25] = "GANGS";
    CardSet[CardSet["UNGORO"] = 27] = "UNGORO";
    CardSet[CardSet["ICECROWN"] = 1001] = "ICECROWN";
    CardSet[CardSet["LOOTAPALOOZA"] = 1004] = "LOOTAPALOOZA";
    CardSet[CardSet["GILNEAS"] = 1125] = "GILNEAS";
    CardSet[CardSet["BOOMSDAY"] = 1127] = "BOOMSDAY";
    CardSet[CardSet["TROLL"] = 1129] = "TROLL";
    CardSet[CardSet["DALARAN"] = 1130] = "DALARAN";
})(CardSet || (CardSet = {}));
var CardType;
(function (CardType) {
    CardType[CardType["INVALID"] = 0] = "INVALID";
    CardType[CardType["HERO"] = 3] = "HERO";
    CardType[CardType["MINION"] = 4] = "MINION";
    CardType[CardType["SPELL"] = 5] = "SPELL";
    CardType[CardType["WEAPON"] = 7] = "WEAPON";
    CardType[CardType["HERO_POWER"] = 10] = "HERO_POWER";
})(CardType || (CardType = {}));

var _a;
var RaceNames = (_a = {},
    _a[Race.MURLOC] = {
        enUS: "Murloc",
        frFR: "Murloc",
        deDE: "Murloc",
        koKR: "멀록",
        esES: "Múrloc",
        esMX: "Múrloc",
        ruRU: "Мурлок",
        zhTW: "魚人",
        zhCN: "鱼人",
        itIT: "Murloc",
        ptBR: "Murloc",
        plPL: "Murlok",
        jaJP: "マーロック",
        thTH: "เมอร์ล็อค",
    },
    _a[Race.MECHANICAL] = {
        enUS: "Mech",
        frFR: "Méca",
        deDE: "Mech",
        koKR: "기계",
        esES: "Robot",
        esMX: "Meca",
        ruRU: "Механизм",
        zhTW: "機械",
        zhCN: "机械",
        itIT: "Robot",
        ptBR: "Mecanoide",
        plPL: "Mech",
        jaJP: "メカ",
        thTH: "เครื่องจักร",
    },
    _a[Race.ELEMENTAL] = {
        enUS: "Elemental",
        frFR: "Élémentaire",
        deDE: "Elementar",
        koKR: "정령",
        esES: "Elemental",
        esMX: "Elemental",
        ruRU: "Элементаль",
        zhTW: "元素",
        zhCN: "元素",
        itIT: "Elementale",
        ptBR: "Elemental",
        plPL: "Żywiołak",
        jaJP: "エレメンタル",
        thTH: "วิญญาณธาตุ",
    },
    _a[Race.PET] = {
        enUS: "Beast",
        frFR: "Bête",
        deDE: "Wildtier",
        koKR: "야수",
        esES: "Bestia",
        esMX: "Bestia",
        ruRU: "Зверь",
        zhTW: "野獸",
        zhCN: "野兽",
        itIT: "Bestia",
        ptBR: "Fera",
        plPL: "Bestia",
        jaJP: "獣",
        thTH: "สัตว์",
    },
    _a[Race.DEMON] = {
        enUS: "Demon",
        frFR: "Démon",
        deDE: "Dämon",
        koKR: "악마",
        esES: "Demonio",
        esMX: "Demonio",
        ruRU: "Демон",
        zhTW: "惡魔",
        zhCN: "恶魔",
        itIT: "Demone",
        ptBR: "Demônio",
        plPL: "Demon",
        jaJP: "悪魔",
        thTH: "ปีศาจ",
    },
    _a[Race.PIRATE] = {
        enUS: "Pirate",
        frFR: "Pirate",
        deDE: "Pirat",
        koKR: "해적",
        esES: "Pirata",
        esMX: "Pirata",
        ruRU: "Пират",
        zhTW: "海盜",
        zhCN: "海盗",
        itIT: "Pirata",
        ptBR: "Pirata",
        plPL: "Pirat",
        jaJP: "海賊",
        thTH: "โจรสลัด",
    },
    _a[Race.DRAGON] = {
        enUS: "Dragon",
        frFR: "Dragon",
        deDE: "Drache",
        koKR: "용족",
        esES: "Dragón",
        esMX: "Dragón",
        ruRU: "Дракон",
        zhTW: "龍類",
        zhCN: "龙",
        itIT: "Drago",
        ptBR: "Dragão",
        plPL: "Smok",
        jaJP: "ドラゴン",
        thTH: "มังกร",
    },
    _a[Race.TOTEM] = {
        enUS: "Totem",
        frFR: "Totem",
        deDE: "Totem",
        koKR: "토템",
        esES: "Tótem",
        esMX: "Tótem",
        ruRU: "Тотем",
        zhTW: "圖騰",
        zhCN: "图腾",
        itIT: "Totem",
        ptBR: "Totem",
        plPL: "Totem",
        jaJP: "トーテム",
        thTH: "โทเท็ม",
    },
    _a[Race.ALL] = {
        enUS: "All",
        frFR: "Tout",
        deDE: "Alle",
        koKR: "모두",
        esES: "Todos",
        esMX: "Todas",
        ruRU: "Все",
        zhTW: "全部",
        zhCN: "全部",
        itIT: "Tutti",
        ptBR: "Tudo",
        plPL: "Wszystkie",
        jaJP: "全て",
        thTH: "ทุกอย่าง",
    },
    _a);
function cleanEnum(val, e) {
    if (typeof val === "string") {
        if (val in e) {
            return e[val];
        }
        else {
            return e.INVALID;
        }
    }
    return val || 0;
}
/**
 * Get the bounding box of a canvas content.
 * @returns {{x: *, y: *, maxX: (number|*|w), maxY: *, w: number, h: number}}
 */
function contextBoundingBox(context) {
    var w = context.canvas.width;
    var h = context.canvas.height;
    var data = context.getImageData(0, 0, w, h).data;
    var minX = 999;
    var minY = 999;
    var maxX = 0;
    var maxY = 0;
    var out = false;
    for (var y = h - 1; y > -1; y--) {
        if (out) {
            break;
        }
        for (var x = 0; x < w; x++) {
            if (data[y * (w * 4) + x * 4 + 3] > 0) {
                maxY = Math.max(maxY, y);
                out = true;
                break;
            }
        }
    }
    if (maxY === undefined) {
        return null;
    }
    out2: for (var x = w - 1; x > -1; x--) {
        for (var y = 0; y < h; y++) {
            if (data[y * (w * 4) + x * 4 + 3] > 0) {
                maxX = Math.max(maxX, x);
                break out2;
            }
        }
    }
    out3: for (var x = 0; x < maxX; x++) {
        for (var y = 0; y < h; y++) {
            if (data[y * (w * 4) + x * 4 + 3] > 0) {
                minX = Math.min(x, minX);
                break out3;
            }
        }
    }
    out4: for (var y = 0; y < maxY; y++) {
        for (var x = 0; x < w; x++) {
            if (data[y * (w * 4) + x * 4 + 3] > 0) {
                minY = Math.min(minY, y);
                break out4;
            }
        }
    }
    return {
        x: minX,
        y: minY,
        maxX: maxX,
        maxY: maxY,
        w: maxX - minX,
        h: maxY - minY,
    };
}
function getNumberStyle(style) {
    switch (style) {
        case "-":
            return "#f00";
        case "+":
            return "#0f0";
        default:
            return "white";
    }
}
/**
 * Given a curve and t, the function returns the point on the curve.
 * r is the rotation of the point in radians.
 * @returns {{x: (number|*), y: (number|*), r: number}}
 */
function getPointOnCurve(curve, t) {
    var rX = 3 * Math.pow(1 - t, 2) * (curve[1].x - curve[0].x) +
        6 * (1 - t) * t * (curve[2].x - curve[1].x) +
        3 * Math.pow(t, 2) * (curve[3].x - curve[2].x);
    var rY = 3 * Math.pow(1 - t, 2) * (curve[1].y - curve[0].y) +
        6 * (1 - t) * t * (curve[2].y - curve[1].y) +
        3 * Math.pow(t, 2) * (curve[3].y - curve[2].y);
    var x = Math.pow(1 - t, 3) * curve[0].x +
        3 * Math.pow(1 - t, 2) * t * curve[1].x +
        3 * (1 - t) * Math.pow(t, 2) * curve[2].x +
        Math.pow(t, 3) * curve[3].x;
    var y = Math.pow(1 - t, 3) * curve[0].y +
        3 * Math.pow(1 - t, 2) * t * curve[1].y +
        3 * (1 - t) * Math.pow(t, 2) * curve[2].y +
        Math.pow(t, 3) * curve[3].y;
    return { x: x, y: y, r: Math.atan2(rY, rX) };
}
function getCardFrameClass(cardClass) {
    switch (cardClass) {
        case CardClass.DREAM:
            return CardClass.HUNTER;
        case CardClass.INVALID:
        case CardClass.WHIZBANG:
            return CardClass.NEUTRAL;
        default:
            return cardClass;
    }
}
function getRaceText(race, cardType, language) {
    if (cardType === CardType.MINION && race in RaceNames) {
        return RaceNames[race][language] || "";
    }
    return "";
}
function getRarityGem(rarity, set, type) {
    switch (rarity) {
        case Rarity.INVALID:
        case Rarity.FREE:
            return type === CardType.HERO ? Rarity.COMMON : null;
        case Rarity.COMMON:
            if (set === CardSet.CORE) {
                return null;
            }
    }
    return rarity;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var CardDef = /** @class */ (function () {
    function CardDef(props) {
        this.attack = props.attack || 0;
        this.armor = props.armor || 0;
        this.cardClass = cleanEnum(props.cardClass, CardClass);
        this.cardSet = cleanEnum(props.set, CardSet);
        this.cost = props.cost || 0;
        this.costsHealth = props.costsHealth || false;
        this.elite = props.elite || false;
        this.health = props.health || 0;
        this.hideStats = props.hideStats || false;
        this.multiClassGroup = cleanEnum(props.multiClassGroup, MultiClassGroup);
        this.name = props.name || "";
        this.race = cleanEnum(props.race, Race);
        this.rarity = cleanEnum(props.rarity, Rarity);
        this.silenced = props.silenced || false;
        this.type = cleanEnum(props.type, CardType);
        if (this.type === CardType.WEAPON && props.durability) {
            // Weapons alias health to durability
            this.health = props.durability;
        }
        else if (this.type === CardType.HERO && props.armor) {
            // Hero health gem is Armor
            this.health = props.armor;
        }
        this.collectionText = props.collectionText || "";
        this.text = props.text || "";
    }
    return CardDef;
}());

var Component = /** @class */ (function () {
    function Component(sunwell, parent) {
        this.sunwell = sunwell;
        this.parent = parent;
    }
    Component.prototype.assets = function () {
        return [];
    };
    return Component;
}());

var Gem = /** @class */ (function (_super) {
    __extends(Gem, _super);
    function Gem(sunwell, parent) {
        var _this = _super.call(this, sunwell, parent) || this;
        _this.textSize = 124;
        return _this;
    }
    Gem.prototype.assets = function () {
        return [this.gemAsset];
    };
    Gem.prototype.render = function (context, ratio) {
        var asset = this.gemAsset;
        if (asset && this.showGem) {
            var coords = this.gemCoords;
            coords.ratio = ratio;
            this.sunwell.drawImage(context, asset, coords);
        }
        if (!this.showText || !this.textCoords) {
            return;
        }
        var textCoords = this.textCoords;
        textCoords.ratio = ratio;
        var buffer = this.sunwell.getBuffer(256, 256, true);
        var bufferCtx = buffer.getContext("2d");
        var tX = 10;
        bufferCtx.font = this.textSize + "px \"" + this.sunwell.options.gemFont + "\"";
        bufferCtx.lineCap = "round";
        bufferCtx.lineJoin = "round";
        bufferCtx.textAlign = "left";
        bufferCtx.textBaseline = "hanging";
        for (var _i = 0, _a = this.text; _i < _a.length; _i++) {
            var char = _a[_i];
            bufferCtx.lineWidth = 10;
            bufferCtx.strokeStyle = "black";
            bufferCtx.fillStyle = "black";
            bufferCtx.fillText(char, tX, 10);
            bufferCtx.strokeText(char, tX, 10);
            bufferCtx.fillStyle = this.textColor;
            bufferCtx.strokeStyle = this.textColor;
            bufferCtx.lineWidth = 2.5;
            bufferCtx.fillText(char, tX, 10);
            // context.strokeText(char, x, y);
            tX += bufferCtx.measureText(char).width;
        }
        var b = contextBoundingBox(bufferCtx);
        context.drawImage(buffer, b.x, b.y, b.w, b.h, (textCoords.dx - b.w / 2) * textCoords.ratio, (textCoords.dy - b.h / 2) * textCoords.ratio, b.w * textCoords.ratio, b.h * textCoords.ratio);
        this.sunwell.freeBuffer(buffer);
    };
    return Gem;
}(Component));

var AttackGem = /** @class */ (function (_super) {
    __extends(AttackGem, _super);
    function AttackGem(sunwell, parent) {
        var _this = _super.call(this, sunwell, parent) || this;
        _this.showGem = !parent.cardDef.hideStats;
        _this.showText = !parent.cardDef.hideStats;
        _this.gemAsset = parent.getAttackGemAsset();
        _this.gemCoords = parent.getAttackGemCoords();
        _this.text = parent.cardDef.attack.toString();
        _this.textColor = parent.attackColor;
        _this.textCoords = parent.getAttackTextCoords();
        return _this;
    }
    return AttackGem;
}(Gem));

var CTRL_MANUAL_LINEBREAKS = "\x10";
var CTRL_BOLD_START = "\x11";
var CTRL_BOLD_END = "\x12";
var CTRL_ITALIC_START = "\x13";
var CTRL_ITALIC_END = "\x14";
/**
 * Finishes a text line and starts a new one.
 */
function finishLine(bufferTextCtx, bufferRow, bufferRowCtx, xPos, yPos, totalWidth) {
    var xCalc = totalWidth / 2 - xPos / 2;
    if (xCalc < 0) {
        xCalc = 0;
    }
    if (xPos > 0 && bufferRow.width > 0) {
        bufferTextCtx.drawImage(bufferRow, 0, 0, xPos > bufferRow.width ? bufferRow.width : xPos, bufferRow.height, xCalc, yPos, Math.min(xPos, bufferRow.width), bufferRow.height);
    }
    xPos = 5;
    yPos += bufferRow.height;
    bufferRowCtx.clearRect(0, 0, bufferRow.width, bufferRow.height);
    return [xPos, yPos];
}
var BodyText = /** @class */ (function (_super) {
    __extends(BodyText, _super);
    function BodyText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BodyText.prototype.render = function (context, ratio) {
        this.drawBodyText(context, ratio, false);
    };
    BodyText.prototype.parseBodyText = function (text) {
        text = text
            .replace(/\[x\]/g, CTRL_MANUAL_LINEBREAKS)
            .replace(/<b>/g, CTRL_BOLD_START)
            .replace(/<\/b>/g, CTRL_BOLD_END)
            .replace(/<i>/g, CTRL_ITALIC_START)
            .replace(/<\/i>/g, CTRL_ITALIC_END);
        var pluralRegex = /(\d+)(.+?)\|4\((.+?),(.+?)\)/g;
        var plurals;
        while ((plurals = pluralRegex.exec(text)) !== null) {
            text = text.replace(plurals[0], plurals[1] + plurals[2] + (parseInt(plurals[1], 10) === 1 ? plurals[3] : plurals[4]));
        }
        var spellDmg;
        var spellDamageRegex = /\$(\d+)/;
        while ((spellDmg = spellDamageRegex.exec(text)) !== null) {
            text = text.replace(spellDmg[0], spellDmg[1]);
        }
        var spellHeal;
        var spellHealRegex = /#(\d+)/;
        while ((spellHeal = spellHealRegex.exec(text)) !== null) {
            text = text.replace(spellHeal[0], spellHeal[1]);
        }
        return text;
    };
    BodyText.prototype.drawBodyText = function (context, ratio, forceSmallerFirstLine) {
        var _a, _b;
        var _this = this;
        var xPos = 0;
        var yPos = 0;
        var italic = 0;
        var bold = 0;
        var lineCount = 0;
        var justLineBreak;
        // size of the description text box
        var bodyWidth = this.parent.bodyTextCoords.dWidth;
        var bodyHeight = this.parent.bodyTextCoords.dHeight;
        // center of description box (x, y)
        var centerLeft = this.parent.bodyTextCoords.dx + bodyWidth / 2;
        var centerTop = this.parent.bodyTextCoords.dy + bodyHeight / 2;
        var bodyText = this.parseBodyText(this.parent.getBodyText());
        this.sunwell.log("Body text", bodyText);
        var words = [];
        var breaker = new linebreakTs.LineBreaker(bodyText);
        var last = 0;
        var bk;
        while ((bk = breaker.nextBreak())) {
            words.push(bodyText.slice(last, bk.position).replace("\n", ""));
            last = bk.position;
            if (bk.required) {
                words.push("\n");
            }
        }
        this.sunwell.log("Words", words);
        var bufferText = this.sunwell.getBuffer(bodyWidth, bodyHeight, true);
        var bufferTextCtx = bufferText.getContext("2d");
        bufferTextCtx.fillStyle = this.parent.bodyTextColor;
        var fontSize = this.sunwell.options.bodyFontSize;
        var lineHeight = this.sunwell.options.bodyLineHeight;
        var totalLength = bodyText.length;
        this.sunwell.log("Length of text is " + totalLength);
        var bufferRow = this.sunwell.getBuffer(bufferText.width, lineHeight, true);
        var bufferRowCtx = bufferRow.getContext("2d");
        bufferRowCtx.fillStyle = this.parent.bodyTextColor;
        // bufferRowCtx.textBaseline = this.sunwell.options.bodyBaseline;
        // XXX: manual breaks can be anywhere, not just at the beginning
        // cf. AT_132 locale ruRU
        var manualBreak = bodyText.indexOf(CTRL_MANUAL_LINEBREAKS) === 0;
        if (manualBreak) {
            var maxWidth_1 = 0;
            bufferRowCtx.font = this.getFontMaterial(fontSize, false, false);
            bodyText.split("\n").forEach(function (line) {
                var width = _this.getLineWidth(bufferRowCtx, fontSize, line);
                if (width > maxWidth_1) {
                    maxWidth_1 = width;
                }
            });
            if (maxWidth_1 > bufferText.width) {
                var r = bufferText.width / maxWidth_1;
                fontSize *= r;
                lineHeight *= r;
            }
        }
        else {
            if (totalLength >= 65) {
                fontSize = this.sunwell.options.bodyFontSize * 0.95;
                lineHeight = this.sunwell.options.bodyLineHeight * 0.95;
            }
            if (totalLength >= 80) {
                fontSize = this.sunwell.options.bodyFontSize * 0.9;
                lineHeight = this.sunwell.options.bodyLineHeight * 0.9;
            }
            if (totalLength >= 100) {
                fontSize = this.sunwell.options.bodyFontSize * 0.8;
                lineHeight = this.sunwell.options.bodyLineHeight * 0.8;
            }
            if (totalLength >= 120) {
                fontSize = this.sunwell.options.bodyFontSize * 0.62;
                lineHeight = this.sunwell.options.bodyLineHeight * 0.8;
            }
        }
        bufferRowCtx.font = this.getFontMaterial(fontSize, !!bold, !!italic);
        bufferRow.height = lineHeight;
        var smallerFirstLine = false;
        if (forceSmallerFirstLine ||
            (totalLength >= 75 && this.parent.cardDef.type === CardType.SPELL)) {
            smallerFirstLine = true;
        }
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            var cleanWord = word.trim().replace(/<((?!>).)*>/g, "");
            var width = bufferRowCtx.measureText(cleanWord).width;
            this.sunwell.log("Next word:", word);
            if (!manualBreak &&
                (xPos + width > bufferRow.width ||
                    (smallerFirstLine && xPos + width > bufferRow.width * 0.8)) &&
                !justLineBreak) {
                this.sunwell.log(xPos + width, ">", bufferRow.width);
                this.sunwell.log("Calculated line break");
                smallerFirstLine = false;
                justLineBreak = true;
                lineCount++;
                _a = finishLine(bufferTextCtx, bufferRow, bufferRowCtx, xPos, yPos, bufferText.width), xPos = _a[0], yPos = _a[1];
            }
            if (word === "\n") {
                this.sunwell.log("Manual line break");
                lineCount++;
                _b = finishLine(bufferTextCtx, bufferRow, bufferRowCtx, xPos, yPos, bufferText.width), xPos = _b[0], yPos = _b[1];
                justLineBreak = true;
                smallerFirstLine = false;
                continue;
            }
            justLineBreak = false;
            for (var _c = 0, _d = chars__default['default'](word); _c < _d.length; _c++) {
                var char = _d[_c];
                switch (char) {
                    case CTRL_MANUAL_LINEBREAKS:
                        // TODO: Turn on manual linebreaking
                        continue;
                    case CTRL_BOLD_START:
                        bold += 1;
                        continue;
                    case CTRL_BOLD_END:
                        bold -= 1;
                        continue;
                    case CTRL_ITALIC_START:
                        italic += 1;
                        continue;
                    case CTRL_ITALIC_END:
                        italic -= 1;
                        continue;
                }
                // TODO investigate why the following two properites are being reset, for web
                // likely something to do with getLineWidth()
                bufferRowCtx.fillStyle = this.parent.bodyTextColor;
                // move to here from pr.token block above,
                // text without markup ends up being default font otherwise
                bufferRowCtx.font = this.getFontMaterial(fontSize, !!bold, !!italic);
                bufferRowCtx.fillText(char, xPos + this.sunwell.options.bodyFontOffset.x, this.sunwell.options.bodyFontOffset.y);
                xPos += bufferRowCtx.measureText(char).width;
            }
            var em = bufferRowCtx.measureText("M").width;
            xPos += 0.275 * em;
        }
        lineCount++;
        finishLine(bufferTextCtx, bufferRow, bufferRowCtx, xPos, yPos, bufferText.width);
        this.sunwell.freeBuffer(bufferRow);
        if (this.parent.cardDef.type === CardType.SPELL && lineCount === 4) {
            if (!smallerFirstLine && !forceSmallerFirstLine) {
                this.drawBodyText(context, ratio, true);
                return;
            }
        }
        var b = contextBoundingBox(bufferTextCtx);
        b.h = Math.ceil(b.h / bufferRow.height) * bufferRow.height;
        context.drawImage(bufferText, b.x, b.y - 2, b.w, b.h, (centerLeft - b.w / 2) * ratio, (centerTop - b.h / 2) * ratio, b.w * ratio, (b.h + 2) * ratio);
        this.sunwell.freeBuffer(bufferText);
    };
    BodyText.prototype.getFontMaterial = function (size, bold, italic) {
        var font;
        var weight = bold ? "bold" : "";
        var style = italic ? "italic" : "";
        var fontSize = size + "px";
        if (this.sunwell.options.bodyLineStyle !== "") {
            fontSize = fontSize + "/" + this.sunwell.options.bodyLineStyle;
        }
        if (bold && italic) {
            font = this.sunwell.options.bodyFontBoldItalic;
        }
        else if (bold) {
            font = this.sunwell.options.bodyFontBold;
        }
        else if (italic) {
            font = this.sunwell.options.bodyFontItalic;
        }
        else {
            font = this.sunwell.options.bodyFontRegular;
        }
        return [weight, style, fontSize, "\"" + font + "\", sans-serif"].join(" ");
    };
    BodyText.prototype.getLineWidth = function (context, fontSize, line) {
        var width = 0;
        var bold = 0;
        var italic = 0;
        for (var _i = 0, _a = line.split(" "); _i < _a.length; _i++) {
            var word = _a[_i];
            for (var _b = 0, _c = chars__default['default'](word); _b < _c.length; _b++) {
                var char = _c[_b];
                switch (char) {
                    case CTRL_MANUAL_LINEBREAKS:
                        continue;
                    case CTRL_BOLD_START:
                        bold += 1;
                        context.font = this.getFontMaterial(fontSize, !!bold, !!italic);
                        continue;
                    case CTRL_BOLD_END:
                        bold -= 1;
                        context.font = this.getFontMaterial(fontSize, !!bold, !!italic);
                        continue;
                    case CTRL_ITALIC_START:
                        italic += 1;
                        context.font = this.getFontMaterial(fontSize, !!bold, !!italic);
                        continue;
                    case CTRL_ITALIC_END:
                        italic -= 1;
                        context.font = this.getFontMaterial(fontSize, !!bold, !!italic);
                        continue;
                }
                context.fillText(char, width + this.sunwell.options.bodyFontOffset.x, this.sunwell.options.bodyFontOffset.y);
                width += context.measureText(char).width;
            }
            width += 0.275 * context.measureText("M").width;
        }
        return width;
    };
    return BodyText;
}(Component));

var ReferenceWidth = 670;
var ReferenceHeight = 1000;
/**
 * Helper function to draw a polygon from a list of points.
 */
function drawPolygon(context, points, ratio) {
    if (points.length < 3) {
        return;
    }
    context.beginPath();
    // move to start point
    context.moveTo(points[0].x * ratio, points[0].y * ratio);
    // draw the lines starting at index 1
    points.slice(1).forEach(function (pt) {
        context.lineTo(pt.x * ratio, pt.y * ratio);
    });
    context.closePath();
    context.stroke();
}
var CardArt = /** @class */ (function (_super) {
    __extends(CardArt, _super);
    function CardArt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardArt.prototype.render = function (context, ratio) {
        var coords = this.parent.artCoords;
        var texture = this.parent.getCardArtTexture();
        context.save();
        drawPolygon(context, this.parent.artClipPolygon, ratio);
        context.clip();
        context.fillStyle = "grey";
        context.fillRect(0, 0, ReferenceWidth * ratio, ReferenceHeight * ratio);
        context.drawImage(texture, 0, 0, texture.width, texture.height, coords.dx * ratio, coords.dy * ratio, coords.dWidth * ratio, coords.dHeight * ratio);
        context.restore();
    };
    return CardArt;
}(Component));

var CardFrame = /** @class */ (function (_super) {
    __extends(CardFrame, _super);
    function CardFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFrame.prototype.assets = function () {
        return [this.parent.getCardFrameAsset()];
    };
    CardFrame.prototype.render = function (context, ratio) {
        var coords = this.parent.baseCardFrameCoords;
        coords.ratio = ratio;
        this.sunwell.drawImage(context, this.parent.getCardFrameAsset(), coords);
    };
    return CardFrame;
}(Component));

var CostGem = /** @class */ (function (_super) {
    __extends(CostGem, _super);
    function CostGem(sunwell, parent) {
        var _this = _super.call(this, sunwell, parent) || this;
        _this.showGem = true;
        _this.showText = !parent.cardDef.hideStats;
        _this.gemAsset = parent.getCostGemAsset();
        _this.gemCoords = parent.getCostGemCoords();
        _this.text = parent.cardDef.cost.toString();
        _this.textColor = parent.costColor;
        _this.textCoords = parent.getCostTextCoords();
        _this.textSize = 130;
        return _this;
    }
    return CostGem;
}(Gem));

var EliteDragon = /** @class */ (function (_super) {
    __extends(EliteDragon, _super);
    function EliteDragon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EliteDragon.prototype.assets = function () {
        return [this.parent.getEliteDragonAsset()];
    };
    EliteDragon.prototype.render = function (context, ratio) {
        var asset = this.parent.getEliteDragonAsset();
        if (!asset) {
            return;
        }
        var coords = this.parent.eliteDragonCoords;
        coords.ratio = ratio;
        this.sunwell.drawImage(context, asset, coords);
    };
    return EliteDragon;
}(Component));

var HealthGem = /** @class */ (function (_super) {
    __extends(HealthGem, _super);
    function HealthGem(sunwell, parent) {
        var _this = _super.call(this, sunwell, parent) || this;
        _this.showGem = !parent.cardDef.hideStats;
        _this.showText = !parent.cardDef.hideStats;
        _this.gemAsset = parent.getHealthGemAsset();
        _this.gemCoords = parent.getHealthGemCoords();
        _this.text = parent.cardDef.health.toString();
        _this.textColor = parent.healthColor;
        _this.textCoords = parent.getHealthTextCoords();
        return _this;
    }
    return HealthGem;
}(Gem));

var MultiClassBanner = /** @class */ (function (_super) {
    __extends(MultiClassBanner, _super);
    function MultiClassBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiClassBanner.prototype.assets = function () {
        return [this.parent.getMultiClassBannerAsset()];
    };
    MultiClassBanner.prototype.render = function (context, ratio) {
        var asset = this.parent.getMultiClassBannerAsset();
        if (!asset) {
            return;
        }
        var coords = {
            dx: 50,
            dy: 119,
            ratio: ratio,
        };
        this.sunwell.drawImage(context, asset, coords);
    };
    return MultiClassBanner;
}(Component));

function getCharDimensions(text, textContext) {
    var dim = [];
    var em = textContext.measureText("M").width;
    for (var _i = 0, _a = chars__default['default'](text); _i < _a.length; _i++) {
        var char = _a[_i];
        textContext.save();
        var scale = { x: 1, y: 1 };
        var charWidth = textContext.measureText(char).width + 0.1 * em;
        switch (char) {
            case " ":
                charWidth = 0.2 * em;
                break;
            case "'": // see "Death's Bite"
                charWidth = 0.27 * em;
                scale.x = 0.5;
                scale.y = 1;
                break;
        }
        dim.push({
            scale: scale,
            width: charWidth,
        });
        textContext.restore();
    }
    return dim;
}
var NameBanner = /** @class */ (function (_super) {
    __extends(NameBanner, _super);
    function NameBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NameBanner.prototype.assets = function () {
        return [this.parent.nameBannerAsset];
    };
    NameBanner.prototype.render = function (context, ratio) {
        if (this.parent.nameBannerAsset) {
            var coords = this.parent.nameBannerCoords;
            coords.ratio = ratio;
            this.sunwell.drawImage(context, this.parent.nameBannerAsset, coords);
        }
        this.renderName(context, ratio, this.parent.cardDef.name);
    };
    NameBanner.prototype.renderName = function (context, ratio, name) {
        // define a box to contain the curved text
        var boxDims = { width: 460, height: 160 };
        var boxBottomCenter = { x: 335, y: 612 };
        // create a new buffer to draw onto
        var buffer = this.sunwell.getBuffer(boxDims.width * 2, boxDims.height, true);
        var textContext = buffer.getContext("2d");
        var maxWidth = this.parent.nameTextCurve.maxWidth;
        var curve = this.parent.nameTextCurve.curve;
        textContext.save();
        textContext.lineCap = "round";
        textContext.lineJoin = "round";
        textContext.lineWidth = 10;
        textContext.strokeStyle = "black";
        textContext.textAlign = "left";
        textContext.textBaseline = "middle";
        var fontSize = 45;
        var dimensions = [];
        do {
            fontSize -= 1;
            textContext.font = fontSize + "px \"" + this.sunwell.options.titleFont + "\"";
        } while ((dimensions = getCharDimensions(name, textContext)).reduce(function (a, b) { return a + b.width; }, 0) >
            maxWidth &&
            fontSize > 10);
        var textWidth = dimensions.reduce(function (a, b) { return a + b.width; }, 0) / maxWidth;
        var begin = this.parent.nameTextCurve.pathMiddle - textWidth / 2;
        var nameChars = chars__default['default'](name);
        var steps = textWidth / nameChars.length;
        // draw text
        var p;
        var t;
        var leftPos = 0;
        for (var i = 0; i < nameChars.length; i++) {
            var char = nameChars[i].trim();
            var dimension = dimensions[i];
            if (leftPos === 0) {
                t = begin + steps * i;
                p = getPointOnCurve(curve, t);
                leftPos = p.x;
            }
            else {
                t += 0.01;
                p = getPointOnCurve(curve, t);
                while (p.x < leftPos) {
                    t += 0.001;
                    p = getPointOnCurve(curve, t);
                }
            }
            if (char.length) {
                textContext.save();
                textContext.translate(p.x, p.y);
                if (dimension.scale.x) {
                    textContext.scale(dimension.scale.x, dimension.scale.y);
                }
                // textContext.setTransform(1.2, p.r, 0, 1, p.x, p.y);
                textContext.rotate(p.r);
                // shadow
                textContext.lineWidth = 9 * (fontSize / 50);
                textContext.strokeStyle = "black";
                textContext.fillStyle = "black";
                textContext.fillText(char, 0, 0);
                textContext.strokeText(char, 0, 0);
                // text
                textContext.fillStyle = "white";
                textContext.strokeStyle = "white";
                textContext.lineWidth = 2.5 * (fontSize / 50);
                textContext.fillText(char, 0, 0);
                textContext.restore();
            }
            leftPos += dimension.width;
        }
        var coords = {
            sx: 0,
            sy: 0,
            sWidth: boxDims.width,
            sHeight: boxDims.height,
            dx: (boxBottomCenter.x - boxDims.width / 2) * ratio,
            dy: (boxBottomCenter.y - boxDims.height) * ratio,
            dWidth: boxDims.width * ratio,
            dHeight: boxDims.height * ratio,
        };
        context.drawImage(buffer, coords.sx, coords.sy, coords.sWidth, coords.sHeight, coords.dx, coords.dy, coords.dWidth, coords.dHeight);
        this.sunwell.freeBuffer(buffer);
    };
    return NameBanner;
}(Component));

var RaceBanner = /** @class */ (function (_super) {
    __extends(RaceBanner, _super);
    function RaceBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaceBanner.prototype.assets = function () {
        return [this.parent.raceBannerAsset];
    };
    RaceBanner.prototype.render = function (context, ratio) {
        if (!this.parent.raceBannerAsset || !this.parent.raceText) {
            return;
        }
        var coords = this.parent.raceBannerCoords;
        coords.ratio = ratio;
        var text = this.parent.raceText;
        // Draw the banner
        this.sunwell.drawImage(context, this.parent.raceBannerAsset, coords);
        // Draw the text
        var buffer = this.sunwell.getBuffer(300, 60, true);
        var bufferCtx = buffer.getContext("2d");
        var x = 10;
        var textSize = 40;
        bufferCtx.font = textSize + "px \"" + this.sunwell.options.titleFont + "\"";
        bufferCtx.lineCap = "round";
        bufferCtx.lineJoin = "round";
        bufferCtx.textBaseline = "hanging";
        bufferCtx.textAlign = "left";
        var xWidth = bufferCtx.measureText("x").width;
        for (var _i = 0, _a = chars__default['default'](text); _i < _a.length; _i++) {
            var char = _a[_i];
            bufferCtx.lineWidth = 7;
            bufferCtx.strokeStyle = "black";
            bufferCtx.fillStyle = "black";
            bufferCtx.fillText(char, x, 10);
            bufferCtx.strokeText(char, x, 10);
            bufferCtx.fillStyle = "white";
            bufferCtx.strokeStyle = "white";
            bufferCtx.lineWidth = 1;
            bufferCtx.fillText(char, x, 10);
            // context.strokeText(char, x, y);
            x += bufferCtx.measureText(char).width;
            x += xWidth * 0.1;
        }
        var b = contextBoundingBox(bufferCtx);
        var textCoords = this.parent.raceTextCoords;
        context.drawImage(buffer, b.x, b.y, b.w, b.h, (textCoords.dx - b.w / 2) * ratio, (textCoords.dy - b.h / 2) * ratio, b.w * ratio, b.h * ratio);
        this.sunwell.freeBuffer(buffer);
    };
    return RaceBanner;
}(Component));

var RarityGem = /** @class */ (function (_super) {
    __extends(RarityGem, _super);
    function RarityGem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RarityGem.prototype.assets = function () {
        return [this.parent.getRarityGemAsset()];
    };
    RarityGem.prototype.render = function (context, ratio) {
        var asset = this.parent.getRarityGemAsset();
        if (!asset) {
            return;
        }
        var coords = this.parent.rarityGemCoords;
        coords.ratio = ratio;
        this.sunwell.drawImage(context, asset, coords);
    };
    return RarityGem;
}(Component));

var Watermark = /** @class */ (function (_super) {
    __extends(Watermark, _super);
    function Watermark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Watermark.prototype.assets = function () {
        return [this.parent.getWatermarkAsset()];
    };
    Watermark.prototype.render = function (context, ratio) {
        var asset = this.parent.getWatermarkAsset();
        if (!asset) {
            return;
        }
        if (this.parent.premium ||
            this.parent.cardDef.type === CardType.MINION ||
            this.parent.cardDef.type === CardType.HERO) {
            context.globalCompositeOperation = "multiply";
            context.globalAlpha = 0.6;
        }
        else if (this.parent.cardDef.type === CardType.SPELL) {
            context.globalCompositeOperation = "multiply";
            context.globalAlpha = 0.7;
        }
        else if (this.parent.cardDef.type === CardType.WEAPON) {
            context.globalCompositeOperation = "lighten";
            context.globalAlpha = 0.1;
        }
        var coords = this.parent.getWatermarkCoords();
        coords.ratio = ratio;
        this.sunwell.drawImage(context, asset, coords);
        // Reset context
        context.globalCompositeOperation = "source-over";
        context.globalAlpha = 1;
    };
    return Watermark;
}(Component));

var ReferenceWidth$1 = 670;
var Card = /** @class */ (function () {
    function Card(sunwell, props) {
        this.eliteDragonAsset = "";
        this.eliteDragonCoords = null;
        this.raceBannerAsset = "";
        this.raceTextCoords = { dx: 337, dy: 829 };
        this.raceBannerCoords = {
            dx: 129,
            dy: 791,
            dWidth: 408,
            dHeight: 69,
            sWidth: 408,
            sHeight: 69,
        };
        this.sunwell = sunwell;
        if (!props) {
            throw new Error("No card properties given");
        }
        this.cardDef = new CardDef(props);
        this.language = props.language || "enUS";
        // Sets the player or opponent HeroPower texture
        this.opposing = props.opposing || false;
        this.raceText = getRaceText(this.cardDef.race, this.cardDef.type, this.language);
        this.costColor = getNumberStyle(props.costStyle);
        this.attackColor = getNumberStyle(props.costStyle);
        this.healthColor = getNumberStyle(props.healthStyle);
        this.texture = props.texture;
        this.propsJson = JSON.stringify(props);
        this.attackGem = new AttackGem(sunwell, this);
        this.bodyText = new BodyText(sunwell, this);
        this.cardArt = new CardArt(sunwell, this);
        this.cardFrame = new CardFrame(sunwell, this);
        this.costGem = new CostGem(sunwell, this);
        this.eliteDragon = new EliteDragon(sunwell, this);
        this.healthGem = new HealthGem(sunwell, this);
        this.multiClassBanner = new MultiClassBanner(sunwell, this);
        this.nameBanner = new NameBanner(sunwell, this);
        this.raceBanner = new RaceBanner(sunwell, this);
        this.rarityGem = new RarityGem(sunwell, this);
        this.watermark = new Watermark(sunwell, this);
    }
    Card.prototype.getAttackGemAsset = function () {
        return "";
    };
    Card.prototype.getAttackGemCoords = function () {
        return null;
    };
    Card.prototype.getAttackTextCoords = function () {
        return null;
    };
    Card.prototype.getCostGemCoords = function () {
        if (this.cardDef.costsHealth) {
            return { dx: 43, dy: 58 };
        }
        else {
            return { dx: 47, dy: 105 };
        }
    };
    Card.prototype.getCostTextCoords = function () {
        return { dx: 115, dy: 174 };
    };
    Card.prototype.getCostGemAsset = function () {
        if (this.cardDef.costsHealth) {
            return "cost-health";
        }
        else {
            return "cost-mana";
        }
    };
    Card.prototype.getHealthGemAsset = function () {
        return "";
    };
    Card.prototype.getHealthGemCoords = function () {
        return null;
    };
    Card.prototype.getHealthTextCoords = function () {
        return null;
    };
    Card.prototype.initRender = function (width, target, callback) {
        this.width = width;
        this.target = target;
        this.callback = callback;
        this.cacheKey = this.checksum();
        this.key = this.cacheKey;
    };
    Card.prototype.getAssetsToLoad = function () {
        var assetsToCheck = [this.cardFoundationAsset];
        var assetsToLoad = [];
        for (var _i = 0, assetsToCheck_1 = assetsToCheck; _i < assetsToCheck_1.length; _i++) {
            var asset = assetsToCheck_1[_i];
            if (asset) {
                assetsToLoad.push(asset);
            }
        }
        assetsToLoad.push.apply(assetsToLoad, this.attackGem.assets());
        assetsToLoad.push.apply(assetsToLoad, this.nameBanner.assets());
        assetsToLoad.push.apply(assetsToLoad, this.cardFrame.assets());
        assetsToLoad.push.apply(assetsToLoad, this.costGem.assets());
        assetsToLoad.push.apply(assetsToLoad, this.eliteDragon.assets());
        assetsToLoad.push.apply(assetsToLoad, this.healthGem.assets());
        assetsToLoad.push.apply(assetsToLoad, this.multiClassBanner.assets());
        assetsToLoad.push.apply(assetsToLoad, this.raceBanner.assets());
        assetsToLoad.push.apply(assetsToLoad, this.rarityGem.assets());
        assetsToLoad.push.apply(assetsToLoad, this.watermark.assets());
        assetsToLoad.push.apply(assetsToLoad, this.eliteDragon.assets());
        if (this.cardDef.silenced) {
            assetsToLoad.push("silence-x");
        }
        return assetsToLoad;
    };
    Card.prototype.getCardArtTexture = function () {
        if (!this.texture) {
            this.sunwell.log("No card texture specified. Creating empty texture.");
            return this.sunwell.getBuffer(1024, 1024);
        }
        else if (this.texture instanceof this.sunwell.platform.Image) {
            return this.texture;
        }
        else if (typeof this.texture === "string") {
            return this.sunwell.assets[this.texture];
        }
        else {
            var t = this.sunwell.getBuffer(this.texture.crop.w, this.texture.crop.h);
            var tCtx = t.getContext("2d");
            tCtx.drawImage(this.texture.image, this.texture.crop.x, this.texture.crop.y, this.texture.crop.w, this.texture.crop.h, 0, 0, t.width, t.height);
            return t;
        }
    };
    Card.prototype.draw = function (canvas, context) {
        var _this = this;
        var ratio = this.width / ReferenceWidth$1;
        var drawTimeout = setTimeout(function () {
            _this.sunwell.error("Drawing timed out", _this.cardDef.name);
        }, this.sunwell.options.drawTimeout);
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        // >>>>> Begin Skeleton drawing
        if (this.sunwell.renderCache[this.cacheKey]) {
            this.sunwell.log("Skipping skeleton draw");
            context.drawImage(this.sunwell.renderCache[this.cacheKey], 0, 0);
        }
        else {
            if (this.cardFoundationAsset) {
                this.drawCardFoundationAsset(context, ratio);
            }
            this.cardArt.render(context, ratio);
            this.cardFrame.render(context, ratio);
            this.rarityGem.render(context, ratio);
            this.eliteDragon.render(context, ratio);
            this.nameBanner.render(context, ratio);
            this.raceBanner.render(context, ratio);
            this.attackGem.render(context, ratio);
            this.multiClassBanner.render(context, ratio);
            this.costGem.render(context, ratio);
            this.healthGem.render(context, ratio);
            this.watermark.render(context, ratio);
            if (this.sunwell.options.cacheSkeleton) {
                var cacheImage = new this.sunwell.platform.Image();
                cacheImage.src = canvas.toDataURL();
                this.sunwell.renderCache[this.cacheKey] = cacheImage;
            }
        }
        this.bodyText.render(context, ratio);
        if (this.cardDef.silenced) {
            this.sunwell.drawImage(context, "silence-x", { dx: 166, dy: 584, ratio: ratio });
        }
        context.restore();
        clearTimeout(drawTimeout);
        if (this.callback) {
            this.callback(canvas);
        }
        if (this.target) {
            this.target.src = canvas.toDataURL();
        }
    };
    Card.prototype.getBodyText = function () {
        return this.cardDef.collectionText || this.cardDef.text;
    };
    Card.prototype.drawCardFoundationAsset = function (context, ratio) {
        var coords = this.cardFoundationCoords;
        coords.ratio = ratio;
        this.sunwell.drawImage(context, this.cardFoundationAsset, coords);
    };
    Card.prototype.getCardFrameAsset = function () {
        var cardClass = getCardFrameClass(this.cardDef.cardClass);
        return this.baseCardFrameAsset + CardClass[cardClass].toLowerCase();
    };
    Card.prototype.getEliteDragonAsset = function () {
        if (this.cardDef.elite) {
            return this.eliteDragonAsset;
        }
        else {
            return "";
        }
    };
    Card.prototype.getMultiClassBannerAsset = function () {
        if (this.cardDef.multiClassGroup) {
            return "multi-" + MultiClassGroup[this.cardDef.multiClassGroup].toLowerCase();
        }
        else {
            return "";
        }
    };
    Card.prototype.getRarityGemAsset = function () {
        var rarity = getRarityGem(this.cardDef.rarity, this.cardDef.cardSet, this.cardDef.type);
        if (rarity) {
            return this.baseRarityGemAsset + Rarity[rarity].toLowerCase();
        }
        return "";
    };
    Card.prototype.getWatermarkAsset = function () {
        switch (this.cardDef.cardSet) {
            case CardSet.EXPERT1:
            case CardSet.NAXX:
            case CardSet.GVG:
            case CardSet.BRM:
            case CardSet.TGT:
            case CardSet.LOE:
            case CardSet.OG:
            case CardSet.KARA:
            case CardSet.GANGS:
            case CardSet.UNGORO:
            case CardSet.ICECROWN:
            case CardSet.HOF:
            case CardSet.LOOTAPALOOZA:
            case CardSet.GILNEAS:
            case CardSet.BOOMSDAY:
            case CardSet.TROLL:
            case CardSet.DALARAN:
                return "set-" + CardSet[this.cardDef.cardSet].toLowerCase();
            default:
                return "";
        }
    };
    Card.prototype.checksum = function () {
        var s = this.propsJson + this.width + this.premium;
        var length = s.length;
        var chk = 0;
        for (var i = 0; i < length; i++) {
            var char = s.charCodeAt(i);
            chk = (chk << 5) - chk + char;
            chk |= 0;
        }
        return chk;
    };
    return Card;
}());

var HeroCard = /** @class */ (function (_super) {
    __extends(HeroCard, _super);
    function HeroCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = false;
        _this.bodyTextColor = "black";
        _this.bodyTextCoords = {
            dx: 143,
            dy: 627,
            dWidth: 376,
            dHeight: 168,
            sWidth: 376,
            sHeight: 168,
        };
        _this.cardFoundationAsset = null;
        _this.cardFoundationCoords = null;
        _this.baseCardFrameAsset = "frame-hero-";
        _this.baseCardFrameCoords = {
            sWidth: 527,
            sHeight: 795,
            dx: 70,
            dy: 87,
            dWidth: 527,
            dHeight: 795,
        };
        _this.baseRarityGemAsset = "rarity-";
        _this.eliteDragonAsset = "elite-hero";
        _this.eliteDragonCoords = {
            dx: 172,
            dy: 40,
            dWidth: 444,
            dHeight: 298,
            sWidth: 444,
            sHeight: 298,
        };
        _this.nameBannerAsset = "name-banner-hero";
        _this.nameBannerCoords = {
            sWidth: 490,
            sHeight: 122,
            dx: 91,
            dy: 458,
            dWidth: 490,
            dHeight: 122,
        };
        _this.nameTextCurve = {
            pathMiddle: 0.5,
            maxWidth: 420,
            curve: [{ x: 24, y: 98 }, { x: 170, y: 36 }, { x: 294, y: 36 }, { x: 438, y: 96 }],
        };
        _this.rarityGemCoords = { dx: 311, dy: 529 };
        _this.artCoords = {
            sWidth: 346,
            sHeight: 346,
            dx: 161,
            dy: 137,
            dWidth: 346,
            dHeight: 346,
        };
        _this.artClipPolygon = [
            { x: 334, y: 134 },
            { x: 369, y: 143 },
            { x: 406, y: 164 },
            { x: 435, y: 187 },
            { x: 453, y: 213 },
            { x: 469, y: 245 },
            { x: 479, y: 270 },
            { x: 481, y: 290 },
            { x: 483, y: 332 },
            { x: 483, y: 380 },
            { x: 483, y: 438 },
            { x: 484, y: 485 },
            { x: 435, y: 473 },
            { x: 389, y: 467 },
            { x: 346, y: 465 },
            { x: 297, y: 466 },
            { x: 240, y: 473 },
            { x: 185, y: 486 },
            { x: 184, y: 445 },
            { x: 182, y: 357 },
            { x: 184, y: 302 },
            { x: 188, y: 271 },
            { x: 198, y: 240 },
            { x: 210, y: 217 },
            { x: 222, y: 198 },
            { x: 239, y: 178 },
            { x: 262, y: 160 },
            { x: 291, y: 145 },
        ];
        return _this;
    }
    HeroCard.prototype.getHealthGemAsset = function () {
        return this.cardDef.armor ? "armor" : "health";
    };
    HeroCard.prototype.getHealthGemCoords = function () {
        if (this.cardDef.armor) {
            return {
                sWidth: 115,
                sHeight: 135,
                dx: 498,
                dy: 752,
                dWidth: 115,
                dHeight: 135,
            };
        }
        else {
            return {
                sWidth: 109,
                sHeight: 164,
                dx: 504,
                dy: 728,
                dWidth: 109,
                dHeight: 164,
            };
        }
    };
    HeroCard.prototype.getHealthTextCoords = function () {
        if (this.cardDef.armor) {
            return { dx: 554, dy: 822 };
        }
        else {
            return { dx: 556, dy: 825 };
        }
    };
    HeroCard.prototype.getWatermarkCoords = function () {
        return {
            dx: 247,
            dy: 625,
            dWidth: 170,
            dHeight: 170,
        };
    };
    return HeroCard;
}(Card));

var HeroCardPremium = /** @class */ (function (_super) {
    __extends(HeroCardPremium, _super);
    function HeroCardPremium() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = true;
        _this.bodyTextColor = "white";
        _this.bodyTextCoords = {
            dx: 140,
            dy: 627,
            dWidth: 376,
            dHeight: 168,
            sWidth: 376,
            sHeight: 168,
        };
        _this.cardFoundationAsset = "base-hero-premium";
        _this.cardFoundationCoords = {
            dx: 66,
            dy: 84,
            dWidth: 527,
            dHeight: 799,
            sWidth: 527,
            sHeight: 799,
        };
        _this.baseCardFrameAsset = "frame-hero-premium-";
        _this.baseCardFrameCoords = {
            dx: 220,
            dy: 838,
            dWidth: 223,
            dHeight: 45,
            sWidth: 223,
            sHeight: 45,
        };
        _this.eliteDragonAsset = "elite-hero-premium";
        _this.nameBannerAsset = "name-banner-hero-premium";
        _this.nameBannerCoords = {
            dx: 87,
            dy: 456,
            dWidth: 490,
            dHeight: 122,
            sWidth: 490,
            sHeight: 122,
        };
        _this.rarityGemCoords = { dx: 307, dy: 528 };
        return _this;
    }
    return HeroCardPremium;
}(HeroCard));

var HeroPowerCard = /** @class */ (function (_super) {
    __extends(HeroPowerCard, _super);
    function HeroPowerCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = false;
        _this.bodyTextColor = "black";
        _this.bodyTextCoords = {
            dx: 144,
            dy: 606,
            dWidth: 380,
            dHeight: 174,
            sWidth: 380,
            sHeight: 174,
        };
        _this.cardFoundationAsset = null;
        _this.cardFoundationCoords = null;
        _this.baseCardFrameAsset = "hero-power-";
        _this.baseCardFrameCoords = {
            sWidth: 564,
            sHeight: 841,
            dx: 56,
            dy: 65,
            dWidth: 564,
            dHeight: 841,
        };
        _this.baseRarityGemAsset = null;
        _this.nameBannerAsset = null;
        _this.nameBannerCoords = null;
        _this.rarityGemCoords = null;
        _this.nameTextCurve = {
            pathMiddle: 0.54,
            maxWidth: 440,
            curve: [{ x: 10, y: 37 }, { x: 110, y: 37 }, { x: 350, y: 37 }, { x: 450, y: 37 }],
        };
        _this.artCoords = {
            sWidth: 261,
            sHeight: 261,
            dx: 208,
            dy: 163,
            dWidth: 261,
            dHeight: 261,
        };
        _this.artClipPolygon = [
            { x: 344, y: 161 },
            { x: 264, y: 173 },
            { x: 204, y: 257 },
            { x: 207, y: 331 },
            { x: 234, y: 394 },
            { x: 333, y: 431 },
            { x: 424, y: 407 },
            { x: 465, y: 355 },
            { x: 471, y: 261 },
            { x: 427, y: 187 },
        ];
        return _this;
    }
    HeroPowerCard.prototype.getWatermarkCoords = function () {
        return {
            dx: 0,
            dy: 0,
            dWidth: 0,
            dHeight: 0,
        };
    };
    HeroPowerCard.prototype.getCardFrameAsset = function () {
        return this.baseCardFrameAsset + (this.opposing ? "opponent" : "player");
    };
    HeroPowerCard.prototype.getCostGemAsset = function () {
        return "";
    };
    HeroPowerCard.prototype.getCostTextCoords = function () {
        return { dx: 338, dy: 124 };
    };
    HeroPowerCard.prototype.getRarityGemAsset = function () {
        return "";
    };
    HeroPowerCard.prototype.getWatermarkAsset = function () {
        return "";
    };
    return HeroPowerCard;
}(Card));

var HeroPowerCardPremium = /** @class */ (function (_super) {
    __extends(HeroPowerCardPremium, _super);
    function HeroPowerCardPremium() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = true;
        _this.baseCardFrameAsset = "hero-power-premium-";
        _this.baseCardFrameCoords = {
            dx: 56,
            dy: 60,
            dWidth: 564,
            dHeight: 850,
            sWidth: 564,
            sHeight: 850,
        };
        _this.costTextCoords = { dx: 338, dy: 130 };
        return _this;
    }
    return HeroPowerCardPremium;
}(HeroPowerCard));

var MinionCard = /** @class */ (function (_super) {
    __extends(MinionCard, _super);
    function MinionCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = false;
        _this.bodyTextColor = "black";
        _this.bodyTextCoords = {
            dx: 130,
            dy: 622,
            dWidth: 408,
            dHeight: 176,
            sWidth: 408,
            sHeight: 176,
        };
        _this.cardFoundationAsset = null;
        _this.cardFoundationCoords = null;
        _this.baseCardFrameAsset = "frame-minion-";
        _this.baseCardFrameCoords = {
            sWidth: 528,
            sHeight: 793,
            dx: 70,
            dy: 89,
            dWidth: 528,
            dHeight: 793,
        };
        _this.baseRarityGemAsset = "rarity-minion-";
        _this.eliteDragonAsset = "elite-minion";
        _this.eliteDragonCoords = {
            dx: 188,
            dy: 52,
            dWidth: 436,
            dHeight: 325,
            sWidth: 436,
            sHeight: 325,
        };
        _this.nameBannerAsset = "name-banner-minion";
        _this.raceBannerAsset = "race-banner";
        _this.rarityGemCoords = { dx: 263, dy: 532 };
        _this.nameBannerCoords = {
            sWidth: 485,
            sHeight: 113,
            dx: 96,
            dy: 469,
            dWidth: 485,
            dHeight: 113,
        };
        _this.nameTextCurve = {
            pathMiddle: 0.55,
            maxWidth: 450,
            curve: [{ x: 0, y: 88 }, { x: 98, y: 112 }, { x: 294, y: 13 }, { x: 460, y: 80 }],
        };
        _this.artCoords = {
            sWidth: 461,
            sHeight: 461,
            dx: 105,
            dy: 100,
            dWidth: 461,
            dHeight: 461,
        };
        _this.artClipPolygon = [
            { x: 335, y: 102 },
            { x: 292, y: 110 },
            { x: 256, y: 131 },
            { x: 222, y: 163 },
            { x: 195, y: 203 },
            { x: 171, y: 273 },
            { x: 163, y: 330 },
            { x: 170, y: 398 },
            { x: 200, y: 474 },
            { x: 266, y: 547 },
            { x: 302, y: 563 },
            { x: 343, y: 567 },
            { x: 406, y: 544 },
            { x: 449, y: 506 },
            { x: 488, y: 432 },
            { x: 505, y: 346 },
            { x: 494, y: 255 },
            { x: 460, y: 172 },
            { x: 425, y: 135 },
            { x: 385, y: 111 },
        ];
        return _this;
    }
    MinionCard.prototype.getAttackGemCoords = function () {
        return {
            sWidth: 154,
            sHeight: 173,
            dx: 36,
            dy: 721,
            dWidth: 154,
            dHeight: 173,
        };
    };
    MinionCard.prototype.getAttackTextCoords = function () {
        return { dx: 125, dy: 824 };
    };
    MinionCard.prototype.getHealthGemCoords = function () {
        return {
            sWidth: 109,
            sHeight: 164,
            dx: 504,
            dy: 728,
            dWidth: 109,
            dHeight: 164,
        };
    };
    MinionCard.prototype.getHealthTextCoords = function () {
        return { dx: 556, dy: 825 };
    };
    MinionCard.prototype.getAttackGemAsset = function () {
        return "attack-minion";
    };
    MinionCard.prototype.getHealthGemAsset = function () {
        return "health";
    };
    MinionCard.prototype.getWatermarkCoords = function () {
        var dy = 604;
        if (this.raceBanner) {
            dy -= 10; // Shift up
        }
        return {
            dx: 231,
            dy: dy,
            dWidth: 225,
            dHeight: 225,
        };
    };
    return MinionCard;
}(Card));

var MinionCardPremium = /** @class */ (function (_super) {
    __extends(MinionCardPremium, _super);
    function MinionCardPremium() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = true;
        _this.bodyTextColor = "white";
        _this.cardFoundationAsset = "base-minion-premium";
        _this.cardFoundationCoords = {
            dx: 66,
            dy: 64,
            dwidth: 528,
            dheight: 818,
            swidth: 528,
            sheight: 818,
        };
        _this.baseCardFrameAsset = "frame-minion-premium-";
        _this.baseCardFrameCoords = {
            dx: 223,
            dy: 553,
            sWidth: 231,
            sHeight: 329,
            dWidth: 231,
            dHeight: 329,
        };
        _this.baseRarityGemAsset = "rarity-minion-premium-";
        _this.eliteDragonAsset = "elite-minion-premium";
        _this.eliteDragonCoords = {
            dx: 172,
            dy: 17,
            sWidth: 485,
            sHeight: 341,
            dWidth: 485,
            dHeight: 341,
        };
        _this.rarityGemCoords = { dx: 245, dy: 528 };
        _this.nameBannerAsset = "name-banner-minion-premium";
        _this.attackGemAsset = "attack-minion-premium";
        _this.healthGemAsset = "health-premium";
        _this.raceBannerAsset = "race-banner-premium";
        _this.raceBannerCoords = {
            dx: 139,
            dy: 779,
            dWidth: 408,
            dHeight: 81,
            sWidth: 408,
            sHeight: 81,
        };
        _this.raceTextCoords = { dx: 347, dy: 826 };
        return _this;
    }
    return MinionCardPremium;
}(MinionCard));

var SpellCard = /** @class */ (function (_super) {
    __extends(SpellCard, _super);
    function SpellCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = false;
        _this.bodyTextColor = "black";
        _this.bodyTextCoords = {
            dx: 144,
            dy: 630,
            dWidth: 378,
            dHeight: 168,
            sWidth: 378,
            sHeight: 168,
        };
        _this.cardFoundationAsset = null;
        _this.cardFoundationCoords = null;
        _this.baseCardFrameAsset = "frame-spell-";
        _this.baseCardFrameCoords = {
            dx: 70,
            dy: 133,
            dWidth: 527,
            dHeight: 746,
        };
        _this.baseRarityGemAsset = "rarity-spell-";
        _this.eliteDragonAsset = "elite-spell";
        _this.eliteDragonCoords = {
            sWidth: 476,
            sHeight: 259,
            dx: 185,
            dy: 91,
            dWidth: 476,
            dHeight: 259,
        };
        _this.nameBannerAsset = "name-banner-spell";
        _this.nameBannerCoords = {
            sWidth: 507,
            sHeight: 155,
            dx: 80,
            dy: 457,
            dWidth: 507,
            dHeight: 155,
        };
        _this.rarityGemCoords = {
            sWidth: 116,
            sHeight: 77,
            dx: 272,
            dy: 541,
            dWidth: 116,
            dHeight: 77,
        };
        _this.nameTextCurve = {
            pathMiddle: 0.49,
            maxWidth: 450,
            curve: [{ x: 10, y: 78 }, { x: 170, y: 36 }, { x: 294, y: 36 }, { x: 450, y: 80 }],
        };
        _this.artCoords = {
            sWidth: 418,
            sHeight: 418,
            dx: 123,
            dy: 138,
            dWidth: 418,
            dHeight: 418,
        };
        _this.artClipPolygon = [
            { x: 338, y: 171 },
            { x: 425, y: 179 },
            { x: 544, y: 213 },
            { x: 551, y: 474 },
            { x: 439, y: 511 },
            { x: 327, y: 519 },
            { x: 202, y: 505 },
            { x: 118, y: 474 },
            { x: 116, y: 213 },
            { x: 236, y: 176 },
        ];
        return _this;
    }
    SpellCard.prototype.getWatermarkCoords = function () {
        return {
            dx: 232,
            dy: 612,
            dWidth: 210,
            dHeight: 210,
        };
    };
    return SpellCard;
}(Card));

var SpellCardPremium = /** @class */ (function (_super) {
    __extends(SpellCardPremium, _super);
    function SpellCardPremium() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = true;
        _this.bodyTextColor = "white";
        _this.bodyTextCoords = {
            dx: 152,
            dy: 634,
            dWidth: 366,
            dHeight: 168,
            sWidth: 366,
            sHeight: 168,
        };
        _this.cardFoundationAsset = "base-spell-premium";
        _this.cardFoundationCoords = {
            dx: 52,
            dy: 125,
            dwidth: 580,
            dheight: 755,
            swidth: 580,
            sheight: 755,
        };
        _this.baseCardFrameAsset = "frame-spell-premium-";
        _this.baseCardFrameCoords = {
            dx: 220,
            dy: 126,
            sWidth: 226,
            sHeight: 754,
            dWidth: 226,
            dHeight: 754,
        };
        _this.baseRarityGemAsset = "rarity-spell-premium-";
        _this.eliteDragonAsset = "elite-spell-premium";
        _this.eliteDragonCoords = {
            dx: 185,
            dy: 91,
            dWidth: 476,
            dHeight: 259,
            sWidth: 476,
            sHeight: 259,
        };
        _this.nameBannerAsset = "name-banner-spell-premium";
        _this.nameBannerCoords = {
            dx: 84,
            dy: 464,
            dWidth: 497,
            dHeight: 152,
            sWidth: 497,
            sHeight: 152,
        };
        _this.nameTextCurve = {
            pathMiddle: 0.49,
            maxWidth: 450,
            curve: [{ x: 10, y: 86 }, { x: 170, y: 44 }, { x: 294, y: 44 }, { x: 450, y: 88 }],
        };
        _this.rarityGemCoords = {
            dx: 283,
            dy: 545,
            dWidth: 107,
            dHeight: 74,
            sWidth: 107,
            sHeight: 74,
        };
        return _this;
    }
    return SpellCardPremium;
}(SpellCard));

var WeaponCard = /** @class */ (function (_super) {
    __extends(WeaponCard, _super);
    function WeaponCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = false;
        _this.bodyTextColor = "white";
        _this.bodyTextCoords = {
            dx: 146,
            dy: 628,
            dWidth: 388,
            dHeight: 168,
            sWidth: 388,
            sHeight: 168,
        };
        _this.cardFoundationAsset = null;
        _this.cardFoundationCoords = null;
        _this.baseCardFrameAsset = "frame-weapon-";
        _this.baseCardFrameCoords = {
            sWidth: 527,
            sHeight: 775,
            dx: 80,
            dy: 103,
            dWidth: 527,
            dHeight: 775,
        };
        _this.baseRarityGemAsset = "rarity-weapon-";
        _this.eliteDragonAsset = "elite-weapon";
        _this.eliteDragonCoords = {
            dx: 199,
            dy: 62,
            dWidth: 420,
            dHeight: 247,
            sWidth: 420,
            sHeight: 247,
        };
        _this.nameBannerAsset = "name-banner-weapon";
        _this.nameBannerCoords = {
            sWidth: 514,
            sHeight: 108,
            dx: 87,
            dy: 468,
            dWidth: 514,
            dHeight: 108,
        };
        _this.rarityGemCoords = {
            sWidth: 96,
            sHeight: 90,
            dx: 302,
            dy: 520,
            dWidth: 96,
            dHeight: 90,
        };
        _this.nameTextCurve = {
            pathMiddle: 0.56,
            maxWidth: 450,
            curve: [{ x: 18, y: 56 }, { x: 66, y: 56 }, { x: 400, y: 56 }, { x: 456, y: 56 }],
        };
        _this.artCoords = {
            sWidth: 384,
            sHeight: 384,
            dx: 152,
            dy: 135,
            dWidth: 384,
            dHeight: 384,
        };
        _this.artClipPolygon = [
            { x: 352, y: 139 },
            { x: 418, y: 155 },
            { x: 469, y: 188 },
            { x: 497, y: 222 },
            { x: 523, y: 267 },
            { x: 533, y: 315 },
            { x: 531, y: 366 },
            { x: 514, y: 420 },
            { x: 485, y: 461 },
            { x: 444, y: 496 },
            { x: 375, y: 515 },
            { x: 309, y: 515 },
            { x: 236, y: 484 },
            { x: 192, y: 434 },
            { x: 160, y: 371 },
            { x: 158, y: 303 },
            { x: 173, y: 246 },
            { x: 203, y: 201 },
            { x: 242, y: 167 },
            { x: 287, y: 148 },
        ];
        return _this;
    }
    WeaponCard.prototype.getAttackGemAsset = function () {
        return "attack-weapon";
    };
    WeaponCard.prototype.getAttackGemCoords = function () {
        return {
            sWidth: 135,
            sHeight: 133,
            dx: 65,
            dy: 753,
            dWidth: 135,
            dHeight: 133,
        };
    };
    WeaponCard.prototype.getAttackTextCoords = function () {
        return { dx: 136, dy: 820 };
    };
    WeaponCard.prototype.getHealthGemAsset = function () {
        return "durability";
    };
    WeaponCard.prototype.getHealthGemCoords = function () {
        return {
            sWidth: 126,
            sHeight: 140,
            dx: 501,
            dy: 744,
            dWidth: 126,
            dHeight: 140,
        };
    };
    WeaponCard.prototype.getHealthTextCoords = function () {
        return { dx: 563, dy: 819 };
    };
    WeaponCard.prototype.getWatermarkCoords = function () {
        return {
            dx: 241,
            dy: 599,
            dWidth: 220,
            dHeight: 220,
        };
    };
    return WeaponCard;
}(Card));

var WeaponCardPremium = /** @class */ (function (_super) {
    __extends(WeaponCardPremium, _super);
    function WeaponCardPremium() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.premium = true;
        _this.attackGemAsset = "attack-weapon-premium";
        _this.cardFoundationAsset = "base-weapon-premium";
        _this.cardFoundationCoords = {
            dx: 75,
            dy: 101,
            dWidth: 527,
            dHeight: 778,
            sWidth: 527,
            sHeight: 778,
        };
        _this.baseCardFrameAsset = "frame-weapon-premium-";
        _this.baseCardFrameCoords = {
            dx: 229,
            dy: 532,
            dWidth: 226,
            dHeight: 347,
            sWidth: 226,
            sHeight: 347,
        };
        _this.eliteDragonAsset = "elite-weapon-premium";
        _this.eliteDragonCoords = {
            dx: 197,
            dy: 63,
            dWidth: 420,
            dHeight: 247,
            sWidth: 420,
            sHeight: 247,
        };
        _this.healthGemAsset = "durability-premium";
        _this.nameBannerAsset = "name-banner-weapon-premium";
        return _this;
    }
    return WeaponCardPremium;
}(WeaponCard));

/* tslint:disable:no-console */
var Sunwell = /** @class */ (function () {
    function Sunwell(options) {
        options.titleFont = options.titleFont || "Belwe";
        options.bodyFontRegular = options.bodyFontRegular || "Franklin Gothic";
        options.bodyFontBold = options.bodyFontBold || options.bodyFontRegular;
        options.bodyFontItalic = options.bodyFontItalic || options.bodyFontRegular;
        options.bodyFontBoldItalic = options.bodyFontBoldItalic || options.bodyFontRegular;
        options.gemFont = options.gemFont || "Belwe";
        options.aspectRatio = options.aspectRatio || 1.492537;
        options.bodyFontSize = options.bodyFontSize || 60;
        options.bodyFontOffset = options.bodyFontOffset || { x: 0, y: 0 };
        options.bodyLineHeight = options.bodyLineHeight || 50;
        options.bodyLineStyle = options.bodyLineStyle || "1em";
        options.assetFolder = options.assetFolder || "/assets/";
        options.drawTimeout = options.drawTimeout || 5000;
        options.cacheSkeleton = options.cacheSkeleton || false;
        options.debug = options.debug || false;
        this.platform = new WebPlatform();
        this.options = options;
        this.assets = {};
        this.assetListeners = {};
        this.renderQuery = {};
        this.renderCache = {};
        this.isRendering = false;
    }
    Sunwell.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.options.debug) {
            console.log.apply("[INFO]", arguments);
        }
    };
    Sunwell.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply("[ERROR]", arguments);
    };
    Sunwell.prototype.drawImage = function (context, assetKey, coords) {
        var asset = this.getAsset(assetKey);
        if (!asset) {
            this.error("Not drawing asset", assetKey);
            return;
        }
        var ratio = coords.ratio || 1;
        var width = coords.sWidth || asset.width;
        var height = coords.sHeight || asset.height;
        context.drawImage(asset, coords.sx || 0, coords.sy || 0, width, height, coords.dx * ratio, coords.dy * ratio, (coords.dWidth || width) * ratio, (coords.dHeight || height) * ratio);
    };
    Sunwell.prototype.fetchAsset = function (path) {
        var assets = this.assets;
        var assetListeners = this.assetListeners;
        var sw = this;
        return new this.platform.Promise(function (resolve) {
            if (assets[path] === undefined) {
                assets[path] = new sw.platform.Image();
                sw.log("Requesting", path);
                sw.platform.loadAsset(assets[path], path, function () {
                    if (assetListeners[path]) {
                        for (var _i = 0, _a = assetListeners[path]; _i < _a.length; _i++) {
                            var listener = _a[_i];
                            listener(assets[path]);
                        }
                        delete assetListeners[path];
                    }
                    resolve();
                }, function () {
                    sw.error("Error loading asset:", path);
                    // An asset load error should not reject the promise
                    resolve();
                });
            }
            else if (!assets[path].complete) {
                assetListeners[path] = assetListeners[path] || [];
                assetListeners[path].push(resolve);
            }
            else {
                resolve();
            }
        });
    };
    Sunwell.prototype.getBuffer = function (width, height, clear) {
        return this.platform.getBuffer(width, height, clear);
    };
    Sunwell.prototype.freeBuffer = function (buffer) {
        return this.platform.freeBuffer(buffer);
    };
    Sunwell.prototype.render = function () {
        var _this = this;
        var keys = Object.keys(this.renderQuery);
        if (!keys.length) {
            return;
        }
        var first = keys[0];
        var card = this.renderQuery[first];
        delete this.renderQuery[first];
        var context = card.canvas.getContext("2d");
        this.log("Preparing assets for", card.cardDef.name);
        var texturesToLoad = [];
        if (card.texture && typeof card.texture === "string") {
            texturesToLoad.push(card.texture);
        }
        for (var _i = 0, _a = card.getAssetsToLoad(); _i < _a.length; _i++) {
            var asset = _a[_i];
            if (!asset) {
                continue;
            }
            var path = this.getAssetPath(asset);
            if (!this.assets[path] || !this.assets[path].complete) {
                texturesToLoad.push(path);
            }
        }
        this.log("Preparing to load assets");
        var fetches = [];
        for (var _b = 0, texturesToLoad_1 = texturesToLoad; _b < texturesToLoad_1.length; _b++) {
            var texture = texturesToLoad_1[_b];
            fetches.push(this.fetchAsset(texture));
        }
        this.platform.Promise.all(fetches)
            .then(function () {
            var start = Date.now();
            card.draw(card.canvas, context);
            _this.log(card, "finished drawing in " + (Date.now() - start) + "ms");
            // check whether we have more to do
            _this.isRendering = false;
            if (Object.keys(_this.renderQuery).length) {
                _this.renderTick();
            }
        })
            .catch(function (e) {
            _this.error("Error while drawing card:", e);
            _this.isRendering = false;
        });
    };
    Sunwell.prototype.getAssetPath = function (key) {
        return this.options.assetFolder + key + ".png";
    };
    Sunwell.prototype.getAsset = function (key) {
        var path = this.getAssetPath(key);
        var asset = this.assets[path];
        if (!asset) {
            this.error("Missing asset", key, "at", path);
            return;
        }
        if (!asset.complete) {
            this.error("Attempting to getAsset not loaded", asset, path);
            return;
        }
        return asset;
    };
    Sunwell.prototype.renderTick = function () {
        var _this = this;
        this.isRendering = true;
        this.platform.requestAnimationFrame(function () { return _this.render(); });
    };
    Sunwell.prototype.createCard = function (props, width, premium, target, callback) {
        var canvas;
        var height = Math.round(width * this.options.aspectRatio);
        if (target && target instanceof this.platform.Canvas) {
            canvas = target;
            canvas.width = width;
            canvas.height = height;
        }
        else {
            canvas = this.getBuffer(width, height, true);
        }
        var ctors = {};
        ctors[CardType.HERO] = premium ? HeroCardPremium : HeroCard;
        ctors[CardType.MINION] = premium ? MinionCardPremium : MinionCard;
        ctors[CardType.SPELL] = premium ? SpellCardPremium : SpellCard;
        ctors[CardType.WEAPON] = premium ? WeaponCardPremium : WeaponCard;
        ctors[CardType.HERO_POWER] = premium ? HeroPowerCardPremium : HeroPowerCard;
        var type = cleanEnum(props.type, CardType);
        var ctor = ctors[type];
        if (!ctor) {
            throw new Error("Got an unrenderable card type: " + type);
        }
        var card = new ctor(this, props);
        card.canvas = canvas;
        card.initRender(width, target, callback);
        this.log("Queried render:", card.cardDef.name);
        if (this.renderQuery[card.key]) {
            this.log("Skipping", card.key, "(already queued)");
        }
        else {
            this.renderQuery[card.key] = card;
            if (!this.isRendering) {
                this.renderTick();
            }
        }
        return card;
    };
    return Sunwell;
}());

exports.CardDef = CardDef;
exports.default = Sunwell;
