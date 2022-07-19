import { useState, useEffect, Fragment } from 'react'
import { ProgressBar } from './progressBar'
import { Question } from './question'





export default function Quiz({ questions }) {
    const [questionIndex, setQuestionIndex] = useState(null)
    const [answerStatus, setAnswerStatus] = useState(null)
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
    const [quizComplete, setQuizComplete] = useState(false)

    useEffect(() => {
        setAnswerStatus(null)
    }, [questionIndex])

    useEffect(() => {
        if (answerStatus) {
            setCorrectAnswerCount(count => count + 1)
        }
    }, [answerStatus])

    const onNextClick = () => {
        if (questionIndex === questions.length - 1) {
            setQuizComplete(true)
        } else {
            setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1)
        }
    }

    const onRestartClick = () => {
        setQuizComplete(false)
        setQuestionIndex(null)
        setCorrectAnswerCount(0)
    }

    if (questionIndex == null) {
        return (
            <div className="quiz">
                <h1>Hola Fio! Soy tu amiga Invisible</h1>
                <p>Realice este test para que me puedas descubrir con estas pistas ;) mucha suerte!</p>
                <button className="start" onClick={onNextClick}>Empezar</button>
            </div>
        )
    }

    return (
        <div className="quiz">
            {quizComplete ? (
                <Fragment>
                    <h1>Soy Mica :)!</h1>
                    <p>Respondiste {correctAnswerCount} preguntas correctas (de un total de {questions.length} preguntas)</p>
                </Fragment>
            ) : (
                <Fragment>
                    <ProgressBar currentQuestionIndex={questionIndex} totalQuestionsCount={questions.length} />
                    <Question
                        question={questions[questionIndex]}
                        setAnswerStatus={setAnswerStatus}
                    />
                    {answerStatus != null && (
                        <div>
                            <div className="answerStatus">{!!answerStatus ? "Correcto! :)" : "Incorrecto :("}</div>
                            <button className="next" onClick={onNextClick}>
                                {questionIndex === questions.length - 1 ? "Ver resultados" : "Siguiente Pregunta"}
                            </button>
                        </div>
                    )}
                </Fragment>
            )}

            {questionIndex != null && <button className="restart" onClick={onRestartClick}>Restart</button>}
        </div>
    )
}
