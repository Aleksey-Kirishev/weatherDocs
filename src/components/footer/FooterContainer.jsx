import React from "react"
import {Component} from "react";
import {connect} from "react-redux";
import s from "./Footer.module.css"
import Footer from "./Footer";

class FooterContainer extends Component {

    render() {
        return <div className={s.footer}>
            <Footer wind={this.props.wind}
                    main={this.props.main}
                    visibility={this.props.visibility}/>
        </div>
    }
}

let MapStateToProps = (state) => {
    return {
        main: state.content.main,
        wind: state.content.wind,
        visibility: state.content.visibility
    }
}

export default connect (MapStateToProps, {})(FooterContainer)

