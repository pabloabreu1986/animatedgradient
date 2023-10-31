export const getRandomColor = () => {
    // Generate random RGB color values
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)

    // Return de color in format #RRGGBB
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}
