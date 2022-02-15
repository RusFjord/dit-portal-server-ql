export const CallChannel = {
    EMAIL: 'Электронная почта',
    PHONE: 'Телефонный звонок',
    PORTAL: 'Портал',
    OTHER: 'Другой'
}

export const getCallChanel = (text) => {
    switch(text) {
        case ЭлектроннаяПочта:
            return CallChannel.EMAIL
            break
        case Портал:
            return CallChannel.PORTAL
            break
        case ТелефонныйЗвонок:
            return CallChannel.PHONE
            break
        default:
            return CallChannel.OTHER
    }
}

export const Priority = {
    LOW: 'Низкий',
    AVERAGE: 'Средний',
    HIGH: 'Высокий',
    CRITICAL: 'Критический'
}

export const getPrioriry = (text) => {
    for (const [key, value] of Object.entries(Priority)) {
        if (value === text) {
            return key
        }
    }
    return Priority.LOW
}