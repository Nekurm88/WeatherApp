
const defaultDateOptions = {
    day: 'numeric',
    weekday: 'long', 
    month: 'long', 
}

export function formatTemp(value) {
    return `${Math.floor(value)}°`
}

export function formatDate(date, options = defaultDateOptions) {
 return new Intl.DateTimeFormat ('es', options).format(date)

}