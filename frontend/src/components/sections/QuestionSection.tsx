import React, { ReactElement } from 'react';
import IQuestionInfo from '../../interfaces/IQuestion';
import { useApiData } from '../../services/apiService';
import QuestionCard from '../QuestionCard';

function QuestionSection(): ReactElement {
  const questions = useApiData<IQuestionInfo[]>('questions');

  return (
    <div id="questions" className="text-white">
      <svg className="h-15 bg-black" width="100%" preserveAspectRatio="none" viewBox="0 0 500 20">
        <path className="text-indigo-900 fill-current" d="M0,20 C180,-6 320,-6 500,20 L500,150 L0,20 Z" />
      </svg>
      <div className="bg-indigo-900 pb-16">
        <h1 className="section-header">QUESTIONS</h1>
        <div className="w-3/4 mx-auto mt-5">
          {questions?.map((question) => (
            <QuestionCard key={question.question} {...question} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionSection
