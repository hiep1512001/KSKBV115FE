import { useEffect, useState } from "react";
import Dashboard from "../Components/Dashboar"
import { getNams } from "../services/namServices";
import { connect } from "react-redux";
import * as actions from './../actions/index'
const TrangChu = (props) => {
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        if (props.nams.length === 0) {
            const data = await getNams();
            data.sort((a, b) => b.tenNam - a.tenNam);
            props.onSetNam(data)
        }
    };
    return (
        <div>
            <Dashboard></Dashboard>
        </div>
    )
}
const mapStateToProp = (state) => {
    return {
        nams: state.taskNam
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSetNam: (nams) => {
            dispatch(actions.setNam(nams));
        },
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(TrangChu)