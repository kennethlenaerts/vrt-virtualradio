# Audio Engine WebSocket API
Port: 9002

Communication is JSON based.
## Protocol
### Subscription
{

"topic": "subscribe",

"key": ["array", "of", "keys", ...] || "or a single key"

}

After a subscription request is sent, Engine immediately sends the current

value for the newly registered properties. Afterward, updates will only be sent

when the value is changed by the engine or by any other client.

All subscriptions are cancelled as soon as the socket is disconnected.

Subscription requests must be re-sent after a re-connection.
### Unsubscription
{

"topic": "unsubscribe",

"key": ["array", "of", "keys", ...]

}

Currently not implemented in the Engine :-)
### Set a value
{

"topic": "setter",

"key": "key of the property to set",

"value": new value of the property

}
### Simple remote procedure call
{

"topic": "rpc",

"method":

"params": {

"parameter0": value1,

"parameter1": value1,

...

}

}
## Available properties
### Audio properties
| Key                              | Type          | Description                                                             |
| ---------------------------------|---------------|-------------------------------------------------------------------------|
| audio.input.router.sources       | String array  | List of audio sources                                                  |
| audio.input.router.destinations  | String array  | List of audio destinations                                              |
| audio.input.router.xpoints       | Integer array | Index of the currently selected souce for each destinations             |
| audio.input.ppm                  | Number array  | Array of 16 values (in dB), one for each meter channel (8 stereo PPM)   |
| audio.mixer.X.gain               | Number        | Input gain: from -60 to 15 dB                                           |
| audio.mixer.X.comp.enabled       | Number        | Compressor enable flag: 0 or 1                                          |
| audio.mixer.X.comp.rms           | Number array  | Array of 2 values (in dB), one for each compressor input channel        |
| audio.mixer.X.comp.thres         | Number        | Compressor threshold: from -60 to 0 dB                                  |
| audio.mixer.X.comp.knee          | Number        | Compressor knee: 0 to 20 dB                                             |
| audio.mixer.X.comp.ratio         | Number        | Compressor ratio: 1 to 20 :1                                            |
| audio.mixer.X.comp.attack        | Number        | Compressor attack time: 0 to 500 ms                                     |
| audio.mixer.X.comp.release       | Number        | Compressor release time: 0 to 5000 ms                                   |
| audio.mixer.X.comp.gain          | Number        | Compressor make-up gain: 0 to 15 dB                                     |
| audio.mixer.X.comp.att           | Number        | Compressor attenuation meter in dB                                      |
| audio.mixer.X.peq.enabled        | Number        | Equaliser enable flag: 0 or 1                                           |
| audio.mixer.X.peq.mag            | Number array  | Equaliser total magnitude response, list of (x, y) coordinates          |
| audio.mixer.X.peq.Y.freq         | Number        | Equaliser band Y frequency: 10 to 20000 Hz                              |
| audio.mixer.X.peq.Y.gain         | Number        | Equaliser band Y gain: -20 to 20 dB                                     |
| audio.mixer.X.peq.Y.q            | Number        | Equaliser band Y q factor: 0.2 to 20 (unit less)                        |
| audio.mixer.X.peq.Y.mag          | Number array  | Equaliser band Y magnitude response, list of (x, y) coordinates         |
| audio.mixer.X.enabled            | Number        | Channel enable flag: 0 or 1                                             |
| audio.mixer.X.fader              | Number        | Fader level: -80 to 10 dB                                               |
| audio.mixer.X.panBal             | Number        | Left/Right balance: from -1 (fully left) to 1 (fully right), 0 = center |
| audio.mixer.X.cued               | Number        | Cue flag (pre-listening): 0 or 1                                        |
| audio.limit.pgm.att              | Number        | Output limiter attenuation in dB                                        |
| audio.output.ppm                 | Number array  | Array of 6 values (in dB), one for each meter channel (3 stereo PPM)    |
| audio.player.X.filename          | String        | Full path to the file currently loaded/playing                          |
| audio.player.X.duration          | Number        | Duration of the file in seconds                                         |
| audio.player.X.elapsed           | Number        | Elapsed time in seconds                                                 |
| audio.player.X.remaining         | Number        | Remaining time in seconds                                               |
| audio.cart.X.filename            | String        | Full path to the file currently loaded/playing                          |
| audio.cart.X.duration            | Number        | Duration of the file in seconds                                         |
| audio.cart.X.elapsed             | Number        | Elapsed time in seconds                                                 |
| audio.cart.X.remaining           | Number        | Remaining time in seconds                                               |
| audio.output.router.sources      | String array  | List of audio sources                                                   |
| audio.output.router.destinations | String array  | List of audio destinations                                              |
| audio.output.router.xpoints      | Integer array | Index of the currently selected souce for each destinations             |

X stands for:

the index of the mixer channel: 0 to 7

the index of the player: 0 to 2

the index of the cart (jingle) player slot: 0 to 8

Y stands for:

the index of equaliser band: 0 to 3
### Logic properties
| Key                              | Type          | Description                                                             |

| ---------------------------------|---------------|-------------------------------------------------------------------------|

| logic.mixer.micLive              | Number        | Any mic channel is opened: 0 or 1                                       |

| logic.mixer.cue                  | Number        | Any channel is cued: 0 or 1                                             |
