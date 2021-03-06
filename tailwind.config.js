// tailwind.config.js
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans', 'sans'],
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
      },
      borderWidth: ['first'],
      transform: ['group-hover'],
      translate: ['group-hover'],
    },
    cursor: {
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out',
    },
    animation: {
      modalAnimation: "modalAnimation 1s alternate both" 
    },
    keyframes: {
      modalAnimation: {
        "from": {
          opacity: "0",
        },
        "to": {
          opacity: "1",
        }
      }
    }
  }
}