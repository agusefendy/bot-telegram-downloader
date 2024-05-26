const _0xd1c183 = _0x2f74;
(function (_0x58f498, _0x25bd4f) {
  const _0x476754 = _0x2f74,
    _0x38e082 = _0x58f498();
  while (!![]) {
    try {
      const _0x4bae1e =
        (-parseInt(_0x476754(0x8c)) / 0x1) *
          (-parseInt(_0x476754(0xc9)) / 0x2) +
        (-parseInt(_0x476754(0x9a)) / 0x3) *
          (-parseInt(_0x476754(0xb1)) / 0x4) +
        parseInt(_0x476754(0xab)) / 0x5 +
        -parseInt(_0x476754(0xbe)) / 0x6 +
        (parseInt(_0x476754(0x91)) / 0x7) * (-parseInt(_0x476754(0x90)) / 0x8) +
        -parseInt(_0x476754(0x9b)) / 0x9 +
        (parseInt(_0x476754(0xa4)) / 0xa) * (parseInt(_0x476754(0xad)) / 0xb);
      if (_0x4bae1e === _0x25bd4f) break;
      else _0x38e082["push"](_0x38e082["shift"]());
    } catch (_0x278fb3) {
      _0x38e082["push"](_0x38e082["shift"]());
    }
  }
})(_0x5482, 0x3e16d);
import { Telegraf } from "telegraf";
import "dotenv/config";
import _0x1bd051 from "fs";
import _0x1164b0 from "chalk";
const bot = new Telegraf(process["env"][_0xd1c183(0xb3)]);
bot[_0xd1c183(0xbc)]
  [_0xd1c183(0xb2)]()
  [_0xd1c183(0xcd)]((_0xf53f13) => {
    const _0x5ddba = _0xd1c183;
    console[_0x5ddba(0xc1)]("Bot\x20terhubung:\x20@" + _0xf53f13["username"]);
  })
  [_0xd1c183(0x8a)]((_0x75726a) => {
    const _0x5cf835 = _0xd1c183;
    console["log"](_0x5cf835(0xbb), _0x75726a);
    return;
  });
