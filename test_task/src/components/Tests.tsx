import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RootState} from "../state/store";
import {testQuestions} from "../testQuestions/tests";

const Tests = () => {
    const tests = useSelector((state: RootState) => state.tests.value);

    const getTestById = (id: number) => {
        return tests.find(t => t.id === id);
    };

    return (
        <div className="container">
            <div className="pt-4">
                {testQuestions.map(t => (
                    <div className="row pt-3 border-bottom" key={t.id}>
                        <div className='col-8'>
                            <Link to={`/test/${t.id}`}>{`Тест № ${t.id}`}</Link>
                        </div>
                        <div className='col-4'>
                            <div>
                                {getTestById(t.id)?.state === 'correct' &&
                                    <div className="text-success">
                                        Отвечено правильно
                                    </div>
                                }
                                {getTestById(t.id)?.state === 'mistake' &&
                                    <div className="text-danger">
                                        Отвечено неверно
                                    </div>
                                }
                                {getTestById(t.id)?.state === 'notDone' &&
                                    <div className="text-secondary">
                                        Пока что, не отвечено
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tests;