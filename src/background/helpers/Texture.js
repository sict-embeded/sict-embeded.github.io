/**
 * @author Lorenzo Cadamuro / http://lorenzocadamuro.com
 */

 var textures = []

export const Texture = (regl, src) => {
  const texture = regl.texture()
  var param = {
    flipY: true,
    // min: 'mipmap',
    width: 1024,
    height: 1024
  }

  if(typeof src === 'string'){

    const image = new Image()

    image.src = require(`@/assets/${src}`)

    image.onload = function() {

      param.data=image

      texture(param)

    }

  }else{

    param.data=src

    texture(param)

  }

  textures.push({texture:texture,param:param})

  return texture
}

export const updater = {
  update:(texture) =>{
    for (const index in textures) {
      if (textures.hasOwnProperty(index)&&textures[index]===texture) {
        const texture = textures[index];
        texture.texture(texture.param);
        return;
      }
    }
  },
  updateAll:() => {
    for (const index in textures) {
      if (textures.hasOwnProperty(index)) {
        const texture = textures[index];
        texture.texture(texture.param)
      }
    }
  }
}
