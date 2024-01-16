const name = 'Bulbasaur'
const xp = 7505
let level = ''
let key = true

switch (key) {
    case (xp < 1001):
        level = 'Ferro'
        break;
    case (xp > 1001 && xp < 2000):
        level = 'Bronze'
        break;
    case (xp > 2001 && xp < 5000):
        level = 'Prata' 
        break
    case (xp > 5001 && xp < 7000):
        level = 'Ouro'
        break
    case (xp > 7001 && xp < 8000):
        level = 'Platina'
        break
    case (xp > 8001 && xp < 9000):
        level = 'Ascendente'
        break
    case (xp > 9001 && xp < 10000):
        level = 'Imortal'
        break
    case (xp > 10001):
        level = 'Radiante'
        break
    default:
        level = 'Valor inválido'
        break;
}

console.log(`O Herói de nome ${name} está no nível de ${level}`)
