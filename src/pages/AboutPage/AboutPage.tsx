import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';

export interface AboutPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
}

const INIT_STATE: AboutPageState = {

}

export interface AboutPageState {

}

export class AboutPage extends React.Component<AboutPageProps, AboutPageState> {

    constructor(props: AboutPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    render() {
        const { props, state } = this;
        const cls = this.props.className || "";
        return (
            <MainLayout 
                className="about-page"
                title={"About Page"}>
                    <div className="about-page__wrapper">
                        <h1 className="about-page__wrapper--title">
                            How to use the task management system
                        </h1>
                        <p className="about-page__wrapper--copy">
                            Nullam lobortis sed velit quis sagittis. Quisque vehicula felis non mi malesuada, eget eleifend lectus consequat. Morbi laoreet vel mi in tincidunt. Duis rhoncus leo sed massa hendrerit lacinia. Vestibulum varius, eros non bibendum tristique, ipsum felis posuere turpis, id imperdiet ipsum ante eu eros. Nunc eu rutrum dolor. Nunc molestie mi a metus finibus sollicitudin. Nunc vitae tellus sed nunc cursus facilisis. Nulla dignissim tellus justo, eget congue arcu molestie id. Nulla ut nisi consectetur, volutpat nibh eget, tempus sapien. Quisque accumsan nec lectus eu tincidunt. Praesent vehicula aliquet lorem, quis dignissim eros varius non. Fusce eleifend, lectus id ornare rutrum, elit justo sodales eros, eu egestas sapien dolor vel ante. Sed efficitur porta odio.
                        </p>
                    </div>
                </MainLayout>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<AboutPageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
