async function getPuzzle(wordCount) {
    try {
        const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
        if (!response.ok) {
            throw new Error(`No se pudo obtener el puzzle`)
        }

        const data = await response.json()
        return data.puzzle
    } catch (error) {
        return `Error: ${error.message}`
    }
    }
