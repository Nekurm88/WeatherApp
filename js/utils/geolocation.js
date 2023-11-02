
function geolocationSupport() {
    //if ('geolocation' in navigator) {
    //    return true
    //}
    //return false
    return 'geolocation' in navigator
}

const default0ptions = {
    enableHighAcurracy: true,
    timeout: 5000,
    maximumAge: 1000000,
}

export function getCurrentPosition(options = default0ptions) {
    if (!geolocationSupport()) throw new Error('No hay soporte de geolocalizacion en tu navegador')

     return new Promise((resolve, reject) => {

         navigator.geolocation.getCurrentPosition((position) => {
             const lat = position.coords.latitude
             const lon = position.coords.longitude

             resolve (position)
            // console.log(lat,lon)
         },() => {
            reject('no hemos podido obtener tu ubicacion')
         }, options)

    })
}

export async function getLatLon(options = default0ptions) {
    try {
        const { coords: {latitude: lat, longitude: lon} } =  await getCurrentPosition(options)
        return { lat, lon, isError: false}
    } catch {
       return {isError: true, lat: null, long: null}
    }


}