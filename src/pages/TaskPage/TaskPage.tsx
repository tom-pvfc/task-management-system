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
    task: null,
    summary: "",
    status: "",
    priority: ""
}

export interface TaskPageState {
    taskId: number;
    isNew: boolean;
    task: iTaskData;
    summary: string;
    status: string;
    priority: string;
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
        let data = this.props.data[paramKey];
        this.setState({
           task: data,
           summary: data.taskSummary,
           status: data.taskStatus,
           priority: data.priority
        })
    }

    handleChange = (event) => {
        console.log("change " , event.target.name)
        switch(event.target.name){
            case "summary":
                this.setState({
                    summary: event.target.value
                });
                break;
            case "status":
                this.setState({
                    status: event.target.value
                });
                break;
            case "priority":
                this.setState({
                    priority: event.target.value
                });
                break;
        }
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
                        <div className="task-page__wrapper--form">
                            <label>
                                Summary:
                                <input type="text" name="summary" value={state.summary} onChange={this.handleChange} />
                            </label>
                            <label>
                                Status:
                                <input type="text" name="status" value={state.status}  onChange={this.handleChange}/>
                            </label>
                            <label>
                                Priority:
                                <input type="text" name="priority" value={state.priority}  onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="task-page__wrapper--save">
                            <LinkButton href="/#">
                              Save
                            </LinkButton>
                        </div>
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
