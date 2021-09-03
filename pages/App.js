/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { Link as RouteLink } from "../web_modules/react-hook-module/plugin_router.js";

const Module = props => {
    const [defaultState, setDefaultState] = React.useState({
    });

    return html`
        <${React.Fragment}>
            <${RouteLink} to="/" key="hix1znqv">
            </${RouteLink}>
            Link
        </${React.Fragment}>
    `;
};

export default Module;