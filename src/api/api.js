import axios from "axios"
const shuffleArray = (array) => {
    return [...array].sort(()=>Math.random()-0.5)
}
export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
    const response = await axios.get(url)
    console.log(response.data.results)

    return response.data.results.map((dt) => ({
        ...dt,
        answers:shuffleArray([...dt.incorrect_answers,dt.correct_answer])
    }))
}
