interface appConfig {
    [key:string]:string
}
export const appConfig:appConfig={
    'cloudpath':'https://d2ivesio5kogrp.cloudfront.net/static/firstshows',
    'bannerImgpath':'https://d229kpbsb5jevy.cloudfront.net/firstshows'
}

export function setappconfig(key:string,value:string){
    appConfig[key] = value
}