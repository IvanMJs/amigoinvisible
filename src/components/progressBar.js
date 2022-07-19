
export const ProgressBar = ({ currentQuestionIndex, totalQuestionsCount }) => {
	const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100
  
	return <div className="progressBar">
    <div className="text">{currentQuestionIndex} Respondiste, quedan ({totalQuestionsCount - currentQuestionIndex})</div>
    <div className="inner" style={{ width: `${progressPercentage}%` }} />
	</div>
}