function generateFileName(_0x226bcb) {
  const _0x348a45 = _0xd1c183,
    _0x5ef4ae =
      Math[_0x348a45(0x99)](Math[_0x348a45(0xc4)]() * (0x270f - 0x3e8 + 0x1)) +
      0x3e8,
    _0x2ec94c = Date[_0x348a45(0x9d)]();
  return _0x226bcb + "_" + _0x5ef4ae + "_" + _0x2ec94c + _0x348a45(0xa0);
}
function checkFileExistence(_0x59dd3d) {
  const _0x2af513 = _0xd1c183;
  try {
    return (
      _0x1bd051[_0x2af513(0xc0)](
        _0x59dd3d,
        _0x1bd051[_0x2af513(0xb5)][_0x2af513(0xc7)]
      ),
      console[_0x2af513(0xc1)](
        _0x1164b0["green"]("[+]") + "\x20" + _0x59dd3d + _0x2af513(0x95)
      ),
      !![]
    );
  } catch (_0x3d8488) {
    if (_0x3d8488["code"] === _0x2af513(0x96))
      return (
        console[_0x2af513(0xc1)](
          _0x1164b0[_0x2af513(0xca)](_0x2af513(0x9f)) +
            "\x20" +
            _0x59dd3d +
            _0x2af513(0x92)
        ),
        ![]
      );
    return (
      console[_0x2af513(0xc1)](
        _0x1164b0[_0x2af513(0xca)](_0x2af513(0xaa)) +
          "\x20" +
          _0x3d8488[_0x2af513(0x88)]
      ),
      ![]
    );
  }
}
function deleteFile(_0x3a8ec1) {
  const _0x4e8411 = _0xd1c183;
  try {
    return (
      _0x1bd051["unlinkSync"](_0x3a8ec1),
      console[_0x4e8411(0xc1)](
        _0x1164b0[_0x4e8411(0xa6)](_0x4e8411(0x9f)) +
          "\x20" +
          _0x3a8ec1 +
          "\x20dihapus"
      ),
      !![]
    );
  } catch (_0x26d713) {
    return (
      console["log"](
        _0x1164b0[_0x4e8411(0xca)](_0x4e8411(0x89)) + "\x20" + _0x3a8ec1
      ),
      ![]
    );
  }
}
async function getVideo(_0x2ed759) {
  const _0x3e9a06 = _0xd1c183;
  console["log"](_0x1164b0["green"](_0x3e9a06(0x9f)) + _0x3e9a06(0xb0));
  const _0xbd685e = "https://co.wuk.sh/api/json",
    _0x5ab141 = {
      Accept: _0x3e9a06(0x8b),
      "Content-Type": "application/json",
      "Cache-Control": _0x3e9a06(0x93),
    };
  try {
    const _0xf9bd96 = await fetch(_0xbd685e, {
      method: "POST",
      headers: _0x5ab141,
      body: JSON[_0x3e9a06(0xa3)](_0x2ed759),
    });
    return await _0xf9bd96[_0x3e9a06(0xba)]();
  } catch (_0x33f12b) {
    console[_0x3e9a06(0xc1)](
      _0x1164b0[_0x3e9a06(0xca)]("[-]\x20Error\x20->") +
        "\x20" +
        _0x33f12b["code"]
    );
    throw _0x33f12b;
  }
}
async function downloadFiles(_0x2f3fa1, _0x543909) {
  const _0x1b20b5 = _0xd1c183;
  try {
    const _0x1cab80 = await fetch(_0x2f3fa1);
    console[_0x1b20b5(0xc1)](_0x1b20b5(0xc8), _0x1cab80[_0x1b20b5(0xb7)]);
    const _0x2d7fec = await _0x1cab80[_0x1b20b5(0xae)]();
    return (
      _0x1bd051["writeFileSync"](
        _0x1b20b5(0xa8) + _0x543909,
        Buffer[_0x1b20b5(0xbd)](_0x2d7fec)
      ),
      !![]
    );
  } catch (_0x15f140) {
    return (
      console[_0x1b20b5(0xc1)](
        _0x1164b0[_0x1b20b5(0xca)](_0x1b20b5(0xaa)) + "\x20" + _0x15f140["code"]
      ),
      console[_0x1b20b5(0xc1)](_0x1b20b5(0xc5), _0x15f140),
      ![]
    );
  }
}
bot[_0xd1c183(0xb4)]((_0xb13f69) => {
  const _0x43f73c = _0xd1c183;
  _0xb13f69[_0x43f73c(0xcc)](
    _0x43f73c(0xb9) +
      _0xb13f69[_0x43f73c(0x9c)][_0x43f73c(0xcb)][_0x43f73c(0xbd)]["username"] +
      _0x43f73c(0xa2)
  );
}),
  bot[_0xd1c183(0xa1)]((_0x58763d) => {
    const _0x201777 = _0xd1c183,
      _0x43b281 = _0x201777(0xc6);
    _0x58763d[_0x201777(0xcc)](_0x43b281);
  }),
  bot["command"](_0xd1c183(0xa7), async (_0x55e38b) => {
    const _0x2b8ac1 = _0xd1c183,
      _0x8fecb = _0x55e38b[_0x2b8ac1(0xcb)]["text"]
        [_0x2b8ac1(0x8d)]("\x20")
        [_0x2b8ac1(0x8f)](0x1),
      _0x2cf1bd = _0x8fecb[0x0];
    if (!_0x2cf1bd)
      return (
        await _0x55e38b[_0x2b8ac1(0xcc)](
          "Perintah\x20tidak\x20sesuai!,\x20silahkan\x20cek\x20/help"
        ),
        ![]
      );
    const _0x2cde72 = await _0x55e38b["reply"](_0x2b8ac1(0xc2)),
      _0x5288f0 = {
        url: _0x2cf1bd,
        aFormat: "mp3",
        filenamePattern: _0x2b8ac1(0xac),
        dubLang: ![],
        vQuality: _0x2b8ac1(0xaf),
        isNoTTWatermark: !![],
      },
      _0x5b1d4b = await getVideo(_0x5288f0),
      _0x4f7c0b = _0x5b1d4b[_0x2b8ac1(0xc3)],
      _0xf26fa4 = generateFileName("file");
    if (await downloadFiles(_0x4f7c0b, _0xf26fa4)) {
      if (checkFileExistence("tmp/" + _0xf26fa4)) {
        const _0xcaee3 = _0x1bd051[_0x2b8ac1(0xbf)](
          _0x2b8ac1(0xa8) + _0xf26fa4
        );
        _0x55e38b["replyWithVideo"]({ source: _0xcaee3 }),
          console["log"](
            _0x1164b0["green"]("[REPLY]") +
              "\x20sending\x20video\x20to\x20" +
              _0x1164b0[_0x2b8ac1(0x94)](_0x55e38b["chat"]["username"])
          ),
          setTimeout(async () => {
            await _0x55e38b["deleteMessage"](_0x2cde72["message_id"]);
          }, 0x3a98),
          setTimeout(() => {
            const _0xfa03b2 = _0x2b8ac1;
            deleteFile(_0xfa03b2(0xa8) + _0xf26fa4);
          }, 0x2710);
      } else
        _0x55e38b[_0x2b8ac1(0xcc)](_0x2b8ac1(0x87)),
          console["log"](
            _0x1164b0[_0x2b8ac1(0xca)](_0x2b8ac1(0xa5)) + _0x2b8ac1(0x9e)
          ),
          await _0x55e38b[_0x2b8ac1(0x98)](_0x2cde72[_0x2b8ac1(0xb6)]);
    } else
      _0x55e38b[_0x2b8ac1(0xcc)](_0x2b8ac1(0xa9)),
        console[_0x2b8ac1(0xc1)](
          _0x1164b0["red"](_0x2b8ac1(0xa5)) + _0x2b8ac1(0xb8)
        ),
        await _0x55e38b[_0x2b8ac1(0x98)](_0x2cde72["message_id"]);
  }),
  bot["on"](_0xd1c183(0x8e), (_0x40239c) =>
    _0x40239c[_0xd1c183(0xcc)](_0xd1c183(0x97))
  ),
  bot["launch"]();
