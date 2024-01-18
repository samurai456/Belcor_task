import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {setCorrect, setMistake} from "../state/tests/testsSlice";
import {testQuestions} from "../testQuestions/tests";
import {RootState} from "../state/store.ts";
import {AnswerOption, TestQuestion} from "../testQuestions/tests";

const Test = () => {
    const navigate = useNavigate();
    const {testId} = useParams();
    const dispatch = useDispatch();
    const tests = useSelector((state: RootState) => state.tests.value);
    const answer = tests.find(t => `${t.id}` === testId)?.state;
    const currentTestQuestion: TestQuestion = testQuestions.find(t => `${t.id}` === testId) as TestQuestion;

    const handleClick = (op: AnswerOption) => {
        if (op.correct) {
            dispatch(setCorrect(currentTestQuestion?.id));
        } else {
            dispatch(setMistake(currentTestQuestion?.id));
        }
    };

    return (
        <div className='container'>
            <div className='pt-5'>
                <h4>Тест № {testId}</h4>
                <div className='pt-4 fs-5'>
                    {currentTestQuestion.text}
                </div>
                <div>
                    {currentTestQuestion.options.map(op => (
                        <div className="row pt-4">
                            <div className="col-12">
                                <button key={op.option} type="button" className="btn btn-light" data-bs-toggle="modal"
                                        data-bs-target="#answerModal" onClick={() => handleClick(op)}>
                                    {op.option}) {op.answ}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="modal fade" id="answerModal" tabIndex={-1} aria-labelledby="answerModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="answerModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {answer === 'correct' &&
                                <span className='text-success'>
                                    Ответ правильный
                                </span>
                            }
                            {answer === 'mistake' &&
                                <span className='text-danger'>
                                    Неверный Ответ
                                </span>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={() => navigate('/')}>
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;