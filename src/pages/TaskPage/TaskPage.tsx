import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import { iTaskData } from '../../models/models';
import { LinkButton } from '../../components/ui/Button/Button';

export interface TaskPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    data: iTaskData[];
}

const INIT_STATE: TaskPageState = {
    taskId: -1,
    isNew: true,
    task: null
}

export interface TaskPageState {
    taskId: number;
    isNew: boolean;
    task: iTaskData;
}

export class TaskPage extends React.Component<TaskPageProps, TaskPageState> {

    constructor(props: TaskPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    componentDidMount(){
        let paramKey = this.props.match.params.key;
        // console.log("param key" , paramKey);
        if(paramKey){
            this.setTaskId(paramKey);
            this.setTask(paramKey);
        }
    }

    setTaskId = (paramKey: number) => {
        this.setState({
            taskId: paramKey,
            isNew: false
        })
    }

    
    setTask = (paramKey: number) => {
        // console.log("current task " , this.props.data[paramKey])
        this.setState({
           task: this.props.data[paramKey]
        })
    }

    render() {
        const { props, state } = this;
        const cls = this.props.className || "";


        return (
            <MainLayout 
                className="task-page"
                title={state.isNew ? "New Task" : "Edit Task"}>
                    <div className="task-page__wrapper">
                        <h1>
                            Task Details
                        </h1>
                        {
                            (state.task && !state.isNew) ? 
                            <div className="task-page__wrapper--existing">
                                <p>
                                    {
                                        state.task.taskSummary
                                    }
                                </p>
                            </div>
                            :
                            <div className="task-page__wrapper--new">
                                new task name
                            </div>
                        }
                        <div className="task-page__wrapper--back">
                            <LinkButton href="/#">
                              Back
                            </LinkButton>
                        </div>
                    </div>
                </MainLayout>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<TaskPageProps> => {
    return {
        data: state.app.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