function _0x2f74(_0x4fb995, _0x40e923) {
  const _0x548210 = _0x5482();
  return (
    (_0x2f74 = function (_0x2f7498, _0x2a8e97) {
      _0x2f7498 = _0x2f7498 - 0x87;
      let _0x42b6fc = _0x548210[_0x2f7498];
      return _0x42b6fc;
    }),
    _0x2f74(_0x4fb995, _0x40e923)
  );
}
function _0x5482() {
  const _0x8c5607 = [
    "Response\x20status:",
    "114NXqroT",
    "red",
    "message",
    "reply",
    "then",
    "server\x20gak\x20jelas",
    "code",
    "[-]\x20Gagal\x20menghapus",
    "catch",
    "application/json",
    "1399sDLiPw",
    "split",
    "text",
    "slice",
    "585096yDPtbF",
    "7cUvSxv",
    "\x20tidak\x20ditemukan",
    "no-cache",
    "cyan",
    "\x20ready",
    "ENOENT",
    "Perintah\x20tidak\x20ditemukan!\x20silahkan\x20cek\x20/help",
    "deleteMessage",
    "floor",
    "923937cEKHsW",
    "3663333ZskmVZ",
    "update",
    "now",
    "\x20video\x20gagal\x20disimpan",
    "[+]",
    ".mp4",
    "help",
    "\x20\x0aGunakan\x20/help\x20untuk\x20petunjuk\x20penggunaan",
    "stringify",
    "20gkxQRv",
    "[!]",
    "green",
    "download",
    "tmp/",
    "Server\x20tidak\x20dapat\x20mengunduh\x20video",
    "[-]\x20Error\x20->",
    "1405505icONwY",
    "classic",
    "2830157bAZBIq",
    "arrayBuffer",
    "1080",
    "\x20get\x20video\x20...",
    "4fhAdeI",
    "getMe",
    "BOT_TOKEN",
    "start",
    "constants",
    "message_id",
    "status",
    "\x20download\x20video\x20gagal",
    "Halo\x20@",
    "json",
    "Bot\x20tidak\x20terhubung:",
    "telegram",
    "from",
    "2693436oZgcQQ",
    "createReadStream",
    "accessSync",
    "log",
    "Prosess...",
    "url",
    "random",
    "Error:",
    "List\x20Commands:\x0a\x20\x20\x20\x20-\x20/download\x20(post_url)\x20\x0a\x20\x20Downlaod\x20video\x20dari\x20TikTok\x20dan\x20Instagram.\x0a\x20\x20",
    "F_OK",
  ];
  _0x5482 = function () {
    return _0x8c5607;
  };
  return _0x5482();
}
